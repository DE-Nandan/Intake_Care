import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import User from '../models/User.js';
dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const options = {
      amount,
      currency,
      receipt: `receipt_${Math.floor(Math.random() * 1000000)}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({ orderId: order.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});


router.patch('/success', async (req, res) => {
    const { paymentId, email } = req.body; // Assuming you receive paymentId and email after successful payment
  
    try {
      // Update user's subscription status in your database based on email
      const updatedUser = await User.findOneAndUpdate(
        { email: email },
        { subscription: true },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'Subscription updated successfully', user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update subscription' });
    }
  });



export default router;
