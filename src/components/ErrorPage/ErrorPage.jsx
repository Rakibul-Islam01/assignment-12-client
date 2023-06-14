import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl mb-4">404 Error</h1>
        <div className="animate-spin-slow text-8xl mb-4">&#10060;</div>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className='mt-8 block bg-gray-100 py-2 hover:bg-gray-200 transition border-gray-600'>Go Back Home </Link>
      </div>
    </div>
  );
};

export default ErrorPage;