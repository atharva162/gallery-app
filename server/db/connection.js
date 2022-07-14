const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://atharva:shahrukh1@cluster0.a2ycq.mongodb.net/db1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});