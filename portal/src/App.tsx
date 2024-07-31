import './App.css'
import TopBar from './components/TopBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

import DashBoard from 'managementApp/DashBoard'
import Details from 'managementApp/Details'
import Notice from 'boardApp/Notice'
import UserBoard from 'boardApp/UserBoard'

function App() {  
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/management/dashboard' element={<DashBoard />} />
          <Route path='/management/details' element={<Details />} />
          <Route path='/board/notice' element={<Notice />} />
          <Route path='/board/user-board' element={<UserBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
