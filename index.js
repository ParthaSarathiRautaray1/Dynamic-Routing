const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//static path - use to add static file - css,js,images in our front end
app.use(express.static(path.join(__dirname,'public')))

// backend render/view = ejs pages (show ejs pages)
app.set('view engine', 'ejs')

app.get("/",function(req,res){
    // res.render include that files which should be goes for rendering i.e a ejs file index.ejs
    res.render("index")
})

app.get("/profile/:username",function(req,res){
    
    res.send(`welcome,${req.params.username}`)
})

app.get("/profile/:username/:age",function(req,res){
    
    res.send(`welcome ${req.params.username} of age ${req.params.age}`)
})


app.listen(3000)