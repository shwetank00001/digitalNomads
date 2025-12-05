import React from 'react'
import Navbar from './components/Navbar'
import First from './components/firstComponent/First'
import FirstAbout from './components/firstComponent/FirstAbout'
import Specialist from './components/firstComponent/Specialist'
import Choose from './components/firstComponent/Choose'

const App = () => {
  return (
    <div >
      <Navbar />
      <First />
      <FirstAbout />
      <Specialist />
      <Choose />
    </div>
  )
}

export default App