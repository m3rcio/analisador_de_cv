import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { callbackify } from "util";
import CurriculoCard from "~/components/CurriculoCard";
import { curriculos } from "constants";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analisador de CV" },
    { name: "description", content: "Receba Feedback do seu Currículo!" },
  ];
}

export default function Home() {
  
  return <main className="bg-[url('/imagens/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
        <div className="page-heading">
            <h1>acompanhe sua aplicação e avaliação de currículo</h1>
            <h2>revise suas submissões e verifique o feedback impulsionado por IA</h2>
        </div>
    </section>
    {curriculos.length > 0 && (
      <div className="resumes-section">
        { curriculos.map((curriculo)=>(
      <CurriculoCard key={curriculo.id} curriculo={curriculo}/>
    ))
    }
      </div>
    )}
    
  </main>;
}
