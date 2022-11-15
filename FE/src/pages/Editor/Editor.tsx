import FileUpload from 'components/FileUpload/FileUpload';
import React from 'react';
import {InnerContainer, PageContainer} from "../../common/index.styles";

const Editor = () => {
    return (
        <PageContainer>
            <InnerContainer>
                <FileUpload folderName="Minutes"/>
            </InnerContainer>

        </PageContainer>
    );
};

export default Editor;