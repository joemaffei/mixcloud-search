import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import { object } from 'prop-types';
import React, { useContext, useRef } from 'react';
import { columnDefs } from '../columnDefs';
import { AppContext } from '../components/App';

export function Grid({ rowData }) {
    const grid = useRef();
    const dispatch = useContext(AppContext);

    function handleRowDataChanged() {
        grid.current.api.sizeColumnsToFit();
    }

    function handleRowClicked({ data: { url } }) {
        dispatch({
            type: 'SET_URL',
            payload: url,
        });
    }

    return (
        <div
            className="ag-theme-balham"
            style={{
                height: 'calc(100vh - var(--header-height) - 120px',
                width: '100%',
            }}
        >
            <AgGridReact
                ref={grid}
                columnDefs={columnDefs}
                rowData={rowData}
                onRowDataChanged={handleRowDataChanged}
                onRowClicked={handleRowClicked}
            />
        </div>
    );
}

Grid.propTypes = {
    rowData: object,
};
