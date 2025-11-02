// import React, { useState } from 'react'
// import { Link, Router, Routes , Route } from 'react-router-dom'
// import Status from './Status';
// function Navbar({mode,setmode}) {

//     const [hidden1, sethidden1] = useState("hidden");
//     const handleClick = () => {
//       mode=="light" ? setmode("dark") : setmode("light");
//     }

     
//     return (
//     <div>
//       <div className=' flex justify-between  bg-green-600 '>
//         <div 
//         className='text-gray-200 font-lg text-left hover:text-gray-200  m-3  h-8  '>

//         {/* <Link className='pr-2 text-teal-600' to="/"> Topics </Link> */}
//        {/* <Router>
//        <Routes>
//         <Route> */}
//                <Link className='pl-2 font-large   ' to="/"  > Dsa tracker </Link>
//        {/* </Route>
//        </Routes>
//        </Router> */}
        
//         </div>
//  <div className='flex align-bottom text-base pr-3 text-center  ' onClick={ ()=>{console.log(hidden1);hidden1=="hidden"?sethidden1("visible"):sethidden1("hidden")}} >
//         <img className='mt-1 w-8 h-9' src="bulb.png "></img>
//         <div className='text-gray-200  text-right  m-2 h-8 ' >
//            Hot Tip
//         </div>
//         </div>
        
//       </div>
//       {<Status visi={hidden1} / >}
//       </div>
//   )
// }

// export default Navbar
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Status from './Status';
import { calculateStreak } from '../utils/streakUtils'; // ✅ new helper (we’ll create this file next)

function Navbar({ mode, setmode }) {
  const [hidden1, sethidden1] = useState("hidden");
  const [streak, setStreak] = useState(0); // ✅ new state for streak

  const handleClick = () => {
    mode === "light" ? setmode("dark") : setmode("light");
  };

  // ✅ fetch questions from localStorage and calculate streak
  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    const s = calculateStreak(storedQuestions);
    setStreak(s);
  }, []);

  return (
    <div>
      <div className='flex justify-between bg-green-600 items-center'>
        {/* Left side - title */}
        <div className='text-gray-200 font-lg text-left hover:text-gray-200 m-3 h-8'>
          <Link className='pl-2 font-large' to='/'>
            DSA Tracker
          </Link>
        </div>

        {/* Center - Streak display 🔥 */}
        <div className='text-yellow-200 font-semibold'>
          🔥 Streak: {streak} days
        </div>

        {/* Right side - Hot Tip toggle */}
        <div
          className='flex align-bottom text-base pr-3 text-center cursor-pointer'
          onClick={() => {
            hidden1 === "hidden" ? sethidden1("visible") : sethidden1("hidden");
          }}
        >
          <img className='mt-1 w-8 h-9' src='bulb.png' alt='bulb' />
          <div className='text-gray-200 text-right m-2 h-8'>Hot Tip</div>
        </div>
      </div>

      {/* Hot Tip Section */}
      <Status visi={hidden1} />
    </div>
  );
}

export default Navbar;
