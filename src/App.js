import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //React Router is a standard library for routing in React. It enables navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Navbar,Footer,Sidebar,ThemeSettings} from './components';
import {Ecommerce, Orders, Calender, Employees, Stacked, Pyramid, 
Customers, Kanban, Area, Bar,Line,Pie, Financial, ColorPicker, ColorMapping, Editor} from './pages';
import './App.css';
const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg"> {/* these are tailwind Css classNames*/}
          <div className = "fixed right-4 bottom-4"> 
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: 'blue', borderRadius:'50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu?(
            <div classNames='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>{/**width of around 18rem*/}
              <Sidebar />
            </div>
          )
            :(
            <div classNa me='w-0 dark-bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-72':'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* DashBoard */}
              <Route path="/" element={<Ecommerce/>}/>
              <Route path="/ecommerce" element={<Ecommerce/>}/>

              {/* Pages */}
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customers/>}/>
              
              {/* Apps */}
              <Route path="/kanban" element={<Kanban/>}/>
              <Route path="/editor" element={<Editor/>}/>
              <Route path="/calender" element={<Calender/>}/>
              <Route path="/color-picker" element={<ColorPicker/>}/>

              {/* Charts */}
              <Route path="/line" element={<Line/>}/>
              <Route path="/area" element={<Area/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/financial;" element={<Financial/>}/>
              <Route path="/color-mapping" element={<ColorMapping/>}/>
              <Route path="/pyramid" element={<Pyramid/>}/>
              <Route path="/stacked" element={<Stacked/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App