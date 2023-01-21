const express = require('express');
const Stripe=require('stripe');

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY)
const router=express.Router()

router.post('/create-checkout-session', async (req, res) => {

    const informations= req.body.informations
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: informations.name,
            },
            unit_amount: informations.amount*100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT}/checkout-success`,
      cancel_url: `${process.env.CLIENT}/events`,
    });
  
    res.send({url: session.url});
  });


  module.exports = router;
  