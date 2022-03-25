import MyNavbar from './MyNavbar'
import Footer from './Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const ArtistPage = () => {
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
          <Col xs={12} style={{ color: 'white' }}>
            <h2>Good morning</h2>
          </Col>
          {/* <AlbumRow galleryProps={gallery} /> */}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default ArtistPage
