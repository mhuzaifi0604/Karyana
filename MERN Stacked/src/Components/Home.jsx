import axios from 'axios';
import { useState } from 'react';

function Home() {
    const [data, setdata] = useState([]);
    const [formdata, setformdata] = useState({
        type: '',
        price: 0,
        name: ''
    });
    const getmongo = async () => {
        try {
            const response = await axios.get('http://localhost:6969/data');
            console.log(response);
            setdata(response.data);
        } catch (error) {
            console.error('Something Went Wrong!', error);
        }
    };

    const postdoc = async (event) => {
        event.preventDefault();
        try {
            const data = {
                type: formdata.type,
                price: formdata.price,
                name: formdata.name
            }
            const response = await axios.post('http://localhost:6969/insert', { data: data });
            console.log(response);
        } catch (error) {
            console.error('Something went wrong!', error);
        }
    };

    return (
        <>
            <div className='flex flex-col h-screen w-screen items-center justify-center bg-[#1a1a1a]'>
                <div className='flex w-full'>
                    <h1 className="w-full font-bold mb-4 text-white font-serif text-3xl text-center">
                        Welcome
                    </h1></div>
                <button onClick={getmongo}>
                    Compass
                </button>
                <ul>
                    {data.map((value, index) => (
                        <li key={index}>Type: {value.type} | Name: {value.name} | Price: {value.price}</li>
                    ))}
                </ul>
                <form onSubmit={postdoc}>
                    <input
                        type='text'
                        placeholder='Type'
                        value={formdata.type}
                        onChange={(e) => setformdata({ ...formdata, type: e.target.value })}
                    />
                    <input
                        type='number'
                        placeholder='Price'
                        value={formdata.price}
                        onChange={(e) => setformdata({ ...formdata, price: e.target.value })} />
                    <input
                        type='text'
                        placeholder='Name'
                        value={formdata.name}
                        onChange={(e) => setformdata({ ...formdata, name: e.target.value })} />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}
export default Home;