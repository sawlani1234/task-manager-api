const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT

// app.use((req, res,next) => {

//     res.send('mAdarchod off hai')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const multer = require('multer')
// const upload = multer({
//     dest : 'images'
// })


// app.post('/upload', upload.single('upload'), (req , res) =>{

//     res.send()
// })
 