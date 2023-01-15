import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ReactCourse = () => {
    var [pozitiv, setPozitiv] = useState("");
    var [neutru, setNeutru] = useState("");
    var [negativ, setNegativ] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    var ok = 0;

    useEffect(() => {
        const getCourseById = async () => {
            const response = await axios.get(`http://localhost:5000/courses/${id}`);
            setPozitiv(response.data.pozitiv);
            setNeutru(response.data.neutru);
            setNegativ(response.data.negativ);
        };
        getCourseById();
    }, [id]);

    const updateCourse = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/courses/${id}`, {
            pozitiv: parseInt(pozitiv),
            neutru: parseInt(neutru),
            negativ: parseInt(negativ)
        });

        setTimeout(() => {
            navigate("/");
          }, 1000);

        
    }

    return (
        <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
            <form onSubmit={updateCourse} className='my-10'>
                <div className='flex flex-col'>
                    <button className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                        onClick={(e) => setPozitiv(pozitiv++)}> Pozitiv </button>
                    <button className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                        onClick={(e) => setNeutru(neutru++)}> Neutru </button>
                    <button className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                        onClick={(e) => setNegativ(negativ++)}> Negativ </button>
                </div>
            </form>
        </div>
    )
}

export default ReactCourse