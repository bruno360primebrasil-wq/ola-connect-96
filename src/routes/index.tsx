import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Factory,
  Gauge,
  HandCoins,
  Home,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const phone = "5591980909686";
const message = encodeURIComponent(
  "Olá! Encontrei a Limpa Fossa Icoaraci pelo Google e gostaria de solicitar um orçamento.",
);
const whatsapp = `https://wa.me/${phone}?text=${message}`;

const services = [
  ["Limpeza de Fossa Séptica", "Sucção completa e higienização técnica para evitar transbordamentos e mau cheiro.", Droplets],
  ["Sucção de Resíduos e Efluentes", "Remoção segura com equipamento profissional para residências e empresas.", Truck],
  ["Desentupimento de Pia", "Desobstrução rápida da tubulação, sem sujeira e com diagnóstico cuidadoso.", Wrench],
  ["Desentupimento de Ralo", "Eliminamos bloqueios e restabelecemos o escoamento correto da água.", Gauge],
  ["Desentupimento de Vaso Sanitário", "Atendimento ágil para resolver entupimentos com segurança e precisão.", Home],
  ["Desentupimento de Esgoto", "Solução técnica para redes de esgoto residenciais, comerciais e industriais.", Building2],
  ["Desentupimento de Caixa de Gordura", "Limpeza profunda para evitar refluxo, odores e novas obstruções.", Sparkles],
  ["Hidrojateamento Profissional", "Jatos de alta pressão removem incrustações sem danificar a tubulação.", Droplets],
  ["Limpeza de Banheiro Químico", "Coleta e higienização responsável com cuidado ambiental.", Leaf],
  ["Manutenção Preventiva", "Planos periódicos que reduzem emergências e custos inesperados.", ShieldCheck],
] as const;

const areas = ["Icoaraci", "Agulha", "Cruzeiro", "Ponta Grossa", "Maracacuera", "Paracuri", "Campina de Icoaraci", "Águas Negras", "Tenoné", "Outeiro"];

const faqs = [
  ["Quanto custa uma limpeza de fossa em Icoaraci?", "O valor depende do volume da fossa, do acesso ao local e do tipo de resíduo. Envie uma mensagem para receber uma avaliação rápida e um orçamento sem compromisso."],
  ["A Limpa Fossa Icoaraci atende 24 horas?", "Sim. Atendemos emergências 24 horas por dia, inclusive aos finais de semana e feriados."],
  ["Vocês atendem quais bairros?", "Atendemos Icoaraci e bairros próximos, incluindo Agulha, Cruzeiro, Ponta Grossa, Maracacuera, Paracuri, Campina de Icoaraci, Águas Negras, Tenoné e Outeiro."],
  ["Como saber se a fossa está cheia?", "Mau cheiro, escoamento lento, refluxo e água acumulada são sinais comuns. Uma avaliação técnica confirma a causa e indica a solução correta."],
  ["O serviço de limpa fossa faz muita sujeira?", "Não. Nossa equipe trabalha com equipamentos de sucção e procedimentos que mantêm o local organizado e reduzem qualquer impacto."],
  ["Qual a diferença entre desentupimento e hidrojateamento?", "O desentupimento remove a obstrução. O hidrojateamento também lava as paredes da tubulação com alta pressão, removendo gordura e incrustações."],
  ["Vocês atendem empresas e condomínios?", "Sim. Atendemos imóveis residenciais, condomínios, comércios e operações industriais, inclusive com manutenção preventiva."],
  ["Como solicitar atendimento?", "Ligue para (91) 98090-9686 ou toque em qualquer botão de WhatsApp nesta página para falar diretamente com a equipe."],
] as const;

function track(event: string) {
  if (typeof window !== "undefined") {
    const dataLayer = ((window as Window & { dataLayer?: unknown[] }).dataLayer ||= []);
    dataLayer.push({ event });
  }
}

