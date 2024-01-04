import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ReactLoading from 'react-loading';
//Componenst 
import FavPoke from './components/favpoke'

function App() {
  const [poke,setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(1);
  const [favpoke, setFavpoke] = useState([]);


  useEffect(()=>{
      let abortController = new AbortController();
      const loadPoke = async () => {
          try{
            setLoading(true);
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`,{signal: abortController.signal});
              setPoke(response.data);
              setError("");
          
          
          }catch(error){
                setError("Something went wrong.", error);
          }finally{
              setLoading(false);
          }


      }
      loadPoke();
      return () => abortController.abort();

  },[number])
     
  console.log("Pokemon ID: "+number);
  // function NextPoke(){
  //     let response1 = axios.get(`https://pokeapi.co/api/v2/pokemon/{number+1}`,{});
  //      return response1;

  // }
  const pevPoke = () => {
    setNumber((number) => number - 1);

  }
  const nextPoke = ()=> {
    setNumber((number) => number + 1);
  }
  const mar = {
    margin : "0.5rem"
    
   
};


const Addfav = () => {
  setFavpoke((oldState) => [...oldState, poke])
}

  return (

<div className='ass="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'> 
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div >
          {loading ? <ReactLoading type='spin' color='black' height={'20%'} width={'20%'}/>  :
          <>
                <h1>{poke?.name}</h1>
              
                <ul>
                {poke?.abilities?.map((abil, idx)=> (

                    <li key={idx}>{abil.ability.name}</li>
                ) )}

              </ul>
            
              <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
              
              <button className="h-8 px-4 m-2 text-sm" onClick={prevPoke} style={{margin: "0.5rem"}}>Previous</button>
              <button className="h-8 px-4 m-2 text-sm" onClick={Addfav} style={{margin: "0.5rem"}}><FaHeart /></button>
              <button className="h-8 px-4 m-2 text-sm"onClick={nextPoke}style={{margin: "0.5rem"}}>Next</button>
          </>
          }
        </div>
    <div>
            <h2 className='font-bold'>Your favourite pokemon :</h2>
            {favpoke.length > 0 ? <FavPoke favpoke={favpoke}/> : <div className='flex h-full justify-center items-center opacity-50'><p>No favourite item..</p></div>}
    </div>
    
  </div>
</div>
  )
}
export default App
