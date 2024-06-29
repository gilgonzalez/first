import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <Link href='/contact'>
        <span className="capitalize text-5xl font-bold">hola gil</span>
      </Link>
    </main>
  );
}
