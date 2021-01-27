import React, {useState} from "react"
import axios from "axios"
function EditingForm(props) {

    const initInputs = {
        title: props.title,
        date: props.date,
        journalEntry: props.journalEntry,
        img: props.img

    }
    const [inputs, setInputs] = useState(initInputs)
    const {title, date, journalEntry, img} = inputs
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const submitEdits = (entryId) => {
        axios.put(`/journal/${entryId}`, inputs)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={()=>submitEdits(props._id, inputs)}>
        <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
         />
         <input 
            type="text"
            name="date"
            value={date}
            onChange={handleChange}
            placeholder="Date"
         />
         <input 
            type="text"
            name="journalEntry"
            value={journalEntry}
            onChange={handleChange}
            placeholder="Text"
         />
         <input 
            type="text"
            name="img"
            value={img}
            onChange={handleChange}
            placeholder="Image Url"
         />
        <button>Submit</button>
        <button onClick={()=>{props.setIsEditing(prevState => !prevState)}}>Cancel</button>
        </form>
    )
}

export default EditingForm