import { ArrowDownIcon } from '@primer/octicons-react';
import { FavoriteGrid } from '../products/components/FavoriteGrid';

export const metadata = {
  title: 'Favoritos',
  description: 'Listado de favoritos',
}

const FavouritePage = async () => {

  return (
    <div className="flex flex-col"> <span className="text-2xl my-2">Listado <small className="text-red-500">(Favoritos)</small></span>
      <FavoriteGrid/>
      <ArrowDownIcon className="animate-bounce absolute right-2 bottom-0" size={24} />
    </div>
  )
}
export default FavouritePage