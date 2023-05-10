import { ReactElement, createContext} from 'react'

type AppContextProps = {
  children: ReactElement
}

export const AppContext = createContext<null>(null)

const Context = ({ children }: AppContextProps) => {
  return (
    <AppContext.Provider value={null}>
      {children}
    </AppContext.Provider>
  )
}

export default Context