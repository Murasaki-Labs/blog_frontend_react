import React from 'react';

const Spinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <span className="spinner animate-spin rounded-full border-4 border-gray-300 border-t-[var(--color-accent)] w-10 h-10 inline-block"></span>
  </div>
);

export default Spinner;
