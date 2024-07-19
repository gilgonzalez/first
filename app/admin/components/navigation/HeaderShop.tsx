import { cn } from '@/lib/utils';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { FaShopify } from 'react-icons/fa6';
import { MdNotificationsActive } from 'react-icons/md';

const HeaderShop = () => {

  const cookieStore = cookies()
  const cartCookie = JSON.parse(cookieStore.get('cart')?.value ?? '{}');

  const getCuantityCart = () => {
    
    return Object.keys(cartCookie).reduce((acum, key) => {
      return acum + cartCookie[key];
    }, 0)
  }
  const quantityCart = getCuantityCart()
  return (
    <div className="flex flex-row rounded-xl bg-yellow-100 m-2">
      <Image
        src="/logo.webp"
        className="rounded-full p-4" 
        alt={ 'avatar' } 
        width={75}
        height={75}
      />
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-8 mx-8">
        <input 
          type="text" 
          placeholder="Buscar artículo..." 
          className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
        <Link href="/admin/shop/cart" className="relative cursor-pointer">
          <FaShopify size={32} color="#147444"/>
            <div className={cn("absolute transition-all duration-500 -top-1 right-5 flex items-center font-bold text-white text-xs justify-center rounded-full w-5 h-5 bg-red-500",
              quantityCart === 0 && "opacity-0"
            )}>
              {quantityCart}
            </div>
        </Link>
        <span className="relative">
          <MdNotificationsActive size={32} color="#ffd202"/>
          <div className="absolute -top-1 right-5 flex items-center font-bold text-white text-xs justify-center rounded-full w-5 h-5 bg-yellow-700">10</div>
        </span>
      </div>
    </div>
  )
}
export default HeaderShop