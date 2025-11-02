import React from "react";
import Card from "./Card.js";
import Questions from "./Questions.js";
import { Link } from "react-router-dom";
import TopLoader from "react-top-loader";
import { useEffect } from "react";
import styles from "./Lister.css"

export default function Lister({
  Checked1,
  Checked2,
  Checked3,
  Checked4,
  Checked5,
  Checked6,
  Checked7,
  Checked8,
  Checked9,
  Checked10,
  Checked11,
  Checked12,
  Checked13,
  count,
  setcount,

  
}) {

 

  // let op=0;
// useEffect(() => {
// op=0;  
let counter=0;
for(let no=0;no<=12;no++)
{
let  op = JSON.parse(localStorage.getItem('Checked'+`${no}`));
//  let ans=0;
if (op!=null)
  {
    op  = [...new Set(op)];
    
    for(let i=0;i<op.length;i++)
    {
      // let iop = parseInt(strs[i] + strs[i+1]);

      //  if (strs[i]==='+') { item2.push((strs[i] + strs[i+1] + strs[i+2])); i+=3;}
 if ((op[i]!=',' && op[i]!='/' &&  op[i]!='"' && op[i]!='['&& op[i]!=']' && (op[i]<'a'|| op[i]>'z')&& op[i]!="\\"&& op[i]!='+') || op.length==3 ) {counter++;}
    }

  }
}
setcount(counter);
  // let ans = op!=null? kk :0;
    
  // op += Checked1!=null ? Checked1.length : 0;
  // op += Checked2!=null ? Checked2.length : 0;
  // op += Checked3!=null ? Checked3.length : 0;
  // op += Checked4!=null ? Checked4.length : 0;
  // op += Checked5!=null ? Checked5.length : 0;
  // op += Checked6!=null ? Checked6.length : 0;
  // op += Checked7!=null ? Checked7.length : 0;
  // op += Checked8!=null ? Checked8.length : 0;
  // op += Checked9!=null ? Checked9.length : 0;
  // op += Checked10!=null ? Checked10.length : 0;
  // op += Checked11!=null ? Checked11.length : 0;
  // op += Checked12!=null ? Checked12.length : 0;
  // op += Checked13!=null ? Checked13.length : 0;

//   setprogress(op);
// }, [])

  //  let total = 88 ;

  // console.log(op,"op");
  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop:50,
    marginBottom:50,
    // marginLeft : 100,
    // marginRight : 100,
}

  const fillerStyles = {
    height: '100%',
    width: `${Math.round((count*100)/100)}%`,
    backgroundColor: "purple",
    borderRadius: 'inherit',
    textAlign: 'right',
    // marginLeft:"1%",
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div >
      <h1 className="text-4xl mt-24  flex justify-center">100 Dsa Questions</h1>
      <h3 className="text-4xl mt-3 text-purple-800 align-items-center text-center  flex justify-center">
        Crack Product based companies today
      </h3>
{/* <div className="flex justify-center ">
      <div className="w3-light-grey w3-round mt-10 flex m-5 w-56 ">
        <div
          className="w3-container w3-round w3-blue"
          style={{
            width: `${Math.round((progress * 100) / 88)}` + "%",
            height: "10px",
          }}
        ></div>
        </div>
        {progress}
      </div> */}
{/* setcount(count); */}
<div className={"lg:ml-52 lg:mr-52 md:ml-52 md:mr-52 ml-24 mr-24 "} style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${count }% `}</span> 
        {/* <span style={labelStyles}>Completed</span> */}
 </div>
</div>

{/*        
       useEffect(() => {
    ans = op!=null?op.length:0;
   
 }, [Checked1,Checked2,Checked3,Checked4,Checked1,Checked5,Checked6,Checked7,Checked8,Checked9,Checked10,Checked11,Checked12,Checked13,]) */}
 
 
      <div className="flex flex-wrap lg:p-16 md:p-16  lg:m-12 md:m-12 sm:m-4 sm:max-w-sm- mt-12  mb-12 justify-center  ">
        <Card qno={23} no={"12"} ans={Checked12} Checked={Checked12} name="Array and String" />
        <Card qno={5} no={"1"} ans={Checked1}  Checked={Checked1} name="Greedy" />
        <Card qno={13} no={"2"} ans={Checked2} Checked={Checked2} name="Dp" />
        <Card qno={7} no={"3"} ans={Checked3}  Checked={Checked3} name="Binary search" />
        <Card qno={5} no={"4"} ans={Checked12} Checked={Checked4} name="Heaps" />
        <Card qno={6} no={"5"} ans={Checked12} Checked={Checked5} name="Recursion" />
        <Card qno={8} no={"6"} ans={Checked12} Checked={Checked6} name="Linked List" />
        <Card qno={8} no={"7"} ans={Checked12} Checked={Checked7} name="Binary Tree" />
        <Card qno={6} no={"8"} ans={Checked12} Checked={Checked8} name="Binary Search Tree" />
        <Card qno={7} no={"9"}  ans={Checked12} Checked={Checked9} name="Stack and Queue" />
        <Card qno={6} no={"10"} ans={Checked12}  Checked={Checked10} name="Backtracking" />
        <Card qno={6} no={"11"} ans={Checked12}  Checked={Checked11} name="Graphs" />
        {/* <Card qno={7} no={"13"} Checked={Checked13} name="String" /> */}
      </div>
      <div className="mb-10">
        <div className="flex justify-center ">
          <p className="text-slate-600 font-nunito "> Linkedin : &nbsp;</p>
          <Link
            target="_blank"
            className=" text-blue-700 font-nunito "
            to="https://www.linkedin.com/in/ritika-sinha9/"
          >
            {" "}
            Ritika &nbsp;
          </Link>

          <img
            src="https://th.bing.com/th/id/R.1dde1bbff3a49d9a2d8e3ad315f9f137?rik=hx1P1nWyX7TYaw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fheart-symbol-transparent%2fheart-symbol-transparent-7.png&ehk=tnXY15k5brhD0QZZmipdAq6M64XmIA6XDvtWxc1EXZA%3d&risl=&pid=ImgRaw&r=0"
            className="w-6 h-6"
          ></img>
        </div>
        {/* <div className="flex justify-center">
          {" "}
          Made with Love | &nbsp;
          <img
            className="h-6 w-6"
            src="https://th.bing.com/th/id/R.968421ef5d794eb8cb555bb49dff4acd?rik=uxIlq%2bqiSDLTsA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1061%2f1924%2fproducts%2fStar_Emoji_grande.png%3fv%3d1480481043&ehk=1a3L6akK6vOPWmacDkHduTA1L5brh2me2a3w7ivd%2fHE%3d&risl=&pid=ImgRaw&r=0"
          ></img>
          <Link
            target="_blank"
            className="text-sky-600 "
            to="https://github.com/Dct-tcd"
          >
            &nbsp; Github \ Dct-tcd{" "}
          </Link>
        </div> */}
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import Card from "./Card.js";
// import { Link } from "react-router-dom";
// import "./Lister.css";

// export default function Lister({
//   Checked1,
//   Checked2,
//   Checked3,
//   Checked4,
//   Checked5,
//   Checked6,
//   Checked7,
//   Checked8,
//   Checked9,
//   Checked10,
//   Checked11,
//   Checked12,
//   Checked13,
//   count,
//   setcount,
// }) {
//   // --- STREAK TRACKER ---
//   const [streak, setStreak] = useState(0);
//   const [lastActive, setLastActive] = useState(null);

//   useEffect(() => {
//     const today = new Date().toDateString();
//     const last = localStorage.getItem("lastActive");
//     const currentStreak = parseInt(localStorage.getItem("streak") || "0");

//     if (!last) {
//       localStorage.setItem("lastActive", today);
//       localStorage.setItem("streak", "1");
//       setStreak(1);
//       setLastActive(today);
//     } else if (last !== today) {
//       const lastDate = new Date(last);
//       const diff = (new Date(today) - lastDate) / (1000 * 60 * 60 * 24);
//       if (diff === 1) {
//         localStorage.setItem("streak", (currentStreak + 1).toString());
//         setStreak(currentStreak + 1);
//       } else if (diff > 1) {
//         localStorage.setItem("streak", "1");
//         setStreak(1);
//       }
//       localStorage.setItem("lastActive", today);
//       setLastActive(today);
//     } else {
//       setStreak(currentStreak);
//       setLastActive(today);
//     }
//   }, []);

//   // --- REVISION PLANNER ---
//   const [revisionDue, setRevisionDue] = useState([]);

//   useEffect(() => {
//     const revisions = JSON.parse(localStorage.getItem("revisions")) || [];
//     const now = new Date();
//     const due = revisions.filter((q) => {
//       const completed = new Date(q.date);
//       const diffDays = Math.floor((now - completed) / (1000 * 60 * 60 * 24));
//       return q.nextRevisionIn.includes(diffDays);
//     });
//     setRevisionDue(due);
//   }, [count]);

//   // --- PROGRESS BAR ---
//   const containerStyles = {
//     height: 20,
//     backgroundColor: "#e0e0de",
//     borderRadius: 10,
//     marginTop: 50,
//     marginBottom: 50,
//   };

//   const fillerStyles = {
//     height: "100%",
//     width: `${Math.round((count * 100) / 100)}%`,
//     backgroundColor: "purple",
//     borderRadius: "inherit",
//     textAlign: "right",
//   };

//   const labelStyles = {
//     padding: 5,
//     color: "white",
//     fontWeight: "bold",
//   };

//   // --- DIFFICULTY TAGS ---
//   const topics = [
//     { name: "Array and String", qno: 23, no: "12", diff: "Easy", checked: Checked12 },
//     { name: "Greedy", qno: 5, no: "1", diff: "Medium", checked: Checked1 },
//     { name: "DP", qno: 13, no: "2", diff: "Hard", checked: Checked2 },
//     { name: "Binary Search", qno: 7, no: "3", diff: "Medium", checked: Checked3 },
//     { name: "Heaps", qno: 5, no: "4", diff: "Easy", checked: Checked4 },
//     { name: "Recursion", qno: 6, no: "5", diff: "Hard", checked: Checked5 },
//     { name: "Linked List", qno: 8, no: "6", diff: "Medium", checked: Checked6 },
//     { name: "Binary Tree", qno: 8, no: "7", diff: "Hard", checked: Checked7 },
//     { name: "Binary Search Tree", qno: 6, no: "8", diff: "Medium", checked: Checked8 },
//     { name: "Stack and Queue", qno: 7, no: "9", diff: "Easy", checked: Checked9 },
//     { name: "Backtracking", qno: 6, no: "10", diff: "Hard", checked: Checked10 },
//     { name: "Graphs", qno: 6, no: "11", diff: "Hard", checked: Checked11 },
//   ];

//   const getDiffColor = (diff) => {
//     switch (diff) {
//       case "Easy":
//         return "bg-green-200 text-green-800";
//       case "Medium":
//         return "bg-yellow-200 text-yellow-800";
//       case "Hard":
//         return "bg-red-200 text-red-800";
//       default:
//         return "bg-gray-200 text-gray-800";
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-16 mt-10">
//       {/* LEFT: MAIN CONTENT */}
//       <div className="flex-1">
//         <h1 className="text-4xl mt-24 text-center">100 DSA Questions</h1>
//         <h3 className="text-2xl mt-3 text-purple-800 text-center">
//           Crack Product Based Companies Today
//         </h3>

//         {/* Progress Bar */}
//         <div className="mx-24" style={containerStyles}>
//           <div style={fillerStyles}>
//             <span style={labelStyles}>{`${count}%`}</span>
//           </div>
//         </div>

//         {/* Topic Cards */}
//         <div className="flex flex-wrap justify-center gap-6 mt-10 mb-12">
//           {topics.map((topic, index) => (
//             <div key={index} className="relative">
//               <Card qno={topic.qno} no={topic.no} name={topic.name} Checked={topic.checked} />
//               <span
//                 className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${getDiffColor(
//                   topic.diff
//                 )}`}
//               >
//                 {topic.diff}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="mb-10">
//           {/* <div className="flex justify-center items-center">
//             <p className="text-slate-600 font-nunito">LinkedIn:&nbsp;</p>
//             <Link
//               target="_blank"
//               className="text-blue-700 font-nunito"
//               to="https://www.linkedin.com/in/dev-chaitanya-tiwari/"
//             >
//               Dev Chaitanya Tiwari
//             </Link>
//             <img
//               src="https://th.bing.com/th/id/R.1dde1bbff3a49d9a2d8e3ad315f9f137?rik=hx1P1nWyX7TYaw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fheart-symbol-transparent%2fheart-symbol-transparent-7.png"
//               className="w-6 h-6 ml-1"
//               alt="heart"
//             />
//           </div> */}

