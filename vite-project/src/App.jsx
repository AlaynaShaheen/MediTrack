import Home from './pages/Home';
import PharmaHome from './pages/PharmaPages/PharmaHome';
import AddMedicine from './pages/PharmaPages/AddMedicine';
import ViewMedicines from './pages/PharmaPages/ViewMedicines'
import medicinesData from '../medicinesData'
import UserHome from '../src/pages/UserPages/UserHome'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NotificationPage from '../src/pages/UserPages/Notifications';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './components/Profile';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pharma' element={<PharmaHome />} />
          <Route path='/pharma/add-medicine' element={<AddMedicine />} />
          <Route path='/pharma/view-medicines' element={ <ViewMedicines medicines={medicinesData} /> } />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/user" element={<UserHome />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}