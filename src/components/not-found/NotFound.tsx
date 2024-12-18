import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to the homepage after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigate]);

  return (
    <div className="text-center bg-sky-200 py-[20%]">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mt-4">Page Not Found</p>
      <p className="text-sm mt-2">Redirecting to the homepage in 5 seconds...</p>
    </div>
  );
};

export default NotFound;