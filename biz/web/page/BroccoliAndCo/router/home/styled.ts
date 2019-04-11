import styled from 'styled-components'

var WrapperHomeCmp = styled.div`
    height: 100%;
    .pageFrame {
        height: 100%;
        .main {
            width: 100%;
            min-height: 450px;
            background: #fff;
            border-radius: 6px;
            .title {
                height: 50px;
                line-height: 50px;
                background: #FAFAFA;
                font-size: 16px;
                color: #252525;
            }
            .text {
                padding-top: 20px;
                font-size: 14px;
                color: #595959;
            }
        }
        .btnLine {
            margin-top: 30px;
            font-size: 12px;
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
    }
`;

var WrapperRequestFormCmp = styled.div`

`;
export { WrapperHomeCmp, WrapperRequestFormCmp }