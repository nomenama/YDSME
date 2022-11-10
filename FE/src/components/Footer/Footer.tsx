import {P1} from "common/index.styles";
import React from "react";
import * as S from "./Footer.styles"

const Footer = () => {
    const getYear = new Date().getFullYear();

    return (
        <S.Container className="footer-dark bg-dark text-white text-center">
            <P1>
                <S.SafetyLink href="docs/Visitor-Safety-Guide.pdf"
                              target="_blank">
                    Health and Safety Information
                </S.SafetyLink>
            </P1>
            <S.FooterText>All Rights Reserved - &copy; YDSME {getYear}</S.FooterText>

        </S.Container>
    )
}

export default Footer;