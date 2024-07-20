import Link from 'next/link';
import Image from 'next/image';
import TiltCard from './components/TiltCard';

interface Character{
  name: string;
  image: string;
  url: string;
} 
const getCharacters = async () => {
  const response = await fetch('https://demon-slayer-api.onrender.com/v1/')
  const names = await response.json()

  return names;
}

const DashboardPage = async () => {

  const characters = await getCharacters()
  return (
    <div className="text-black p-4">
      <h1 className="mt-2 text-3xl font-bold">Anime</h1>
      <span className="text-xl">Personajes Kimetsu no Yaiba</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-10 p-4"> 
        {
          characters.map((character: Character, index:number) => {
            const slug = character.name.replace(" ", "_")
            return (
              <TiltCard 
                index={index}
                image={character.image}
                name={character.name}
                slug={slug}
                key={slug}
              />
            )
          } )
        }
      </div>
    </div>
  )
}
export default DashboardPage