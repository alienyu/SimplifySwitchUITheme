import * as React from 'react'
import { WrapperFooterCmp } from './styled'

class Footer extends React.Component<{}, {}> {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <WrapperFooterCmp>
                <div className="content">
                    <p>Made With &hearts; in Melbourne.</p>
                    <p>&copy; 2016 Broccoli & Co. All rights reserved.</p>
                </div>
            </WrapperFooterCmp>
        )
    }
}

module.exports = Footer;