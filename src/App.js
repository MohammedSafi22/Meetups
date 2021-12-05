import {Route,Routes} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favourite from './pages/Favourite';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
    <Routes>
        <Route exact path='/' element={<AllMeetups/>} />
        <Route exact path='/new-meetup' element={<NewMeetup/>} />
        <Route exact path='/favourite' element={<Favourite/>} />
    </Routes>  
    </Layout>   
  );
}

export default App;
