import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    locale: { type: String, default: 'en', },
    biography: { type: String, default: null, },
    avatar: { type: String, default: null, },
    createdAt: { type: Date, default: Date.now },
    oauth2: {
        google: { type: Boolean, default: false },
        discord: { type: Boolean, default: false }
    },
});

export default mongoose.model('User', UserSchema);
