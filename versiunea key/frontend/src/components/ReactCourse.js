import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import smile from './Grinning face with big eyes.png';
import frown from './Frowning face.png';
import confusion from './Face with monocle.png';
import wow from './Astonished face.png';

const ReactCourse = () => {
    var [pozitiv, setPozitiv] = useState("");
    var [neutru, setNeutru] = useState("");
    var [negativ, setNegativ] = useState("");
    var [impressed, setImpressed] = useState("");
    var [startDate, setStartDate] = useState("");
    var [durata, setDurata] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    var d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth() + 1;

    var yyyy = d.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var d = dd + '/' + mm + '/' + yyyy;

    useEffect(() => {
        const getCourseById = async () => {
            const response = await axios.get(`http://localhost:5000/courses/${id}`);
            setPozitiv(response.data.pozitiv);
            setNeutru(response.data.neutru);
            setNegativ(response.data.negativ);
            setStartDate(response.data.startDate);
            setDurata(response.data.durata);
            setImpressed(response.data.impressed);
        };
        getCourseById();
    }, [id]);

    const updateCourse = async (e) => {
        e.preventDefault();
        if( ( parseInt(startDate.slice(11,13)) + durata ) > 15 && (startDate.slice(0,10)===d))
        {
            await axios.patch(`http://localhost:5000/courses/${id}`, {
            pozitiv: parseInt(pozitiv),
            neutru: parseInt(neutru),
            negativ: parseInt(negativ),
            impressed: parseInt(impressed)
        });
        console.log(pozitiv+' pozitiv');
        console.log(neutru+' neutru')
        console.log(negativ+' negativ');
            console.log(impressed+' impressed \n\n');
        }
        
        setTimeout(() => {
            navigate("/");
          }, 1000);

        
    }

    const goBack = async(e) =>{
        e.preventDefault();
        navigate("/")
    }

    return (
        <div className='mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
            <form onSubmit={updateCourse} className='my-10'>
                <div className='flex space-x-3 '>
                    <button className='mx-auto w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                        onClick={(e) => setPozitiv(pozitiv++)}> <img src={smile} className="mx-auto" alt="" /> </button>
                    <button className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                        onClick={(e) => setNeutru(neutru++)}> <img src={confusion} className="mx-auto" alt="" /> </button>
                </div>
                <div className='flex py-3 space-x-3'>
                    <button className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                        onClick={(e) => setNegativ(negativ++)}> <img src={frown} className="mx-auto" alt="" /> </button>
                    <button className='w-full py-3 mt-1 border border-slate-200
                    rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                        onClick={(e) => setImpressed(impressed++)}> <img src={wow} className="mx-auto" alt="" /> </button>
                </div>
                <div className='flex'>
                <button type='button' onClick={goBack} className='mx-auto w-1/2 py-3 font-bold text-white bg-red-400 hover:bg-red-500 rounded-lg border-indigo-500 hover:shadow'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ReactCourse