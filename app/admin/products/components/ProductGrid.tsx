import { ProductCard } from '.';
import type { SimplePokemon } from '../interface';

interface Props{
  items : SimplePokemon[]
}

export const ProductGrid = ({ items }: Props) => {
  
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center ">
    {
      items.map(({id, name})=> (
        <ProductCard key={id} id={id} name={name}/> 
      ))
    }
  </div>
  )
}