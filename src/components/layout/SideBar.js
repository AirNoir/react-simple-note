import React, { useState } from 'react'

const PlusButton = ({ clickSelf }) => {


  return (<div onClick={clickSelf} className="cursor-pointer">
            <svg class="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
          </div>)

}


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
    topics.map(item => <li className="flex justify-between items-center pt-4 cursor-pointer">
      {item.text}
      <PlusButton  />
    </li>)
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