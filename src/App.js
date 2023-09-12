import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from './sign-in-side/SignInSide';
// eslint-disable-next-line
import Proctected from './protected/protected';
import PersistentDrawerLeft from './dashboard/dashboard';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route element={<Proctected/>}>
          <Route path='/dashboard' element={<PersistentDrawerLeft/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
