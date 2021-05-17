import React  from 'react'
import PlusButton from './PlusButton'

const TopicItem = ({ topic: { text, id }}) => {
    return (
    <li key={id} className="flex justify-between items-center pt-4 cursor-pointer">
      {text}
      <PlusButton  />
    </li>
    )

}

export default TopicItem