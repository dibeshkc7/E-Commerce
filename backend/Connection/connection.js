const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('Database get connected')
}).catch((error) => {
    console.log(error)
})