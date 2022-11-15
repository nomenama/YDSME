import React from 'react';
import {Percentage, Progress, ProgressBarContainer, Wrapper} from "./ProgressBar.styles";

interface ProgressBarProp {
    progress: number;
}

const ProgressBar = ({progress}: ProgressBarProp) => {
    return (
        <Wrapper>
            <ProgressBarContainer>
                <Progress progress={progress}>
                    <Percentage>{`${progress} %`}</Percentage>
                </Progress>
            </ProgressBarContainer>
        </Wrapper>
    );
};

export default ProgressBar;