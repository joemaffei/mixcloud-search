import React, { createContext, useState, useReducer } from 'react';
import { Grid } from './Grid';
import { Header } from './Header';
import ReactPlayer from 'react-player';

const limit = 100;

export const AppContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_URL':
            return {
                ...state,
                url: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    url: null,
};

export function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [rowData, setRowData] = useState();
    const [searching, setSearching] = useState();
    const [count, setCount] = useState(0);

    async function handleSubmit(e) {
        if (!searching) {
            e.preventDefault();
            setSearching(true);
            setRowData();
            const search = e.target.elements.search.value;
            let tempData = [];
            let url = `https://api.mixcloud.com/search/?limit=${limit}&q=${search}&type=cloudcast`;

            // eslint-disable-next-line no-constant-condition
            while (true) {
                const response = await fetch(url);
                const { data, paging } = await response.json();
                tempData = tempData.concat(data);
                setCount(tempData.length);
                if (paging && paging.next) {
                    url = paging.next;
                } else {
                    setRowData(tempData);
                    setSearching(false);
                    break;
                }
            }
        }
    }

    return (
        <AppContext.Provider value={dispatch}>
            <Header onSubmit={handleSubmit} searching={searching} count={count} />
            <Grid rowData={rowData} />
            <ReactPlayer url={state.url} width="100%" height="120px" playing />
        </AppContext.Provider>
    );
}
