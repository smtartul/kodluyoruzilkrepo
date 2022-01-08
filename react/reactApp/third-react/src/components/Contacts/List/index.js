import {useState} from 'react'

function List({contacts}) {
    const [filterText,setFilterText]=useState("");

    //object.key objenin fullname ve phone number erişmek için
    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>  
        item[key].toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
        )
    })
    return (
        <div>
            <input placeholder='filter contact'
            value={filterText} 
            onChange={(e)=> setFilterText(e.target.value)}
            />
            <ul className='list'>
                {filtered.map((contact,index)=>
                <li key={index}>
                    <span>{contact.fullname}</span>
                    <span>{contact.phone_number}</span></li>)}
            </ul>

            <p>Total Records = ({filtered.length})</p>
        </div>
    )
}

export default List
