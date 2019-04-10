import React from 'react'
import { WrapperFooterCmp } from './styled'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WrapperFooterCmp>
                Footer
            </WrapperFooterCmp>
        )
    }
}

module.exports = Footer;