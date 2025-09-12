import { title } from "process";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta =()=>([
    {title: 'Analisador de CV | Auth'},
    {name: 'descrição', content: 'Entre na sua conta'},
])

const Auth=()=>{
    const {isLoading,auth}=usePuterStore();
    const location= useLocation();
    const next=location.search.split('next=')[1];
    const navigate=useNavigate();


    useEffect(()=>{
        if(auth.isAuthenticated) navigate(next)
    },[auth.isAuthenticated,next])
    return (
        <main className="bg-[url('/imagens/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center ">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Bem Vindo(a)</h1>
                        <h2>Entre para continuar a sua Jornada Laboral</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Entrando...</p>
                            </button>
                        ) : (<>
                        {auth.isAuthenticated ? (
                            <button className="auth-button" onClick={auth.signOut}><p>Sair</p></button>
                        ) : (<button className="auth-button" onClick={auth.signIn}><p>Entre</p></button>)}
                        </>)}
                    </div>
                </section>
            </div>
        </main>
)
}

export default Auth