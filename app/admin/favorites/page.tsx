

import { ArrowDownIcon } from '@primer/octicons-react';
import { ProductGrid } from '../products/components';

export const metadata = {
  title: 'Favoritos',
  description: 'Listado de favoritos',
}


const ProductPage = async () => {

  return (
    <div className="flex flex-col">
      <span className="text-2xl my-2">Listado <small className="text-red-500">(favoritos)</small></span>
      <ProductGrid items={[]}/>
      <ArrowDownIcon className="animate-bounce absolute right-2 bottom-0" size={24} />
    </div>
  )
}
export default ProductPage