function WhatsAppButton({ label = "Solicitar orçamento", event = "click_whatsapp", light = false }: { label?: string; event?: string; light?: boolean }) {
  return <a className={`cta ${light ? "cta-light" : ""}`} href={whatsapp} target="_blank" rel="noreferrer" onClick={() => track(event)}><span>{label}</span><ArrowRight size={18} /></a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "#empresa",
        name: "Limpa Fossa Icoaraci 24 Horas",
        image: "/limpa-fossa-icoaraci.png",
        telephone: "+55 91 98090-9686",
        priceRange: "$$",
        address: { "@type": "PostalAddress", streetAddress: "Tv. Souza Franco, 844 - Agulha", addressLocality: "Belém", addressRegion: "PA", postalCode: "66812-430", addressCountry: "BR" },
        areaServed: areas.map((name) => ({ "@type": "Place", name })),
        openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
        contactPoint: { "@type": "ContactPoint", telephone: "+55 91 98090-9686", contactType: "customer service", availableLanguage: "Portuguese" },
      },
      ...services.map(([name, description]) => ({ "@type": "Service", name, description, provider: { "@id": "#empresa" }, areaServed: "Icoaraci, Belém - PA" })),
      { "@type": "FAQPage", mainEntity: faqs.map(([name, answer]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="topbar"><div className="container topbar-inner"><span><Clock3 size={15} /> Atendimento emergencial 24 horas</span><a href="tel:+5591980909686" onClick={() => track("click_phone")}><Phone size={15} /> (91) 98090-9686</a></div></div>
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Limpa Fossa Icoaraci - início"><img src="/limpa-fossa-icoaraci.png" alt="Limpa Fossa Icoaraci" /></a>
          <button className="menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
            {[['Início','#inicio'],['Serviços','#servicos'],['Como funciona','#processo'],['Regiões','#regioes'],['Dúvidas','#duvidas']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <WhatsAppButton label="Falar com a equipe" event="click_orcamento" />
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Plantão em Icoaraci e região</div>
            <h1>Limpa Fossa Icoaraci <em>— Atendimento 24h</em></h1>
            <h2>Limpeza de Fossa, Desentupimento e Hidrojateamento em Icoaraci</h2>
            <p>Equipe especializada, equipamentos profissionais e atendimento rápido para resolver seu problema com segurança, limpeza e responsabilidade ambiental.</p>
            <div className="hero-actions"><WhatsAppButton label="Orçamento imediato!" event="click_hero_whatsapp" /><a className="phone-link" href="tel:+5591980909686" onClick={() => track("click_phone")}><Phone size={19} /><span><small>Ligue agora</small>(91) 98090-9686</span></a></div>
            <div className="trust-row"><span><CheckCircle2 /> Atendimento 24h</span><span><CheckCircle2 /> Orçamento rápido</span><span><CheckCircle2 /> Serviço profissional</span></div>
          </div>
          <div className="hero-visual">
            <div className="logo-stage"><img src="/limpa-fossa-icoaraci.png" alt="Caminhão limpa fossa da Limpa Fossa Icoaraci" /></div>
            <div className="floating-card"><span className="pulse" /><div><strong>Equipe disponível</strong><small>Atendimento em Icoaraci</small></div></div>
          </div>
        </div>
      </section>

      <section className="quick-strip"><div className="container quick-grid">{([[Clock3,"24h por dia","Emergências e agendamentos"],[Truck,"Equipamento próprio","Agilidade no atendimento"],[Leaf,"Destino responsável","Cuidado ambiental"],[HandCoins,"Orçamento rápido","Pagamento facilitado"]] as const).map(([Icon,title,text])=><div className="quick-item" key={title}><Icon /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></section>

      <section className="section" id="servicos"><div className="container"><div className="section-heading"><div><span className="kicker">Soluções completas</span><h2>Serviços profissionais para cada necessidade</h2></div><p>Do atendimento emergencial à manutenção preventiva, aplicamos a técnica certa para solucionar o problema com eficiência.</p></div><div className="services-grid">{services.map(([title,desc,Icon],i)=><article className="service-card" key={title}><span className="service-number">{String(i+1).padStart(2,'0')}</span><div className="icon-box"><Icon /></div><h3>{title}</h3><p>{desc}</p><a href={whatsapp} target="_blank" rel="noreferrer" onClick={()=>track("click_service_whatsapp")}>Pedir orçamento <ArrowRight size={16}/></a></article>)}</div></div></section>

      <section className="price-section"><div className="container price-card"><div><span className="kicker kicker-light">Orçamento transparente</span><h2>Quanto custa um serviço de Limpa Fossa em Icoaraci?</h2><p>O preço varia conforme o volume, o acesso ao local, o tipo de resíduo e a técnica necessária. Fale com nossa equipe, explique a situação e receba uma orientação rápida, sem compromisso.</p><div className="price-points"><span><BadgeCheck /> Avaliação objetiva</span><span><BadgeCheck /> Sem valores escondidos</span></div></div><div className="price-action"><span>Atendimento imediato</span><strong>(91) 98090-9686</strong><WhatsAppButton label="Consultar agora" light event="click_orcamento" /></div></div></section>

      <section className="section process" id="processo"><div className="container"><div className="center-heading"><span className="kicker">Como trabalhamos</span><h2>Um processo simples, seguro e eficiente</h2><p>Da primeira conversa à entrega, você acompanha cada etapa do serviço.</p></div><div className="steps">{[["01","Diagnóstico técnico","Entendemos o problema e avaliamos o local."],["02","Definição da técnica","Indicamos o procedimento e o equipamento adequados."],["03","Execução","Realizamos o serviço com agilidade, cuidado e limpeza."],["04","Teste final","Verificamos o resultado e orientamos sobre prevenção."]].map(([n,t,d])=><article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section regions" id="regioes"><div className="container regions-grid"><div><span className="kicker kicker-light">Chegamos até você</span><h2>Atendimento em Icoaraci e bairros próximos</h2><p>Nossa equipe atende residências, condomínios, comércios e indústrias em toda a região, inclusive em situações emergenciais.</p><div className="area-list">{areas.map(a=><span key={a}><MapPin size={16}/>{a}</span>)}</div><WhatsAppButton label="Consultar atendimento no meu bairro" light /></div><div className="map-card"><iframe title="Mapa da Limpa Fossa Icoaraci" src="https://www.google.com/maps?q=Tv.%20Souza%20Franco%2C%20844%20-%20Agulha%2C%20Bel%C3%A9m%20-%20PA%2C%2066812-430&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-address"><MapPin/><div><strong>Nossa base em Icoaraci</strong><span>Tv. Souza Franco, 844 - Agulha, Belém - PA</span></div></div></div></div></section>

      <section className="section"><div className="container"><div className="section-heading"><div><span className="kicker">Por que escolher a gente</span><h2>Confiança do primeiro contato à finalização</h2></div><p>Estrutura profissional, atendimento humano e compromisso com a solução correta.</p></div><div className="benefits-grid">{([[Clock3,"Atendimento 24h"],[HandCoins,"Pagamento facilitado"],[Truck,"Equipamentos profissionais"],[Leaf,"Responsabilidade ambiental"],[Gauge,"Serviço rápido"],[Users,"Equipe especializada"],[Home,"Atendimento residencial"],[Factory,"Comercial e industrial"]] as const).map(([Icon,title])=><div className="benefit" key={title}><Icon/><span>{title}</span></div>)}</div></div></section>

      <section className="values"><div className="container values-grid"><div className="values-copy"><span className="kicker kicker-light">Compromisso ambiental</span><h2>Eficiência hoje. Responsabilidade com o amanhã.</h2><p>Conduzimos cada serviço com foco em segurança, redução de impactos e manejo responsável dos resíduos. Cuidar da sua estrutura também é cuidar da cidade.</p><div className="values-list"><div><strong>Missão</strong><span>Resolver com agilidade, segurança e respeito.</span></div><div><strong>Visão</strong><span>Ser referência regional em serviços ambientais.</span></div><div><strong>Valores</strong><span>Ética, transparência, cuidado e excelência.</span></div></div></div><div className="eco-mark"><Leaf/><span>Atuação responsável</span><small>Procedimentos técnicos e compromisso ambiental em cada atendimento.</small></div></div></section>

      <section className="section faq" id="duvidas"><div className="container faq-grid"><div><span className="kicker">Perguntas frequentes</span><h2>Tire suas dúvidas antes de solicitar o serviço</h2><p>Se ainda precisar de ajuda, nossa equipe está disponível pelo WhatsApp.</p><WhatsAppButton label="Falar com um especialista" /></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="container final-inner"><div><span className="kicker kicker-light">Não deixe o problema aumentar</span><h2>Precisa de atendimento agora?</h2><p>Fale com a Limpa Fossa Icoaraci e receba orientação rápida para resolver sua emergência.</p></div><WhatsAppButton label="Chamar no WhatsApp" light event="click_orcamento" /></div></section>

      <footer><div className="container footer-grid"><div><img src="/limpa-fossa-icoaraci.png" alt="Limpa Fossa Icoaraci"/><p>Limpeza de fossa, desentupimento e hidrojateamento com atendimento 24 horas em Icoaraci.</p></div><div><strong>Contato</strong><a href="tel:+5591980909686">(91) 98090-9686</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp 24 horas</a></div><div><strong>Endereço</strong><span>Tv. Souza Franco, 844 - Agulha</span><span>Belém - PA, 66812-430</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Limpa Fossa Icoaraci. Todos os direitos reservados.</span><span>Atendimento 24h • Icoaraci, Belém - PA</span></div></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" onClick={()=>track("click_whatsapp")}><Phone/></a>
    </main>
  );
}