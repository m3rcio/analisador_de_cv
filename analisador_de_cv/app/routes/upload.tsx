import React from 'react';
import {useState} from 'react';
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";

const Upload=()=>{
const [isProcessing,setIsProcessing]= useState();
const [statusText,setStatusText]= useState('');
const [file,setFile]= useState<File | null>(null);
// const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{}cecewdewdewdew

const handleFileSelect= (file: File | null)=>{
    // setFile[file]
}

    return(
        <main className="bg-[url('/imagens/bg-main.svg')] bg-cover">
            <Navbar />

            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Feedback para o seu Emprego de sonho!</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className="w-full" />
                        </>
                    ) : (
                        <h2>Carregue seu Curriculo para pontos ATS e dicas de melhoramento</h2>
                    )}
                    {!isProcessing && (
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                <label htmlFor="company-name">Nome da Empresa</label>
                                <input type="text" name="company-name" placeholder="Company Name" id="company-name" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-title">Título do trabalho</label>
                                <input type="text" name="job-title" placeholder="Job Title" id="job-title" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Descrição do trabalho</label>
                                <textarea rows={5} name="job-description" placeholder="Job Description" id="job-description" />
                            </div>

                            <div className="form-div">
                                <label htmlFor="uploader">Carregar Currículo</label>
                                <FileUploader onFileSelect={handleFileSelect}/>
                            </div>

                            <button className="primary-button" type="submit">
                                Analisar Currículo
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Upload