import React, {useState, useEffect} from "react"
import axios from "axios"
// import logo from './logo.svg';
import './App.css';
import InitialForm from "./components/InitialForm.js"
import JournalEntryCard from "./components/JournalEntryCard.js"
function App() {
  const [journalList, setJournalList] = useState([])
    
  function getEntries() {
      axios.get("/journal/")
          .then(res => 
              setJournalList(res.data)
          )
          .catch(err => console.log(err))
  }

  useEffect(getEntries, [])

  return (
    <div className="App">
          <h1>My Journal App</h1>
          <InitialForm getEntries={getEntries} setJournalList={setJournalList}/>
          <div className="mappedEntries">
            {journalList.map(journal => <JournalEntryCard {...journal} key={journal._id} journalList={journalList} setJournalList={setJournalList}/>)}
          </div>
    </div>
  )
}

export default App;
