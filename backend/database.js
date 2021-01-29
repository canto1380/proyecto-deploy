const mongoose = require('mongoose');
const connection = "mongodb+srv://ata1609:2203casa@prueba1.b9epm.mongodb.net/User?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

    
