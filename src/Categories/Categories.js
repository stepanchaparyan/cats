
import React from 'react';

import PropTypes from 'prop-types';
import { Container, Title, Wrapper, CategoriesList } from './CategoriesStyled';
import Category from '../Categories/Category/Category';

const Categories = ({ categories, loading }) => (
    <Container>
        {loading ? (
            <div>loading ...</div>
        ) : (
            <Wrapper>
                <Title>Select Categories</Title>
                <CategoriesList>
                    {categories?.map(item => (
                        <Category key={item.id} category={item.name} id={item.id}></Category>
                    ))}
                </CategoriesList>
            </Wrapper>
        )}
    </Container>

);

Categories.propTypes = {
    categories: PropTypes.array,
    loading: PropTypes.bool,
};

Categories.defaultProps = {
    categories: [],
    loading: false,
};

export default Categories;