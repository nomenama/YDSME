import React, {useEffect, useState} from 'react';
import {H3, H4, InnerContainer, PageContainer} from "../../common/index.styles";
import useUser from "../../hooks/useUser";
import {useDevice} from "../../hooks/useDevice";
import {MediaWithUrl} from "../../types";
import {getMediaMetadata} from "../../api/api";
import {MinutesContainer} from "../Minutes/Minutes.styles";
import {PDFContainer} from "../BoilerGuides/BoilerGuides.styles";
import {AiOutlineFilePdf} from "react-icons/ai";
import {UploadButton} from "../Agenda/Agenda.styles";
import UploadModal from "../../components/UploadModal/UploadModal";
import {List} from "./Newsletter.styles";

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
    }, [isModalOpen])

    return (
        <PageContainer>
            <InnerContainer justifyContent="space-between" alignItems="center" gap={50}>
                <MinutesContainer>
                    {!Boolean(files?.length) && <H3>No files available</H3>}

                    {files.map(({id, title, secure_url}) => (
                        <List key={id} href={secure_url} target="_parent">
                            <AiOutlineFilePdf size={isDesktop ? 60 : 40}/>
                            {isDesktop ? <H3>{title}</H3> : <H4>{title}</H4>}
                        </List>
                    ))}
                </MinutesContainer>

                {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}
                {isEditor && isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} uploadPreset="Newsletters"/>}
            </InnerContainer>
        </PageContainer>
    );
};

export default Newsletter;