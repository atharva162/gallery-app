const express = require('express');
const Gallery = require('../model/Gallery');
const Router = express.Router();

Router.post('/photos', async(req,res)=>{
    try {
        const photo = new Gallery(req.body);
        await photo.save();
        res.status(201).send({})
    } catch (error) {
        res.status(500).send({
            upload_error: 'Error while uploading file..., try again later'
        })
        console.log(error);
    }
})

Router.get('/photos', async(req,res)=>{
    try {
        const photos = await Gallery.find({});
        res.send(photos);
    } catch (error) {
        res.status(500).send({get_error: 'Error while getting list of photos'})
    }
});

Router.get('/photos/:id', async(req,res)=>{
    try {
        const result = await Gallery.findById(req.params.id);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({get_error: 'Error while getting photo'});
    }
});

Router.put('/:id/edit', async(req,res)=>{
    try {
       const {id} = req.params;
       const { ImgName, ImgURL, ImgDetails } = req.body; 
       const updatedImage = { ImgName, ImgURL, ImgDetails, _id: id};
       await Gallery.findByIdAndUpdate(id, updatedImage, {new: true});
       res.json(updatedImage);
    } catch (error) {
        res.status(400).send('Error while updating');
    }
})

Router.delete('/delete/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        await Gallery.findByIdAndRemove(id);
        res.json('Post deleted successfully')
    } catch (error) {
        res.json(400).send('Error while deleting');
    }
})

module.exports = Router;