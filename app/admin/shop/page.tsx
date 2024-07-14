import { ProductCard } from './components/ProductCard';
import { products } from './products';


export const metadata = {
 title: 'Shop Online Teslo',
 description: 'Shop Online Teslo',
};

const page = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}
export default page