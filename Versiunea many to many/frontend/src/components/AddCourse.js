import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddCourse = () => {
    const [userId, setUserId] =useState("");
    const [userKey, setUserKey] =useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [startDate, setStartDate] =useState("");
    const [durata, setDurata] =useState("");
    const navigate=useNavigate();

    const saveCourse = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:5000/courses",{
            userId: userId,
            userKey: userKey,
            name: name,
            desc: desc,
            startDate: startDate,
            durata: parseInt(durata),
            users: {
                connect: users.map((userId) => {
                    return {
                        where: { name: userId },
                    };
                })
            }
        });
        navigate("/")
    }

  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={saveCourse} className='my-10'>
            <div className='flex flex-col'>
            {/* <div className='mb-5'>
                    <label className='font-bold text-slate-700'>Author Key</label>
                    <input type='text' className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                    placeholder='Author Key'
                    value={userKey}
                    onChange={(e) => setUserKey(e.target.value)}/>
                </div> */}
                <div className='mb-5'>
                    <label className='font-bold text-slate-700'>Course Name</label>
                    <input type='text' className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                    placeholder='Course Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label className='font-bold text-slate-700'>Description</label>
                    <input type='text' className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                    placeholder='Description'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label className='font-bold text-slate-700'>Setare data (dd/mm/yyyy hh:mm)</label>
                    <input type='text' className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                    placeholder='Setare data (dd/mm/yyyy hh:mm)'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <label className='font-bold text-slate-700'>Durata</label>
                    <input type='text' className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                    placeholder='Durata'
                    value={durata}
                    onChange={(e) => setDurata(e.target.value)}/>
                </div>
                <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddCourse