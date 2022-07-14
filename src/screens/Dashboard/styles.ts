import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;   
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.title};
`;