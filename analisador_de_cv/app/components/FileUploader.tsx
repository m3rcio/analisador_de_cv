import React from 'react';
import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';


const FileUploader=()=>{

      const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect]);

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf']},
        maxSize: maxFileSize,
    })
    return(
        <div className="w-full gradient-border">FileUploader</div>
    )
}

export default FileUploader