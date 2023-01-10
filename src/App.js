import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import FeedbackForm from './components/FeedbackForm';
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import Posts from './components/Posts';
import AboutLinkIcon from './components/AboutLinkIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header/><br />
      <Routes>
      <Route exact path = '/' element = {
        <>
        <FeedbackForm/>
        <FeedbackStats />
        <FeedbackList />
        <AboutLinkIcon/>
        </>
      }>
        
      </Route>
      <Route path = '/about' element={<AboutPage/>}>This is the about route</Route>
      <Route path = '/posts/*' element={<Posts/>}>This is the posts route</Route>
      </Routes>
      
    </Router>
    </FeedbackProvider> 
  )
}

export default App