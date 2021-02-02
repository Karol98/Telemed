import React from "react"
import Signup from "./Signup"
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Chat from "./Chat";
import Diagnose from "./Diagnose";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home"
import DoctorFinder from "./DoctorFinder";
import Doctors from "./Doctors";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute path="/chat" component={Chat}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <Route path="/about" component={About}/>
                    <Route path="/doctors" component={Doctors}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/find" component={DoctorFinder}/>
                    <Route path="/diagnose" component={Diagnose}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </AuthProvider>
        </Router>
    )
}

export default App
