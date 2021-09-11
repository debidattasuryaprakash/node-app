const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://debidatta:code++beta@cluster0.sbomu.mongodb.net/test',{
      useNewUrlParser: true,
      useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
      console.log('Successfully connected to db');
});
