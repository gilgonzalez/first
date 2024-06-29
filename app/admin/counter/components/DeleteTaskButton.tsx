export const DeleteTaskButton = ({handleN}:{handleN: (n : number)=> void}) => {
  return (
    <button onClick={()=> handleN(-1)} className="flex items-center justify-center py-2 px-4 rounded-xl bg-red-600 text-white hover:bg-red-300 transition-all duration-300">
      Eliminar
    </button>
  )
}