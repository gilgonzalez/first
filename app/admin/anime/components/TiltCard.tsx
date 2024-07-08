"use client"

import { cn } from '@/lib/utils';
import { Tilt } from '@jdion/tilt-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image:string;
  name:string;
  slug:string;
  index: number
}

const TiltCard = ( { image, name, slug, index }: Props ) => {
  return (

    <Tilt className="max-w-56" style={{transformStyle:"preserve-3d"}}>
      <div 
        style={{transform:"translateZ(50px)"}} 
        key={ name } 
        className={cn("flex flex-col p-1 bg-gradient-to-t from-[#2E86DE] from-10%  shadow-xl to-transparent items-center rounded-md",
           index > 19 && "from-zinc-800",
           index === 0 && "from-red-950",
           index === 1 && "from-pink-400",
           index === 2 && "from-yellow-600",
           index === 3 && "from-amber-800",
           index === 4 && "from-violet-600",
           index === 5 && "from-fuchsia-950",
           index === 6 && "from-sky-500",
           index === 7 && "from-violet-800",
           index === 8 && "from-fuchsia-300",
           index === 9 && "from-cyan-800",
           index === 10 && "from-pink-800",
           index === 11 && "from-emerald-800",
           index === 12 && "from-lime-800",
           index === 13 && "from-slate-600",
           index === 14 && "from-purple-800",
           index === 15 && "from-zinc-800",
           index === 16 && "from-green-800",
           index === 17 && "from-red-900",
           index === 18 && "from-orange-500",
           index === 19 && "from-zinc-400",
          
        )}>
        <Link href={ `/admin/anime/${ slug }` }>
              <Image src={ image } alt={ name } className="rounded-lg" height={150} width={150}/>
              <span className="line-clamp-1 text-muted">{ name }</span>
        </Link>
      </div>
    </Tilt>

  );
};
export default TiltCard;