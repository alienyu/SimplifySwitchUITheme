import React from 'react'
import { WrapperHeaderCmp } from './styled'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WrapperHeaderCmp>
                Header
            </WrapperHeaderCmp>
        )
    }
}

module.exports = Header;