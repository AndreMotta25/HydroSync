<!DOCTYPE html><html class="scroll-smooth" lang="pt-BR" style=""><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>HydroSync | Pureza tecnológica em cada gota</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;family=JetBrains+Mono:wght@500&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .soft-glow-primary {
            box-shadow: 0 0 60px 0 rgba(0, 88, 188, 0.1);
        }
        .mesh-gradient-1 {
            background: radial-gradient(at 0% 0%, rgba(173, 198, 255, 0.2) 0%, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(199, 234, 225, 0.2) 0%, transparent 50%);
        }
        .hero-glow {
            background: radial-gradient(circle at 50% 50%, rgba(0, 88, 188, 0.08) 0%, transparent 70%);
        }
        .immune-glow {
            filter: drop-shadow(0 0 40px rgba(0, 88, 188, 0.2));
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        .grid-border {
            border: 1px solid rgba(113, 119, 134, 0.1);
        }
        /* Reveal animation utility */
        .reveal-hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed": "#191c1e",
                        "on-background": "#1a1c1e",
                        "inverse-surface": "#2f3133",
                        "outline-variant": "#c1c6d7",
                        "on-secondary": "#ffffff",
                        "tertiary": "#595c5e",
                        "primary-container": "#0070eb",
                        "on-error": "#ffffff",
                        "error-container": "#ffdad6",
                        "surface-container-low": "#f3f3f6",
                        "surface-container": "#eeeef0",
                        "primary": "#0058bc",
                        "on-primary": "#ffffff",
                        "surface-bright": "#f9f9fc",
                        "secondary-fixed": "#c7eae1",
                        "on-tertiary": "#ffffff",
                        "on-primary-fixed": "#001a41",
                        "inverse-on-surface": "#f0f0f3",
                        "tertiary-fixed-dim": "#c4c7c9",
                        "surface-container-high": "#e8e8ea",
                        "inverse-primary": "#adc6ff",
                        "surface": "#f9f9fc",
                        "surface-variant": "#e2e2e5",
                        "surface-container-lowest": "#ffffff",
                        "on-primary-container": "#fefcff",
                        "surface-tint": "#005bc1",
                        "primary-fixed": "#d8e2ff",
                        "on-tertiary-fixed-variant": "#444749",
                        "secondary-container": "#c7eae1",
                        "on-tertiary-container": "#fbfdff",
                        "on-secondary-container": "#4b6a63",
                        "tertiary-container": "#727577",
                        "background": "#f9f9fc",
                        "surface-dim": "#dadadc",
                        "on-secondary-fixed": "#00201b",
                        "secondary-fixed-dim": "#accec5",
                        "secondary": "#45645e",
                        "on-secondary-fixed-variant": "#2d4c46",
                        "error": "#ba1a1a",
                        "outline": "#717786",
                        "on-primary-fixed-variant": "#004493",
                        "on-surface": "#1a1c1e",
                        "primary-fixed-dim": "#adc6ff",
                        "on-surface-variant": "#414755",
                        "tertiary-fixed": "#e0e3e5",
                        "on-error-container": "#93000a",
                        "surface-container-highest": "#e2e2e5"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-mobile": "20px",
                        "margin-desktop": "64px",
                        "gutter": "24px",
                        "unit": "8px",
                        "max-width": "1440px"
                    },
                    "fontFamily": {
                        "headline-lg-mobile": ["Hanken Grotesk"],
                        "label-sm": ["JetBrains Mono"],
                        "display-xl": ["Hanken Grotesk"],
                        "headline-lg": ["Hanken Grotesk"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg-mobile": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "display-xl": ["72px", {"lineHeight": "80px", "letterSpacing": "-0.04em", "fontWeight": "700"}],
                        "headline-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
</head>
<body class="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary/20">
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-outline/5 transition-all duration-500">
<nav class="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
<div class="font-headline-lg text-[24px] font-bold tracking-tighter text-primary">HydroSync</div>
<div class="hidden md:flex items-center gap-12">
<a class="text-on-surface/60 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-widest" href="#product">Produto</a>
<a class="text-on-surface/60 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-widest" href="#how-it-works">Ciência</a>
<a class="text-on-surface/60 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-widest" href="#features">Tecnologia</a>
<a class="text-on-surface/60 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-widest" href="#testimonials">Casos</a>
</div>
<button class="bg-primary text-on-primary px-8 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            COMPRAR
        </button>
</nav>
</header>
<main class="mt-20">
<!-- Hero Section: Redesigned with massive image background -->
<section class="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-24 px-margin-mobile md:px-margin-desktop w-full" id="hero">
<div class="absolute inset-0 bg-background -z-30"></div>
<div class="absolute inset-0 -z-20 flex justify-center items-center overflow-hidden">
<!-- Massive centered bottle -->
<img alt="HydroSync Smart Bottle" class="h-[90vh] md:h-[120vh] w-auto max-w-none object-contain opacity-50 md:opacity-60" src="https://lh3.googleusercontent.com/aida/ADBb0uiPq7Jo6v25PTz6RfzGCi25dR_aQmfXZVzeyRgexfRNwaoEyPaG0VBMzIYSYVQkrY9ZZyU5ZHxrbMn4DF2vqQvZQkYin7dYQmZYhRzvJRMcCGcA2NL8mKpVoJR14Cc6ryd0bpnhufQl9Lylh6H8shce-tJjVUdsaZYKGguA52ngzMM1ZN-SWEWSgYFpG32FmvN1IxBA7ET_VjXfSTk6n42ToupLkc738RbrwbDf0vbttNAqVSF6uLqMlRB8Jr_aCIPjIZm_X6RI">
</div>
<!-- Gradient overlay for text legibility -->
<div class="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/40 to-background/80 md:bg-gradient-to-b md:from-background/90 md:via-transparent md:to-background/90"></div>
<div class="absolute inset-0 -z-10 bg-background/30 backdrop-blur-[2px]"></div>
<div class="max-w-[1440px] mx-auto w-full z-10 relative flex flex-col items-center text-center mt-12 md:mt-0">
<div class="inline-block px-4 py-1.5 bg-surface/90 text-primary rounded-full font-label-sm mb-8 border border-primary/20 backdrop-blur-md shadow-sm">
                    BIO-TRACKING TECHNOLOGY V2.0
                </div>
<h1 class="font-headline-lg text-[64px] md:text-[120px] leading-[0.9] text-on-surface mb-6 font-bold tracking-tight">
                    HydroSync
                </h1>
<p class="font-headline-lg text-[24px] md:text-[32px] text-on-surface-variant mb-12 max-w-2xl leading-tight font-medium drop-shadow-sm">
                    Estabilizando sua performance através da <span class="text-primary italic">hidratação de precisão</span>.
                </p>
<div class="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
<button class="w-full sm:w-auto bg-primary text-on-primary px-12 py-5 rounded-full font-headline-lg text-[20px] font-bold hover:bg-primary-container transition-all shadow-xl shadow-primary/30 active:scale-95">
                        Adquirir Tecnologia — R$ 289,00
                    </button>
<a class="flex items-center justify-center gap-3 font-bold text-primary hover:gap-5 transition-all bg-surface/90 backdrop-blur-md px-8 py-5 rounded-full border border-primary/10 shadow-lg" href="#how-it-works">
                        Ver a ciência <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<!-- Technical Stats with reveal animation -->
<div class="mt-20 md:mt-32 grid grid-cols-3 gap-12 md:gap-24 border-t border-outline/20 pt-10 reveal-hidden reveal-visible opacity-100 translate-y-0 w-full max-w-4xl" id="hero-stats">
<div>
<div class="font-headline-lg text-[32px] md:text-[40px] font-bold text-on-surface">1%</div>
<div class="text-on-surface-variant text-sm font-medium opacity-80 mt-2">MARGEM DE ERRO</div>
</div>
<div>
<div class="font-headline-lg text-[32px] md:text-[40px] font-bold text-on-surface">30d</div>
<div class="text-on-surface-variant text-sm font-medium opacity-80 mt-2">AUTONOMIA</div>
</div>
<div>
<div class="font-headline-lg text-[32px] md:text-[40px] font-bold text-on-surface">IPX7</div>
<div class="text-on-surface-variant text-sm font-medium opacity-80 mt-2">CERTIFICAÇÃO</div>
</div>
</div>
</div>
</section>
<!-- Problem Section: Grid hierarchy with clean borders -->
<section class="py-32 mesh-gradient-1 border-y border-outline/10 transition-all duration-1000 reveal-visible opacity-100 translate-y-0">
<div class="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
<div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div class="max-w-2xl">
<h2 class="font-headline-lg text-[48px] md:text-[64px] leading-tight mb-6">O custo invisível da <span class="text-primary italic">desidratação</span>.</h2>
<p class="text-xl text-on-surface-variant">Pequenas quedas nos níveis de água impactam massivamente a cognição e o metabolismo basal.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-0 border-collapse">
<div class="p-12 grid-border bg-white/30 hover:bg-white/50 transition-colors group">
<span class="material-symbols-outlined text-primary text-5xl mb-10 group-hover:scale-110 transition-transform block">bolt</span>
<h3 class="font-headline-lg text-[28px] mb-6">Fadiga de Performance</h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">A perda de 2% do peso em água reduz o débito cardíaco e a capacidade aeróbica.</p>
</div>
<div class="p-12 grid-border bg-white/30 hover:bg-white/50 transition-colors group border-x-0 md:border-x">
<span class="material-symbols-outlined text-primary text-5xl mb-10 group-hover:scale-110 transition-transform block">psychology</span>
<h3 class="font-headline-lg text-[28px] mb-6">Declínio Cognitivo</h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">Dores de cabeça e "brain fog" são respostas fisiológicas diretas ao estresse osmótico.</p>
</div>
<div class="p-12 grid-border bg-white/30 hover:bg-white/50 transition-colors group">
<span class="material-symbols-outlined text-primary text-5xl mb-10 group-hover:scale-110 transition-transform block">medical_services</span>
<h3 class="font-headline-lg text-[28px] mb-6">Instabilidade Metabólica</h3>
<p class="font-body-md text-on-surface-variant leading-relaxed">Processos enzimáticos essenciais dependem de um estado hídrico homeostático constante.</p>
</div>
</div>
</div>
</section>
<!-- Product Features (Bento Grid inspired by ref_1) -->
<section class="py-32 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto transition-all duration-1000 reveal-visible opacity-100 translate-y-0" id="features">
<div class="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-10">
<h2 class="font-headline-lg text-[48px] md:text-[64px] tracking-tight">Engenharia em cada<br>ml consumido.</h2>
<p class="font-body-md text-on-surface-variant max-w-sm text-lg">A HydroSync monitora seu biomarcador mais volátil em tempo real, integrando-se ao seu ecossistema digital.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Large Feature: App Integration -->
<div class="md:col-span-8 rounded-[40px] overflow-hidden relative min-h-[500px] group border border-outline/5">
<div class="absolute inset-0 bg-primary/20 blur-[100px] -z-10"></div>
<img alt="App Integration" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz0EiL0TwiUindTQAo9CcDEEuIgS51nUN2s8Uxfbnd__oNEmR76GHyFzNMvnsNl97hkoI4iCqUWW2XP1aEkwfrcCc8fUd9nXyKZZ5jx_1179Ct60gInOxzWxt35KMTp0Cgs6HtYM_ze0LTp35RKH1uPBXREbYeqwzXBK5NGPXNZuiMKRkbI9QfSlesoI64j3__N-rWdESvX5MPiE8m7JAAPEvK2k0osJfuazDuxtCgO0dTnhz6sYibDkvn9os1-exTl14_rDhQLaA">
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
<div class="absolute bottom-0 p-12 text-on-primary">
<h3 class="font-headline-lg text-[40px] mb-6">Algoritmos Preditivos</h3>
<p class="max-w-md text-lg opacity-80 leading-relaxed">Não medimos apenas água. Calculamos sua necessidade baseado em clima, atividade e dados antropométricos.</p>
</div>
</div>
<!-- Small Feature: Flow Sensor -->
<div class="md:col-span-4 rounded-[40px] bg-primary text-on-primary p-12 flex flex-col justify-between shadow-2xl shadow-primary/20">
<div>
<span class="material-symbols-outlined text-6xl mb-8 opacity-80">sensors</span>
<h3 class="font-headline-lg text-[32px] leading-tight mb-6">Sensores Ultrassônicos</h3>
<p class="text-on-primary/80 text-lg leading-relaxed">Precisão de grau laboratorial integrada na tampa, capturando cada gole sem contato físico com a água.</p>
</div>
<div class="mt-12 pt-10 border-t border-on-primary/10">
<div class="flex justify-between items-center mb-4">
<span class="font-label-sm uppercase tracking-widest opacity-60 text-[10px]">Taxa de Sincronia</span>
<span class="font-bold">LIVE</span>
</div>
<div class="h-1 w-full bg-on-primary/10 rounded-full overflow-hidden">
<div class="h-full bg-white w-full animate-[pulse_2s_infinite]"></div>
</div>
</div>
</div>
<!-- Small Feature: Durability -->
<div class="md:col-span-4 rounded-[40px] overflow-hidden relative min-h-[400px] group border border-outline/5">
<div class="absolute inset-0 bg-secondary/10 blur-[80px] -z-10"></div>
<img alt="Durability" class="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUvaKlI_61e4aBXCvJNZI37hH2UQJm27uMbbtVtq15Yu0wpi4dGNXwtKn2juCLpuItb89LmTw0AlxpxcfbHGGyqAWns1hEc9pT9BkudonIPvBIEn5EWUP_IPpQzvxQMPj7IcqUJzdLDBBY2FAlR4i8lfcA0OjEhdW6o5pUtR9CddBSXo1U71o8hjYNZeucrNO88sjtI1pbIqpWkB3yf_4KSznB_JTtTIHEMBbcKr5iPlYO22YIHW7gLJyLt3Nmxx8HjKHepWiNlyU">
<div class="absolute inset-0 bg-on-surface/30"></div>
<div class="absolute inset-0 flex items-center justify-center">
<div class="text-center">
<h4 class="font-headline-lg text-[32px] text-white">RESISTÊNCIA MILITAR</h4>
<p class="text-white/60 font-label-sm mt-2">CERTIFICADO IPX7</p>
</div>
</div>
</div>
<!-- Wide Feature: Battery & Materials -->
<div class="md:col-span-8 rounded-[40px] bg-white border border-outline/10 p-12 flex flex-col md:flex-row gap-12 items-center overflow-hidden">
<div class="flex-1 order-2 md:order-1">
<h3 class="font-headline-lg text-[36px] mb-6 leading-tight">Autonomia Radical.</h3>
<p class="text-on-surface-variant text-lg mb-10 leading-relaxed">Sistema de carregamento magnético que sustenta 30 dias de monitoramento constante com uma única carga de 45 minutos.</p>
<div class="flex flex-wrap gap-4">
<div class="px-5 py-2.5 bg-surface-container-low rounded-xl border border-outline/5 font-bold text-xs uppercase tracking-widest text-primary">Aço Inox 316L</div>
<div class="px-5 py-2.5 bg-surface-container-low rounded-xl border border-outline/5 font-bold text-xs uppercase tracking-widest text-primary">BT 5.2 Low Energy</div>
</div>
</div>
<div class="flex-1 order-1 md:order-2 relative group">
<div class="absolute inset-0 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Battery &amp; Design" class="w-full h-auto drop-shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjNOUwXx8VewUiotzT6wTbxCicKa-EtXadGNgRHdV9iCC1YrHzov90cIDsXBIpZj7fuPJTA_kAu-vkKRNSwwksPPqKLncZDLvg0hIB8huDJJHzjBpZm7TT946r3Zg1HsMC_tiJNXPqWxMVowLHjmVKhe76QivLvabjoIYkhhhOjxqGboMu36XIs12xi3YwfLOKR656KLjwNGrwT4pk8ny_8PfiOjQ9RyYUAyEHvUSh18FG9E6lc1s5FIUKyslxRoeIbjSNnl35t_0">
</div>
</div>
</div>
</section>
<!-- How it Works: Elevated with micro-interactions -->
<section class="py-32 bg-on-surface text-surface relative overflow-hidden transition-all duration-1000 reveal-visible opacity-100 translate-y-0" id="how-it-works">
<div class="absolute inset-0 hero-glow opacity-20"></div>
<div class="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
<div class="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b border-surface/10 pb-20">
<h2 class="font-headline-lg text-[48px] md:text-[64px] tracking-tight leading-[0.9]">Seu ciclo de <br><span class="text-primary-fixed italic">otimização hídrica.</span></h2>
<p class="font-body-md text-outline-variant max-w-sm mt-8 md:mt-0 text-xl">Uma jornada contínua entre dados clínicos e bem-estar subjetivo.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0">
<div class="relative md:pr-12 md:border-r border-surface/5">
<div class="text-[140px] font-display-xl opacity-5 absolute -top-24 -left-6 leading-none">01</div>
<h4 class="font-headline-lg text-[28px] mb-8 relative font-bold">BIO-CONFIG</h4>
<p class="text-outline-variant text-lg leading-relaxed">Sincronização via Bluetooth para definir o "Golden Baseline" baseado no seu metabolismo basal.</p>
</div>
<div class="relative md:px-12 md:border-r border-surface/5">
<div class="text-[140px] font-display-xl opacity-5 absolute -top-24 -left-6 leading-none">02</div>
<h4 class="font-headline-lg text-[28px] mb-8 relative font-bold">MONITORING</h4>
<p class="text-outline-variant text-lg leading-relaxed">Captura passiva. Cada gole é processado e comparado com sua meta dinâmica em tempo real.</p>
</div>
<div class="relative md:px-12 md:border-r border-surface/5">
<div class="text-[140px] font-display-xl opacity-5 absolute -top-24 -left-6 leading-none">03</div>
<h4 class="font-headline-lg text-[28px] mb-8 relative font-bold">LED CUES</h4>
<p class="text-outline-variant text-lg leading-relaxed">Estímulos visuais discretos no anel de luz corrigem comportamentos de desidratação antes da sede surgir.</p>
</div>
<div class="relative md:pl-12">
<div class="text-[140px] font-display-xl opacity-5 absolute -top-24 -left-6 leading-none">04</div>
<h4 class="font-headline-lg text-[28px] mb-8 relative font-bold">EVOLUTION</h4>
<p class="text-outline-variant text-lg leading-relaxed">Análise de longo prazo no App. Descubra como a hidratação afeta seu sono e produtividade.</p>
</div>
</div>
</div>
</section>
<!-- Social Proof: Refined cards with better spacing -->
<section class="py-40 bg-surface-container-lowest transition-all duration-1000 reveal-visible opacity-100 translate-y-0" id="testimonials">
<div class="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
<div class="text-center mb-24">
<h2 class="font-headline-lg text-[48px] md:text-[64px] tracking-tight mb-6">Utilizado por mentes<br>em alta frequência.</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="p-12 glass-card rounded-[32px] border border-outline/5 hover:border-primary/20 transition-all group">
<div class="flex gap-1 text-primary mb-10">
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-xl text-on-surface leading-relaxed mb-12 font-medium">"A HydroSync removeu o atrito da manutenção biológica. Como designer, o foco é meu ativo mais valioso e agora ele é constante."</p>
<div class="flex items-center gap-5">
<div class="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary text-lg">CR</div>
<div>
<p class="font-bold text-lg">Camila R.</p>
<p class="text-label-sm text-on-surface-variant font-semibold uppercase tracking-widest text-[10px]">Senior Product Designer</p>
</div>
</div>
</div>
<div class="p-12 glass-card rounded-[32px] border border-outline/5 hover:border-primary/20 transition-all group">
<div class="flex gap-1 text-primary mb-10">
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-xl text-on-surface leading-relaxed mb-12 font-medium">"O anel de luz é o único 'notificador' que eu permito no meu escritório. Eficiente, discreto e clinicamente necessário."</p>
<div class="flex items-center gap-5">
<div class="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary text-lg">RM</div>
<div>
<p class="font-bold text-lg">Rafael M.</p>
<p class="text-label-sm text-on-surface-variant font-semibold uppercase tracking-widest text-[10px]">Software Architect</p>
</div>
</div>
</div>
<div class="p-12 glass-card rounded-[32px] border border-outline/5 hover:border-primary/20 transition-all group">
<div class="flex gap-1 text-primary mb-10">
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-xl text-on-surface leading-relaxed mb-12 font-medium">"Integrar meus dados de treino com o consumo real de água mudou meu tempo de recuperação. Tecnologia indispensável."</p>
<div class="flex items-center gap-5">
<div class="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary text-lg">FL</div>
<div>
<p class="font-bold text-lg">Fernanda L.</p>
<p class="text-label-sm text-on-surface-variant font-semibold uppercase tracking-widest text-[10px]">Performance Athlete</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ: Clean and minimalist -->
<section class="py-40 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto transition-all duration-1000 reveal-visible opacity-100 translate-y-0">
<h2 class="font-headline-lg text-[40px] md:text-[48px] text-center mb-24 tracking-tight">Questões Técnicas</h2>
<div class="space-y-10">
<details class="group border-b border-outline/10 pb-10">
<summary class="flex justify-between items-center cursor-pointer list-none">
<span class="font-headline-lg text-[22px] font-bold">Metodologia de medição?</span>
<span class="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">add</span>
</summary>
<div class="mt-6 text-on-surface-variant font-body-md text-lg leading-relaxed max-w-3xl">
                    Utilizamos sensores de fluxo ultrassônicos que emitem ondas de alta frequência para calcular o volume deslocado em milissegundos. É a mesma tecnologia usada em dispositivos de medição hospitalar.
                </div>
</details>
<details class="group border-b border-outline/10 pb-10">
<summary class="flex justify-between items-center cursor-pointer list-none">
<span class="font-headline-lg text-[22px] font-bold">Sincronização com ecossistemas de saúde?</span>
<span class="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">add</span>
</summary>
<div class="mt-6 text-on-surface-variant font-body-md text-lg leading-relaxed max-w-3xl">
                    Sim. O App HydroSync possui integração nativa com Apple Health, Google Fit e Garmin Connect, permitindo correlacionar hidratação com queima calórica e sono.
                </div>
</details>
<details class="group border-b border-outline/10 pb-10">
<summary class="flex justify-between items-center cursor-pointer list-none">
<span class="font-headline-lg text-[22px] font-bold">Protocolo de garantia científica?</span>
<span class="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">add</span>
</summary>
<div class="mt-6 text-on-surface-variant font-body-md text-lg leading-relaxed max-w-3xl">
                    Oferecemos 12 meses de garantia total sobre os sensores e 30 dias de trial sem compromisso. Se não perceber melhora nos seus níveis de energia, devolvemos o investimento.
                </div>
</details>
</div>
</section>
<!-- Final CTA: Wide, bold, immersive -->
<section class="py-40 bg-on-surface text-on-primary text-center relative overflow-hidden transition-all duration-1000 reveal-visible opacity-100 translate-y-0">
<div class="absolute inset-0 bg-primary/10 blur-[150px]"></div>
<div class="max-w-[1440px] mx-auto px-margin-mobile relative z-10">
<h2 class="font-headline-lg text-[56px] md:text-[96px] mb-12 tracking-tight leading-none">Atinga sua<br><span class="italic text-primary-fixed">forma final.</span></h2>
<p class="font-body-md text-xl mb-16 opacity-70 max-w-2xl mx-auto">Garanta sua HydroSync hoje e entre para a elite da hidratação tecnológica.</p>
<button class="bg-primary text-white px-16 py-7 rounded-full font-headline-lg text-[24px] font-bold hover:bg-primary-container transition-all shadow-2xl shadow-primary/40 active:scale-95">
                ENCOMENDAR AGORA
            </button>
<p class="mt-12 font-label-sm opacity-50 uppercase tracking-widest text-[10px]">Envio Global • Atendimento VIP • 1 Ano de Garantia</p>
</div>
</section>
</main>
<footer class="bg-white py-24 border-t border-outline/5">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="md:col-span-1">
<div class="font-headline-lg text-[28px] font-bold text-primary mb-8 tracking-tighter">HydroSync</div>
<p class="text-on-surface-variant font-medium leading-relaxed max-w-xs">Pioneirismo em hidratação de precisão para mentes de alta performance.</p>
</div>
<div>
<h4 class="font-bold mb-10 text-xs uppercase tracking-[0.2em] text-on-surface/40">EXPLORAR</h4>
<div class="flex flex-col gap-5">
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Bio-tecnologia</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Estudos Clínicos</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Suporte Técnico</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Comunidade</a>
</div>
</div>
<div>
<h4 class="font-bold mb-10 text-xs uppercase tracking-[0.2em] text-on-surface/40">CONECTAR</h4>
<div class="flex flex-col gap-5">
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Instagram</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">LinkedIn</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Newsletter</a>
</div>
</div>
<div>
<h4 class="font-bold mb-10 text-xs uppercase tracking-[0.2em] text-on-surface/40">BIO-NEWS</h4>
<p class="text-on-surface-variant mb-6 text-sm">Receba insights sobre biohacking e performance.</p>
<div class="flex gap-2">
<input class="bg-surface-container-low border-transparent rounded-full px-6 py-3 flex-1 font-body-md text-sm focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="E-mail" type="email">
<button class="bg-on-surface text-surface w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary transition-all group">
<span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop mt-24 pt-12 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-6">
<p class="font-label-sm text-on-surface-variant opacity-60">© 2024 HydroSync Systems. Todos os direitos reservados.</p>
<div class="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
<a class="hover:text-primary transition-colors" href="#">Privacidade</a>
<a class="hover:text-primary transition-colors" href="#">Termos</a>
<a class="hover:text-primary transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>
<script>
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 20) {
            header.classList.add('bg-white/90', 'h-16', 'shadow-sm');
            header.classList.remove('bg-white/70', 'h-20');
        } else {
            header.classList.remove('bg-white/90', 'h-16', 'shadow-sm');
            header.classList.add('bg-white/70', 'h-20');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // For other sections using the old classes
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Observer specifically for the hero stats section
    const statsSection = document.getElementById('hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // General observer for all main sections
    document.querySelectorAll('section').forEach(section => {
        // Skip adding the initial hidden classes if it's the hero, except for internal parts like stats
        if (section.id !== 'hero') {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        }
    });

</script>

</body></html>
