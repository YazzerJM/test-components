import { useEffect, useState } from "react";
import styled from 'styled-components';
const CarouselImg = styled.img`
    max-width: 500px;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: 1s;
    &.loaded {
        opacity: 1;
    };
`;

const CarouselButtonContainer = styled.div`
    display: flex;
    align-conetent: center;
    flex-direction: row;
    maring-top: 15px;
`;

const CarouselButton = styled.button`
    color: white;
    background-color: #eb118a;
    padding: 8px;
    margin: 0 5px;
`;

export const Carousel = () => {


    const images = ['carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (true) {
            const interval = setInterval( () => {
                selectNewImage(selectedIndex, images );
            }, 1000);
            return () => clearInterval(interval);
        }
    })


    const selectNewImage = (index, images, next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectNewImage(selectedIndex, images);
    }

    return (
        <>
            <CarouselImg src={`src/assets/img/${selectedImage}`} alt="carousel" className="loaded" />
            <CarouselButtonContainer>
                <CarouselButton onClick={previous}>{'<'}</CarouselButton>
                <CarouselButton onClick={next}>{'>'}</CarouselButton>
            </CarouselButtonContainer>
        </>
    )
}
