import { ResponseProduct } from './interface';
import { Metadata } from 'next';
import Image from 'next/image'
import { BreadCrumb } from '../../components/navigation/Breadcrumb';

interface Props {
  params: {
    productId: string
  }
}

/** ! This function is executed at build time on the server side. */
/** ! It will be called only once for each product. */
// export async function generatedStaticParams () {
//   const res = await fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
//     .then(res => res.json())

//   return res.results.map((pokemon, index) => ({
//     productId: (index + 1).toString()
//   }))
// }

export async function generateMetadata({params : {productId}} : Props) : Promise<Metadata> {
  const {id, name, sprites} = await getProduct(productId)
  return {
    title: `#${id} ${name.charAt(0).toUpperCase() + name.slice(1)}`,
    description : `Esta es la descripcion del producto ${name}`,
    openGraph: {
      title: name,
      description: `Page of ${name}`,
      images: [sprites.other?.['official-artwork'].front_default ?? ''],
    },
  }
}

const getProduct = async (id:string) : Promise<ResponseProduct> => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache : 'force-cache',
  })
    .then(res => res.json())

    return response;
}



const ProductPage = async ({params : {productId}} : Props) => {


  const product = await getProduct(productId)
  return (
    <>
    <BreadCrumb/>
    <div className="flex flex-col justify-center items-center h-fit p-4 text-slate-800">
      <div className="flex flex-col pt-4 bg-white items-center rounded-[20px] w-fit  bg-clip-border shadow-lg px-4 md:px-20  p-8">
        <div className="mt-2  w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{product.id} {product.name}
          </h1>
          <div className="flex flex-col sm:flex-row justify-around items-center">
            <Image
              src={product.sprites.other?.['official-artwork'].front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del product ${product.name}`}
              className="mb-5 "
            />
            <Image
              src={product.sprites.other?.['official-artwork'].front_shiny ?? ''}
              width={150}
              height={150}
              alt={`Imagen del product ${product.name}`}
              className="mb-5 -scale-x-100 "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2 w-full">

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {
                product.types.map(type => (
                  <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                ))
              }
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {
                product.weight
              } kg
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">

              <Image
                src={product.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${product.name}`}
              />

              <Image
                src={product.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${product.name}`}
              />

            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">

              <Image
                src={product.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${product.name}`}
              />

              <Image
                src={product.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${product.name}`}
              />

            </div>
          </div>



        </div>
      </div>
    </div>
    </>
  )
}

export default ProductPage

