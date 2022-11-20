import React, {useState} from 'react';
import axios from "axios";
import {ToastError, ToastSuccess} from "../../common/Toast";
import {postMediaMetadata} from "../../api/api";
import {Input, Label} from 'pages/Admin/Admin.styles';
import {UploadWidgetProps} from 'types';
import {UploadWidgetForm} from "./UploadWidget.styles";
import {P1, Spinner} from 'common/index.styles';
import {useTheme} from "styled-components";
import {SecondaryButton} from "../../pages/Login/Login.styles";

const UploadWidget = ({
                          uploadPreset, databaseTable, onModalClose = () => {
    }
                      }: UploadWidgetProps) => {
    const theme = useTheme();
    const [files, setFile] = useState<FileList | null>(null);
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const uploadImage = async () => {
        setIsLoading(true);
        const formData = new FormData();
        if (!files || !title) return;
        formData.append("file", files[0]);
        formData.append("upload_preset", uploadPreset);

        //upload to Cloudinary
        const {status, data} = await axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData);

        if (status >= 200 && status < 300) {
            const {secure_url} = data;

            //Save url to database
            const {status: serverStatus} = await postMediaMetadata({
                title,
                url: secure_url,
                databaseTable: databaseTable
            });

            if (serverStatus === 200) {
                setIsLoading(false);
                setTitle("");
                setFile(null);
                onModalClose();
                ToastSuccess("File successfully uploaded");
                return;
            }
            setIsLoading(false);
            ToastError("Error uploading file. Try again!");
        }
    }

    return (
        <UploadWidgetForm>
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
                    onChange={(event) => setFile(event.target.files)}
                />
            </Label>

            <SecondaryButton type="button" onClick={uploadImage}>{isLoading ? <Spinner size={20}/> : "Upload"} </SecondaryButton>
        </UploadWidgetForm>
    );
};

export default UploadWidget;