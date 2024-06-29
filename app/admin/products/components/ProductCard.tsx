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
      <div className="bg-white overflow-visible shadow-lg rounded-lg">
        <div className="text-center p-6 bg-gray-800 rounded-t-md">
          <Image
            className="group-hover:drop-shadow-custom group-hover:scale-125 group-hover:-translate-x-5 transition-all duration-700"
            key={ id }
            src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ id }.png` }
            width={ 175 }
            height={ 175 }
            alt={ name }
            priority={ false }
          />
          <p className="pt-2 text-lg font-semibold text-gray-50"></p>
          <div className="mt-5">
            <Link
              href={ `products/${id}` }
              className="border capitalize rounded-full py-2 px-4 text-xs font-semibold text-gray-100"                         >
              #{ id } { name }
            </Link>
          </div>
        </div>
          <Link className="px-4 py-2 hover:bg-gray-100 flex" href="/account/campaigns" >
            <div className="flex  items-center">
            <FcDatabase size={20}/>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Stock
              </p>
              <p className="text-xs text-gray-500">Disponibles : 44</p>
            </div> 
            </div>
          </Link> 
          <Link className="px-4 py-2 hover:bg-gray-100 rounded-b-lg flex" href="/account/donations" >
            <div className="flex items-center">
              <FcMoneyTransfer size={20}/>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">PvP</p>
                <p className="text-xs text-gray-500">144$ / unit</p>
              </div>
            </div>
          </Link> 


      </div>
    </div>
  );
};