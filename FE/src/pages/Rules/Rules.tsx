import React, {useEffect, useState} from 'react';
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";
import useUser from "../../hooks/useUser";
import {getMediaMetadata} from "../../api/api";
import {MediaMetadataObj} from "../../types";
import {FloatingButton, PDFContainer} from "./Rules.styles";
import UploadModal from "../../components/UploadModal/UploadModal";

const Rules = () => {
    const {isEditor} = useUser();
    const [data, setData] = useState<MediaMetadataObj[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleFloatingButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const asyncProcess = async () => {
            try {
                const {status, data} = await getMediaMetadata("rules", signal);
                if (status >= 200 && status < 300) {
                    setData(data)
                }
            } catch (err: any) {
                console.log(err?.message)
            }
        }
        void asyncProcess();

        return () => controller.abort();
    }, [])

    return (
        <PageContainer>
            <InnerContainer>

                {data?.length ? (
                    <PDFContainer src={data[0].url} title={data[0].title} frameBorder={0}/>
                ) : (
                    <H1>No File to display</H1>
                )}

                {isEditor && isOpen && (
                    <UploadModal onClose={() => setIsOpen(false)} uploadPreset="club_rules" databaseTable="rules"/>
                )}

                {isEditor && <FloatingButton onClick={handleFloatingButton}>Upload</FloatingButton>}
            </InnerContainer>
        </PageContainer>
    );
};

export default Rules;