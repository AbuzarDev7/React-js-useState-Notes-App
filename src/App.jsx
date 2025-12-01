

import React, { useState } from 'react'

function App() {
  const [heading, setHeading] = useState('')
   const [deatails, setDeatails] = useState('')

 const [tasks, setTasks] = useState([]);

  const submitHandler =(e)=>{
       e.preventDefault();
       console.log('form submited');
      //  spreacd all notes copy
     const copyTasks = [...tasks];  
       copyTasks.push({heading,deatails});
setTasks(copyTasks);

       setDeatails('');
       setHeading('');
  }

  const deleteNote =(index)=>{
  tasks.splice(index,1)
  setTasks([...tasks])
  }

  return (
    <>
   
<div className="relative min-h-screen text-white lg:flex overflow-hidden">


  <div
    className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77]"
    style={{
      backgroundSize: "300% 300%",
      animation: "bgMove 20s ease infinite",
    }}
  ></div>


  <form className="flex flex-col gap-5 lg:w-1/2 p-10 relative z-10" onSubmit={(e)=>{
  submitHandler(e)
  }}>
    <h1 className="text-4xl mb-2 font-bold tracking-wide">Add Notes</h1>

    <input
      type="text"
      placeholder="Enter Notes Heading"
      className="px-5 w-full font-medium py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-white rounded-lg outline-none"
      value={heading} onChange={(e)=>{
        setHeading(e.target.value)
      }}
    />

    <textarea
      placeholder="Write Details here"
      className="px-5 w-full font-medium h-32 py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-white rounded-lg outline-none"
      value={deatails} onChange={(e)=>{
        setDeatails(e.target.value)
      }}
    />

    <button
      type="submit"
      className="bg-white hover:bg-white/80 text-black font-semibold px-5 py-3 rounded-lg transition" 
    >
      Add Note
    </button>
  </form>

  {/* RIGHT SIDE NOTES */}
 <div className="lg:w-3/4 p-10 lg:border-l lg:border-white/20 relative z-10">

    <h1 className="text-4xl font-bold tracking-wide">Recent Notes</h1>

  <div className="flex flex-wrap items-start justify-start gap-6 mt-6 h-[90%] overflow-auto ">
  {tasks.map((item, idx) => (
    <div key={idx} className="flex flex-col justify-between relative h-52 w-40 bg-cover bg-yellow-100 text-black rounded-xl shadow-xl p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] overflow-auto break-words">
      <div>
        <h3 className="text-lg font-bold overflow-auto">{item.heading}</h3>
        <p className="mt-2 text-xs font-semibold text-gray-700 break-words">
         {item.deatails}
        </p>
      </div>
      <button  className="bg-red-500 text-white py-1 text-xs rounded font-bold" onClick={()=>deleteNote(idx)}>
        Delete
      </button>
    </div>
  ))}
</div>


 

    </div>
  </div>

  {/* Inline keyframes for background animation */}
  <style>{`
    @keyframes bgMove {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }
  `}</style>



    </>
  )
}

export default App