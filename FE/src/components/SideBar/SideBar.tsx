import {H4, P1} from "../../common/index.styles";
import React, {useEffect, useState} from "react";
import * as S from "./SideBar.styles";
import useContent from "../../hooks/useContent";
import {DeleteIcon} from "./SideBar.styles";
import useUser from "../../hooks/useUser";
import {createAnnouncement, deleteAnnouncement} from "../../api/api";
import {ToastError, ToastSuccess} from "../../common/Toast";
import {SecondaryButton} from "pages/Login/Login.styles";
import {Label} from "pages/Admin/Admin.styles";
import {useTheme} from "styled-components";

export const SideBar = () => {
    const initialValues = {title: "", content: ""};
    const [sideBarWidth, setSideBarWidth] = useState<number | undefined>(undefined);
    const [sideBarTop, setSideBarTop] = useState<number | undefined>(undefined);
    const [addNew, setAddNew] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState(initialValues);
    const {announcements, setAnnouncements} = useContent();
    const {isEditor, isAdmin} = useUser();
    const theme = useTheme();

    useEffect(() => {
        const sideBarElement = document.querySelector(".sideBar")!.getBoundingClientRect();
        setSideBarWidth(sideBarElement.width);
        setSideBarTop(sideBarElement.top);
    }, []);

    useEffect(() => {
        if (!sideBarTop) return;

        const isSticky = () => {
            const sideBarElement = document.querySelector(".sideBar")!;
            const scrollTop = window.scrollY;

            if (scrollTop >= sideBarTop - 10) {
                sideBarElement.classList.add("isSticky");
            } else {
                sideBarElement.classList.remove("isSticky");
            }
        }

        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };

    }, [sideBarTop]);

    const handleDelete = async (id: number) => {
        try {
            const {status, data} = await deleteAnnouncement(id);
            if (status >= 200 && status <= 300) {
                ToastSuccess(data.message);
                setAnnouncements(data);
            }
        } catch (err: any) {
            ToastError(err.message)
        }
    };

    const handleCreateNewAnnouncement = async () => {
        if (!newAnnouncement.title || !newAnnouncement.content) return;

        try {
            const {status, data} = await createAnnouncement(newAnnouncement);
            if (status >= 200 && status <= 300) {
                ToastSuccess(data.message);
                setAddNew(false);
                setNewAnnouncement(initialValues);
                setAnnouncements(data);
            }
        } catch (err: any) {
            ToastError(err?.message);
            setAddNew(false);
        }
    }

    return (
        <S.SideBar width={sideBarWidth} className="sideBar">
            <H4>Exciting Events</H4>
            {announcements.map(({id, title, content}: any) => (
                <S.Divider key={id} authorised={isEditor || isAdmin}>
                    {(isEditor || isAdmin) && <DeleteIcon size={25} onClick={() => handleDelete(id)}/>}
                    <P1 textAlign="center" fontWeight={500}>{title}</P1>
                    <P1>{content}</P1>
                </S.Divider>
            ))}
            
            {(isEditor || isAdmin) && (
                <SecondaryButton
                    style={{width: "100%", backgroundColor: `${addNew ? "grey" : theme.buttons.primary}`, borderColor: `${addNew ? "grey" : theme.buttons.primary}`}}
                    onClick={() => setAddNew((prevState) => !prevState)}
                >
                    {addNew ? "Close" : "Add New"}
                </SecondaryButton>
            )}
            {addNew && (
                <S.AnnouncementForm>
                    <P1 textAlign="center" fontWeight={600}>Add New</P1>
                    <Label htmlFor="title">
                        Title
                        <S.AnnouncementInput
                            onChange={(event => setNewAnnouncement({...newAnnouncement, title: event.target.value}))}
                            type="text"
                            id="title"
                            maxLength={30}
                            required
                        />
                    </Label>

                    <Label htmlFor="content">
                        Content
                        <S.TextArea
                            onChange={(event => setNewAnnouncement({...newAnnouncement, content: event.target.value}))}
                            id="content"
                            rows={5}
                            maxLength={200}
                            required
                        />
                    </Label>
                    <SecondaryButton type="button" onClick={handleCreateNewAnnouncement}>Add</SecondaryButton>
                </S.AnnouncementForm>
            )}
        </S.SideBar>
    )
}