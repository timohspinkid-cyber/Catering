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

    // Username Validation
    const handleUsernameValidation = (e) => {
        const value = e.target.value;

        setUsername(value);

        if (value.trim() === '') {
            setUsernameError('Username is required');
        } else if (value.length < 3) {
            setUsernameError('Username too short');
        } else if (value.length > 10) {
            setUsernameError('Username should not exceed 10 characters');
        } else {
            setUsernameError('');
        }
    };

    // County Validation
    const handleCountyValidation = (e) => {
        const value = e.target.value;

        setCounty(value);

        if (value.trim() === '') {
            setCountyError('County is required');
        } else {
            setCountyError('');
        }
    };

    // Password Validation
    const handlePasswordValidation = (e) => {
        const value = e.target.value;

        setPassword(value);

        if (value.trim() === '') {
            setPasswordError('Password is required');
        } else if (value.length < 8) {
            setPasswordError('Password should be more than 8 characters');
        } else if (!/[a-zA-Z]/.test(value)) {
            setPasswordError('Password must contain at least one letter');
        } else {
            setPasswordError('');
        }
    };

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !usernameError &&
            !countyError &&
            !passwordError &&
            username &&
            county &&
            password
        ) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fix the errors first.');
        }
    };

    return (
       

            
     <div className='row justify-content-center'>
      <br />
      <div className='col-md-6 card shadow'>
        <h1>Booking Form</h1>
        <form onSubmit={handleSubmit}>

                {/* Username */}
                <div >
                    <label>Username:</label><br />

                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameValidation}
                         placeholder='enter your '
                    />

                    <br />

                    <i style={{ color: 'red' }}>
                        {usernameError}
                    </i>
                </div>

                <br />

                {/* County */}
                <div >
                    <label>County:</label><br />

                    <input
                        type="text"
                        value={county}
                        onChange={handleCountyValidation}
                         placeholder='enter your county'
                    />

                    <br />

                    <i style={{ color: 'red' }}>
                        {countyError}
                    </i>
                </div>

                <br />

                {/* Password */}
                <div >
                    <label>Password:</label><br />

                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordValidation}
                        placeholder='enter your password'
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
        </div>
    );
};

export default Booking;