import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Sidebar from "./Components/Sidebar/sideBar"
import Topbar from "./Components/Topbar/Topbar";
import "./App.css";
import Home from "./Components/pages/Home";
import Form from './Components/VendorMaster/Form';
import {Fragment} from 'react';
import VendorDetails from './Components/VendorMaster/VendorDetails'
import Orders from './Components/order/Orders';
import OrderDetails from './Components/order/OrderDetails';
import Riders from "./Components/Riders/Riders"
import RidersDetail from "./Components/Riders/Ridersdetails"
import Customer from './Components/Costumers/Costumer'

const  App = () => (
  <Router>
        <Fragment>
    <div>  
     <Topbar/>
    <div className="custom">
      <Sidebar/>
      <div style={{marginTop: "20px", width: "100%"}}>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/vendormaster' component={Form}/>
          <Route exact path='/vendordetails' component={VendorDetails}/>
          <Route exact path='/orders' component={Orders}/>
          <Route exact path='/customer' component={Customer}/>
          <Route exact path='/riders' component={Riders}/>
          <Route exact path='/ridersdetail/:id' component={RidersDetail}/>
          <Route exact path='/ordersdetails' component={OrderDetails}/>
          </Switch>
      </div>
    </div>
       </div>
       </Fragment>
      </Router>
 
  );

export default App;
