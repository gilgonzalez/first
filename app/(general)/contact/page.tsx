import { auth } from '@/auth';
import { SignIn } from '@/components/sign-in';
import { Metadata } from 'next';

type Props = {}

export const metadata : Metadata = {
  title: 'Contact',
  description: 'Contact page',
  keywords: ['contact', 'page'],
}
const ContactPage = async(props: Props) => {
  const session = await auth()
  const date = new Date()
  const formatedDate = new Intl.DateTimeFormat('es', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date)
  return (
    <div className='p-4'>
      <span>{formatedDate}</span>
      {
        session 
          ? <h2 className='text-5xl'>Conectado</h2> 
          : <h2 className='text-5xl'>No Conectado</h2>
      }
      {
        !session && <SignIn/>
      }
    </div>
  )
}
export default ContactPage



















