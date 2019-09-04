import { LinkRenderer } from "./LinkRenderer";

export const columnDefs = [
    {
        headerName: "Name",
        field: "name",
        sortable: true,
        resizable: true,
        cellRendererFramework: LinkRenderer
    },
    {
        headerName: "Played",
        field: "play_count",
        sortable: true,
        resizable: true,
        suppressSizeToFit: true
    },
    {
        headerName: "Starred",
        field: "favorite_count",
        sortable: true,
        resizable: true,
        suppressSizeToFit: true
    },
    {
        headerName: "Listeners",
        field: "listener_count",
        sortable: true,
        resizable: true,
        suppressSizeToFit: true
    }
];
