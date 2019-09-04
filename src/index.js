import React, { useState } from "react";
import { render } from "react-dom";
import { Grid } from "./Grid";
import { Header } from "./Header";
import "./global.scss";

const limit = 100;

function App() {
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

            while (true) {
                const response = await fetch(url);
                const { data, paging } = await response.json();
                tempData = tempData.concat(data);
                setCount(tempData.length);
                if ('next' in paging) {
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
        <div className="App">
            <Header onSubmit={handleSubmit} searching={searching} count={count} />
            <Grid rowData={rowData} />
        </div>
    );
}

render(<App />, document.getElementById('app'));
