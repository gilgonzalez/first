import { SimpleWidget } from '../components/SimpleWidget';
import WidgetGrid from './WidgetGrid';

const DashboardPage = () => {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetGrid/>
    </div>
  )
}
export default DashboardPage