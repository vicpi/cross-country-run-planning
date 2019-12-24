import styled from 'styled-components';

export const SListDiv = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    flex: 1;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const SFreeDropZoneDiv = styled.div`
    flex: 1;

    &.active {
        border-top: 2px solid ${props => props.theme.white};
    }
`;