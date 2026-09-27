import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import {
  Star,
  MessageCircle,
  Sparkles,
  Palette,
  Clapperboard,
  Globe,
  ArrowRight,
  Check,
  Zap,
  Instagram,
  Music2,
  Send,
  QrCode,
  Wallet,
  CreditCard,
  PenLine,
  BadgeCheck,
} from "lucide-react";

import cartazImg from "@/assets/portfolio/cartaz.jpg";
import postImg from "@/assets/portfolio/post.jpg";
import thumbnailImg from "@/assets/portfolio/thumbnail.jpg";
import editImg from "@/assets/portfolio/edit.jpg";
import siteImg from "@/assets/portfolio/site.jpg";
import panfletoImg from "@/assets/portfolio/panfleto.jpg";

/*
 * Substitua pelo número real de WhatsApp (DDI + DDD + número, só dígitos).
 */
const WHATSAPP_NUMBER = "5567999999999";
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const WA_PEDIDO = wa(
  "Oi! Vim pela promoção de inauguração 🎉 Quero garantir meu desconto especial!",
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Designs, Edits e Sites Profissionais | Preço que Cabe no Seu Bolso",
      },
      {
        name: "description",
        content:
          "Cartazes e artes no Canva a partir de R$ 10, edição de vídeo a partir de R$ 15 e landing pages a partir de R$ 60. Promoção de inauguração para os primeiros 5 clientes!",
      },
      {
        property: "og:title",
        content:
          "Designs, Edits e Sites Profissionais por um Preço que Cabe no Seu Bolso",
      },
      {
        property: "og:description",
        content:
          "Qualidade de alto nível para suas redes sociais, eventos ou negócios — sem cobrar fortunas. Promoção de inauguração: os primeiros 5 clientes ganham desconto especial!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- utilidades de UI ---------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="border-neon/40 bg-neon-soft text-cyan-neon mb-3 inline-block rounded-full border px-4 py-1 text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="fill-primary text-primary h-4 w-4" />
      ))}
    </div>
  );
}

/* ---------- dados ---------- */

const services = [
  {
    icon: Palette,
    title: "Cartazes & Artes no Canva",
    description:
      "Artes para redes sociais, cartazes de eventos, panfletos, avisos e banners no Canva.",
    price: "R$ 10,00",
    promo: "R$ 5 a R$ 8",
    details: ["Entrega rápida", "Até 2 alterações grátis"],
    accent: "neon" as const,
  },
  {
    icon: Clapperboard,
    title: "Edição de Vídeo / Edits",
    description:
      "Cortes dinâmicos, legendas, efeitos e ritmo para Shorts, TikToks, Reels ou vídeos do YouTube.",
    price: "R$ 15,00",
    promo: "R$ 10,00",
    details: [
      "Ideal para começar a criar conteúdo gastando pouco",
      "Até 2 alterações grátis",
    ],
    accent: "cyan" as const,
  },
  {
    icon: Globe,
    title: "Criação de Sites Simples",
    description:
      "Criação e montagem de páginas modernas e responsivas para apresentar seu trabalho ou negócio.",
    price: "R$ 60,00",
    promo: "R$ 40,00",
    details: ["Landing page moderna e responsiva", "Até 2 alterações grátis"],
    accent: "neon" as const,
  },
];

const portfolio = [
  { img: cartazImg, tag: "Cartaz de Evento", title: "Cartaz Neon Night" },
  { img: postImg, tag: "Arte no Canva", title: "Post Promocional" },
  { img: thumbnailImg, tag: "Thumbnail", title: "Capa Top 10" },
  { img: editImg, tag: "Edição de Vídeo", title: "Short com Legendas" },
  { img: siteImg, tag: "Landing Page", title: "Site Moderno" },
  { img: panfletoImg, tag: "Panfleto", title: "Combo Burger" },
];

