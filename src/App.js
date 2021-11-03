import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
//import Signup from "./Signup";
//import Login from "./Login";
// import Home from "./Home";
//import Error from "./Error";


// import LoginPage from "./LoginPage"
// import SignUp from "./SignUp"
// import Gallery from './components/Gallery';
import AboutPage from './components/AboutPage'
import Search from './components/Search';
// import Home04 from './Home04';
import Search1 from './components/Search1';
// import Sport from './Sport';
// import ModalA from './ModalA'
// import SportA from './SportA';
import Newsupload from './components/Newsupload';
import Login1 from './components/Login1';
import Admin from './components/Admin';
import Admina from './components/Admina';
import Displayall from './components/Displayall';
// import Delete from './components/Delete';
import Registration from './components/Registration_Hooks';
import Logout from './components/Logout'
import Contact from './components/Contact'
import UserAfterLogin from './components/UserAfterLogin'
import UpdateProfile from './components/UpdateProfile'
import ManageEmp from './components/ManageEmp'
import ContactAll from './components/ContactAll'
import UserNews from './components/UserNews'
import UserShow from './components/UserShow';
import Homeo from './components/Homeo';
import AboutNews from './components/AboutNews';
import NavSearch from './components/NavSearch';
import Caro from './components/Carousel'
import LiveNews from './components/LiveNews';








const App = () =>{
  return (
<>
<Switch>
  <Route exact path="/" component={Homeo} />
  {/* <Route exact path="/" component={Home} /> */}
  {/* <Route exact path="/Gallery" component={Gallery} /> */}
  <Route exact path="/LoginPage" component={Login1} />
  {/* <Route exact path="/SignUp" component={SignUp} /> */}
  <Route exact path="/About" component={AboutPage} />
  <Route exact path="/Admin" component={Admin} />
  {/* <Route exact path="/Home04" component={Home04} /> */}
  <Route exact path="/Search1" component={Search1} />
  {/* <Route exact path="/Sport" component={Sport} />
  <Route exact path="/ModalA" component={ModalA} />
  <Route exact path="/sportA" component={SportA} /> */}
   <Route exact path="/Newsupload" component={Newsupload} />
   <Route exact path="/Admina" component={Admina} />
   <Route exact path="/Displayall" component={Displayall} />
   {/* <Route exact path="/Delete" component={Delete} /> */}
   <Route path="/search" component={Search} />
   <Route path="/reg" component={Registration} />
   <Route path="/logout" component={Logout} />
   <Route path="/Contact" component={Contact} />
   <Route path="/userafterlogin" component={UserAfterLogin} />
   <Route path="/updateprofile" component={UpdateProfile} />
   <Route path="/manageemp" component={ManageEmp} />
   <Route path="/ContactAll" component={ContactAll} />
   <Route path="/UserNews" component={UserNews} />
   <Route path="/UserShow" component={UserShow} />
   <Route path="/AboutNews" component={AboutNews} />
   <Route path="/NavSearch" component={NavSearch} />
   <Route path="/Carousel" component={Caro} />
   <Route path="/LiveNews" component={LiveNews} />
   
  
   
  



  {/* <Route exact path="/Signup" component={Signup} />
  <Route exact path="/Login" component={Login} /> */}
  {/* <Route component={Error}/> */}
</Switch>
</>
  );
};

export default App;
