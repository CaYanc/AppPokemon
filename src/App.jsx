
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'

function App() {

  return (
    <div className='w-[100%] h-[100%]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
