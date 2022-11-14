import React, {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {DragNDrop, FileArray, FileName, FileUploadContainer, UploadForm} from "./FileUpload.styles";
import {SecondaryButton} from 'pages/Login/Login.styles';
import {P1} from "../../common/index.styles";
import {FaCloudUploadAlt} from "react-icons/fa";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useDevice} from "../../hooks/useDevice";
import {ToastWarning} from "../../common/Toast";

export interface FileUploadProps {
    acceptFileTypes?: string[];
    onUploadSubmit: () => void;
}

const FileUpload = ({onUploadSubmit, acceptFileTypes}: FileUploadProps) => {
    const [files, setFiles] = useState<File[]>([]);
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

    const {getRootProps, getInputProps} = useDropzone({
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        onDrop, accept: {
            "image/jpeg": [".jpeg", ".jpg"],
            "image/png": [".png"],
            "application/pdf": [".pdf"],
            "application/msword": [".doc"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"],
            "image/svg+xml": [".svg"],
            "application/x-7z-compressed": [".7z"],
            "application/zip": [".zip"]
        }
    })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        /*need to append multiple files*/
    }

    return (
        <FileUploadContainer>
            <UploadForm onSubmit={onSubmit}>
                <DragNDrop {...getRootProps()}>
                    <input {...getInputProps()} accept={`${String(acceptFileTypes)}`}/>
                    <FaCloudUploadAlt size={isDesktop ? 100 : 60}/>
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </DragNDrop>
                <span style={{alignSelf: "flex-start"}}>3MB limit</span>
            </UploadForm>

            <FileArray>
                {files.map((file, index) => (
                    <FileName key={file.name} onClick={() => onDelete(file)}>
                        <AiOutlineCloseCircle size={isDesktop ? 20 : 15}/>
                        <P1>{file.name}</P1>
                    </FileName>
                ))}
            </FileArray>

            <SecondaryButton disabled={!files.length}>Upload</SecondaryButton>
        </FileUploadContainer>
    );
};

export default FileUpload;