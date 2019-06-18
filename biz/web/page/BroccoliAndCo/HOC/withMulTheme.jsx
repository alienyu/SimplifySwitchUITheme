import React from 'react';

const WithMulTheme = (Component, customTheme) =>  {
    return (<Component currentTheme={customTheme.currentTheme} />)
}

export default WithMulTheme;