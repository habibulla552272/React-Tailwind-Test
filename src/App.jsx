import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import './App.css'
import RootlayOut from './Component/RootlayOut';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootlayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path='/Contact' element={<Contact />} />
      </Route>
    )
  );
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
