import React from 'react'
import TopBar from './topbar/TopBar'
import './Admin.css'
import Sidebar from './sidebar/Sidebar'
import  Home  from './pages/home/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newPage/NewUser'
import ProductList from './pages/productList/ProductList'


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
              <Route exact path="/Admin/User/:userId">
                <User />
              </Route>
              <Route exact path="/Admin/NewUser">
                <NewUser/>
              </Route>
              <Route exact path="/Admin/Products">
                <ProductList/>
              </Route>
              <Route exact path="/Admin/Products/:productsId">
                <User />
              </Route>
              <Route exact path="/Admin/NewProduct">
                <NewUser/>
              </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default Admin