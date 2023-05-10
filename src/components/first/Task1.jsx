import React, {useState} from 'react';
import styles from './task1.module.css';

const Task1 = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false
  })

  const validateForm = () => {
    let isValid = true
    let errors = {
      firstName: false,
      lastName: false,
      email: false,
    }


    if (firstName === '') {
      errors.firstName = true;
      isValid = false;
    }

    if (lastName === '') {
      errors.lastName = true;
      isValid = false;
    }

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = true;
      isValid = false;
    }

    setError(errors);
    return isValid;
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!validateForm()) return;
    const formData = {
      firstName,
      lastName,
      email
    };
    const jsonString = JSON.stringify(formData);
    setResult(jsonString);

    console.log('submit success')
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input className={`form__input ${error.firstName ? styles.error : ''}`}
               type="text"
          placeholder='First Name'
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <input className={`form__input ${error.lastName ? styles.error : ''}`}
               type="text"
               placeholder='Last Name'
               value={lastName}
               onChange={event => setLastName(event.target.value)}
        />
        <input className={`form__input ${error.email ? styles.error : ''}`}
               type="email"
               placeholder='Email'
               value={email}
               onChange={event => setEmail(event.target.value)}
        />
        <button className='form__btn' type="submit">Submit</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Task1;