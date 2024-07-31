import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import context

const Page1 = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const { setUsername } = useAuth(); // Access setUsername from context
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Nama wajib diisi');
      return;
    }
    setError('');
    setUsername(name); // Set username in context
    navigate('/home');
  };

  return (
    <div className='  bg-[#122a46]  mx-auto flex justify-center items-center h-[100vh]' id='baner'>

    <div className='box'>
      <form onSubmit={handleSubmit} className='z-50'>
        <div className='w-full'>
        <h1 className='primary-color text-3xl font-bold flex justify-center py-4'>Welcome</h1>
        <p className=' flex text-center text-white'>Please enter your name in the column below</p>
        </div>

        <section class="bg-stars">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </section>

        <div className='flex flex-col justify-center mt-2  w-[80%] mx-auto'>
         
<input placeholder="Username" type="text"
value={name}
name='name'
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
class="input" required=""/>
          {error && <span className="text-red-500">{error}</span>}
        </div>
      <div className='mt-4'>
        <button onClick={handleSubmit} type="submit" className='btn mx-auto text-white font-semibold'>Submit

          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Page1;