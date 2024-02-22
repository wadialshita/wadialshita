import styled from 'styled-components';

export const Main = styled.main`
    @import '/theme/breakpoints.scss';
    @import '/theme/palette.scss';

    display: flex;
    /* flex-direction: column; */

    min-height: 100vh;

    width: 100%;
    height: 100%;
    max-height: 100dvh;

    background-color: #fcfcfc;
`;

export const Body = styled.div`
    @import '/theme/breakpoints.scss';
    @import '/theme/palette.scss';
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
`;

export const Content = styled('div')`
    z-index: 1;
    width: 80%;
    height: 100%;
    flex-grow: 1;
    margin: 0 auto;
    overflow: auto;
    overflow-x: hidden !important;
    padding: 32px;
`;
