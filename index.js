const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const ShortUrl = require('./models/shorturls')
dotenv.config()

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology:true })
.then(()=>{
    console.log("DB connected")
})

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')

app.get('/',async(req,res)=>{
    const shorturls = await ShortUrl.find()
    res.render('index',{shorturls:shorturls})
})

app.post('/shortmyurl',async(req,res)=>{
    await ShortUrl.create({full: req.body.fullUrl })
    res.redirect('/')
})

app.get('/:shorturl_',async(req,res)=>{
    const shorturl = await ShortUrl.findOne({short:req.params.shorturl_})

    if(shorturl == null){
        return res.sendStatus(404)
    }
    shorturl.clicks++;
    shorturl.save()
    res.redirect(shorturl.full)
    
})

app.listen(process.env.PORT || 8000);