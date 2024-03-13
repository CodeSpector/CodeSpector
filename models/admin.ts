import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    uname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.models.admin || mongoose.model('admin', adminSchema);