import {useDevice} from "hooks/useDevice";
import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./Slider.styles";

export const Slider = () => {
    const {deviceWidth} = useDevice();

    return (
        <Carousel
            autoPlay
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
            showArrows={false}
        >
            <div><S.Img src="sliders/1.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/2.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/3.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/4.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/5.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/6.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/7.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/8.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
            <div><S.Img src="sliders/11.jpg" alt="" width={600} height={deviceWidth > 1200 ? 600 : 400}/></div>
        </Carousel>
    )
}
