import { useReducer, useEffect } from "react";

function showReducer(prevState, action){
    switch(action.type){
        case 'ADD' : {
            return [...prevState, action.showId]
        }
        case 'Remove':{
            return prevState.filter(showId=> showId !== action.showId)
        }
        default:
         return prevState;
    }
}

function usePersistedReducer(reducer, initialState, key){
    const [state, dispatch] = useReducer(reducer,initialState, initial=>{
        const Persisted = localStorage.getItem(key)
        return Persisted? JSON.stringify(Persisted) : initial;
    })
    useEffect(()=>{
        localStorage.setItem(JSON.parse(key,JSON.stringify(state)))
    },[state,key]);

    return [state,dispatch]
}

export function useShows(key ='shows'){
    return usePersistedReducer(showReducer, [], key)
}