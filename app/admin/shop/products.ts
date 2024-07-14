export interface Product {
  id    : string;
  name  : string;
  price : number;
  rating: number;
  image : string;
}


export const products: Product[] = [
  {
    id: 'UUID-SOLAR-1',
    name: 'Solar Panel',
    price: 300,
    rating: 5,
    image: '/images/products/solar_panel.jpg',
  },
  {
    id: 'UUID-SOLAR-2',
    name: 'Inverter',
    price: 1000,
    rating: 4,
    image: '/images/products/inverter.jpg',
  },
  {
    id: 'UUID-SOLAR-3',
    name: 'Deep Cycle Battery',
    price: 200,
    rating: 4,
    image: '/images/products/deep_cycle_battery.jpg',
  },
  {
    id: 'UUID-SOLAR-4',
    name: 'Solar Charge Controller',
    price: 150,
    rating: 4,
    image: '/images/products/charge_controller.jpg',
  },
  {
    id: 'UUID-SOLAR-5',
    name: 'DC Cables',
    price: 50,
    rating: 5,
    image: '/images/products/dc_cables.jpg',
  },
  {
    id: 'UUID-SOLAR-6',
    name: 'Mounting Brackets',
    price: 70,
    rating: 5,
    image: '/images/products/mounting_brackets.jpg',
  },
  {
    id: 'UUID-SOLAR-7',
    name: 'Solar Water Pump',
    price: 250,
    rating: 4,
    image: '/images/products/solar_water_pump.jpg',
  },
  {
    id: 'UUID-SOLAR-8',
    name: 'Smart Irrigation System',
    price: 200,
    rating: 5,
    image: '/images/products/smart_irrigation_system.jpg',
  },
  {
    id: 'UUID-SOLAR-9',
    name: 'Home Automation Kit',
    price: 350,
    rating: 4,
    image: '/images/products/home_automation_kit.jpg',
  }
]