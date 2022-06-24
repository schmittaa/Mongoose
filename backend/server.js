const express = require('express')
const cors=require('cors')
const app = express()
const PORT = 5000 ;
const Database = require('./config/connexion')
 //connexion à la base 
 Database();

 //middleware
 app.use(cors())
 app.use(express.json())
 app.use('/contacts', require('./routes/contact'))


app.listen(PORT, () => console.log(`running on ${PORT}`));
