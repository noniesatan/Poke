import React from 'react'
import Likepoke from './likepoke'



function Favpoke({favpoke}) {

        

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        
        {favpoke?.map((data, idx) => (
                <div key={idx}>
                    <h3>{data.name}</h3>
                    <img src={data?.sprites?.other?.home?.front_default}  alt="" />
                    <Likepoke />
                </div>

        ))}

    </div>
  )
}

export default Favpoke