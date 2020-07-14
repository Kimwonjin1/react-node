const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const {User}  = require("./models/User")

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

mongoose.connect(
    'mongodb://wonjin:wjdqhrtns1@cluster0-shard-00-00.ktca5.mongodb.net:27017,cluster0-shard-00-01.ktca5.mongodb.net:27017,cluster0-shard-00-02.ktca5.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-gb244j-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    }

).then(()=> console.log('mongoDB Conneted')).catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {

    const user = new User(req.body)

    user.save((err, userInfo)=>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success:true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))