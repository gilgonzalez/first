import { create } from 'zustand'
import { SimplePokemon } from '../admin/products/interface';
import { persist } from 'zustand/middleware'

interface ProductState {
  pokemons : SimplePokemon[];
  toggleFavorite : (id: string, name:string) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    ( set, get ) => ( {
      pokemons: [],
      toggleFavorite: ( id: string, name: string ) => {
        const exist = get().pokemons.some( pokemon => pokemon.id === id );
        if ( exist ) {
          set( state => ( {
            pokemons: state.pokemons.filter( pokemon => pokemon.id !== id )
          } ) );
        } else {
          set( state => ( {
            pokemons: [ ...state.pokemons, { name, id } ]
          } ) );
        }
      }
    }
    ),
    {
      name: 'product-storage'
    }
  ),
)

