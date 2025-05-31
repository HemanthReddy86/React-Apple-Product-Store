import React, { useEffect, useState } from 'react'
import Controls from './Components/controls.jsx'
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Iphone from './Components/Iphone.jsx';
import MacBook from './Components/MacBook.jsx';
import Watch from './Components/Watch.jsx';
import IMac from './Components/iMac.jsx';
import PageTransition from './Components/PageTransition.jsx';

const App = () => {
  const [framezoom, setFramezoom] = useState(false)
  const [activePage, setActivePage] = useState(0)
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024)
       if (window.innerWidth < 1024) {
        setFramezoom(true)
    }
  }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, [])

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  }

  const toggleZoom = () => {
    if (isLgScreen) {
      setFramezoom(!framezoom);
    }
    
   
  }

  const resetPage = () => {
    setActivePage(0);
  }
const toggleNavbar = () => {
  setIsNavbarOpen(!isNavbarOpen);
}
  return (
    <>
      <div className="w-full h-screen grid place-items-center">
        <div className={`${ framezoom && 'min-w-[97vw] min-h-[97vh]' } 
        w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize 
        overflow-auto relative transition-all duration-100 flex`} >
          <Navbar activePage={activePage} handleNavClick={handleNavClick} isNavbarOpen={isNavbarOpen} toggleNavbar = {toggleNavbar}/>
           <Controls toggleZoom={toggleZoom} framezoom={framezoom} resetPage={resetPage} activePage={activePage} />
           <div className='flex-grow'>
            <PageTransition activePage={activePage}>
              <Home  onNavigate={handleNavClick}/> 
              <Iphone />
              <MacBook /> 
              <Watch />
              <IMac />
            </PageTransition>
           </div>
        </div>
      </div>
    </>
  )
}

export default App