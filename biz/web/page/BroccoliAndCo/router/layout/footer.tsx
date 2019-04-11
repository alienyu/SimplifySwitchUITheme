import * as React from 'react'
import { WrapperFooterCmp } from './styled'

export default class Footer extends React.Component<{}, {}> {
    constructor(props: object) {
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