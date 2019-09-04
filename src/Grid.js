import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { object } from "prop-types";
import React, { useRef } from "react";
import { columnDefs } from "./columnDefs";

export function Grid({ rowData }) {
  const grid = useRef();

  function handleRowDataChanged() {
    grid.current.api.sizeColumnsToFit();
  }

  return (
    <div className="ag-theme-balham" style={{ height: "100vh", width: "100%" }}>
      <AgGridReact
        ref={grid}
        columnDefs={columnDefs}
        rowData={rowData}
        onRowDataChanged={handleRowDataChanged}
      />
    </div>
  );
}

Grid.propTypes = {
  rowData: object
};
