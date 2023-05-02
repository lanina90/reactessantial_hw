import React, {useState} from 'react';

const Task1 = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email
    };
    const jsonString = JSON.stringify(formData);
    setResult(jsonString);
  };

  return (
    <div>
      <form className={'form'} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='First Name'
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder='Last Name'
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Task1;