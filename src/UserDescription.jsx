import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [dateHour, setDateHour] = useState({
    todayDate: '',
    time: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const x = new Date();
      const hours = String(x.getHours()).padStart(2, '0');
      const minutes = String(x.getMinutes()).padStart(2, '0');
      const seconds = String(x.getSeconds()).padStart(2, '0'); 
      setDateHour({
        todayDate: x.toLocaleDateString(),
        time: `${hours}:${minutes}:${seconds}`  
      });
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="container_all w-[70%] ">
        <div className="text-4xl font-semibold my-5">Liste de Reservations</div>
        <div className="bg-[#2E6D00] p-5 rounded-md my-8">
            <div className="text-2xl text-white font-bold">BONJOUR ROOT</div>
            <div className='my-4'>
            <p className='text-white'>ETABLISSEMENT : <strong>CMC RSK</strong></p>
            <p className='text-white'>AUJOURD'HUI : {dateHour.todayDate}</p>
            <p className='text-white'>HEURE : {dateHour.time}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
