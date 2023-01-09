import mongoose from "mongoose"

const uri = "mongodb+srv://justin123:justin123@cluster0.2a3rp.mongodb.net/shoppers?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => console.log(err))