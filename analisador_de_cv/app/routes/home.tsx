import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analisador de CV" },
    { name: "description", content: "Receba Feedback do seu Currículo!" },
  ];
}

export default function Home() {
  return <main></main>;
}
