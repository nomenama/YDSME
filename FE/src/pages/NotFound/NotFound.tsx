import {H1, InnerContainer, PageContainer} from 'common/index.styles';
import React from 'react';

const NotFound = () => {
    return (
        <PageContainer>
            <InnerContainer justifyContent="center" alignItems="center">
                <H1>404 Not Found</H1>
            </InnerContainer>
        </PageContainer>
    );
};

export default NotFound;