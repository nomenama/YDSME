import React, {useEffect, useState} from 'react';
import {H3} from "../../common/index.styles";
import {MediaWithUrl} from "../../types";
import {UploadButton} from "./Agenda.styles";
import useUser from "../../hooks/useUser";
import UploadModal from "../../components/UploadModal/UploadModal";
import {getMediaMetadata} from "../../api/api";
import {Icon, PDFContainer, PdfTag, TagContainer} from "../Rules/Rules.styles";
import {useDevice} from "../../hooks/useDevice";
import {MainContainer, MemberPage} from 'pages/Dashboard/Dashboard.styles';

const Agenda = () => {
    const {isEditor} = useUser();
    const {deviceWidth} = useDevice();
    const [files, setFiles] = useState<MediaWithUrl[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const asyncProcess = async () => {
            try {
                const {status, data} = await getMediaMetadata("Agendas", signal);
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
        <MemberPage>
            <MainContainer justify="center" align="center">
                {!Boolean(files?.length) && <H3>No File to display</H3>}

                {deviceWidth >= 768 && Boolean(files?.length === 1) && (
                    files.map(({id, title, secure_url}) => (
                        <PDFContainer key={id} src={secure_url} title={title} frameBorder={0}/>
                    ))
                )}

                {(deviceWidth < 768 || Boolean(files.length > 1)) && (
                    files.map(({id, title, secure_url}) => (
                        <TagContainer key={id}>
                            <Icon size={30}/>
                            <PdfTag href={secure_url} target="_blank" rel="noreferrer">{title}</PdfTag>
                        </TagContainer>
                    ))
                )}

                {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}
                {isEditor && isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} uploadPreset="Agendas"/>}
            </MainContainer>
        </MemberPage>
    );
};

export default Agenda;