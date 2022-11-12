import React from "react";
import {Flex, H1, H2, InnerContainer, Link, P1, PageContainer} from "../../common/index.styles";
import {useDevice} from "../../hooks/useDevice";

export const HireUs = () => {
    const {isDesktop} = useDevice();

    return (
        <PageContainer>
            <InnerContainer >
                <H1>York City & District Society of Model Engineers</H1>
                <H2>Hire Us</H2>
                <Flex>
                <img src="hired1.jpg" alt="york model engineers" width={isDesktop ? 1000 : "100%"} height={isDesktop ? 600 : "100%"} loading="lazy"/>
                </Flex>
                <P1 textAlign="center">Please contact our <Link href="mailto: secretary.yorkmodelengineers.co.uk">Secretary</Link> if you would like to book our event team for your next event or discuss requirements and costs.</P1>
            </InnerContainer>
        </PageContainer>
    )
}

export default HireUs;