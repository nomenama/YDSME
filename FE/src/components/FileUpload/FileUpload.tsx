import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {DragNDrop, FileArray, FileName, FileUploadContainer, UploadForm} from "./FileUpload.styles";
import {SecondaryButton} from 'pages/Login/Login.styles';
import {P1} from "../../common/index.styles";
import {FaCloudUploadAlt} from "react-icons/fa";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useDevice} from "../../hooks/useDevice";
import {ToastError, ToastSuccess, ToastWarning} from "../../common/Toast";
import api from "../../api/baseApi";
import ProgressBar from 'components/ProgressBar/ProgressBar';

export interface FileUploadProps {
    folderName: string;
}

const FileUpload = ({folderName}: FileUploadProps) => {
    const [files, setFiles] = useState<File[]>([]);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const {isDesktop} = useDevice();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const sizeLimit = 3072 * 3072; //3mb
        const isTooBig = acceptedFiles.some((file) => file.size > sizeLimit);

        if (isTooBig) {
            const rejectedArr = acceptedFiles.filter((file) => file.size > sizeLimit);
            rejectedArr.forEach((file) => ToastWarning(`${file.name} exceed the 3mb limits.`));
        }

        const approvedArr = acceptedFiles.filter((file) => file.size <= sizeLimit);
        setFiles((currentFiles) => [...currentFiles, ...approvedArr]);
    }, []);

    const onDelete = (file: File) => {
        setFiles(files.filter(({name}) => name !== file.name))
    };

    const fileUpload = async (formData: FormData, folderName: string) => {
        const rawResponse = await api.post("/upload", formData, {
            params: {folderName},
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                    setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                }
            }
        });

        const {status, data} = rawResponse;
        return {
            status,
            data
        }
    }

    const {getRootProps, getInputProps} = useDropzone({
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        onDrop, accept: {
            "image/jpeg": [".jpeg", ".jpg"],
            "image/png": [".png"],
            "application/pdf": [".pdf"],
            "application/msword": [".doc"],
            /*            "image/svg+xml": [".svg"],
                        "application/x-7z-compressed": [".7z"],
                        "application/zip": [".zip"]*/
        }
    })

    const onUpload = async () => {
        const formData = new FormData();
        /*need to append multiple files*/
        formData.append("file", files[0]);

        try {
            const {status, data} = await fileUpload(formData, folderName);
            if (status === 200) {
                ToastSuccess("File uploaded");
                setFiles([]);
                setTimeout(() => setUploadProgress(0), 10000);
            }
        } catch (err: any) {
            ToastError(err.message);
        }
    }

    return (
        <FileUploadContainer>
            <UploadForm>
                <DragNDrop {...getRootProps()}>
                    <input {...getInputProps()}/>
                    <FaCloudUploadAlt size={isDesktop ? 100 : 60}/>
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </DragNDrop>
                <span style={{alignSelf: "flex-start"}}>3MB limit</span>
            </UploadForm>

            {Boolean(uploadProgress) && <ProgressBar progress={uploadProgress}/>}

            <FileArray>
                {files.map((file, index) => (
                    <FileName key={file.name} onClick={() => onDelete(file)}>
                        <AiOutlineCloseCircle size={isDesktop ? 20 : 15}/>
                        <P1>{file.name}</P1>
                    </FileName>
                ))}
            </FileArray>

            <SecondaryButton onClick={onUpload} type="button" disabled={!files.length}>Upload</SecondaryButton>
        </FileUploadContainer>
    );
};

export default FileUpload;