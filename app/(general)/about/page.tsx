import { Metadata } from 'next';

type Props = {}

export const metadata : Metadata = {
  title: 'About',
  description: 'About page',
  keywords: ['About', 'page'],
}
const AboutPage = (props: Props) => {
  return (
    <div>AboutPage</div>
  )
}
export default AboutPage