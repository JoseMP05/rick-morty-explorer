import { ref } from 'vue'

const historyStorage = localStorage.getItem('history')
export const history = ref<string[]>(JSON.parse(historyStorage || '[]'))

export function addToHistory(item: string) {
  if(history.value.includes(item)){
    const index = history.value.indexOf(item)
    history.value.splice(index, 1)
  }

  history.value.unshift(item)

  if (history.value.length > 3)
    history.value.pop()

  localStorage.setItem('history', JSON.stringify(history.value))
}