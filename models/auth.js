
import mongoose from 'mongoose';


const authSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }

});


const User = mongoose.model('User', authSchema);

export default User;

