'use client'
import React from 'react'
import { Product } from '../products';
import Image from 'next/image';
import { addProductCookieToCart, removeProductCookieFromCart } from '@/app/helpers/actions/shopping-actions';
import { useRouter } from 'next/navigation';

interface Props {
  product: Product & {quantity: number};
}

const ItemInCart = ({product}: Props) => {

  const router = useRouter();

  const handleRemoveFromCart = () => {
    removeProductCookieFromCart(product.id, product.name)
    router.refresh()
  }
  const handleAddToCart = () => {
    addProductCookieToCart(product.id, product.name)
    router.refresh()
  }
  return (
    <div key={product.id} className="flex flex-row m-2 px-4 py-1 items-center gap-4 justify-start rounded-lg bg-white shadow-lg">
              <Image
                src={product.image ?? ''}
                alt={product.name ?? ''}
                width={64}
                height={64}
                className="rounded-full"
              />
              <span>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>Precio: ${product.price} / unidad</p>
              </span>
              <div className="flex flex-1" />
              <span className="flex flex-row items-center gap-4 ">
                <button
                  onClick={handleRemoveFromCart}
                  className="flex items-center justify-center w-6 h-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm p-2 rounded-full text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  -
                </button>
                <p className="font-semibold text-black">{product.quantity}</p>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center w-6 h-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm p-2 rounded-full text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  +
                </button>
              </span>
            </div>
  )
}

export default ItemInCart
