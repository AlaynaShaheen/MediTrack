import Home from './pages/Home';
import PharmaHome from './pages/PharmaPages/PharmaHome';
import AddMedicine from './pages/PharmaPages/AddMedicine';
import ViewMedicines from './pages/PharmaPages/ViewMedicines'
import medicinesData from '../medicinesData'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pharma' element={<PharmaHome />} />
          <Route path='/pharma/add-medicine' element={<AddMedicine />} />
          <Route path='/pharma/view-medicines' element={ <ViewMedicines medicines={medicinesData} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}