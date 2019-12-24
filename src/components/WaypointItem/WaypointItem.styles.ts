import styled from 'styled-components';

export const SWaypointItem = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 0;
`;

export const SDragIcon = styled.span`
    cursor: pointer;

    svg {
        fill: #737373;
        width: 15px;
        height: 15px;
    }
`;

export const SRemove = styled.span`
    cursor: pointer;

    svg {
        fill: #737373;
        width: 15px;
        height: 15px;
    }
`;

export const SWaypointTitle = styled.span`
    flex: 1;
    margin-left: 5px;
`;

export const SDropZone = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;

    &.visible {
        display: block;
    }

    &.active {
        border-top: 2px solid ${props => props.theme.white};
    }
`;