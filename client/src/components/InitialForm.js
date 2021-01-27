import React, {useState} from "react"
import axios from "axios"

function InitialForm(props) {
    const initInputs = {
        title: "",
        date: "",
        journalEntry: "",
        img: ""

    }
    const [inputs, setInputs] = useState(initInputs)
    const {title, date, journalEntry, img} = inputs
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    const addEntry = (e) => {
        e.preventDefault()
        axios.post("/journal/", inputs)
            .then(res => props.setJournalList(prevEntries => [...prevEntries, res.data]))
            .catch(err => console.log(err))
        setInputs(initInputs)

    }

    return (
        <form onSubmit={addEntry}>
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
                placeholder="Date (MM/DD/YYYY)"
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
        </form>
    )
}

export default InitialForm