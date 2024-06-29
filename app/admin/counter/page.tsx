import { Metadata } from 'next';
import { ManageTask } from './components';

export const metadata : Metadata = {
  title: 'Tasks',
  description: 'Manage tasks'
}

const CounterPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <ManageTask />
    </div>
  )
}
export default CounterPage