const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Plot = require('../models/Plot');

// @route   GET api/garden/plots
// @desc    Get all plots
// @access  Public
router.get('/plots', async (req, res) => {
  try {
    const plots = await Plot.find();
    res.json(plots);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/garden/plots
// @desc    Create a plot
// @access  Public
router.post('/plots', [
  [
    check('name', 'Name is required').not().isEmpty(),
    check('coordinates.x', 'X coordinate is required').isNumeric(),
    check('coordinates.y', 'Y coordinate is required').isNumeric(),
    check('size.width', 'Width is required').isNumeric(),
    check('size.height', 'Height is required').isNumeric()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newPlot = new Plot({
      name: req.body.name,
      coordinates: req.body.coordinates,
      size: req.body.size,
      notes: req.body.notes
    });

    const plot = await newPlot.save();
    res.json(plot);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/garden/plots/:id
// @desc    Update a plot
// @access  Public
router.put('/plots/:id', async (req, res) => {
  try {
    let plot = await Plot.findById(req.params.id);
    if (!plot) {
      return res.status(404).json({ msg: 'Plot not found' });
    }

    const { name, status, plants, notes, lastWatered } = req.body;
    
    // Build plot object
    const plotFields = {};
    if (name) plotFields.name = name;
    if (status) plotFields.status = status;
    if (plants) plotFields.plants = plants;
    if (notes) plotFields.notes = notes;
    if (lastWatered) plotFields.lastWatered = lastWatered;

    plot = await Plot.findByIdAndUpdate(
      req.params.id,
      { $set: plotFields },
      { new: true }
    );

    res.json(plot);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/garden/plots/:id
// @desc    Delete a plot
// @access  Public
router.delete('/plots/:id', async (req, res) => {
  try {
    const plot = await Plot.findById(req.params.id);
    if (!plot) {
      return res.status(404).json({ msg: 'Plot not found' });
    }

    await plot.remove();
    res.json({ msg: 'Plot removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 