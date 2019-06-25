import styled from 'styled-components'
declare const getMulThemeProps: any;
const customizeStyleCmpList: string[] = ['textColor'];
const cmpNS: string = 'Layout.Header';

var { textColor } = getMulThemeProps({ customizeStyleCmpList, cmpNS });

var WrapperHeaderCmp = styled.div`
    color: ${textColor};
    font-size: 18px;
`;

var WrapperFooterCmp = styled.div`
    font-style: italic;
    font-size: 16px;
    .content {
        text-align: center;
        p {margin: 0;}
    }
`;

export { WrapperHeaderCmp, WrapperFooterCmp }