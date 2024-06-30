'use client'
import { usetaskStore } from '@/app/store/task';
import { SimpleWidget } from '../components/SimpleWidget';
import { useEffect } from 'react';

interface CounterResponse {
  count: number;
}

const getApiCounter = async () :Promise<CounterResponse> => {
  const res = await fetch('/api/counter', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return data;
}

const WidgetGrid = () => {

  const initCounter = usetaskStore(state => state.initCounter)
  useEffect(() => {
    getApiCounter().then(({count}) => {
      initCounter(count)

    })
  }, [])
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <SimpleWidget/>
    </div>
  )
}
export default WidgetGrid