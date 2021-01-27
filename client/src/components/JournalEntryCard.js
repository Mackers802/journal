import React, {useState} from "react"
import EditingForm from "./EditingForm.js"
import axios from "axios"

function JournalEntryCard(props) {
    const [isEditing, setIsEditing] = useState(false)

    const {
        title, 
        date, 
        journalEntry, 
        img,
        _id,
        setJournalList
    } = props

    const deleteEntry = (entryId) => {
        axios.delete(`/journal/${entryId}`)
            .then(res => setJournalList(prevEntries => prevEntries.filter(entry => entry._id !== entryId)))
            .catch(err => console.log(err))

    }
    return (
        <>
        {!isEditing?
        <div className="journalEntry">
            <img alt={img} src={img}/>
            <div className="journalProps">
                <h3>"{title}"</h3>
                <h3>Uploaded: {date}</h3>
                <h3 style={{fontWeight: 400}}><i>{journalEntry}</i></h3>
            </div>
            <button className="editbutton" onClick={()=>(setIsEditing(prevState => !prevState))}>Edit Journal Entry</button>
            <button className="deletebutton" onClick={()=>deleteEntry(_id)}>Delete</button>
        </div>
        :
        <div className="journalEntry">
            <EditingForm {...props} isEditing={isEditing} setIsEditing={setIsEditing} setJournalList={setJournalList}/>
        </div>
        }
        </>
    )
}

export default JournalEntryCard