import styled from 'styled-components';

const GridStyles = {};

GridStyles.Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 0px;
    align-items: center;
`;

GridStyles.TimeTitle = styled.h4`
    position: relative;
    left: 0;
    text-align: left;
    padding-right: 12px;
    line-height: 0;
    font-size: calc(12px + 0.4vw);
    color: rgba(0, 0, 0, 0.4);
`;

export default GridStyles;
