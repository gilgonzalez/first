import { BreadCrumb } from '../../components/navigation/Breadcrumb';
import { CharacterResponse } from './interface';

interface Props {
  params : {
    name :string
  }
}

const getCharacter = async (name :string): Promise<CharacterResponse[]> => {

  const response = fetch(`https://demon-slayer-api.onrender.com/v1/${name}`)
  const data = (await response).json()
  return data
}

const page = async ({ params : {name}}:Props) => {

  const data = await getCharacter(name)
  const character = data[0]
  return (
    <div>
      <BreadCrumb/>
      {character.name}
      {/* {
        JSON.stringify(data)
      } */}
    </div>
  )
}
export default page