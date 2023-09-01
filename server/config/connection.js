const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/bilingual-tutor-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  console.log('bilingual tutor database connected!!!!')
)

module.exports = mongoose.connection