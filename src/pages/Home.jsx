import React, {useState}  from 'react'
import MainPagelayout from '../components/MainPagelayout'
import { getApi } from '../misc/APIconfig';

const Home = () => {
    const [inputs,setInputs] = useState('');
    const [results, setResults] =useState(null);
// To search the result from Api and console.
    const onSearch =()=>{
        
    getApi(`/search/shows?q=${inputs}`)
     .then(result=>{
        setResults(result)
     });
    }
// To call onSearch when user clicks enter.
    const onKeyDown=(ev)=>{
        if(ev.keyCode === 13){
            onSearch();
        }
    }
//To update the last typed text in the text box.
    const onInputChange=(ev)=>{
      setInputs(ev.target.value);
    }

//To conditionally render the output from the API

const renderResults=()=>{
    if(results && results.length === 0){
        return <div>No results found</div>
    }

    if(results && results.length>1){
        return <div>
            {results.map((item)=>(
             <div key={item.show.id}>
                {item.show.name}
            </div>
        ))}</div>
    }
}

  return (
    <MainPagelayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={inputs} />
        <button type="button"  onClick={onSearch} >Search</button>
       {renderResults()}
    </MainPagelayout>
  )
}

export default Home