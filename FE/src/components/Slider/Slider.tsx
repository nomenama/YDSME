import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./Slider.styles";

export const Slider = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
        >
            <S.Image> <S.Img src="sliders/1.jpg" alt=""/></S.Image>
            <S.Image><S.Img src="sliders/2.jpg" alt=""/></S.Image>
            <S.Image><S.Img src="sliders/3.jpg" alt=""/></S.Image>
            <S.Image><S.Img src="sliders/6.jpg" alt=""/></S.Image>
        </Carousel>
    )
}
