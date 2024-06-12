import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemSettings } from './components';
import {
  Ecommerce, Orders, Calender, Employees, Kanban, Editor, Customers, ColorMapping, ColorPicker,
  Area, Bar, Financial, Line, Pie, Pyramid, Stacked } from './pages'
import './App.css'
import { useStateContext } from './contexts/ContextProvider';


function App() {
  const {activeMenu} = useStateContext();
  return  (
    <div>
      <BrowserRouter>
      <div className = "flex relative dart:bg-main-dark-bg">
        <div className = "fixed right-4 bottom-4" style = {{zIndex: 1000}}>
          <TooltipComponent content = "Settings" position = "bottom">
            <button type = "button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white'
            style = {{ background: 'blue', borderRadius: '50%'}}>
            <FiSettings />
            </button>
          </TooltipComponent>
          </div>
          {activeMenu ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar/>
                </div>
            ): (
              <div className = 'w-0 dark:bg-secondary-dark-bg'>
                <Sidebar/>
                </div>
            )
          }
          <div className = {
            "dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}"
          }>
            <div className = "fixed md:static bg-main-bg dark:bg-main-dark-bg  navbar w-full">
              <Navbar/>
            </div>

          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path = "/" element = { <Ecommerce/>}/>
              <Route path = "/ecommerce" element = { <Ecommerce/>}/>

              {/* Pages */}
              <Route path = "/orders" element = { <Orders/>}/>
              <Route path = "/epmployees" element = { <Employees/>}/>
              <Route path = "/customers" element = { <Customers/>}/>

              {/* Apps */}
              <Route path = "/kanban" element = { <Kanban/>}/>
              <Route path = "/editor" element = { <Editor/>}/>
              <Route path = "/calendar" element = { <Calender/>}/>
              <Route path = "/color-picker" element = { <ColorPicker/>}/>

              {/* Charts */}
              <Route path = "/line" element = { <Line/>}/>
              <Route path="/area" element={ <Area/>} />
              <Route path="/pie" element={ <Pie/>} />
              <Route path="/financial" element={ <Financial/>} />
              <Route path="/color-mapping" element={ <ColorMapping/>} />
              <Route path="/pyramid" element={ <Pyramid/>} />
              <Route path="/stacked" element={ <Stacked/>} />
              <Route path = "/bar" element = { <Bar/>}/>

            </Routes>
          </div>

      </div>
      </BrowserRouter>

    </div>
  )
}

export default App