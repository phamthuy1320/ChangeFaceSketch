import React from 'react';
const HEADER = {
    background:'#9f4347',
    text:'#fff'
};
const BOTTOMBAR = {
    background:HEADER.background,
    // background:'#f5b994',
    text:'#3e3e3a'
};

const BGCOLOR = '#f1c3aa';

const ANNOUNCE = {
    info:'#c3ff96',
    text:'#8F9A07',
    warn:'',
}

const BUTTON = {
    inMain:{
        camera:{
            // bg:'#342c3f',
            // text:'#f2f2f2'
            bg:'#fff',
            text:'#9f4347'
        },
        library:{
            // bg:'#f1c3aa',
            // text:'#312823'
            bg:'#fff',
            text:'#9f4347'
        }
    },
    inBottomBar:{
        bg:'#fff',
        text:'#fff'
    }
}
export {BOTTOMBAR, HEADER, BGCOLOR, ANNOUNCE, BUTTON};