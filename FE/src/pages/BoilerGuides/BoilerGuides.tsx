import React, {useEffect, useState} from 'react';
import {H3, InnerContainer, PageContainer} from "../../common/index.styles";
import {BoilerContainer, PDFContainer, TileContainer} from "./BoilerGuides.styles";
import {useDevice} from "../../hooks/useDevice";
import {AiOutlineFilePdf} from "react-icons/ai";
import useUser from "../../hooks/useUser";
import {MediaWithUrl} from "../../types";
import {deleteMedia, getMediaMetadata} from "../../api/api";
import {UploadButton} from "../Agenda/Agenda.styles";
import UploadModal from "../../components/UploadModal/UploadModal";
import {DeleteIcon} from 'components/SideBar/SideBar.styles';
import {ToastInfo, ToastSuccess} from "../../common/Toast";

const BoilerGuides = () => {
    const {isEditor} = useUser();
    const {isDesktop} = useDevice();
    const [files, setFiles] = useState<MediaWithUrl[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const asyncProcess = async () => {
            try {
                const {status, data} = await getMediaMetadata("Boiler_Guides", signal);
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
            <InnerContainer justifyContent="center" alignItems="center" gap={50}>
                <BoilerContainer>
                    {!Boolean(files?.length) && <H3>No files available</H3>}

                    {files.map((file) => (
                        <TileContainer key={file.id}>
                            <DeleteIcon size={isDesktop ? 30 : 20} onClick={(e) => handleDelete(file)}/>

                            <PDFContainer href={file.secure_url} target="_blank">
                                <AiOutlineFilePdf size={isDesktop ? 150 : 100}/>
                                <H3>{file.title}</H3>
                            </PDFContainer>
                        </TileContainer>
                    ))}
                </BoilerContainer>

                {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}
                {isEditor && isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} uploadPreset="Boiler_Guides"/>}
            </InnerContainer>
        </PageContainer>
    );
};

export default BoilerGuides;