import {H1, H3, InnerContainer, PageContainer} from 'common/index.styles';
import {PrimaryButton} from 'components/Header/Header.styles';
import React from 'react';
import {useNavigate} from "react-router-dom";

const Unauthorised = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <PageContainer>
            <InnerContainer justifyContent="center" alignItems="center">
                <H1>Unauthorised</H1>
                <H3>You do not have permission to the requested page.</H3>
                <H3>Contact Administrator if you need access.</H3>
                <PrimaryButton onClick={goBack}>Go Back</PrimaryButton>
            </InnerContainer>
        </PageContainer>
    );
};

export default Unauthorised;