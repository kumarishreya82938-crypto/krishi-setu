
import {Route,Routes} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Detail from './Detail'
import './Home.css'

function Routerpage() {
  return (
    <div>
    <Routes>

       <Route path='' element={<Login/>}/>    
     <Route path='/home' element={<Home/>}/>
    <Route path='/detail/:id'element={<Detail/>}/>

    </Routes>
    </div> 
  )
}

export default Routerpage
