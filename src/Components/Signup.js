import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignup = async () => {
    const hashedPassword = await bcrypt.hash(formData.password, 10);
    
    
    try {
        const response = await axios.post('http://localhost:7000/api/user/register-user', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: hashedPassword, // Send the hashed password
        });
        console.log('Signup success:', response.data);
      } catch (error) {
        console.error('Signup error:', error);
      }


};

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
        <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
        <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
       <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {/* Similar inputs for lastName, email, password */}
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
