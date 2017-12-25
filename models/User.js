const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
    superUser: { type: Boolean, default: false },
    department: String
});

mongoose.model('user', userSchema);
