
import  {ProductGrid } from './components';
import { ResponsePokemon, SimplePokemon } from './interface';
import { ArrowDownIcon } from '@primer/octicons-react';

const getPokemons = async ( limit = 20 , offset = 0) : Promise<SimplePokemon[]> => {
  const response : ResponsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res =>  res.json())

  const pokemons = response.results.map( ({name, url}) => {
    const id = url.split('/').filter( item => !!item).slice(-1)[0] 
    return {name, id}
  })

  //throw new Error('Custom error')

  return pokemons;
  

}

const ProductPage = async () => {

  const pokemons = await getPokemons(251)
  return (
    <div className="flex flex-col">
      <span className="text-2xl my-2">Listado <small className="text-blue-500">(estatico)</small></span>
      <ProductGrid items={pokemons}/>
      <ArrowDownIcon className="animate-bounce absolute right-2 bottom-0" size={24} />
    </div>
  )
}
export default ProductPage