import { create } from 'zustand'

interface TaskState {
  totalTask: number
  isReady : boolean
  initCounter: (value: number) => void
  addTask: (by: number) => void
  removeAllTask: () => void
  resetTotalTask: (value: number) => void
}

export const usetaskStore = create<TaskState>((set, get) => ({
  totalTask: 3,
  isReady: false,
  initCounter : (value : number) =>{
    if(get().isReady) return

    set({isReady:true, totalTask: value})
  } ,
  addTask: (by : number) =>  set((state) => {
    if (state.totalTask + by < 0) return state
    return {
      totalTask: state.totalTask + by
    }
  }),
  resetTotalTask: (value : number) => set({ totalTask: value}),
  removeAllTask: () => set({ totalTask: 0 }),
}))