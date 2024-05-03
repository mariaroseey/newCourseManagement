const express = require('express')
const usersModel = require('../model/usersModel')
const mongoose = require('mongoose')


const router = express.Router()

//getAll
router.get('/', async (req, res) =>{
    const data = await usersModel.find();
    res.json({success: true, data: data})
})

// Get single user
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersModel.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


//create
router.post('/create', async (req, res) => {
    console.log(req.body)
    const data = new usersModel(req.body)
    await data.save()

    res.send({success: true, message: 'data saved'})
})

// Update
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = await usersModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ success: false, message: 'Data not found' });
        }
        res.json({ success: true, message: 'Data updated', data: updatedData });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await usersModel.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ success: false, message: 'Data not found' });
        }
        res.json({ success: true, message: 'Data deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router