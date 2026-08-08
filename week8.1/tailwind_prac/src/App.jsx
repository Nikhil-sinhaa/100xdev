import { useState } from 'react'
import { RevenueCard } from './components/RevenueCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     <RevenueCard title = "Amount pending" amount="923443"  order= "13" />
     <RevenueCard title = "Amount pending" amount="923443"  order= "13" />
     <RevenueCard title = "Amount pending" amount="923443"  order= "13" />
    

    </div>
    </>
  )
}

export default App
