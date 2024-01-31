import {Switch, Route, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import AccountSection from './components/AccountSection'
import PopularSection from './components/PopularSection'
import SearchRoute from './components/SearchRoute'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import FailurePage from './components/FailurePage'

import ProtectedRout from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRout exact path="/" component={HomePage} />
    <ProtectedRout exact path="/popular" component={PopularSection} />
    <ProtectedRout exact path="/search" component={SearchRoute} />
    <ProtectedRout exact path="/account" component={AccountSection} />
    <ProtectedRout exact path="/movies/:id" component={MovieDetails} />
    <ProtectedRout exact path="/failure-pg" component={FailurePage} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
