const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const userModel = mongoose.models.User || mongoose.model('User', User);

export default userModel;