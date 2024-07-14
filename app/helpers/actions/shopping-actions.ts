'use client'

import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { toast } from 'sonner';

/**
 *  Crear un objeto para guardar el carrito de compras en cookie
 */

export const getCookieCart = () : {[id:string]:number} => {

  if(hasCookie('cart')){
    const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
    return cookieCart;
  }


  return  {}
}

export const addProductCookieToCart = (id:string, name:string) =>{
  const cookieCart = getCookieCart();


  if(cookieCart[id]){
    cookieCart[id]++;
  }else{
    cookieCart[id] = 1;
  }
  setCookie('cart', JSON.stringify(cookieCart));
  toast.success(`Product added to cart : ${name}`, {duration:1500});
}

export const removeProductCookieFromCart = (id:string, name:string) => {
  const cookieCart = getCookieCart()
  if(cookieCart[id]){
    if(cookieCart[id] === 1){
      delete cookieCart[id]
      setCookie('cart', JSON.stringify(cookieCart))
      toast.success(`Product ${name} removed from cart`, {duration:1500})
      return;
    } else {
      cookieCart[id]--
      setCookie('cart', JSON.stringify(cookieCart))
      toast.success(`Product ${name} removed from cart`, {duration:1500})
      return;
    }
  }
}


export const removeAllProductCookieFromCart = (id:string, name:string) =>{
  const cookieCart = getCookieCart();
  if(cookieCart[id]){
    delete cookieCart[id]
    setCookie('cart', JSON.stringify(cookieCart));
    toast.success(`All product ${name} removed from cart`, {duration:1500});
  } else {
    toast.error(`Product not found in cart : ${name}`, {duration:1500});
  }
}
