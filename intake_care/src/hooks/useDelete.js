import { useState } from 'react';

const useDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteItem = async (id, token) => {
    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/home/myarea/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsDeleting(false);
      return true;
    } catch (error) {
      setError(error);
      setIsDeleting(false);
      return false;
    }
  };

  return { deleteItem, isDeleting, error };
};

export default useDelete;
