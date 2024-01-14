const express = require('express')
const app = express()
const port = 3001

// get = mengambil data dari server ke client
// request = permintaan client ke server
// response = tanggapan dari server ke client

app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use('/assets', express.static('src/assets'))

app.get('/', home)
app.get('/contact', contact)
app.get('/testimonial', testimonial)
app.get('/blog', blog)
app.get('/detail-blog/:id', detailBlog)

function home(req, res) {
    res.render('index')
}

function contact(req, res) {
    res.render('contact')
}

function testimonial(req, res) {
    res.render('testimonial')
}

function blog(req, res) {
    const data = [
      {
        id:1,
        name : "blog detail 1",
        startDate : "6 january 2024",
        description : "i like it"
      },
      {
        id:2,
        name : "blog detail 2",
        startDate : "6 january 2024",
        description : "i like it"
      },
      {
        id:3,
        name : "blog detail 3",
        startDate : "6 january 2024",
        description : "i like it"
      }
    ]
    res.render('blog', { data })
}

function detailBlog(req, res) {
    const { id } = req.params
    
    res.render('detail-blog', { id })
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})