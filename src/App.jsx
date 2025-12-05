import React from 'react'
import Navbar from './components/Navbar'
import First from './components/firstComponent/First'
import FirstAbout from './components/firstComponent/FirstAbout'
import Specialist from './components/firstComponent/Specialist'

const App = () => {
  return (
    <div >
      <Navbar />
      <First />
      <FirstAbout />
      <Specialist />
    </div>
  )
}

export default App