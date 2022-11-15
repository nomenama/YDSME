import {H3, H4, P1} from 'common/index.styles';
import React from 'react';
import {CalendarEvent} from "../../types";
import {LeftSection, RightSection, TileContainer, TimeSection} from "./EventTile.styles";
import {useDevice} from "../../hooks/useDevice";
import {DeleteIcon} from 'components/SideBar/SideBar.styles';
import {FiClock} from "react-icons/fi";
import useUser from "../../hooks/useUser";
import {formatDate} from "../../util/utils";

interface EventTileProps extends CalendarEvent {
    handleOnDelete: (id: number) => void;
}

const EventTile = ({id, title, content, startDate, endDate, time, handleOnDelete}: EventTileProps) => {
    const {isDesktop} = useDevice();
    const {isEditor, isAdmin} = useUser();
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    return (
        <TileContainer>
            <LeftSection>
                {(startDate === endDate)
                    ?
                    (
                        <>
                            <H3>{formattedStartDate?.day}</H3>
                            <H4>{formattedStartDate?.month}</H4>
                        </>
                    ) : (
                        <>
                            <h2>{`${formattedStartDate?.day} ${formattedStartDate?.month}`}</h2>
                            <H4>-</H4>
                            <h2>{`${formattedEndDate?.day} ${formattedEndDate?.month}`}</h2>
                        </>
                    )}
            </LeftSection>

            <RightSection>
                {(isEditor || isAdmin) && <DeleteIcon onClick={() => handleOnDelete(id)} size={isDesktop ? 30 : 25}/>}
                <H4>{title}</H4>
                <P1>{content}</P1>
                <TimeSection>
                    <FiClock size={20}/>
                    {time}
                </TimeSection>
            </RightSection>

        </TileContainer>
    );
};

export default EventTile;