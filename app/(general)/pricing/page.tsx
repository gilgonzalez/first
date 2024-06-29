import { Metadata } from 'next';

type Props = {}

export const metadata : Metadata = {
  title: 'Pricing',
  description: 'Pricing page',
  keywords: ['Pricing', 'page'],
}
const PricingPage = (props: Props) => {
  return (
    <div>PricingPage</div>
  )
}
export default PricingPage