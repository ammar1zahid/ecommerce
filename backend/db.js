const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://203128:Areebahh7777@cluster0.jxoh8qm.mongodb.net/clothing';

const mongoDB = () => {
  mongoose.connect(mongoURI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error);
      // Handle the error or terminate the application as needed
    });
};

module.exports = mongoDB;



// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://203128:Areebahh7777@cluster0.jxoh8qm.mongodb.net/clothing'


// const mongoDB = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log("connected");
//     });
// }

// module.exports = mongoDB;


