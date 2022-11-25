import React, {useEffect, useState} from 'react';
import {H1, H3, InnerContainer, PageContainer, Spinner} from "../../common/index.styles";
import {deleteEvent, getEvents} from "../../api/api";
import {useDevice} from "../../hooks/useDevice";
import {Column, EventContainer} from './Events.styles';
import {CalendarEvent} from "../../types";
import EventTile from "../../components/EventTile/EventTile";
import {ToastError, ToastSuccess} from "../../common/Toast";
import {PrimaryButton} from 'components/Header/Header.styles';
import useUser from "../../hooks/useUser";
import FormModal from "../../components/FormModal/FormModal";

const Events = () => {
    const {isDesktop} = useDevice();
    const {isEditor, isAdmin} = useUser();
    const getYear = new Date().getFullYear();
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [newEvent, setNewEvent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let publicEvents: CalendarEvent[] = [];
    let memberEvents: CalendarEvent[] = [];

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const asyncProcess = async () => {
            try {
                setIsLoading(true);
                const {status, data} = await getEvents(signal);
                if (status >= 200 && status <= 300) {
                    setEvents(data);
                    setIsLoading(false);
                }
            } catch (err: any) {
                console.log(err?.message);
                setIsLoading(false);
            }
        };

        void asyncProcess();

        return () => controller.abort();
    }, []);

    if (events.length) {
        publicEvents = events.filter(({audience}) => audience === "public");
        memberEvents = events.filter(({audience}) => audience === "member");
    }

    const handleOnDelete = async (id: number) => {
        if (!id) return;

        try {
            const {status, data} = await deleteEvent(id);

            if (status >= 200 && status < 300) {
                setEvents(data);
                ToastSuccess("Event deleted");
            }
        } catch (err: any) {
            ToastError(err?.message);
        }
    }

    return (
        <PageContainer>
            {isLoading && (
                <InnerContainer justifyContent="center" alignItems="center">
                    <Spinner size={isDesktop ? 60 : 40}/>
                </InnerContainer>
            )}

            {!isLoading && Boolean(events?.length) && (
                <InnerContainer>
                    <H1>Upcoming events {getYear}</H1>
                    {(isEditor || isAdmin) && <PrimaryButton onClick={() => setNewEvent((prevState) => !prevState)}>Create New Event</PrimaryButton>}

                    <EventContainer column={Boolean(publicEvents.length) && Boolean(memberEvents.length)}>
                        {Boolean(publicEvents.length) && (
                            <Column>
                                <H3>Public Events</H3>
                                {publicEvents.map(({id, title, content, startDate, endDate, time}) => (
                                    <EventTile
                                        key={id}
                                        id={id}
                                        title={title}
                                        content={content}
                                        startDate={startDate}
                                        endDate={endDate}
                                        time={time}
                                        handleOnDelete={handleOnDelete}
                                    />
                                ))}
                            </Column>
                        )}

                        {Boolean(memberEvents.length) && (
                            <Column>
                                <H3>Member only Events</H3>
                                {memberEvents.map(({id, title, content, startDate, endDate, time}) => (
                                    <EventTile
                                        key={id}
                                        id={id}
                                        title={title}
                                        content={content}
                                        startDate={startDate}
                                        endDate={endDate}
                                        time={time}
                                        handleOnDelete={handleOnDelete}
                                    />
                                ))}
                            </Column>
                        )}


                    </EventContainer>
                </InnerContainer>
            )}

            {!isLoading && !Boolean(events?.length) && (
                <InnerContainer justifyContent="center" alignItems="center">
                    <H1>No events</H1>
                    {(isEditor || isAdmin) && <PrimaryButton onClick={() => setNewEvent((prevState) => !prevState)}>Create New Event</PrimaryButton>}
                </InnerContainer>
            )}
            {newEvent && <FormModal setNewEvent={setNewEvent} setEvents={setEvents} onClose={() => setNewEvent(false)}/>}
        </PageContainer>
    );
};

export default Events;