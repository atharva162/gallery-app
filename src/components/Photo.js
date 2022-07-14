import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Photo = ({ url, id }) => {
  return (
    <Card className='photo' style={{objectFit: "contain"}}>
      <Link to={`/show/${id}`}>
        <Card.Img
        variant='top'
        src={url}
        alt="Photo"
        />
        </Link>
    </Card>
  )
}

export default Photo;