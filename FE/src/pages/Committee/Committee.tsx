import React from "react";
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";
import {GrVmMaintenance} from "react-icons/gr";
import {useTheme} from "styled-components";

export const Committee = () => {
    const theme = useTheme();

    return (
        <PageContainer>
            <InnerContainer justifyContent="center" alignItems="center">
                <H1>Coming soon...</H1>
                <GrVmMaintenance size={100} style={{color: theme.buttons.primary}}/>
            </InnerContainer>
        </PageContainer>
    )
}

export default Committee;