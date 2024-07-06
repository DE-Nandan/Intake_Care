import { useEffect, useState } from 'react';

const useSubscriptionStatus = (token) => {
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        // Make a GET request to your backend endpoint (/chat) to fetch subscription status
        const response = await fetch('/home/chat', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            // You might need to include authentication headers if required
          },
        });
       
       
        if (!response.ok) {
          throw new Error('Failed to fetch subscription status');
        }

        const data = await response.json();
       
        // Assuming your backend returns subscription status under 'subscribed' key
        setSubscriptionStatus(data.user.subscription);
      } catch (error) {
        console.error('Error fetching subscription status:', error.message);
        setSubscriptionStatus(false); // Set default to false or handle error state
      }
    };

    fetchSubscriptionStatus();
  }, []);

  return subscriptionStatus;
};

export default useSubscriptionStatus;
