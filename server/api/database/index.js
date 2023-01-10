import mongoose from "mongoose"

const uri = process.env.DB_URL;
mongoose.set("strictQuery", false);
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => console.log(err))