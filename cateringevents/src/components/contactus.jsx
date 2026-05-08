import React, { useState } from 'react';

const Booking = () => {

  // Username
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  // County
  const [county, setCounty] = useState('');
  const [countyError, setCountyError] = useState('');

  // Password
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');



  // USERNAME VALIDATION
  const handleUsernameValidation = (e) => {

    const value = e.target.value;

    setUsername(value);

    if (value.trim() === '') {

      setUsernameError('Username is required');

    } else if (value.length > 10) {

      setUsernameError('Username should not exceed 10 characters');

    } else {

      setUsernameError('');

    }
  };



  // COUNTY VALIDATION
  const handleCountyValidation = (e) => {

    const value = e.target.value;

    setCounty(value);

    if (value.trim() === '') {

      setCountyError('County is required');

    } else {

      setCountyError('');

    }
  };



  // PASSWORD VALIDATION
  const handlePasswordValidation = (e) => {

    const value = e.target.value;

    setPassword(value);

    if (value.trim() === '') {

      setPasswordError('Password is required');

    } else if (value.length < 8) {

      setPasswordError('Password should be at least 8 characters');

    } else if (!/[a-zA-Z]/.test(value)) {

      setPasswordError('Password must contain at least one letter');

    } else {

      setPasswordError('');

    }
  };



  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    // FINAL CHECK
    if (
      usernameError ||
      countyError ||
      passwordError ||
      !username ||
      !county ||
      !password
    ) {

      alert('Please fix all errors first');

      return;
    }

    alert('Form submitted successfully');

    console.log({
      username,
      county,
      password
    });

  };



  return (

    <div style={{ padding: '20px' }}>

      <h2>Booking Form</h2>

      <form onSubmit={handleSubmit}>

        {/* USERNAME */}
        <div>

          <label>Username:</label>

          <br />

          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameValidation}
          />

          <br />

          <i style={{ color: 'red' }}>
            {usernameError}
          </i>

        </div>

        <br />



        {/* COUNTY */}
        <div>

          <label>County:</label>

          <br />

          <input
            type="text"
            name="county"
            value={county}
            onChange={handleCountyValidation}
          />

          <br />

          <i style={{ color: 'red' }}>
            {countyError}
          </i>

        </div>

        <br />



        {/* PASSWORD */}
        <div>

          <label>Password:</label>

          <br />

          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordValidation}
          />

          <br />

          <i style={{ color: 'red' }}>
            {passwordError}
          </i>

        </div>

        <br />



        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
};

export default Booking;