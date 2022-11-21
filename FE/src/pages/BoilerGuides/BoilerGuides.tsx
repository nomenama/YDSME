import React, {useEffect, useState} from 'react';
import {H3, InnerContainer, PageContainer} from "../../common/index.styles";
import {BoilerContainer, PDFContainer} from "./BoilerGuides.styles";
import {useDevice} from "../../hooks/useDevice";
import {AiOutlineFilePdf} from "react-icons/ai";
import useUser from "../../hooks/useUser";
import {MediaWithUrl} from "../../types";
import {getMediaMetadata} from "../../api/api";
import {UploadButton} from "../Agenda/Agenda.styles";
import UploadModal from "../../components/UploadModal/UploadModal";

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
    }, [isModalOpen])

    return (
        <PageContainer>
            <InnerContainer justifyContent="center" alignItems="center" gap={50}>
                <BoilerContainer>
                    {!Boolean(files?.length) && <H3>No files available</H3>}

                    {files.map(({id, title, secure_url}) => (
                        <PDFContainer key={id} href={secure_url} target="_blank">
                            <AiOutlineFilePdf size={isDesktop ? 150 : 100}/>
                            <H3>{title}</H3>
                        </PDFContainer>
                    ))}
                </BoilerContainer>

                {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}
                {isEditor && isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} uploadPreset="Boiler_Guides"/>}
            </InnerContainer>
        </PageContainer>
    );
};

export default BoilerGuides;