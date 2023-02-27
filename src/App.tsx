import { Route, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar/NarBar';
import VideoView from './routes/videos/VideosView';
import VideoDetails from './routes/video-details/VideoDetails';
import Favorites from './routes/favorites/Favorites';
import About from './routes/about/About';
import { Container } from 'react-bootstrap';
import Footer from './components/footer/Footer';
import EditSponser from './components/edit-sponser/EditSponser';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<VideoView/>}/>
          <Route path="/videos" element={<VideoView/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/about/sponsers/edit/:id" element={<EditSponser/>}/>
          <Route path="/favorites" element={<Favorites/>}/> 
          <Route path="/videos/:id" element={<VideoDetails/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        </Container>
       <Footer/> 
    </>
  );
}

export default App;