const steps = [
  {
    icon: Send,
    step: "Passo 1",
    title: "Me chame no WhatsApp",
    text: "Envie sua ideia, texto ou referência pelo WhatsApp.",
  },
  {
    icon: PenLine,
    step: "Passo 2",
    title: "Prévia & sinal",
    text: "Aprovou a prévia? Pagamento de 50% de sinal ou total via PIX/Cartão.",
  },
  {
    icon: Zap,
    step: "Passo 3",
    title: "Receba em alta qualidade",
    text: "Sua arte ou vídeo final entregue em alta qualidade.",
  },
];

const testimonials = [
  {
    name: "Marina S.",
    role: "Festa de aniversário",
    text: "Fiz o cartaz do meu aniversário e ficou incrível! Entrega rápida, preço justo e ainda me ajudou com as cores.",
  },
  {
    name: "Lucas P.",
    role: "Criador de conteúdo",
    text: "Meus Shorts nunca tiveram tantas visualizações. Os edits ficaram exatamente com o estilo que eu queria.",
  },
  {
    name: "Dona Cida",
    role: "Açaí da Cida",
    text: "O sitezinho da minha loja ficou lindo e muito barato. Já mandei para todas as minhas clientes!",
  },
];

/* ---------- página ---------- */

function Index() {
  return (
    <div className="bg-background text-foreground font-sans relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <HowItWorks />
        <Testimonials />
        <Payment />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#avaliacoes", label: "Avaliações" },
  ];
  return (
    <header className="border-border/60 bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
          neo<span className="text-gradient">.design</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-cyan-neon text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={WA_PEDIDO}
          target="_blank"
          rel="noreferrer"
          className="btn-glow bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Pedir orçamento</span>
          <span className="sm:hidden">Pedir</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6"
    >
      <div
        className="hero-orb bg-primary/50 h-96 w-96"
        style={{ top: "-6rem", left: "-8rem" }}
      />
      <div
        className="hero-orb bg-cyan-neon/40 h-80 w-80"
        style={{ bottom: "-4rem", right: "-6rem", animationDelay: "2s" }}
      />
      <div
        className="hero-orb bg-primary/40 h-64 w-64"
        style={{ top: "40%", right: "20%", animationDelay: "4s" }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="pulse-badge border-primary/50 bg-neon-soft mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold sm:text-sm">
            <span className="text-lg leading-none">🔥</span>
            <span className="text-gradient-cyan tracking-wide uppercase">
              Promoção de inauguração
            </span>
            <span className="text-foreground hidden sm:inline">
              — os primeiros 5 clientes ganham desconto especial!
            </span>
            <span className="text-foreground sm:hidden">
              — primeiros 5 clientes!
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
            Designs, <span className="text-gradient">Edits</span> e{" "}
            <span className="text-gradient-cyan">Sites</span> Profissionais por
            um Preço que Cabe no Seu Bolso
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
            Qualidade de alto nível para suas redes sociais, eventos ou negócios
            sem cobrar fortunas.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WA_PEDIDO}
              target="_blank"
              rel="noreferrer"
              className="btn-glow bg-primary text-primary-foreground inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Garantir meu Desconto no WhatsApp
            </a>
            <a
              href="#servicos"
              className="btn-glow border-cyan-neon/50 text-cyan-neon inline-flex w-full items-center justify-center gap-2 rounded-full border bg-transparent px-8 py-4 text-base font-semibold sm:w-auto"
            >
              Ver Serviços e Preços
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="text-muted-foreground mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="text-cyan-neon h-4 w-4" /> Entrega rápida
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="text-cyan-neon h-4 w-4" /> 2 alterações
              grátis
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="text-cyan-neon h-4 w-4" /> PIX, Mercado Pago
              e Cartão
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    {
      icon: Palette,
      title: "Artes & Cartazes",
      text: "Canva, panfletos, banners e posts para redes sociais.",
    },
    {
      icon: Clapperboard,
      title: "Edits Dinâmicos",
      text: "Shorts, Reels e TikToks com cortes, legendas e efeitos.",
    },
    {
      icon: Globe,
      title: "Sites Modernos",
      text: "Landing pages responsivas para mostrar seu trabalho.",
    },
  ];
  return (
    <section id="sobre" className="px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="interactive-card border-border bg-card relative rounded-3xl border p-8 sm:p-10">
            <div className="card-shine pointer-events-none absolute inset-0 rounded-3xl" />
            <span className="border-neon/40 bg-neon-soft text-cyan-neon mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="h-3.5 w-3.5" /> Sobre mim
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Prazer, sou seu novo{" "}
              <span className="text-gradient">Designer & Editor!</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-base leading-relaxed sm:text-lg">
              Criatividade e dedicação para transformar suas ideias em artes
              incríveis. Trabalho com criação de cartazes, artes no Canva,
              thumbnails, edições dinâmicas de vídeo e sites modernos. Meu
              objetivo é entregar um trabalho{" "}
              <strong className="text-foreground">limpo, rápido</strong> e com o{" "}
              <strong className="text-foreground">preço mais acessível</strong>{" "}
              do mercado.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="interactive-card border-border bg-card relative flex items-start gap-4 rounded-2xl border p-6">
                <div className="card-shine pointer-events-none absolute inset-0 rounded-2xl" />
                <div className="bg-neon-soft text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative px-4 py-24 sm:px-6">
      <SectionTitle
        eyebrow="Serviços & Preços"
        title={
          <>
            Tabela de <span className="text-gradient">preços fixos</span>
          </>
        }
        subtitle="Sem pegadinhas: você já sabe quanto vai pagar antes de falar comigo. E quem chegar primeiro paga ainda menos."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <div className="interactive-card border-border bg-card relative flex h-full flex-col overflow-hidden rounded-3xl border p-7">
              <div className="card-shine pointer-events-none absolute inset-0" />
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  s.accent === "cyan"
                    ? "bg-cyan-neon/15 text-cyan-neon"
                    : "bg-neon-soft text-primary"
                }`}
              >
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {s.description}
              </p>

              <div className="border-primary/30 bg-neon-soft/60 mt-6 rounded-2xl border p-4">
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Preço fixo de início
                </p>
                <p className="mt-1 flex flex-wrap items-baseline gap-2">
                  <span className="text-muted-foreground text-sm line-through">
                    {s.price}
                  </span>
                  <span
                    className={`font-display text-3xl font-bold ${
                      s.accent === "cyan" ? "text-cyan-neon" : "text-gradient"
                    }`}
                  >
                    {s.promo}
                  </span>
                </p>
                <p className="text-cyan-neon mt-2 inline-flex items-center gap-1.5 text-xs font-semibold">
                  🎯 Oferta 5 primeiros clientes
                </p>
              </div>

              <ul className="mt-5 space-y-2">
                {s.details.map((d) => (
                  <li
                    key={d}
                    className="text-muted-foreground flex items-start gap-2 text-sm"
                  >
                    <Check className="text-cyan-neon mt-0.5 h-4 w-4 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <a
                href={wa(
                  `Olá! Tenho interesse em: ${s.title} (promoção de inauguração 🎉)`,
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-glow bg-primary text-primary-foreground mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir este serviço
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-24 sm:px-6">
      <SectionTitle
        eyebrow="Portfólio"
        title="Projetos e Amostras"
        subtitle="Confira alguns conceitos e estilos de edições e artes que posso desenvolver para você."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <div className="interactive-card border-border bg-card group relative h-full overflow-hidden rounded-3xl border">
              <div className="card-shine pointer-events-none absolute inset-0 z-10 rounded-3xl" />
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="portfolio-img aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="bg-neon-soft text-cyan-neon inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase">
                  {p.tag}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold">
                  {p.title}
                </h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-24 sm:px-6">
      <SectionTitle
        eyebrow="Passo a passo"
        title={
          <>
            Como funciona o <span className="text-gradient">pedido</span>
          </>
        }
        subtitle="Simples, direto e sem burocracia — do primeiro contato à entrega final."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <div className="interactive-card border-border bg-card relative h-full rounded-3xl border p-7">
              <div className="card-shine pointer-events-none absolute inset-0 rounded-3xl" />
              <div className="flex items-center justify-between">
                <div className="bg-neon-soft text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-cyan-neon text-sm font-bold">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display mt-5 text-xl font-bold">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {s.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="interactive-card border-primary/30 bg-neon-soft/60 relative mx-auto mt-8 max-w-3xl rounded-3xl border p-6 text-center">
          <div className="card-shine pointer-events-none absolute inset-0 rounded-3xl" />
          <p className="text-sm sm:text-base">
            <strong className="font-display text-foreground">
              Regra de alterações:
            </strong>{" "}
            cada pedido inclui até{" "}
            <strong className="text-cyan-neon">
              2 edições/ajustes gratuitos
            </strong>
            . Ajustes extras têm uma pequena taxa de{" "}
            <strong className="text-cyan-neon">R$ 2,00</strong>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="avaliacoes" className="px-4 py-24 sm:px-6">
      <SectionTitle
        eyebrow="Depoimentos"
        title="O que dizem sobre o trabalho"
        subtitle="Avaliações dos primeiros clientes."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <div className="interactive-card border-border bg-card relative flex h-full flex-col rounded-3xl border p-7">
              <div className="card-shine pointer-events-none absolute inset-0 rounded-3xl" />
              <Stars />
              <p className="text-muted-foreground mt-4 flex-1 text-sm leading-relaxed">
                “{t.text}”
              </p>
              <div className="border-border mt-6 flex items-center gap-3 border-t pt-5">
                <div className="bg-neon-soft font-display text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="text-muted-foreground mx-auto mt-10 max-w-xl text-center text-sm sm:text-base">
          Seja um dos{" "}
          <strong className="text-gradient-cyan">primeiros 5 clientes</strong>,
          garanta seu desconto e deixe sua avaliação aqui!
        </p>
      </Reveal>
    </section>
  );
}

function Payment() {
  const methods = [
    { icon: QrCode, name: "PIX", detail: "Aprovação imediata" },
    { icon: Wallet, name: "Mercado Pago", detail: "Rápido e seguro" },
    { icon: CreditCard, name: "Cartão de Crédito", detail: "Parcele se precisar" },
  ];
  return (
    <section id="pagamento" className="px-4 py-24 sm:px-6">
      <SectionTitle
        eyebrow="Pagamento"
        title="Como Pagar"
        subtitle="O pagamento é combinado diretamente pelo WhatsApp de forma rápida e segura."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
        {methods.map((m, i) => (
          <Reveal key={m.name} delay={i * 120}>
            <div className="interactive-card border-border bg-card relative flex h-full flex-col items-center rounded-3xl border p-7 text-center">
              <div className="card-shine pointer-events-none absolute inset-0 rounded-3xl" />
              <div className="bg-cyan-neon/15 text-cyan-neon flex h-14 w-14 items-center justify-center rounded-2xl">
                <m.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold">{m.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{m.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-12 text-center">
          <a
            href={WA_PEDIDO}
            target="_blank"
            rel="noreferrer"
            className="btn-glow bg-primary text-primary-foreground inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-bold sm:text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Fazer meu Pedido Agora via WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const socials = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Music2, href: "https://tiktok.com", label: "TikTok" },
    { icon: MessageCircle, href: wa("Oi! Vim pelo site 😄"), label: "WhatsApp" },
  ];
  return (
    <footer className="border-border border-t px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#inicio" className="font-display text-xl font-bold tracking-tight">
          neo<span className="text-gradient">.design</span>
        </a>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="btn-glow border-border bg-card text-muted-foreground hover:text-cyan-neon flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm">
          © 2026 neo.design — Designs, Edits & Sites. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
