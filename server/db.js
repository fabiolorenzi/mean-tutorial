const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fabio-lorenzi:aXvwgFl1mrskFeq9@cluster0.pbodu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;