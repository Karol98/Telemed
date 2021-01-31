import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Chat from "./Chat";
import Diagnose from "./Diagnose";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home"
import DoctorFinder from "./DoctorFinder";
function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/chat" component={Chat}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact} />
              <Route path="/signup" component={Signup} />
              <Route path="/find" component={DoctorFinder}/>
              <Route path="/diagnose" component={Diagnose}/>
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App
