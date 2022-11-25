import React from 'react';
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";
import {GrVmMaintenance} from "react-icons/gr"
import {useTheme} from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import {useDevice} from "../../hooks/useDevice";

const Gallery = () => {
    const theme = useTheme();
    const {deviceWidth} = useDevice();

    return (
        <PageContainer>
            <InnerContainer justifyContent="center" alignItems="center">
                {deviceWidth <= 1200 && <Announcement/>}
                <H1>Under maintenance</H1>
                <GrVmMaintenance size={100} style={{color: theme.buttons.primary}}/>
            </InnerContainer>

        </PageContainer>
    );
};

export default Gallery;