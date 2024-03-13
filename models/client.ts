import { Int32 } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    contactm: {
        type: String,
        required: true
    },
    web: {
        type: String,
        required: true
    },
    use: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    info: {
        type: String,
    }
});

export default mongoose.models.client || mongoose.model('client', clientSchema);