import {H3, Spinner} from 'common/index.styles';
import {Overlay} from 'components/Drawer/Drawer.styles';
import {ButtonGroup, Input, Label} from 'pages/Admin/Admin.styles';
import {SecondaryButton} from 'pages/Login/Login.styles';
import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import ReactDOM from "react-dom";
import {EventForm, FormModalContainer, SelectDropDown, SelectOption} from "./FormModal.styles";
import {CalendarEvent, NewEvent} from "../../types";
import {TextArea} from 'components/SideBar/SideBar.styles';
import {createEvent} from "../../api/api";
import {ToastError, ToastSuccess} from "../../common/Toast";

interface FormModalProps {
    onClose: () => void;
    setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;
    setNewEvent: Dispatch<SetStateAction<boolean>>;
}

const FormModal = ({onClose, setEvents, setNewEvent}: FormModalProps) => {
    const initialState = {
        title: "",
        content: "",
        startDate: "",
        endDate: "",
        time: "",
        audience: "public"
    }
    const [formData, setFormData] = useState<NewEvent>(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = async () => {
        try {
            setIsLoading(true);
            const {data} = await createEvent(formData);
            setIsLoading(false);
            setFormData(initialState);
            setEvents(data);
            setNewEvent(false);
            ToastSuccess("Event created")
        } catch (err: any) {
            ToastError(err?.message);
            setIsLoading(false);
        }
    }

    return ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose}/>
            <FormModalContainer>
                <EventForm>
                    <H3>Create New Event</H3>

                    <Label htmlFor="title">
                        Title
                        <Input
                            onChange={handleOnChange}
                            value={formData.title}
                            type="text"
                            id="title"
                            name="title"
                            maxLength={100}
                            required
                        />
                    </Label>

                    <Label htmlFor="content">
                        Content
                        <TextArea
                            onChange={handleOnChange}
                            value={formData.content}
                            id="content"
                            name="content"
                            maxLength={255}
                            rows={6}
                            required
                        />
                    </Label>

                    <Label htmlFor="startDate">
                        Start
                        <Input
                            onChange={handleOnChange}
                            type="date"
                            id="startDate"
                            name="startDate"
                            required
                        />
                    </Label>

                    <Label htmlFor="endDate">
                        End
                        <Input
                            onChange={handleOnChange}
                            type="date"
                            id="endDate"
                            name="endDate"
                            required
                        />
                    </Label>

                    <Label htmlFor="time">
                        Time
                        <Input
                            onChange={handleOnChange}
                            type="time"
                            id="time"
                            name="time"
                            required
                        />
                    </Label>

                    <Label htmlFor="audience">
                        Audience
                        <SelectDropDown
                            onChange={handleOnChange}
                            name="audience"
                            id="audience"
                        >
                            <SelectOption value="public">PUBLIC</SelectOption>
                            <SelectOption value="member">MEMBER ONLY</SelectOption>
                        </SelectDropDown>
                    </Label>

                    <ButtonGroup>
                        <SecondaryButton
                            onClick={onClose}
                            type="button"
                        >
                            Cancel
                        </SecondaryButton>
                        <SecondaryButton
                            type="button"
                            onClick={handleOnSubmit}
                            disabled={
                                !formData.title
                                || !formData.content
                                || !formData.startDate
                                || !formData.endDate
                                || !formData.time
                                || !formData.audience
                            }
                        >
                            {isLoading ? <Spinner size={20}/> : "Create Event"}
                        </SecondaryButton>
                    </ButtonGroup>
                </EventForm>
            </FormModalContainer>

        </>,
        document.getElementById("portal") as Element
    );
};

export default FormModal;