import React from 'react'
import TopBar from './topbar/TopBar'
import './Admin.css'
import Sidebar from './sidebar/Sidebar'
import  Home  from './pages/home/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import UserList from './pages/userList/UserList'

function Admin() {
  return (
    <Router>
      <TopBar />
      <div className='containerAdmin'>
          <Sidebar />
          <Switch>
              <Route exact path="/Admin">
                <Home />
              </Route>
              <Route exact path="/Admin/User">
                <UserList />
              </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default Admin