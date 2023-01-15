import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCourse = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [startDate, setStartDate]=useState("");
    const [durata, setDurata]=useState("");
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        const getCourseById = async() => {
            const response = await axios.get(`http://localhost:5000/courses/${id}`);
            setName(response.data.name);
            setDesc(response.data.desc);
            setStartDate(response.data.startDate);
            setDurata(response.data.durata);
        };
        getCourseById();
    },[id]);

    const updateCourse = async(e) =>{
        e.preventDefault();
        await axios.patch(`http://localhost:5000/courses/${id}`,{
            name: name,
            desc: desc,
            startDate: startDate,
            durata: parseInt(durata)
        });
        navigate("/")
    }

  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={updateCourse} className='my-10'>
            <div className='flex flex-col'>
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
                    <label className='font-bold text-slate-700'>Setare data dd/mm/yyyy hh:mm</label>
                    <input type='text' className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                    placeholder='Setare data'
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
                <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Edit</button>
            </div>
        </form>
    </div>
  )
}

export default EditCourse