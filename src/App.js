import { useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import InputBooks from './components/InputBooks/InputBooks';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setSidebarOpen(true);
  }
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="App">
      
      <Router>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}></Sidebar>
        {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}></Navbar> */}
          <Switch>
            <Route path="/inputBooks">
              <InputBooks></InputBooks>
            </Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
