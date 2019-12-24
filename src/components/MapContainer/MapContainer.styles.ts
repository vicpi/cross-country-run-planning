import styled, { createGlobalStyle } from 'styled-components';

export const SMapContainer = styled.div`
    flex: 7;
`;

export const SMapContainerGlobalStyle = createGlobalStyle`
    .leaflet-container {
        height: 100%;
    }
`;