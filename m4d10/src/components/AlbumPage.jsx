import MyNavbar from './MyNavbar'
import Footer from './Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import AlbumRow from './AlbumRow'
import '../css/home.css'
import '../css/navbar_footer.css'

const AlbumPage = () => {
  const [gallery, setGallery] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchAlbums()
  }, [])

  const fetchAlbums = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${
          searchQuery || 'eminem'
        }`,
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data.data)
        setGallery(data.data)
      } else {
        console.log('response is not ok')
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return (
    <>
      <Container fluid className="d-flex">
        <Row>
          <Col className="px-0">
            <MyNavbar />
          </Col>
        </Row>
        <Row className="mt-5">
        <div class="container-fluid artist-page-top d-flex flex-column justify-content-between">
      <div class="d-flex flex-row justify-content-between pt-3 px-4 mb-5 sticky-top">
        <div class="d-flex align-self-center">
          <i class="fa-solid fa-angle-left"></i>
          <i class="fa-solid fa-angle-right pl-4"></i>
        </div>
      </div>
      <div class="d-flex flex-row pb-3">
        <div class="px-3"><img src="./album-img/Bohemain.jpg" alt="main-album-image" style="width: 200px;"></div>
        <div>
          <div>
            <p>ALBUM</p>
          </div>
          <div>
            <h2>Bohemian Rhapsody(The Original Soundtrack)</h2>
          </div>
          <div class="d-flex flex-row">
            <img src="" alt="">
            <b>Queen</b>
            <p>・2018</p>
            <p>・22songs,</p>
            <p>1h19m</p>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center middle-box">
        <i class="fa-solid fa-play d-flex align-items-center
                        justify-content-center" id="bigPlayButton"></i>
        <i class="fa-regular fa-heart pl-4"></i>
        <h6 class="d-inline-block align-self-center pl-4">. . .</h6>
      </div>
      <div class="row py-3">
        <div class="col-12 col-md-12 col-lg-9 artist-page-bottom-left">
          <h6 class="pb-1"># Title</h6>
        </div>
      </div> 
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default AlbumPage
