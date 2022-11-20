import {Slider} from 'components/Slider/Slider';
import React from 'react';
import * as S from "../../common/index.styles";
import {Content, Divider} from './Main.styles';
import {useDevice} from "../../hooks/useDevice";
import {SideBar} from "../../components/SideBar/SideBar";

const MainPage = () => {
    const {isDesktop} = useDevice();

    return (
        <S.PageContainer>
            <S.InnerContainer>
                <Divider>
                    <Content width={isDesktop ? "80%" : "100%"}>
                        <S.H1>York City & District Society of Model Engineers Test</S.H1>
                        <Slider/>
                        <S.H2>About Us</S.H2>
                        <S.P1>Situated on the outskirts of York, at Dringhouses,
                            York Model Engineers have nearly 5 acres of land with
                            three different miniature railways + Traction Engine Track + RC Crawler Track.
                            The rails are all steel correctly profiled.
                            It is landscaped in woodland grounds alongside the East Coast Main Line. A hidden gem.
                        </S.P1>

                        <S.P1>
                            Our membership comprises model engineers from many disciplines and with many interests, including:
                        </S.P1>
                        <S.UL>
                            <S.LI>Locomotives - from 2.5" to 7.25" gauge</S.LI>
                            <S.LI>Stationary Engines</S.LI>
                            <S.LI>Traction Engines</S.LI>
                            <S.LI>Garden Railways 16mm Scale- Gauge 1 Track under construction.</S.LI>
                            <S.LI>Decorative Woodworking</S.LI>
                            <S.LI>Clocks and Mechanisms</S.LI>
                            <S.LI>Kit Building and 3D Printed Parts</S.LI>
                        </S.UL>

                        <S.P1>
                            <S.Link href={"mailto: secretary@yorkmodelengineers.co.uk"}>Contact us </S.Link>
                            for more details.
                        </S.P1>

                        <S.H2>Our Location</S.H2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.50520774197!2d-1.1069556883342238!3d53.940533814485654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487930e745d88c4d%3A0x9c9fca719171c174!2sYork%20City%20and%20District%20Society%20of%20Model%20Engineers%20Ltd!5e0!3m2!1sen!2suk!4v1633955435800!5m2!1sen!2suk"
                                width="100%"
                                height="600"
                                allowFullScreen={true}
                                loading="lazy"
                                title="google map"
                        />

                        <S.H2 color="grey">Twinned With</S.H2>
                        <S.H2>
                            <a href="https://www.hme.org.au/" target="_blank" rel="noreferrer">
                                <img src="hornsby.jpg" width="150" height="150" alt="Hornsby Logo"/>
                            </a>
                        </S.H2>
                        <S.H2 color="grey">N.S.W. Australia</S.H2>
                    </Content>
                    {isDesktop && (
                        <Content width="20%">
                            <SideBar/>
                        </Content>
                    )}
                </Divider>
            </S.InnerContainer>
        </S.PageContainer>
    )
}

export default MainPage;
