import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from './Photo';
import { Button } from 'react-bootstrap';
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [photosPerPage] = useState(9);
    useEffect(() => {
      const getImages = async ()=> {
        try {
        setIsLoading(true);
        const images = await axios.get(`/photos`);
        setPhotos(images.data)
        console.log(images.data);
        } catch (error) {
        console.error(error);
        }
      }
      getImages();
    }, []);

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    useEffect(() => {
     if(photos.length>0){
        setIsLoading(false);
     }
    }, [photos])

    const pageIncrement = ()=>{
      if(currentPage<(photos.length/photosPerPage))
      setCurrentPage(currentPage+1);
    }
    const pageDecrement = ()=>{
      if(currentPage>1){
        setCurrentPage(currentPage-1);
      }
    }
    
  return (
    <>
      <div className='image-footer'>
      <Button className='btn-lg' onClick={pageDecrement}>Prev Page
      <br/>
        <BiLeftArrow className='delete-icon'
      size='1.7em'/>
      </Button>
      <Button className='bg-danger' onClick={pageIncrement}>
       {currentPage}
      </Button>
      <Button className='btn-lg' onClick={pageIncrement}>
        Next Page
        <br/>
        <BiRightArrow className='delete-icon'
      size='1.7em'/>
      </Button>
    </div>
    <div className='photos-list'>
        {isLoading? (
          <div className='loading-msg centered-msg'>Loading...</div>
        ) : (
          currentPhotos.map((photo)=> <Photo key={photo._id} url={photo.ImgURL} id={photo._id}/>)
        )}
    </div>
    </>
  )
}

export default Gallery