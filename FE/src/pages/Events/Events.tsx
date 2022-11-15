import React from 'react';
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";

const Events = () => {
    const getYear = new Date().getFullYear();

    return (
        <PageContainer>
            <InnerContainer>
                <H1>Upcoming events {getYear}</H1>
            </InnerContainer>

        </PageContainer>
    );
};

export default Events;