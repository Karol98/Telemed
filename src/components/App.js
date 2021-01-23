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
import Home from "./Home"
import DoctorFinder from "./DoctorFinder";
function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/chat" component={Chat}/>
              <Route path="/signup" component={Signup} />
              <Route path="/find" component={DoctorFinder}/>
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App
