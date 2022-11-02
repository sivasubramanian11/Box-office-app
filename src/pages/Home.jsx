import React, {useState}  from 'react'
import MainPagelayout from '../components/MainPagelayout'

const Home = () => {
    const [inputs,setInputs] = useState('');
// To search the result from Api and console.
    const onSearch =()=>{
     fetch(`https://api.tvmaze.com/search/shows?q=${inputs}`)
     .then(r=>r.json())
     .then(result=>{
        console.log(result);
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

  return (
    <MainPagelayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={inputs} />
        <button type="button"  onClick={onSearch} >Search</button>
    </MainPagelayout>
  )
}

export default Home