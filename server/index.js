const express = require('express');
const path = require('path');
const cors = require('cors');
const galleryRouter = require('./routers/gallery');
require('./db/connection');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(galleryRouter);

app.get('*', (req,res)=>{
    return res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});