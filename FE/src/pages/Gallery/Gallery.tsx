import React from 'react';
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";
import {GrVmMaintenance} from "react-icons/gr"
import {useTheme} from "styled-components";

const Gallery = () => {
    const theme = useTheme();

    return (
        <PageContainer>
            <InnerContainer justifyContent="center" alignItems="center">
                <H1>Under maintenance</H1>
                <GrVmMaintenance size={100} style={{color: theme.buttons.primary}}/>
            </InnerContainer>

        </PageContainer>
    );
};

export default Gallery;