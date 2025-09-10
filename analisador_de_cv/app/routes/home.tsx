import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import CurriculoCard from "~/components/CurriculoCard";
import { curriculos } from "../../constants";
import type { Curriculo } from "types";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analisador de CV" },
    { name: "description", content: "Receba Feedback do seu Currículo!" },
  ];
}

export default function Home() {
   const {auth}=usePuterStore();
    const navigate=useNavigate();


     useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])
  return <main className="bg-[url('/imagens/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
        <div className="page-heading py-16">
            <h1>acompanhe sua aplicação e avaliação de currículo</h1>
            <h2>revise suas submissões e verifique o feedback impulsionado por IA</h2>
        </div>
         {curriculos.length > 0 && (
      <div className="resumes-section">
        { curriculos.map((curriculo: Curriculo)=>(
      <CurriculoCard key={curriculo.id} curriculo={curriculo}/>
    ))
    }
      </div>
    )}
    </section>
   
    
  </main>;
}
