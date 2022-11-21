import React, {useEffect, useState} from 'react';
import {H1, InnerContainer, PageContainer} from "../../common/index.styles";
import useUser from "../../hooks/useUser";
import {FloatingButton, Icon, PDFContainer, PdfTag, TagContainer} from "./Rules.styles";
import UploadModal from "../../components/UploadModal/UploadModal";
import {useDevice} from "../../hooks/useDevice";
import {MediaProps} from "../../types";

const Rules = () => {
    const {isEditor} = useUser();
    const {isDesktop} = useDevice();
    const [data, setData] = useState<MediaProps[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleFloatingButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    /*useEffect(() => {
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
    }, [])*/

    return (
        <PageContainer>
            <InnerContainer>
                {/*                {data?.length ? (
                    isDesktop ? (
                        <PDFContainer src={data[0].url} title={data[0].title} frameBorder={0}/>
                    ) : <TagContainer>
                        <Icon size={30}/>
                        <PdfTag href={data[0].url} target="_blank" rel="noreferrer">{data[0].title}</PdfTag>
                    </TagContainer>
                ) : (
                    <H1>No File to display</H1>
                )}*/}

                {isEditor && isOpen && (
                    <UploadModal onClose={() => setIsOpen(false)} uploadPreset="club_rules"/>
                )}

                {isEditor && <FloatingButton onClick={handleFloatingButton}>Upload</FloatingButton>}
            </InnerContainer>
        </PageContainer>
    );
};

export default Rules;