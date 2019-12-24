import styled from 'styled-components';

export const SSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
    padding: 15px;
`;