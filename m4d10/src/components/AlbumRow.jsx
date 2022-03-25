import { Col, Card } from 'react-bootstrap'
// import { useState, useEffect } from 'react'

const AlbumRow = ({ galleryProps }) => {
  return (
    <>
      {galleryProps.map((album) => (
        <Col xs={2} className="px-0" key={album.id}>
          <Card>
            <Card.Img variant="top" src={album.album.cover_xl} />
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>{album.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default AlbumRow
