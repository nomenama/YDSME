import React, {useEffect, useState} from 'react';
import {H3, H4, InnerContainer, PageContainer} from "../../common/index.styles";
import useUser from "../../hooks/useUser";
import {useDevice} from "../../hooks/useDevice";
import {MediaWithUrl} from "../../types";
import {deleteMedia, getMediaMetadata} from "../../api/api";
import {AiOutlineFilePdf} from "react-icons/ai";
import {UploadButton} from "../Agenda/Agenda.styles";
import UploadModal from "../../components/UploadModal/UploadModal";
import {List, NewsLetterContainer, TileWrapper} from "./Newsletter.styles";
import {ToastInfo, ToastSuccess} from "../../common/Toast";
import {DeleteIcon} from "../../components/SideBar/SideBar.styles";

const Newsletter = () => {
    const {isEditor} = useUser();
    const {isDesktop} = useDevice();
    const [files, setFiles] = useState<MediaWithUrl[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const asyncProcess = async () => {
            try {
                const {status, data} = await getMediaMetadata("Newsletters", signal);
                if (status >= 200 && status < 300) {
                    setFiles(data);
                }
            } catch (err: any) {
                console.log(err?.message)
            }
        }
        void asyncProcess();

        return () => controller.abort();
    }, [isModalOpen]);

    const handleDelete = async (media: MediaWithUrl) => {
        try {
            const {status, data} = await deleteMedia(media);

            if (status === 200) {
                setFiles(data);
                ToastSuccess("Deleted");
            }

        } catch (err: any) {
            ToastInfo(err);
        }
    }

    return (
        <PageContainer>
            <InnerContainer justifyContent="space-between" alignItems="center" gap={50}>
                <NewsLetterContainer>
                    {!Boolean(files?.length) && <H3>No files available</H3>}

                    {files.map((file) => (
                        <TileWrapper key={file.id}>
                            <DeleteIcon size={isDesktop ? 25 : 20} onClick={(e) => handleDelete(file)}/>

                            <List href={file.secure_url} target="_parent">
                                <AiOutlineFilePdf size={isDesktop ? 60 : 40}/>
                                {isDesktop ? <H3>{file.title}</H3> : <H4>{file.title}</H4>}
                            </List>
                        </TileWrapper>
                    ))}
                </NewsLetterContainer>

                {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}
                {isEditor && isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} uploadPreset="Newsletters"/>}
            </InnerContainer>
        </PageContainer>
    );
};

export default Newsletter;