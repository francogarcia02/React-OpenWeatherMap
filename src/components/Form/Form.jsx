import './Form.css';
import { useState } from 'react';

const Form = ({newLocation})=>{
    const [city, setCity] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(city)
        if(city==='' || !city) return

        newLocation(city)
    }

    return(
        <div className="container bg-">
            <form onSubmit={onSubmit}>
                <div className='input-group mx-auto'>
                    <input className='form-control' type='text' placeholder='Ciudad' onChange={(e) => setCity(e.target.value)}/>
                    <button className='btn btn-primary'>Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default Form