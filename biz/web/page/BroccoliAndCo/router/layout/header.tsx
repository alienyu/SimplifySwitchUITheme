import * as React from 'react'
import { WrapperHeaderCmp } from './styled'

class Header extends React.Component<{}, {}> {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <WrapperHeaderCmp>
                BROCCOLI & CO.
            </WrapperHeaderCmp>
        )
    }
}

module.exports = Header;