import React, {useEffect, useState} from 'react';
import {H3} from "../../common/index.styles";
import {PDFContainer, TileContainer} from "../BoilerGuides/BoilerGuides.styles";
import {AiOutlineFilePdf} from "react-icons/ai";
import {UploadButton} from "../Calendar/Calendar.styles";
import UploadModal from "../../components/UploadModal/UploadModal";
import useUser from "../../hooks/useUser";
import {useDevice} from "../../hooks/useDevice";
import {MediaWithUrl} from "../../types";
import {deleteMedia, getMediaMetadata} from "../../api/api";
import {MinutesContainer} from "./Minutes.styles";
import {DeleteIcon} from "../../components/SideBar/SideBar.styles";
import {ToastInfo, ToastSuccess} from "../../common/Toast";
import {MainContainer, MemberPage} from 'pages/Dashboard/Dashboard.styles';

const Minutes = () => {
    const {isEditor} = useUser();
    const {isDesktop} = useDevice();
    const [files, setFiles] = useState<MediaWithUrl[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const asyncProcess = async () => {
            try {
                const {status, data} = await getMediaMetadata("Minutes", signal);
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
        <MemberPage>
            {!Boolean(files?.length) ? (
                <MainContainer>
                    <H3>No files available</H3>
                    {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}
                </MainContainer>
            ) : (
                <MainContainer justify="space-between" align="center" gap={50}>
                    <MinutesContainer>
                        {files.map((file) => (
                            <TileContainer key={file.id}>
                                {isEditor && <DeleteIcon size={isDesktop ? 30 : 20} onClick={() => handleDelete(file)}/>}

                                <PDFContainer href={file.secure_url} target="_blank">
                                    <AiOutlineFilePdf size={isDesktop ? 150 : 100}/>
                                    <H3>{file.title}</H3>
                                </PDFContainer>
                            </TileContainer>
                        ))}
                    </MinutesContainer>
                    {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}
                </MainContainer>
            )}
            {isEditor && isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} uploadPreset="Minutes"/>}
        </MemberPage>
    );
};

export default Minutes;