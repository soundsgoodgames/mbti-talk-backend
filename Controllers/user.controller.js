const User = require("../Models/user");
const userController = {};

userController.saveUser = async(userName, sid)=>{
    // check whether the user is exist
    // the findOne function is not properly working due to server issue
    let user = await User.findOne({ name: userName });

    // If not, make new user information
    if(!user) {
        user = new User({
            name: userName,
            token: sid,
            online: true,
        });
    }

    // If so, change the ID
    user.token = sid;
    user.online = true;

    await user.save();
    return user;
}

userController.checkUser = async(sid) => {
    const user = await User.findOne({token:sid});
    if(!user) throw new Error("user not found");
    return user;
};

module.exports = userController;