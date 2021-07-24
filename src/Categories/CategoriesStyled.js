import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: gray;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 16px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoriesList = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        margin: 8px 0 6px;
    }
`;
