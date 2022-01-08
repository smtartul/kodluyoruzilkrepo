import {useState,useEffect} from 'react'

const initialFormValues={fullname:'',phone_number:''}
function Form({addContact,contacts}) {
    const [form,setForm]=useState(initialFormValues)

    useEffect(()=>{
        setForm(initialFormValues);
    },[contacts])
    
    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const onSubmit=(e)=>{
        e.preventDefault();
         if (form.fullname === '' || form.phone_number==='') {
             return false
         }
         addContact([...contacts,form])
        
        // setForm(initialFormValues) böyle de kalabilir
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
            <input name='fullname' 
            onChange={onChangeInput}
            placeholder='full name'
            value={form.fullname}/>
            </div>

            <div>
            <input name='phone_number' 
            onChange={onChangeInput}
            placeholder='phone number'
            value={form.phone_number}/>
            </div>
            <div className='btn'>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
