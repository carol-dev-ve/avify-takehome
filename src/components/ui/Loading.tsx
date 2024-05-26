import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" data-testid ="loading">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;