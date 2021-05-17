import React, { useState } from 'react'
import Topic from './Topic'
import PlusButton from './PlusButton'

const SideBar = ({ topics, addTopic }) => {

  const [ newTopicText, setNewTopicText ] = useState('')

  const textChangeHandler = (e) => {
    setNewTopicText(e.target.value)
  }

  const clickTopAdd = () => {
    addTopic({
      text: newTopicText
    })
    setNewTopicText('')
  }


  let topicList = <ul>
    {
    topics.map(item => <Topic topic={item} />)
    }
  </ul>

  return (
    <aside className="bg-gray-800 text-purple-300 flex-none w-64 p-6 pb-6 hidden md:block">
      <div className="flex justify-between items-center mb-10">
        <input value={newTopicText} onChange={ (e) => textChangeHandler(e) }className="h-10 p-2 rounded" type="text" placeholder="Topic Name .." />  
        <PlusButton clickSelf={ clickTopAdd } />
      </div>
      <hr />
      {topicList }
    </aside>
  )
   
}

export default SideBar