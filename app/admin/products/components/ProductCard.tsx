import Image from 'next/image';
import Link from 'next/link';
import { FcDatabase, FcMoneyTransfer } from 'react-icons/fc';


type Props = {
  id: string,
  name: string;
};
export const ProductCard = ( { id, name }: Props ) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60 group rounded-md">
      <div className="bg-blue-500 overflow-visible shadow-2xl rounded-lg">
        <div className="text-center p-6 bg-white rounded-t-md">
          <Image
            className="group-hover:drop-shadow-custom group-hover:scale-125 group-hover:-translate-x-5 transition-all duration-700"
            key={ id }
            src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ id }.png` }
            width={ 175 }
            height={ 175 }
            alt={ name }
            priority={ false }
          />
          <div className="mt-5">
            <Link
              href={ `products/${id}` }
              className="border border-dashed capitalize rounded-full py-2 px-4 text-xs font-semibold text-slate-600 border-slate-300"                         >
              #{ id } { name }
            </Link>
          </div>
        </div>
          <Link className="px-4 py-2 hover:bg-blue-700 flex" href="/account/campaigns" >
            <div className="flex items-center ">
            <FcDatabase size={20}/>
            <div className="pl-3 space-y-1">
              <p className="text-sm font-bold text-black  leading-none">
                Stock
              </p>
              <p className="text-xs text-white ">Disponibles : 44</p>
            </div> 
            </div>
          </Link> 
          <Link className="px-4 py-2 hover:bg-blue-700 rounded-b-lg flex" href="/account/donations" >
            <div className="flex items-center">
              <FcMoneyTransfer size={20}/>
              <div className="pl-3 space-y-1">
                <p className="text-sm font-bold text-black  leading-none">PvP</p>
                <p className="text-xs text-white ">144$ / unit</p>
              </div>
            </div>
          </Link> 


      </div>
    </div>
  );
};