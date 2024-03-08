import { useEffect, useState } from 'react'
import './App.css'
import olliglorioso_pic from './assets/olliglorioso_pic.png'

function App() {

  const [vertical, setVertical] = useState(0)
  let [nameHeader, setHeaderAnimation] = useState(`
    font-extrabold 
    text-matte-red 
    text-[15vh]
    sticky
    left-20
    top-0`)

  window.onscroll = function(e) {
    const doc = document.documentElement
    const vertical = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0)
    setVertical(vertical/10)
  }

  useEffect(() => {
    if (vertical > 10) {
      const nameHeaderNew = 'animate-appear-from-left ' + nameHeader
      setHeaderAnimation(nameHeaderNew)
    }
  }, [vertical])

  return (
    <div className='h-[250rem]'>
      <h1 className={`${nameHeader}`}>
          Olli Glorioso
      </h1>
      {/* <img className="w-20 h-20 rounded-full" src={olliglorioso_pic}></img> */}
      
    </div>
    
    
  )
}

export default App
