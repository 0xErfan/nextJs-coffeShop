const mongoose = require('mongoose');

const connectToDB = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect('mongodb://localhost:27017/0xerfan')
        console.log('Connected To DB Successfully :))')
    } catch (error) { console.log('Internal server Error Accuared!', error) }
}

export default connectToDB;