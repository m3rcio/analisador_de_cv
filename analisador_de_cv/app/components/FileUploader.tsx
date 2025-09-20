import React, { useState } from 'react';
import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';


const FileUploader=()=>{

      const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect]);

    const [file,setFile]= useState();

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf']},
        maxSize: maxFileSize,
    })
    return(
        <div className="w-full gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='space-y-4 cursor-pointer'>
                    <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                        <img src='/icons/info.svg' alt='upload' className='size-20'></img>
                    </div>
                    {
                        file ? (<div></div>):
                        (<div><p className='text-lg text-gray-500'><span className='font-semibold'>Clique Para Carregar</span>Ou Arraste e Solte</p><p className='text-lg text-gray-500'>PDF (max 20MB)</p></div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default FileUploader