import { ArrowRightIcon, CoinsIcon, PercentIcon, ReceiptIcon } from 'lucide-react';
import React from 'react'

const SummaryBuy = ({totalPrice} : {totalPrice: number}) => {
  const formatedTotalPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice)
  const formatedIVAPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice * 0.21)
  const formatedSubtotalPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice - totalPrice * 0.21)
  return (
    <div className="flex flex-col m-2 gap-4 p-6 bg-background rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Resumen de la compra</h2>
            <ReceiptIcon className="w-6 h-6 text-green-700" />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <div className="flex items-center gap-1">
                <span className="font-medium">{formatedSubtotalPrice}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">IVA (21%)</span>
              <div className="flex items-center gap-1">
                <PercentIcon className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium">{formatedIVAPrice}</span>
              </div>
            </div>
            <hr className="border-gray-500/50 " />
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Total</span>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-primary">{formatedTotalPrice}</span>
                <CoinsIcon className="w-5 h-5 text-emerald-700" />
              </div>
            </div>
          </div>
          <button className="flex items-center mx-auto font-semibold justify-center  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Proceder al pago
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
  )
}

export default SummaryBuy
