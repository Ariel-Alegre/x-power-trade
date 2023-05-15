import React from 'react';
import requireAuth from './requireAuth';

const MyProtectedComponent = () => {
  return <div>Esta es una página protegida</div>;
};

export default requireAuth(MyProtectedComponent);
