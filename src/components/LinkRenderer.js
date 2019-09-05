import { shape, string } from 'prop-types';
import React from 'react';

export function LinkRenderer({ data: { url, name } }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
        </a>
    );
}

LinkRenderer.propTypes = {
    data: shape({
        url: string,
        name: string,
    }),
};
