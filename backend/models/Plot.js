const mongoose = require('mongoose');

const plotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  coordinates: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  },
  size: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  status: {
    type: String,
    enum: ['available', 'assigned', 'maintenance'],
    default: 'available'
  },
  plants: [{
    name: String,
    type: String,
    plantedDate: Date,
    harvestDate: Date
  }],
  notes: String,
  lastWatered: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Plot', plotSchema); 