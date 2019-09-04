import React, { useEffect } from "react";

export function LinkRenderer({ data: { url, name } }) {
    return (
        <a href={url} target="_blank">
            {name}
        </a>
    );
}
