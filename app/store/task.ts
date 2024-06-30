import { create } from 'zustand'

interface TaskState {
  totalTask: number
  addTask: (by: number) => void
  removeAllTask: () => void
}

export const usetaskStore = create<TaskState>((set) => ({
  totalTask: 3,
  addTask: (by : number) =>  set((state) => {
    if (state.totalTask + by < 0) return state
    return {
      totalTask: state.totalTask + by
    }
  }),
  removeAllTask: () => set({ totalTask: 0 }),
}))