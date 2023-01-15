import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, {useSWRConfig} from 'swr';
import smile from './Grinning face with big eyes.png';
import frown from './Frowning face.png';
import confusion from './Face with monocle.png';
import wow from './Astonished face.png';

const CourseList = () => {
    const {mutate} = useSWRConfig();
    const fetcher = async () => {
        const response = await axios.get('http://localhost:5000/courses');
        return response.data;
    };

    const { data } = useSWR('courses', fetcher);

    if (!data) return <h2> Loading...</h2>;

    const deleteCourse = async(courseId) => {
        await axios.delete(`http://localhost:5000/courses/${courseId}`);
        mutate('courses');
    };


    return (
        <div className='flex flex-col mt-5'>
            <div className="w-full">
                <Link to='/add' className='bg-green-500 hover:bg-green-700 border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Add Course</Link>
                <div className="relative shadow rounded-lg mt-3">
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                            <tr>
                                <th className='py-3 px-1 text-center'>No</th>
                                <th className='py-3 px-6'>Course Name</th>
                                <th className='py-3 px-6'>Description</th>
                                <th className='py-3 px-6'>Date added</th>
                                <th className='py-3 px-6'>Date limit</th>
                                <th className='py-3 px-6'> <img src={smile} className="mx-auto w-1/4" alt="" /> </th>
                                <th className='py-3 px-6'><img src={frown} className="mx-auto w-1/4" alt="" /></th>
                                <th className='py-3 px-6'><img src={confusion} className="mx-auto w-1/4" alt="" /></th>
                                <th className='py-3 px-6'><img src={wow} className="mx-auto w-1/4" alt="" /></th>
                                <th className='py-3 px-1 text-center'>Options</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((course, index) => (
                                <tr className='bg-white border-b' key={course.courseId}>
                                    <td className='py-3 px-1 text-center'>{index+1}</td>
                                    <td className='py-3 px-6 font-medium text-gray-900'>{course.name}</td>
                                    <td className='py-3 px-6'>{course.desc}</td>
                                    <td className='py-3 px-6'>{course.startDate}</td>
                                    <td className='py-3 px-6'>{course.durata + " ore" }</td>
                                    <td className='py-3 px-6 text-center'>{course.pozitiv}</td>
                                    <td className='py-3 px-6 text-center'>{course.neutru}</td>
                                    <td className='py-3 px-6 text-center'>{course.negativ}</td>
                                    <td className='py-3 px-6 text-center'>{course.impressed}</td>
                                    <td className='py-3 px-1 text-center'>
                                        <Link to={`/edit/${course.courseId}`} className='font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1'>Edit</Link>
                                        
                                        <Link to={`/react/${course.courseId}`} className='font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1'>React</Link>
                                    </td>
                                    <td>
                                    <button onClick={()=>deleteCourse(course.courseId)} className='font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white mr-1'>Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default CourseList