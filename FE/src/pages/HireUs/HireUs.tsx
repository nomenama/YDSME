import React from "react";
import {Flex, H1, H2, Image, InnerContainer, Link, P1, PageContainer} from "../../common/index.styles";
import {useDevice} from "../../hooks/useDevice";
import Announcement from "../../components/Announcement/Announcement";

export const HireUs = () => {
    const {deviceWidth} = useDevice();

    return (
        <PageContainer>
            <InnerContainer>
                {deviceWidth <= 1200 && <Announcement/>}
                <H1>York City & District Society of Model Engineers Limited</H1>
                <H2>Hire Us</H2>
                <Flex>
                    <Image src="hired1.jpg" alt="york model engineers" height={500} loading="lazy"/>
                </Flex>
                <P1 textAlign="center">Please contact our <Link
                    href="mailto:secretary@yorkmodelengineers.co.uk">Secretary</Link> if you would like to book our
                    event team for your next event or discuss requirements and costs.</P1>
            </InnerContainer>
        </PageContainer>
    )
}

export default HireUs;