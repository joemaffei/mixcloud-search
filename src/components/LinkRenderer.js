import { shape, string } from 'prop-types';
import React from 'react';

export function LinkRenderer({ data: { /*key, url,*/ name } }) {
    return (
        // <a href={url} target="_blank" rel="noopener noreferrer">
        //     {name}
        // </a>
        <div
            onClick={() => {
                // const promise = window.Mixcloud.FooterWidget(key);
                // promise.then(function(widget) {
                //     widget.events.play();
                // });
                // window.mixcloudWidget.load(key, true);
            }}
        >
            {name}
        </div>
    );
}

LinkRenderer.propTypes = {
    data: shape({
        url: string,
        name: string,
    }),
};
