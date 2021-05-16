import { useState } from 'react'
import './App.css';
import SideBar from '@/components/layout/SideBar'

function App() {

  let [ noteTopics, setNoteTopics ] = useState([
    { id: 1, text: 'my first note'},
    { id: 2, text: 'my second note'},
  ])


  const addTopicHandler = (topic) => {
    let newTopics = [...noteTopics]
    newTopics.push(topic)
    setNoteTopics(newTopics)
  }

  return (
    <div className="App flex">
      <SideBar topics={noteTopics}  addTopic={addTopicHandler} /> 
    </div>
  );
}

export default App;
