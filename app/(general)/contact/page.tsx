import { Metadata } from 'next';

type Props = {}

export const metadata : Metadata = {
  title: 'Contact',
  description: 'Contact page',
  keywords: ['contact', 'page'],
}
const ContactPage = (props: Props) => {
  const date = new Date()
  const formatedDate = new Intl.DateTimeFormat('es', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date)
  return (
    <div className='p-4'>
      <span>{formatedDate}</span>
      <h2 className='text-5xl'>contact</h2>
    </div>
  )
}
export default ContactPage



















