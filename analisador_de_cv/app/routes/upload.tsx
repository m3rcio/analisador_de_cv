import React from 'react';
import {useState} from 'react';
import Navbar from "~/components/Navbar";

const Upload=()=>{
const [isProcessing,setIsProcessing]= useState();
const [statusText,setStatusText]= useState('');
handleSubmit=(e: FormEvent<HTMLFormElement>)=>{}

    return(
        <main className="bg-[url('/imagens/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
        <div className="page-heading">
            <h1>Feedback para o seu Emprego de Sonho!</h1>
            {isProcessing ? (
                <>
                <h2>{statusText}</h2>
                <img src="/imagens/resume-scan.gif" className="w-full">
                </>
            ) : (<h2>Deixe o seu Curriculo para pontuação ATS e dicas de melhoramento</h2>)}
            {!isProcessing && (
                <form >

                </form>
            )}
        </div>
    </section>
    </main>
    )
}

export default Upload