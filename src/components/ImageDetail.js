import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md'

const PostDetail = () => {
  const [photo,setPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(false);

const { id } = useParams();
useEffect(() => {
  const getImage = async ()=> {
    try {
    setIsLoading(true);
    const image = await axios.get(`/photos/${id}`);
    setPhoto(image.data)
    console.log(image.data);
    } catch (error) {
    console.error(error);
    }
  }
  getImage();
}, [])

const handleDelete = () => {
  axios.delete(`/delete/${id}`)
  .then(response =>{
    console.log(response);
    window.location='/';
  })
}

useEffect(() => {
  if(photo.length>0){
     setIsLoading(false);
  }
 }, [photo])

  return (
    <>
     <Card className='photo'  style={{ width: '50%',height: 'auto', marginLeft: '19vw'}}>
        <Card.Img
        variant='top'
        src={photo.ImgURL}
        alt="Photo"
        style={{ maxWidth: '100%',height: 'auto'}}
        />  
    </Card>
    <div className='image-footer1'>
     
    <Button variant="light">
      Name of the Image:
      <br/>
      {photo.ImgName}
      </Button>
      <Button variant="light">
        Description of the Image:
        <br/>
       {photo.ImgDetails}
      </Button>
    </div>
    <br/>
    <div className='image-footer'>
      <Link to={`/${id}/edit`}>
      <Button className='btn-lg'>Update</Button>
      </Link>
      <Button className='bg-danger btn-lg' onClick={handleDelete}>
        Delete Photo
      <MdDeleteForever 
      className='delete-icon'
      size='1.7em'/>
      </Button>
    </div>
    </>
  )
}

export default PostDetail