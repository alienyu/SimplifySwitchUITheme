import * as React from 'react'
import { WrapperHeaderCmp } from './styled'

export default class Header extends React.Component<{}, {}> {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <WrapperHeaderCmp>
                B & C
            </WrapperHeaderCmp>
        )
    }
}