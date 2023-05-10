import { useState } from 'react'

type SetRandomParams = {
  list: string[]
  current?: string
  number?: number
}

const useRandomOptions = () => {
  const [randomOptions, setRandomOptions] = useState<string[]>([])

  const getNewRandomList = ({ list, current, number = 4 }: SetRandomParams) => {
    const elements: string[] = []

    if (current) elements.push(current)
  
    for (let i = current ? 1 : 0; i < number; i++) {
      const rest = list.filter(item => !elements.some(element => element === item))
      const newElement = rest[Math.floor(Math.random() * rest.length)]
      elements.push(newElement)
    }
    
    return elements.sort()
  }

  const setNewRandomOptions = ({ list, current, number = 4 }: SetRandomParams) => {
    const getRandomItems = getNewRandomList({ list, current, number })
    setRandomOptions(getRandomItems)
  }

  return {
    randomOptions,
    setNewRandomOptions,
    getNewRandomList
  }
}

export default useRandomOptions