
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoriesActions';
import { getImages } from '../redux/actions/imagesActions';

import Categories from '../Categories/Categories';
import Images from '../Images/Images';
import { ButtonStyled } from './HomeStyled';

const Home = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categories);
    const image = useSelector(state => state.images);
    const { categories, loading: categoriesLoading } = category;
    const { images, loading: imagesLoading} = image;
    
    const [pageNumber, setPageNumber] = useState(2);
    const [limitNumber, setlimitNumber] = useState(20);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getImages());
    }, [dispatch]);

    const getNewImages = () => {
        const id = images[0]?.categories?.length ? images[0].categories[0].id : '';
        setPageNumber((prev) => prev + 1);
        setlimitNumber((prev) => prev + 10);
        dispatch(getImages(pageNumber, id, limitNumber));
    };

    return (
        <>
            <Categories categories={categories} loading={categoriesLoading} />
            <Images images={images} loading={imagesLoading} ></Images>
            <ButtonStyled onClick={getNewImages}>Load more</ButtonStyled>
        </>
    );
};

export default Home;