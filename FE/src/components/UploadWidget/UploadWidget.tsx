import React, {ChangeEvent, useState} from 'react';
import {ToastError, ToastSuccess} from "../../common/Toast";
import {Input, Label} from 'pages/Admin/Admin.styles';
import {UploadWidgetProps} from 'types';
import {UploadWidgetForm} from "./UploadWidget.styles";
import {P1, Spinner} from 'common/index.styles';
import {useTheme} from "styled-components";
import {SecondaryButton} from "../../pages/Login/Login.styles";
import {UploadMedia} from "../../api/api";

const UploadWidget = ({onModalClose = () => null, uploadPreset}: UploadWidgetProps) => {
    const theme = useTheme();
    const [file, setFile] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        if (!file || !title || !uploadPreset) return;
        
        try {
            const {status} = await UploadMedia({
                title,
                file,
                uploadPreset: uploadPreset,
            });

            if (status === 200) {
                setIsLoading(false);
                setTitle("");
                onModalClose();
                ToastSuccess("File Uploaded");
            }
        } catch (err: any) {
            setIsLoading(false);
            ToastError(err?.message);
        }
    }

    const handleFileChange = (file: File) => {
        let fileReader = new FileReader();

        fileReader.onloadend = (binary: any) => {
            setFile(binary.target.result);
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <UploadWidgetForm onSubmit={onSubmit}>
            <P1 textAlign="center" color={theme.colors.primary} fontWeight={600}>Upload</P1>
            <Label htmlFor="title">
                Title
                <Input
                    type="text"
                    id="title"
                    onChange={(event) => setTitle(event.target.value)}
                />
            </Label>

            <Label htmlFor="file">
                File
                <input
                    id="file"
                    type="file"
                    accept={"application/pdf"}
                    onChange={(event) => event.target.files ? handleFileChange(event.target.files[0]) : null}
                />
            </Label>

            <SecondaryButton>{isLoading ? <Spinner size={20}/> : "Upload"} </SecondaryButton>
        </UploadWidgetForm>
    );
};

export default UploadWidget;