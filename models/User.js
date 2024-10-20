import { Schema, model,models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Please enter a name']
    },
    userame: {
        type: String,
        required: [true, 'Please enter a username']
    },
    image:{
        type:String,
        bookmarks:[
            {
            type:Schema.Types.ObjectId,
            ref:"Property"
            }
        ]
    },

},{
    timestamps: true
})


const User = models.User || model('User', UserSchema);  


export default User;