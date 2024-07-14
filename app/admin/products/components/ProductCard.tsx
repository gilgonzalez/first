'use client'
import { useProductStore } from '@/app/store/product';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FcDatabase, FcLike, FcLikePlaceholder, FcMoneyTransfer,  } from 'react-icons/fc';


type Props = {
  id: string,
  name: string;
};
export const ProductCard = ( { id, name }: Props ) => {

  const pokemons = useProductStore(state => state.pokemons)
  const toggleFavorite = useProductStore(state => state.toggleFavorite)
  const isFavourite = pokemons.some(pokemon => pokemon.id === id);
  return (
    <div className="mx-auto right-0 mt-2 w-60 group rounded-md">
      <div className="bg-blue-500 overflow-visible shadow-2xl rounded-lg">
        <div className="text-center p-6 bg-white rounded-t-md relative">
          <FcLike size={20} 
            className={cn("absolute top-4 right-4 cursor-pointer opacity-50 transition-all duration-300", 
              isFavourite && "opacity-100"
            )} 
            onClick={() => toggleFavorite(id, name)}
          /> 
          <Link
            href={ `products/${name}` }
            className="flex flex-col items-center gap-4 py-2 px-4 text-xs font-semibold text-slate-600 border-slate-300"                         >
          <Image
            className="group-hover:drop-shadow-custom group-hover:scale-125 group-hover:-translate-x-5 transition-all duration-700"
            key={ id }
            src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ id }.png` }
            width={ 175 }
            height={ 175 }
            alt={ name }
            priority={ false }
          />
              <p className="border border-dashed border-slate-200 rounded-full w-fit p-2">#{ id } { name }</p>
            </Link>
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