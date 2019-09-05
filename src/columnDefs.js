import { LinkRenderer } from './components/LinkRenderer';

export const columnDefs = [
    {
        headerName: 'Name',
        field: 'name',
        sortable: true,
        resizable: true,
        cellRendererFramework: LinkRenderer,
    },
    {
        headerName: 'Date',
        field: 'created_time',
        sortable: true,
        resizable: true,
        suppressSizeToFit: true,
    },
    {
        headerName: 'Length',
        field: 'audio_length',
        sortable: true,
        resizable: true,
        suppressSizeToFit: true,
    },
    {
        headerName: 'Played',
        field: 'play_count',
        sortable: true,
        resizable: true,
        suppressSizeToFit: true,
    },
    {
        headerName: 'Starred',
        field: 'favorite_count',
        sortable: true,
        resizable: true,
        suppressSizeToFit: true,
    },
    {
        headerName: 'Listeners',
        field: 'listener_count',
        sortable: true,
        resizable: true,
        suppressSizeToFit: true,
    },
];
