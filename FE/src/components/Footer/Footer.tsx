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
            <P1>All Rights Reserved - &copy; YDSME {getYear}</P1>

        </S.Container>
    )
}

export default Footer;