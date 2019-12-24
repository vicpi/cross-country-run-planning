import styled from 'styled-components';

export const StyledButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    background-color: ${props => props.theme.green};
    color: ${props => props.theme.black};
    border-radius: 5px;
    font-weight: 700;
    user-select: none;
    cursor: pointer;
`;