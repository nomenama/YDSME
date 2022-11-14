import FileUpload from 'components/FileUpload/FileUpload';
import React from 'react';
import {InnerContainer, PageContainer} from "../../common/index.styles";

const Editor = () => {
    return (
        <PageContainer>
            <InnerContainer>
                <FileUpload/>
            </InnerContainer>

        </PageContainer>
    );
};

export default Editor;