const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  data: [
    {
      Ohcl: {
        type: Schema.Types.ObjectId,
        ref: 'ohcl'
      }
    }
  ]
});

module.exports = mongoose.model('data', DataSchema);
