import styled, { createGlobalStyle } from 'styled-components'

var WrapperHomeCmp = styled.div`
    height: 100%;
    .pageFrame {
        height: 100%;
        text-align: center;
        .title {
            font-size: 40px;
            font-weight: bold;
            word-spacing: 20px;
        }
        .text {
            font-size: 16px;
            margin: 20px 0;
            word-spacing: 5px;
        }
        a {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            background: #1890ff;
            color: #fff;
            font-size: 14px;
            border-radius: 5px;
            text-align: center;
            padding: 0 25px;
        }
    }
`;

var WrapperRequestFormCmp = styled.div`
    .requestBtn {
        width: 100%;
        margin-top: 10px;
    }
    .errorMsg {
        text-align: center;
        color: red;
        margin-top: -15px;
    }
`;

export { WrapperHomeCmp, WrapperRequestFormCmp }