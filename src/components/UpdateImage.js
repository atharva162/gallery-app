import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateImage = () => {
    const [photoDetails, setPhotoDetails] = useState({ImgName: '', ImgURL: '', ImgDetails: ''});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {id} = useParams();

    useEffect(() => {
      const getImage = async ()=> {
        try {
        const image = await axios.get(`/photos/${id}`);
        setPhotoDetails({...photoDetails, ImgName: image.data.ImgName})
        console.log(image.data);
        } catch (error) {
        console.error(error);
        }
      }
      getImage();
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
        axios.put(`/${id}/edit`, photoDetails)
        setIsSubmitted(true);
        window.location = '/';
        } catch (error) {
            console.log(error);
        }
    }

  return( 
  <>
    {
        isSubmitted && (
            <p className='successMsg centered-messsage'>
                Photo updated successfully
            </p>
        )
    }
    <Form
    onSubmit={handleFormSubmit}
    method="post"
    className='upload-form'
    >
      <Form.Group>
        <h3>Enter the new details</h3>
        <br/>
      <Form.Label>
        Enter the name of the image
      </Form.Label>
      <Form.Control type='text' name='ImgName' required value={photoDetails.ImgName} onChange={(e)=> setPhotoDetails({...photoDetails, ImgName: e.target.value})}/>
      </Form.Group>
      <Form.Group>
      <Form.Label>
        Enter the URL of the image
      </Form.Label>
      <Form.Control type='text' name='ImgURL' value={photoDetails.ImgURL} required onChange={(e)=> setPhotoDetails({...photoDetails, ImgURL: e.target.value})}/>
      </Form.Group>
      <Form.Group>
      <Form.Label>
        Enter the description of the image
      </Form.Label>
      <Form.Control type='text' name='ImgDetails' required value={photoDetails.ImgDetails} onChange={(e)=> setPhotoDetails({...photoDetails, ImgDetails: e.target.value})}/>
      </Form.Group>
      <Button 
      variant='primary'
      type='submit'
      className='submit-btn'>
        Update
      </Button>
    </Form>
    </>
  )
}

export default UpdateImage;