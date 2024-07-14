import React from 'react';
import { Product, products } from '../products';
import { cookies } from 'next/headers';
import SummaryBuy from '../components/SummaryBuy';
import ItemInCart from '../components/ItemInCart';

const CartPage = () => {

  const cookieStore = cookies();
  const cartCookie = JSON.parse( cookieStore.get( 'cart' )?.value ?? '{}' );
  const productsInCart = Object.keys( cartCookie ).map( key => {
    return {
      ...products.find( product => product.id === key ),
      quantity: cartCookie[ key ] as number
    };
  } );
  const totalPrice = productsInCart.reduce((acc, product) => acc + product?.price * product.quantity, 0)
  return (
    <>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="border-gray-500 mb-2 me-2" />
      <div id="container" className="flex flex-col mx-4 pb-2 mb-4 bg-slate-100 rounded-lg" style={{ minHeight: 'calc(100vh - 160px)' }}>
      {
          productsInCart.map(product => (
            product?.id ? <ItemInCart key={product.id} product={product as Product & { quantity: number }} /> : null
          ))
        }
        <div className="flex flex-1" />
        <SummaryBuy totalPrice={totalPrice}/>
      </div>
    </>
  );
};

export default CartPage;
