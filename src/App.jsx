import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Notations from './other-tuts/Notations'
import Adv2x2 from './other-tuts/Adv2x2'
import Tut3x3 from './tuts/Tut3x3'
import Tut2x2 from './tuts/Tut2x2'
import CFOP from './tuts/CFOP'
import CLL from './algorithms/2x2/cll'
import PBL from './algorithms/2x2/pbl'
import OLL2X2 from './algorithms/2x2/oll2x2'
import AdvOLL from './algorithms/advance/advoll'
import AdvPLL from './algorithms/advance/advpll'
import COLL from './algorithms/advance/coll'
import BegOLL from './algorithms/beginner/begoll'
import BegPLL from './algorithms/beginner/begpll'
import OLLtrain from './trainer/OLL-trainer'
import PLLtrain from './trainer/PLL-trainer'
import CLLtrain from './trainer/CLL-trainer'
import Trainer3x3 from './trainer/3x3-trainer'


function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/notations' element={<Notations />} />
        <Route path='/2x2-advanced' element={<Adv2x2 />} />
        <Route path='/3x3-tutorial' element={<Tut3x3 />}/>
        <Route path='/2x2-tutorial' element={<Tut2x2 />}/>
        <Route path='/CFOP' element={<CFOP />}/>
        <Route path='/algorithms/beginner/oll' element={<BegOLL />} />
        <Route path='/algorithms/beginner/pll' element={<BegPLL />} />
        <Route path='/algorithms/advance/oll' element={<AdvOLL />} />
        <Route path='/algorithms/advance/pll' element={<AdvPLL />} />
        <Route path='/algorithms/advance/coll' element={<COLL />} />
        <Route path='/algorithms/2x2/oll' element={<OLL2X2 />} />
        <Route path='/algorithms/2x2/pbl' element={<PBL />} />
        <Route path='/algorithms/2X2/cll' element={<CLL />} />
        <Route path='/trainer/OLL' element={<OLLtrain />} />
        <Route path='/trainer/PLL' element={<PLLtrain />} />
        <Route path='/trainer/CLL' element={<CLLtrain />} />
        <Route path='/trainer/3x3' element={<Trainer3x3 />} />
      </Route>
    )
  )

  return (
    <div className="min-h-screen bg-fixed bg-gray-700">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
