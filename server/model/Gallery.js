const mongoose = require('mongoose');

const GallerySchema = mongoose.Schema({
    ImgName: {
        type: String,
    },
    ImgURL: {
        type: String
    },
    ImgDetails: {
        type: String
    }
});

const Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;