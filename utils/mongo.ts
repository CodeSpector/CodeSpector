const mongoose = require('mongoose');

const connect = async () =>{
    try{
        // Change to more sequre ways to do this i.e. Use ENV
        const db = await mongoose.connect(process.env.MONGODB_URI)
        // const db = await mongoose.connect("mongodb+srv://root:root@main.pioo6ba.mongodb.net/?retryWrites=true&w=majority");
        console.log('Successfully connected to the database');
    }
    catch(err){
        console.log(err);
        console.log(`Unable to connect to the database`)
    }
}

export default connect;