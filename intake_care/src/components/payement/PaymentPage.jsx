import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import { useAuthContext } from '../../hooks/useAuthContext';
import useSubscriptionStatus from '../../hooks/useSubscriptionStatus';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { user } = useAuthContext();
  const subscriptionStatus = useSubscriptionStatus(user.token);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:9002/payment', {
        amount: 1000, // Replace with the actual amount to charge in paisa (e.g., 1000 for ₹10.00)
        currency: 'INR',
      });

      const { orderId } = response.data;

      const options = {
        key: 'rzp_test_UAgSXU1LjbD90O', // Replace with your Razorpay key
        amount: 1000,
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Payment',
        order_id: orderId,
        handler: function (response) {
          console.log('Payment successful:', response);

          // After successful payment, make a request to update subscription status
          axios.patch('http://localhost:9002/payment/success', {
            paymentId: response.razorpay_payment_id, // Pass necessary data from Razorpay response
            email: user.email, // Replace with actual user ID or identifier
          })
            .then(() => {
              setMessage('Payment successful');
              setLoading(false);

              // Navigate to /chat component
              window.location.href = '/chat'; // Redirect to /chat
            })
            .catch(error => {
              console.error('Error updating subscription:', error);
              setMessage('Payment successful but failed to update subscription');
              setLoading(false);
            });
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#F37254',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Payment failed');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.Razorpay === undefined) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => console.log('Razorpay script loaded');
      document.body.appendChild(script);
    }
  }, []);

  const renderPaymentBox = () => (
    <div className="max-w-md mx-auto p-6 bg-slate-800 dark:bg-gray-800 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Payment Details</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">Complete your payment securely using Razorpay.</p>
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full py-3 bg-blue-600 text-white font-medium text-base leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {message && <div className="mt-4 text-center text-gray-700 dark:text-gray-300">{message}</div>}
    </div>
  );

  const renderSubscribedBox = () => (
    <div className="max-w-md mx-auto p-6 bg-slate-800 dark:bg-gray-800 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Already Subscribed</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">You are already subscribed. Enjoy your access!</p>
    </div>
  );

  const renderLoading = () => (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center text-white">
        <p className="text-2xl mb-4">Fetching subscription status...</p>
        <div className="inline-block relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-300 border-t-transparent rounded-full animate-spin">....</div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <h1 className="text-center mb-6 text-1xl font-extrabold text-white md:text-1xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
      Payment
    </span>
    </h1>

    <p className="text-lg font-serif font-bold text-sky-800 lg:text-xl mx-4">
  Upgrade to premium and unlock exclusive features designed to enhance your health journey. Enjoy advanced tools, personalized insights, and priority support to take full control of your well-being. Subscribe today and experience the full potential of In Take Care.
</p>



     {subscriptionStatus === null ? renderLoading() : subscriptionStatus === true ? renderSubscribedBox() : renderPaymentBox()}
    </Layout>
  );
};

export default PaymentPage;
