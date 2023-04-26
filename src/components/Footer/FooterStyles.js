import styled from 'styled-components';

const FooterStyles = {};

FooterStyles.FooterContainer = styled.footer`
    position: sticky;
    bottom: 0;
    width: 100%;
    max-width: 740px;
    margin: 0 auto;
    background-color: #f6f6f6;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

FooterStyles.FooterContentContainer = styled.div`
    display: flex;
    padding: 20px;
    line-height: 0px;
    justify-content: space-between;
    align-items: center;
`;

FooterStyles.Title = styled.h3`
    color: #ff3131;
`;

FooterStyles.Action = styled.h3`
    color: #ff3131;
    cursor: pointer;
`;

export default FooterStyles;
