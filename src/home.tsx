import { useContext, createContext, useState } from 'react'

const CycleContext = createContext({} as any)

export function NewCyleForm() {
  const { activeCycle, setActiveCycle } = useContext(CycleContext)

  return (
    <>
      <h1>new cycle form: {activeCycle}</h1>
      <button onClick={() => setActiveCycle(2)}>aumentar</button>
    </>
  )
}

export function Countdown() {
  const { activeCycle } = useContext(CycleContext)

  return <h1>countdown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCyleForm />
        <Countdown />
      </div>
    </CycleContext.Provider>
  )
}
