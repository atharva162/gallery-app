import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';

const UploadForm = () => {
    const [photoDetails, setPhotoDetails] = useState({ImgName: '', ImgURL: '', ImgDetails: ''});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
     setErrorMsg('')
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
        axios.post('/photos', photoDetails)
        setIsSubmitted(true);
        window.location = '/';
        } catch (error) {
            console.log(error);
        }
    }

  return( 
  <>
    {errorMsg && errorMsg.upload_error ? (
        <p className='errorMsg centered-message'>{errorMsg.upload_error}</p>
    ) : (
        isSubmitted && (
            <p className='successMsg centered-messsage'>
                Photo uploaded successfully
            </p>
        )
    )}
    <Form
    onSubmit={handleFormSubmit}
    method="post"
    className='upload-form'
    >
      <Form.Group>
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
        Upload
      </Button>
    </Form>
    </>
  )
}

export default UploadForm;