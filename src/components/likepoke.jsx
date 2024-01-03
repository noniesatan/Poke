import React, {useState} from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'

function Likepoke() {

    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike((check) => !check)
    }

  return (
    <div>
        <button onClick={toggleLike} >
            {like ? <FaHeart style={{color: "pink"}} /> : <FaRegHeart />}
        </button>
    </div>
  )
}

export default Likepoke