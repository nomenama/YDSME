import React, {useEffect, useState} from 'react';
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";
import useUser from "../../hooks/useUser";
import {Icon, PDFContainer, PdfTag, TagContainer} from "./Rules.styles";
import UploadModal from "../../components/UploadModal/UploadModal";
import {useDevice} from "../../hooks/useDevice";
import {MediaWithUrl} from "../../types";
import {getMediaMetadata} from 'api/api';
import {UploadButton} from "../Agenda/Agenda.styles";

const Rules = () => {
    const {isEditor} = useUser();
    const {isDesktop} = useDevice();
    const [data, setData] = useState<MediaWithUrl[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const asyncProcess = async () => {
            try {
                const {status, data} = await getMediaMetadata("Club_Rules", signal);
                if (status >= 200 && status < 300) {
                    setData(data)
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
            <InnerContainer justifyContent="center" alignItems="center">
                {!Boolean(data?.length) && <H1>No File to display</H1>}

                {isDesktop && Boolean(data?.length === 1) && (
                    isDesktop && data.map(({id, title, secure_url}) => (
                        <PDFContainer key={id} src={secure_url} title={title} frameBorder={0}/>
                    ))
                )}

                {(!isDesktop || Boolean(data.length > 1)) && (
                    data.map(({id, title, secure_url}) => (
                        <TagContainer key={id}>
                            <Icon size={30}/>
                            <PdfTag href={secure_url} target="_blank" rel="noreferrer">{title}</PdfTag>
                        </TagContainer>
                    ))
                )}

                {isEditor && <UploadButton onClick={() => setIsModalOpen((prevState) => !prevState)}>Upload</UploadButton>}

                {isEditor && isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} uploadPreset="Club_Rules"/>}
            </InnerContainer>
        </PageContainer>
    );
};

export default Rules;