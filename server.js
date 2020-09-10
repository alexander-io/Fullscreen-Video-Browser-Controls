let express = require('express')
let app = express()
let port = 8080

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/index.js', (req, res) => {
  res.sendFile(__dirname + '/public/js/index.js')
})

app.get('/index.css', (req, res) => {
  res.sendFile(__dirname + '/public/css/index.css')
})

app.get('/test.mp4', (req, res) => {
  res.sendFile(__dirname + '/test.mp4')
})

app.get('/play_arrow.svg', (req, res) => {
  res.sendFile(__dirname + '/image_assets/play_arrow.svg')
})

app.get('/skip_previous.svg', (req, res) => {
  res.sendFile(__dirname + '/image_assets/skip_previous.svg')
})

app.get('/forward_10.svg', (req, res) => {
  res.sendFile(__dirname + '/image_assets/forward_10.svg')
})

app.get('/keyboard_backspace.svg', (req, res) => {
  res.sendFile(__dirname + '/image_assets/keyboard_backspace.svg')
})

app.listen(port, () => {
  console.log('listening on', port)
})
