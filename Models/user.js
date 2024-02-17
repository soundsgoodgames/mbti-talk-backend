const mongoose = require("mongoose");

// Schema = blueprint of data
const userSchema = new mongoose.Schema({
    
    // user information
    name: {
        type: String,
        required: [true, "User must type name"],
        unique: true,
    },
    
    // user id
    token: {
        type: String,
    },
    
    // check whether the user is online or not
    online: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("User", userSchema);