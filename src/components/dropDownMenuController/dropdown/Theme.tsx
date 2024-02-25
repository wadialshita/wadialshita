import styled from 'styled-components';
export const TriggerBox = styled.button<any>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background: ${(props) => (props.disabled ? '#DBE4EF' : 'rgba(255, 255, 255, 0.05)')};
    cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};
    width: 100%;
    height: 100%;
`;
