const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../../models/Order');


const validateOrdersInput = require('../../validation/orders');

//@route Get api/profile/test
//@desc Tests orders rout
//@access Public
router.get('/test', (req, res) => res.json({ msg: "orders Works" }));

//@route Post api/orders/order
//@desc Tests orders rout
//@access Public
router.post('/order', (req, res) => {
    const { errors, isValid } = validateOrdersInput(req.body);
    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    } else {
        const newOrder = new Order({
            name: req.body.name,
            phone: req.body.phone,
            time: req.body.time,
            date: req.body.date,
            person: req.body.person

        });
        newOrder
            .save()
            .then(order => res.json(order))
            .catch(err => console.log(err));
    }

});
//@route Post api/orders/all
//@desc Tests orders rout
//@access Public


router.get('/all', (req, res) => {
    const errors = {};

    Order.find()
        .then(orders => {
            if (!orders) {
                errors.noorders = 'There are no orders';
                return res.status(404).json(errors);
            }

            res.json(orders);
        })
        .catch(err => res.status(404).json({ order: 'There are no orders' }));
});


//@route GET api/orders/:id
//@desc Get post by id
//@access Public



router.get('/:id', (req, res) => {

    Order.findById(req.params.id)


        .then(order => res.json(order))
        .catch(err => res.status(404).json({ noorder: 'No order found with that ID' }));
});

module.exports = router;