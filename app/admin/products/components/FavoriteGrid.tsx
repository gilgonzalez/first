'use client'
import { useProductStore } from '@/app/store/product';
import { ProductCard } from '.';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FcPaid } from 'react-icons/fc';


export const FavoriteGrid = () => {

  const items = useProductStore(state => state.pokemons)
  const [pokemons, setPokemos] = useState(items)
  useEffect(()=>{
    setPokemos(items)
  },[])
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center ">
    {
      pokemons.length === 0 && <EmptyFavorites/>
    }
    {
      pokemons.map(({id, name})=> (
        <ProductCard key={id} id={id} name={name}/> 
      ))
    }
  </div>
  )
}

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-8 mt-20 rounded-md text-center text-2xl shadow-lg">
      <p className="text-muted-foreground">No hay pokemons en favoritos</p>
      <p>Selecciona tus pokemons favoritos</p>
      <Link className='text-blue-500 text-sm flex flex-row gap-2' href='/admin/products'><FcPaid  size={20}/>Go to Products</Link>
    </div>
  )
}