import {P1} from 'common/index.styles';
import React from 'react';
import {NoticeBoardContainer} from "./NoticeBoard.styles";

const NoticeBoard = () => {
    return (
        <NoticeBoardContainer>
            <P1>Notice Board</P1>
            <P1>Suggestion?</P1>
        </NoticeBoardContainer>
    );
};

export default NoticeBoard;