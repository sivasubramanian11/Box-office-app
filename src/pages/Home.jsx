import React, { useState } from 'react'
import MainPagelayout from '../components/MainPagelayout'
import { getApi } from '../misc/APIconfig';
 import ShowGrid from '../components/show/showGrid'
 import ActorGrid  from '../components/Actor/actorGrid';

const Home = () => {
    const [inputs, setInputs] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isSearchShow = searchOption === 'shows';


    // To search the result from Api.
    const onSearch = () => {

        getApi(`/search/${searchOption}?q=${inputs}`)
            .then(result => {
                setResults(result)
            });

    }
    // To call onSearch when user clicks enter.
    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    }
    //To update the last typed text in the text box.
    const onInputChange = (ev) => {
        setInputs(ev.target.value);
    }

    // To update the selected radio button 
    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value);
    }
    //To conditionally render the output from the API

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results found</div>
        }

        if (results && results.length > 0) {
            return results[0].show ? (
                   <ShowGrid data={results} />
                ) : (
                    <ActorGrid data={results} />
                )
        }
        return null;
    }

    return (
        <MainPagelayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={inputs} />

            <div>
                <label htmlFor='onSearch-Shows'>
                    Shows
                    <input type="radio"
                        id="onSearch-Shows"
                        value="shows"
                        onChange={onRadioChange}
                        checked={isSearchShow}
                    />
                </label>

                <label htmlFor='onSearch-Actors'>
                    Actors
                    <input type="radio"
                        id="onSearch-Actors"
                        value="people"
                        onChange={onRadioChange}
                        checked={!isSearchShow}
                    />
                </label>
            </div>

            <button type="button" onClick={onSearch} >Search</button>

            {renderResults()}
        </MainPagelayout>
    )
}

export default Home