//           {/* <div className="flex justify-center items-center mt-2">
//             <p>Made with ❤️ |&nbsp;</p>
//             <Link
//               target="_blank"
//               className="text-sky-600"
//               to="https://github.com/Dct-tcd"
//             >
//               Github \ Dct-tcd
//             </Link>
//           </div> */}
//         </div>
//       </div>

//       {/* RIGHT: SIDE DASHBOARD */}
//       <div className="lg:w-1/4 w-full bg-gray-50 p-5 rounded-lg shadow-md mt-16 lg:mt-28 lg:ml-10">
//         <div className="mb-6 p-4 border border-purple-200 rounded-lg">
//           <h3 className="text-lg font-bold text-purple-700 mb-2">🔥 Streak</h3>
//           <p className="text-xl font-semibold text-gray-800">{streak} days</p>
//         </div>

//         <div className="p-4 border border-blue-200 rounded-lg">
//           <h3 className="text-lg font-bold text-blue-700 mb-2">
//             🔁 Revision Planner
//           </h3>
//           {revisionDue.length > 0 ? (
//             <ul className="list-disc list-inside text-sm text-gray-700">
//               {revisionDue.map((q, i) => (
//                 <li key={i}>{q.topic} — Due for revision</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500 text-sm">No revisions due today 🎉</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
