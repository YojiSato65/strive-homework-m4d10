import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import ArtistPage from './components/ArtistPage'
import AlbumPage from './components/AlbumPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='https://striveschool-api.herokuapp.com/api/deezer/album/:albumId' element={<AlbumPage />}></Route>
        <Route path='https://striveschool-api.herokuapp.com/api/deezer/artist/:artistId' element={< ArtistPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
