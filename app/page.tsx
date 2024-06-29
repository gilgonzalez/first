import Link from 'next/link';
import style from '../components/navbar/HomeLink.module.css'
import { redirect } from 'next/navigation';

export default function Home() {

  return (
    <main className="flex flex-col items-center p-24">
      <Link className={`${style.homelink} capitalize text-5xl font-bold`} href='/contact'>
        <span >hola gil</span>
      </Link>
      <Link className={`${style.homelink} capitalize text-5xl font-bold`} href='/admin'>
        <span >Go to admin</span>
      </Link>
    </main>
  );
}
