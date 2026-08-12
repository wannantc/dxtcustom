export type Lang = 'pt' | 'en' | 'ru' | 'fr' | 'es' | 'de';

export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export type CurrencyCode = 'CAD' | 'EUR' | 'USD' | 'RUB';

type CurrencySet = { symbol: string; period: CurrencyCode; defaultCurrency: CurrencyCode; prices: Record<CurrencyCode, string[]> };
const prices = {
  CAD: ['$50', '$25', '$75', '$15', '$10'],
  EUR: ['€30', '€15', '€45', '€9', '€6'],
  USD: ['$37', '$18', '$56', '$11', '$7'],
  RUB: ['3 400 ₽', '1 700 ₽', '5 100 ₽', '1 000 ₽', '680 ₽'],
};
export const currencyByLang: Record<Lang, CurrencySet> = {
  pt: { symbol: '€', period: 'EUR', defaultCurrency: 'EUR', prices },
  en: { symbol: '$', period: 'USD', defaultCurrency: 'USD', prices },
  ru: { symbol: '₽', period: 'RUB', defaultCurrency: 'RUB', prices },
  fr: { symbol: '€', period: 'EUR', defaultCurrency: 'EUR', prices },
  es: { symbol: '€', period: 'EUR', defaultCurrency: 'EUR', prices },
  de: { symbol: '€', period: 'EUR', defaultCurrency: 'EUR', prices },
};

export type TierTranslation = {
  name: string;
  tagline: string;
  badge?: string;
  features: { label: string; detail: string }[];
};

export type Translation = {
  nav: { home: string; tiers: string; process: string; metrics: string; contact: string; cta: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    descPre: string;
    descHighlight: string;
    descPost: string;
    btnTiers: string;
    btnProcess: string;
    explore: string;
    hudTitle: string;
    fps: string;
    boot: string;
    temp: string;
    cpu: string;
    gpu: string;
    ram: string;
    ticker: string[];
  };
  tiersSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    desc: string;
    popular: string;
    select: string;
    standalone: string;
    bestValue: string;
    items: TierTranslation[];
  };
  processSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    desc: string;
    steps: { title: string; description: string }[];
  };
  statsSection: { fps: string; boot: string; temp: string; pcs: string };
  contactSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    desc: string;
    email: string;
    discord: string;
    response: string;
    discordCardDescription: string;
    discordCardNote: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    tierLabel: string;
    specsLabel: string;
    specsPlaceholder: string;
    submit: string;
    submitted: string;
  };
  footer: { tagline: string };
};

export const translations: Record<Lang, Translation> = {
  pt: {
    nav: { home: 'Início', tiers: 'Tiers', process: 'Processo', metrics: 'Métricas', contact: 'Contato', cta: 'Otimizar Agora' },
    hero: {
      badge: 'Sistema Online',
      title1: 'OTIMIZE SEU PC',
      title2: 'ALÉM DOS LIMITES',
      title3: 'DO IMAGINÁVEL',
      descPre: 'A',
      descHighlight: 'DXT Custom',
      descPost: 'aplica engenharia de performance de nível industrial ao seu computador. Mais FPS, menos temperatura, zero travamentos. Tecnologia futurista, resultados reais.',
      btnTiers: 'Ver Tiers',
      btnProcess: 'Como Funciona',
      explore: 'Explore a estação de otimização',
      hudTitle: 'DXT-OS // TELEMETRIA AO VIVO',
      fps: 'FPS MÉDIO',
      boot: 'BOOT TIME',
      temp: 'TEMP. CPU',
      cpu: 'CPU',
      gpu: 'GPU',
      ram: 'RAM',
      ticker: ['CPU OTIMIZADO', 'GPU CALIBRADO', 'RAM EM OVERCLOCK', 'LATÊNCIA REDUZIDA', 'TERMAIS CONTROLADAS', 'FPS DESBLOQUEADO', 'BLOATWARE REMOVIDO', 'REDE PRIORIZADA'],
    },
    tiersSection: {
      badge: 'DXT Optimization',
      title: 'PREÇOS EM EUR',
      titleHighlight: 'MAIS BARATO DO MERCADO',
      desc: 'Todos os preços em euros (€). A otimização mais acessível do mercado. €30 ≈ $50 CAD ≈ $37 USD.',
      popular: 'Mais Popular',
      select: 'Selecionar',
      standalone: 'Standalone',
      bestValue: 'MELHOR VALOR',
      items: [
        {
          name: 'Tier 2 OTM', tagline: 'Pacote completo de otimização',
          badge: 'MELHOR VALOR',
          features: [
            { label: 'Otimização Avançada do Windows', detail: 'Ajuste profundo de sistema e performance' },
            { label: 'Tuning de CPU & RAM', detail: 'Calibração de frequência e memória' },
            { label: 'Otimização de GPU', detail: 'Perfil de clock e performance' },
            { label: 'Otimização de Rede', detail: 'Latência reduzida e priorização de pacotes' },
            { label: 'Gestão de Ventoinhas', detail: 'Curva otimizada para temperatura' },
            { label: 'Otimização Completa de FPS', detail: 'Máximo desempenho em jogos' },
          ],
        },
        {
          name: 'Tier 1 OTM', tagline: 'Otimização essencial de FPS e estabilidade',
          features: [
            { label: 'Otimização de FPS & Estabilidade', detail: 'Foco em ganhos diretos de FPS' },
            { label: 'Otimização do Windows', detail: 'Limpeza e ajuste de sistema' },
            { label: 'Tuning Básico de CPU/RAM', detail: 'Ajustes iniciais de performance' },
            { label: 'Driver Tuning', detail: 'Drivers limpos e configurados' },
          ],
        },
        {
          name: 'BIOS OTM', tagline: 'Overclock de CPU & RAM na BIOS',
          badge: 'Standalone',
          features: [
            { label: 'Overclock de CPU & RAM', detail: 'Frequência e voltagem calibradas' },
            { label: 'Ajuste de Voltagem', detail: 'Calibração precisa de tensão' },
            { label: 'Teste de Estabilidade', detail: 'Validação completa do sistema' },
            { label: 'Suporte Intel & AMD', detail: 'Compatível com todas as plataformas' },
          ],
        },
        {
          name: 'White-Bullet OTM', tagline: 'Otimização de rede e latência FiveM',
          features: [
            { label: 'Otimização de Rede FiveM', detail: 'Redução de lag e packet loss' },
            { label: 'Otimização de Latência', detail: 'Ping reduzido em servidores' },
            { label: 'Estabilidade de Conexão', detail: 'Conexão estável sem desconexões' },
          ],
        },
        {
          name: 'Strafe OTM', tagline: 'Otimização de movimento e input FiveM',
          features: [
            { label: 'Otimização de Movimento', detail: 'Movimento mais fluido e responsivo' },
            { label: 'Otimização de Input', detail: 'Menor latência de entrada' },
            { label: 'Resposta Aprimorada', detail: 'Reação instantânea aos comandos' },
          ],
        },
      ],
    },
    processSection: {
      badge: 'Protocolo DXT',
      title: 'PROCESSO DE',
      titleHighlight: 'OTIMIZAÇÃO',
      desc: 'Quatro estágios de engenharia aplicados ao seu sistema. Cada etapa é documentada e validada antes de avançar para a próxima.',
      steps: [
        { title: 'Diagnóstico', description: 'Análise completa do seu hardware, temperatura, drivers e gargalos de performance com ferramentas proprietárias.' },
        { title: 'Calibração', description: 'Ajuste fino de CPU, GPU, memória e armazenamento. Cada componente é otimizado dentro dos limites seguros.' },
        { title: 'Stress Test', description: 'Testes de estresse prolongados validam a estabilidade do sistema em cargas reais de jogo e renderização.' },
        { title: 'Entrega', description: 'Você recebe um relatório completo com métricas antes/depois e recomendações para manter o desempenho.' },
      ],
    },
    statsSection: { fps: 'Ganho médio de FPS', boot: 'Redução de boot', temp: 'Queda de temperatura', pcs: 'PCs otimizados' },
    contactSection: {
      badge: 'Iniciar Protocolo',
      title: 'ENTRE NO',
      titleHighlight: 'DISCORD',
      desc: 'Junte-se ao nosso servidor Discord para suporte direto, atualizações de serviço e comunicação com a nossa equipa. Não há formulário no site.',
      email: 'Email',
      discord: 'Discord',
      response: 'Em até 24 horas',
      discordCardDescription: 'Entre no servidor para suporte rápido, atualizações de serviço e acesso direto à nossa equipa.',
      discordCardNote: 'Sem formulário no site — contacte-nos diretamente via Discord.',
      guaranteeTitle: 'Garantia DXT',
      guaranteeDesc: 'Se você não sentir diferença após a otimização, refazemos o serviço sem custo. Satisfação 100% garantida.',
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      tierLabel: 'Tier Desejado',
      specsLabel: 'Especificações do PC',
      specsPlaceholder: 'Ex: Ryzen 5 5600, RTX 3060, 16GB RAM...',
      submit: 'Enviar Pedido',
      submitted: 'Protocolo Iniciado',
    },
    footer: { tagline: 'Performance Engineered' },
  },
  en: {
    nav: { home: 'Home', tiers: 'Tiers', process: 'Process', metrics: 'Metrics', contact: 'Contact', cta: 'Optimize Now' },
    hero: {
      badge: 'System Online',
      title1: 'OPTIMIZE YOUR PC',
      title2: 'BEYOND THE LIMITS',
      title3: 'OF IMAGINABLE',
      descPre: 'The',
      descHighlight: 'DXT Custom',
      descPost: 'applies industrial-grade performance engineering to your computer. More FPS, less heat, zero stuttering. Futuristic technology, real results.',
      btnTiers: 'View Tiers',
      btnProcess: 'How It Works',
      explore: 'Explore the optimization station',
      hudTitle: 'DXT-OS // LIVE TELEMETRY',
      fps: 'AVG FPS',
      boot: 'BOOT TIME',
      temp: 'CPU TEMP',
      cpu: 'CPU',
      gpu: 'GPU',
      ram: 'RAM',
      ticker: ['CPU OPTIMIZED', 'GPU TUNED', 'RAM OVERCLOCKED', 'LATENCY REDUCED', 'THERMALS CONTROLLED', 'FPS UNLOCKED', 'BLOATWARE REMOVED', 'NETWORK PRIORITIZED'],
    },
    tiersSection: {
      badge: 'DXT Optimization',
      title: 'PRICES IN USD',
      titleHighlight: 'CHEAPEST ON THE MARKET',
      desc: 'All prices in US Dollars (USD). The most affordable optimization on the market. $37 ≈ $50 CAD ≈ €30 EUR.',
      popular: 'Most Popular',
      select: 'Select',
      standalone: 'Standalone',
      bestValue: 'BEST VALUE',
      items: [
        {
          name: 'Tier 2 OTM', tagline: 'Full optimization package',
          badge: 'BEST VALUE',
          features: [
            { label: 'Advanced Windows Optimization', detail: 'Deep system and performance tuning' },
            { label: 'CPU & RAM Tuning', detail: 'Frequency and memory calibration' },
            { label: 'GPU Optimization', detail: 'Clock curve and performance profile' },
            { label: 'Network Optimization', detail: 'Reduced latency and packet prioritization' },
            { label: 'Fan Management', detail: 'Optimized curve for temperature' },
            { label: 'Complete FPS Optimization', detail: 'Maximum gaming performance' },
          ],
        },
        {
          name: 'Tier 1 OTM', tagline: 'Core FPS & stability optimization',
          features: [
            { label: 'FPS & Stability Optimization', detail: 'Direct FPS gains focus' },
            { label: 'Windows Optimization', detail: 'System cleanup and tuning' },
            { label: 'Basic CPU/RAM Tuning', detail: 'Initial performance adjustments' },
            { label: 'Driver Tuning', detail: 'Clean drivers configured for gaming' },
          ],
        },
        {
          name: 'BIOS OTM', tagline: 'CPU & RAM BIOS overclocking',
          badge: 'Standalone',
          features: [
            { label: 'CPU & RAM Overclocking', detail: 'Frequency and voltage calibrated' },
            { label: 'Voltage Tuning', detail: 'Precise voltage calibration' },
            { label: 'Stability Testing', detail: 'Complete system validation' },
            { label: 'Intel & AMD Supported', detail: 'Compatible with all platforms' },
          ],
        },
        {
          name: 'White-Bullet OTM', tagline: 'FiveM network & latency optimization',
          features: [
            { label: 'FiveM Network Optimization', detail: 'Lag and packet loss reduction' },
            { label: 'Latency Optimization', detail: 'Reduced ping on servers' },
            { label: 'Connection Stability', detail: 'Stable connection without drops' },
          ],
        },
        {
          name: 'Strafe OTM', tagline: 'FiveM movement & input optimization',
          features: [
            { label: 'Movement Optimization', detail: 'Smoother and more responsive movement' },
            { label: 'Input Optimization', detail: 'Lowest input latency' },
            { label: 'Enhanced Response', detail: 'Instant command reaction' },
          ],
        },
      ],
    },
    processSection: {
      badge: 'DXT Protocol',
      title: 'OPTIMIZATION',
      titleHighlight: 'PROCESS',
      desc: 'Four engineering stages applied to your system. Each step is documented and validated before moving to the next.',
      steps: [
        { title: 'Diagnosis', description: 'Complete analysis of your hardware, temperature, drivers and performance bottlenecks with proprietary tools.' },
        { title: 'Calibration', description: 'Fine-tuning of CPU, GPU, memory and storage. Each component optimized within safe limits.' },
        { title: 'Stress Test', description: 'Prolonged stress tests validate system stability under real gaming and rendering loads.' },
        { title: 'Delivery', description: 'You receive a complete report with before/after metrics and recommendations to maintain performance.' },
      ],
    },
    statsSection: { fps: 'Average FPS gain', boot: 'Boot reduction', temp: 'Temperature drop', pcs: 'PCs optimized' },
    contactSection: {
      badge: 'Start Protocol',
      title: 'JOIN OUR',
      titleHighlight: 'DISCORD',
      desc: 'Join our Discord server for direct support, service updates and live help. No site form needed.',
      email: 'Email',
      discord: 'Discord',
      response: 'Within 24 hours',
      discordCardDescription: 'Hop into the server for fast support, service updates and direct access to our team.',
      discordCardNote: 'No contact form on the site — reach us directly through Discord.',
      guaranteeTitle: 'DXT Guarantee',
      guaranteeDesc: 'If you do not feel a difference after optimization, we redo the service at no cost. 100% satisfaction guaranteed.',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      tierLabel: 'Desired Tier',
      specsLabel: 'PC Specifications',
      specsPlaceholder: 'Ex: Ryzen 5 5600, RTX 3060, 16GB RAM...',
      submit: 'Send Request',
      submitted: 'Protocol Started',
    },
    footer: { tagline: 'Performance Engineered' },
  },
  ru: {
    nav: { home: 'Главная', tiers: 'Уровни', process: 'Процесс', metrics: 'Метрики', contact: 'Контакты', cta: 'Оптимизировать' },
    hero: {
      badge: 'Система Онлайн',
      title1: 'ОПТИМИЗИРУЙ ПК',
      title2: 'ЗА ПРЕДЕЛЫ',
      title3: 'ВОЗМОЖНОГО',
      descPre: '',
      descHighlight: 'DXT Custom',
      descPost: 'применяет инженерию производительности промышленного уровня к вашему компьютеру. Больше FPS, меньше температуры, ноль зависаний. Футуристическая технология, реальные результаты.',
      btnTiers: 'Уровни',
      btnProcess: 'Как это работает',
      explore: 'Изучите станцию оптимизации',
      hudTitle: 'DXT-OS // ЖИВАЯ ТЕЛЕМЕТРИЯ',
      fps: 'СРЕДНИЙ FPS',
      boot: 'ВРЕМЯ ЗАГРУЗКИ',
      temp: 'ТЕМП. CPU',
      cpu: 'CPU',
      gpu: 'GPU',
      ram: 'RAM',
      ticker: ['CPU ОПТИМИЗИРОВАН', 'GPU НАСТРОЕН', 'RAM РАЗОГНАНА', 'ЗАДЕРЖКА СНИЖЕНА', 'ТЕМПЕРАТУРА ПОД КОНТРОЛЕМ', 'FPS РАЗБЛОКИРОВАН', 'BLOATWARE УДАЛЕН', 'СЕТЬ ПРИОРИТЕТНА'],
    },
    tiersSection: {
      badge: 'DXT Optimization',
      title: 'ЦЕНЫ В РУБЛЯХ',
      titleHighlight: 'САМЫЕ НИЗКИЕ НА РЫНКЕ',
      desc: 'Все цены в рублях (₽). Самая доступная оптимизация на рынке. 3 400 ₽ ≈ $50 CAD ≈ $37 USD.',
      popular: 'Популярный',
      select: 'Выбрать',
      standalone: 'Standalone',
      bestValue: 'ЛУЧШАЯ ЦЕННОСТЬ',
      items: [
        {
          name: 'Tier 2 OTM', tagline: 'Полный пакет оптимизации',
          badge: 'ЛУЧШАЯ ЦЕННОСТЬ',
          features: [
            { label: 'Расширенная оптимизация Windows', detail: 'Глубокая настройка системы и производительности' },
            { label: 'Настройка CPU и RAM', detail: 'Калибровка частоты и памяти' },
            { label: 'Оптимизация GPU', detail: 'Кривая частоты и профиль производительности' },
            { label: 'Оптимизация сети', detail: 'Снижение задержки и приоритизация пакетов' },
            { label: 'Управление вентиляторами', detail: 'Оптимальная кривая для температуры' },
            { label: 'Полная оптимизация FPS', detail: 'Максимальная производительность в играх' },
          ],
        },
        {
          name: 'Tier 1 OTM', tagline: 'Базовая оптимизация FPS и стабильности',
          features: [
            { label: 'Оптимизация FPS и стабильности', detail: 'Прямой прирост FPS' },
            { label: 'Оптимизация Windows', detail: 'Очистка и настройка системы' },
            { label: 'Базовая настройка CPU/RAM', detail: 'Начальные регулировки производительности' },
            { label: 'Настройка драйверов', detail: 'Чистые драйверы для игр' },
          ],
        },
        {
          name: 'BIOS OTM', tagline: 'Разгон CPU и RAM в BIOS',
          badge: 'Standalone',
          features: [
            { label: 'Разгон CPU и RAM', detail: 'Частота и напряжение откалиброваны' },
            { label: 'Настройка напряжения', detail: 'Точная калибровка напряжения' },
            { label: 'Тест стабильности', detail: 'Полная проверка системы' },
            { label: 'Поддержка Intel и AMD', detail: 'Совместимо со всеми платформами' },
          ],
        },
        {
          name: 'White-Bullet OTM', tagline: 'Оптимизация сети и задержки FiveM',
          features: [
            { label: 'Оптимизация сети FiveM', detail: 'Снижение лагов и потери пакетов' },
            { label: 'Оптимизация задержки', detail: 'Сниженный пинг на серверах' },
            { label: 'Стабильность соединения', detail: 'Стабильное соединение без разрывов' },
          ],
        },
        {
          name: 'Strafe OTM', tagline: 'Оптимизация движения и ввода FiveM',
          features: [
            { label: 'Оптимизация движения', detail: 'Более плавное и отзывчивое движение' },
            { label: 'Оптимизация ввода', detail: 'Минимальная задержка ввода' },
            { label: 'Улучшенный отклик', detail: 'Мгновенная реакция на команды' },
          ],
        },
      ],
    },
    processSection: {
      badge: 'Протокол DXT',
      title: 'ПРОЦЕСС',
      titleHighlight: 'ОПТИМИЗАЦИИ',
      desc: 'Четыре инженерных этапа применяются к вашей системе. Каждый шаг задокументирован и проверен перед переходом к следующему.',
      steps: [
        { title: 'Диагностика', description: 'Полный анализ оборудования, температуры, драйверов и узких мест производительности с помощью собственных инструментов.' },
        { title: 'Калибровка', description: 'Тонкая настройка CPU, GPU, памяти и хранилища. Каждый компонент оптимизирован в безопасных пределах.' },
        { title: 'Стресс-тест', description: 'Длительные стресс-тесты проверяют стабильность системы под реальными игровыми и рендеринг-нагрузками.' },
        { title: 'Доставка', description: 'Вы получаете полный отчёт с метрами до/после и рекомендациями для поддержания производительности.' },
      ],
    },
    statsSection: { fps: 'Средний прирост FPS', boot: 'Снижение загрузки', temp: 'Падение температуры', pcs: 'ПК оптимизировано' },
    contactSection: {
      badge: 'Запустить протокол',
      title: 'ПРИСОЕДИНЯЙТЕСЬ К',
      titleHighlight: 'DISCORD',
      desc: 'Присоединяйтесь к нашему серверу Discord для прямой поддержки, обновлений и общения. На сайте формы нет.',
      email: 'Email',
      discord: 'Discord',
      response: 'В течение 24 часов',
      discordCardDescription: 'Войдите на сервер для быстрого ответа, обновлений и связи с нашей командой.',
      discordCardNote: 'Без формы на сайте — общение только через Discord.',
      guaranteeTitle: 'Гарантия DXT',
      guaranteeDesc: 'Если вы не почувствуете разницу после оптимизации, мы переделаем услугу бесплатно. 100% гарантия удовлетворения.',
      name: 'Имя',
      namePlaceholder: 'Ваше имя',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      tierLabel: 'Желаемый уровень',
      specsLabel: 'Характеристики ПК',
      specsPlaceholder: 'Напр: Ryzen 5 5600, RTX 3060, 16GB RAM...',
      submit: 'Отправить заявку',
      submitted: 'Протокол запущен',
    },
    footer: { tagline: 'Performance Engineered' },
  },
  fr: {
    nav: { home: 'Accueil', tiers: 'Niveaux', process: 'Processus', metrics: 'Métriques', contact: 'Contact', cta: 'Optimiser' },
    hero: {
      badge: 'Système En Ligne',
      title1: 'OPTIMISEZ VOTRE PC',
      title2: 'AU-DELÀ DES LIMITES',
      title3: 'DE L\'IMAGINABLE',
      descPre: 'La',
      descHighlight: 'DXT Custom',
      descPost: 'applique l\'ingénierie de performance de niveau industriel à votre ordinateur. Plus de FPS, moins de température, zéro saccade. Technologie futuriste, résultats réels.',
      btnTiers: 'Voir les Niveaux',
      btnProcess: 'Comment ça Marche',
      explore: 'Explorez la station d\'optimisation',
      hudTitle: 'DXT-OS // TÉLÉMÉTRIE EN DIRECT',
      fps: 'FPS MOYEN',
      boot: 'TEMPS DE BOOT',
      temp: 'TEMP. CPU',
      cpu: 'CPU',
      gpu: 'GPU',
      ram: 'RAM',
      ticker: ['CPU OPTIMISÉ', 'GPU CALIBRÉ', 'RAM OVERCLOCKÉE', 'LATENCE RÉDUITE', 'THERMIQUES CONTRÔLÉES', 'FPS DÉBLOQUÉ', 'BLOATWARE SUPPRIMÉ', 'RÉSEAU PRIORISÉ'],
    },
    tiersSection: {
      badge: 'DXT Optimization',
      title: 'PRIX EN EUR',
      titleHighlight: 'LE MOINS CHER DU MARCHÉ',
      desc: 'Tous les prix en euros (€). L\'optimisation la plus abordable du marché. €30 ≈ $50 CAD ≈ $37 USD.',
      popular: 'Le Plus Populaire',
      select: 'Choisir',
      standalone: 'Standalone',
      bestValue: 'MEILLEURE VALEUR',
      items: [
        {
          name: 'Tier 2 OTM', tagline: 'Pack d\'optimisation complet',
          badge: 'MEILLEURE VALEUR',
          features: [
            { label: 'Optimisation Windows Avancée', detail: 'Réglage approfondi du système et des performances' },
            { label: 'Réglage CPU et RAM', detail: 'Calibration de fréquence et mémoire' },
            { label: 'Optimisation GPU', detail: 'Courbe de fréquence et profil de performance' },
            { label: 'Optimisation Réseau', detail: 'Latence réduite et priorisation des paquets' },
            { label: 'Gestion Ventilateurs', detail: 'Courbe optimisée pour la température' },
            { label: 'Optimisation FPS Complète', detail: 'Performance de jeu maximale' },
          ],
        },
        {
          name: 'Tier 1 OTM', tagline: 'Optimisation de base FPS et stabilité',
          features: [
            { label: 'Optimisation FPS et Stabilité', detail: 'Gains directs de FPS' },
            { label: 'Optimisation Windows', detail: 'Nettoyage et réglage du système' },
            { label: 'Réglage CPU/RAM de Base', detail: 'Ajustements initiaux de performance' },
            { label: 'Tuning Pilotes', detail: 'Pilotes propres configurés pour le jeu' },
          ],
        },
        {
          name: 'BIOS OTM', tagline: 'Overclocking CPU et RAM en BIOS',
          badge: 'Standalone',
          features: [
            { label: 'Overclocking CPU et RAM', detail: 'Fréquence et tension calibrées' },
            { label: 'Réglage de Tension', detail: 'Calibration précise de la tension' },
            { label: 'Test de Stabilité', detail: 'Validation complète du système' },
            { label: 'Intel et AMD Supportés', detail: 'Compatible avec toutes les plateformes' },
          ],
        },
        {
          name: 'White-Bullet OTM', tagline: 'Optimisation réseau et latence FiveM',
          features: [
            { label: 'Optimisation Réseau FiveM', detail: 'Réduction du lag et des pertes de paquets' },
            { label: 'Optimisation de Latence', detail: 'Ping réduit sur les serveurs' },
            { label: 'Stabilité de Connexion', detail: 'Connexion stable sans déconnexions' },
          ],
        },
        {
          name: 'Strafe OTM', tagline: 'Optimisation mouvement et input FiveM',
          features: [
            { label: 'Optimisation de Mouvement', detail: 'Mouvement plus fluide et réactif' },
            { label: 'Optimisation d\'Input', detail: 'Latence d\'entrée minimale' },
            { label: 'Réponse Améliorée', detail: 'Réaction instantanée aux commandes' },
          ],
        },
      ],
    },
    processSection: {
      badge: 'Protocole DXT',
      title: 'PROCESSUS',
      titleHighlight: 'D\'OPTIMISATION',
      desc: 'Quatre étapes d\'ingénierie appliquées à votre système. Chaque étape est documentée et validée avant de passer à la suivante.',
      steps: [
        { title: 'Diagnostic', description: 'Analyse complète de votre matériel, température, pilotes et goulots d\'étranglement avec des outils propriétaires.' },
        { title: 'Calibration', description: 'Réglage fin du CPU, GPU, mémoire et stockage. Chaque composant est optimisé dans des limites de sécurité.' },
        { title: 'Test de Stress', description: 'Des tests de stress prolongés valident la stabilité du système sous des charges réelles de jeu et de rendu.' },
        { title: 'Livraison', description: 'Vous recevez un rapport complet avec des métriques avant/après et des recommandations.' },
      ],
    },
    statsSection: { fps: 'Gain FPS moyen', boot: 'Réduction du boot', temp: 'Baisse de température', pcs: 'PCs optimisés' },
    contactSection: {
      badge: 'Lancer le Protocole',
      title: 'REJOIGNEZ LE',
      titleHighlight: 'DISCORD',
      desc: 'Rejoignez notre serveur Discord pour un support direct, des mises à jour et une assistance en temps réel. Aucun formulaire sur le site.',
      email: 'Email',
      discord: 'Discord',
      response: 'Sous 24 heures',
      discordCardDescription: 'Accédez au support rapide, aux mises à jour et à l’équipe directement sur Discord.',
      discordCardNote: 'Pas de formulaire sur le site — contactez-nous directement via Discord.',
      guaranteeTitle: 'Garantie DXT',
      guaranteeDesc: 'Si vous ne ressentez aucune différence après l\'optimisation, nous refaisons le service gratuitement. Satisfaction 100% garantie.',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'votre@email.com',
      tierLabel: 'Niveau Souhaité',
      specsLabel: 'Spécifications du PC',
      specsPlaceholder: 'Ex: Ryzen 5 5600, RTX 3060, 16GB RAM...',
      submit: 'Envoyer la Demande',
      submitted: 'Protocole Lancé',
    },
    footer: { tagline: 'Performance Engineered' },
  },
  es: {
    nav: { home: 'Inicio', tiers: 'Niveles', process: 'Proceso', metrics: 'Métricas', contact: 'Contacto', cta: 'Optimizar Ahora' },
    hero: {
      badge: 'Sistema En Línea',
      title1: 'OPTIMIZA TU PC',
      title2: 'MÁS ALLÁ DE LOS LÍMITES',
      title3: 'DE LO IMAGINABLE',
      descPre: 'La',
      descHighlight: 'DXT Custom',
      descPost: 'aplica ingeniería de rendimiento de nivel industrial a tu ordenador. Más FPS, menos temperatura, cero tirones. Tecnología futurista, resultados reales.',
      btnTiers: 'Ver Niveles',
      btnProcess: 'Cómo Funciona',
      explore: 'Explora la estación de optimización',
      hudTitle: 'DXT-OS // TELEMETRÍA EN VIVO',
      fps: 'FPS MEDIO',
      boot: 'TIEMPO DE BOOT',
      temp: 'TEMP. CPU',
      cpu: 'CPU',
      gpu: 'GPU',
      ram: 'RAM',
      ticker: ['CPU OPTIMIZADO', 'GPU CALIBRADO', 'RAM EN OVERCLOCK', 'LATENCIA REDUCIDA', 'TÉRMICAS CONTROLADAS', 'FPS DESBLOQUEADO', 'BLOATWARE ELIMINADO', 'RED PRIORIZADA'],
    },
    tiersSection: {
      badge: 'DXT Optimization',
      title: 'PRECIOS EN EUR',
      titleHighlight: 'EL MÁS BARATO DEL MERCADO',
      desc: 'Todos los precios en euros (€). La optimización más asequible del mercado. €30 ≈ $50 CAD ≈ $37 USD.',
      popular: 'Más Popular',
      select: 'Seleccionar',
      standalone: 'Standalone',
      bestValue: 'MEJOR VALOR',
      items: [
        {
          name: 'Tier 2 OTM', tagline: 'Paquete completo de optimización',
          badge: 'MEJOR VALOR',
          features: [
            { label: 'Optimización Avanzada de Windows', detail: 'Ajuste profundo del sistema y rendimiento' },
            { label: 'Ajuste de CPU y RAM', detail: 'Calibración de frecuencia y memoria' },
            { label: 'Optimización de GPU', detail: 'Curva de reloj y perfil de rendimiento' },
            { label: 'Optimización de Red', detail: 'Latencia reducida y priorización de paquetes' },
            { label: 'Gestión de Ventiladores', detail: 'Curva optimizada para temperatura' },
            { label: 'Optimización FPS Completa', detail: 'Máximo rendimiento en juegos' },
          ],
        },
        {
          name: 'Tier 1 OTM', tagline: 'Optimización de base FPS y estabilidad',
          features: [
            { label: 'Optimización FPS y Estabilidad', detail: 'Ganancias directas de FPS' },
            { label: 'Optimización de Windows', detail: 'Limpieza y ajuste del sistema' },
            { label: 'Ajuste Básico CPU/RAM', detail: 'Ajustes iniciales de rendimiento' },
            { label: 'Tuning de Drivers', detail: 'Drivers limpios configurados para juego' },
          ],
        },
        {
          name: 'BIOS OTM', tagline: 'Overclocking de CPU y RAM en BIOS',
          badge: 'Standalone',
          features: [
            { label: 'Overclocking CPU y RAM', detail: 'Frecuencia y voltaje calibrados' },
            { label: 'Ajuste de Voltaje', detail: 'Calibración precisa de voltaje' },
            { label: 'Test de Estabilidad', detail: 'Validación completa del sistema' },
            { label: 'Intel y AMD Soportados', detail: 'Compatible con todas las plataformas' },
          ],
        },
        {
          name: 'White-Bullet OTM', tagline: 'Optimización de red y latencia FiveM',
          features: [
            { label: 'Optimización de Red FiveM', detail: 'Reducción de lag y pérdida de paquetes' },
            { label: 'Optimización de Latencia', detail: 'Ping reducido en servidores' },
            { label: 'Estabilidad de Conexión', detail: 'Conexión estable sin desconexiones' },
          ],
        },
        {
          name: 'Strafe OTM', tagline: 'Optimización de movimiento e input FiveM',
          features: [
            { label: 'Optimización de Movimiento', detail: 'Movimiento más fluido y responsivo' },
            { label: 'Optimización de Input', detail: 'Latencia de entrada mínima' },
            { label: 'Respuesta Mejorada', detail: 'Reacción instantánea a los comandos' },
          ],
        },
      ],
    },
    processSection: {
      badge: 'Protocolo DXT',
      title: 'PROCESO DE',
      titleHighlight: 'OPTIMIZACIÓN',
      desc: 'Cuatro etapas de ingeniería aplicadas a tu sistema. Cada paso se documenta y valida antes de avanzar al siguiente.',
      steps: [
        { title: 'Diagnóstico', description: 'Análisis completo de tu hardware, temperatura, drivers y cuellos de botella con herramientas propias.' },
        { title: 'Calibración', description: 'Ajuste fino de CPU, GPU, memoria y almacenamiento. Cada componente optimizado dentro de límites seguros.' },
        { title: 'Test de Estrés', description: 'Pruebas de estrés prolongadas validan la estabilidad del sistema bajo cargas reales de juego y renderizado.' },
        { title: 'Entrega', description: 'Recibes un informe completo con métricas antes/después y recomendaciones para mantener el rendimiento.' },
      ],
    },
    statsSection: { fps: 'Ganancia media de FPS', boot: 'Reducción de boot', temp: 'Caída de temperatura', pcs: 'PCs optimizados' },
    contactSection: {
      badge: 'Iniciar Protocolo',
      title: 'ÚNETE A',
      titleHighlight: 'DISCORD',
      desc: 'Únete a nuestro servidor Discord para soporte directo, novedades y ayuda en vivo. Sin formulario en el sitio.',
      email: 'Email',
      discord: 'Discord',
      response: 'En 24 horas',
      discordCardDescription: 'Entra al servidor para soporte rápido, actualizaciones y acceso directo a nuestro equipo.',
      discordCardNote: 'Sin formulario en el sitio — contáctanos directamente por Discord.',
      guaranteeTitle: 'Garantía DXT',
      guaranteeDesc: 'Si no notas diferencia tras la optimización, repetimos el servicio sin coste. Satisfacción 100% garantizada.',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      tierLabel: 'Nivel Deseado',
      specsLabel: 'Especificaciones del PC',
      specsPlaceholder: 'Ej: Ryzen 5 5600, RTX 3060, 16GB RAM...',
      submit: 'Enviar Solicitud',
      submitted: 'Protocolo Iniciado',
    },
    footer: { tagline: 'Performance Engineered' },
  },
  de: {
    nav: { home: 'Start', tiers: 'Stufen', process: 'Prozess', metrics: 'Metriken', contact: 'Kontakt', cta: 'Jetzt Optimieren' },
    hero: {
      badge: 'System Online',
      title1: 'OPTIMIERE DEINEN PC',
      title2: 'ÜBER DIE GRENZEN',
      title3: 'HINAUS',
      descPre: 'Die',
      descHighlight: 'DXT Custom',
      descPost: 'wendet industrielle Performance-Engineering auf deinen PC an. Mehr FPS, weniger Temperatur, null Ruckler. Futuristische Technologie, echte Ergebnisse.',
      btnTiers: 'Stufen Ansehen',
      btnProcess: 'So Funktioniert\'s',
      explore: 'Erkunde die Optimierungsstation',
      hudTitle: 'DXT-OS // LIVE-TELEMETRIE',
      fps: 'Ø FPS',
      boot: 'BOOT-ZEIT',
      temp: 'CPU-TEMP',
      cpu: 'CPU',
      gpu: 'GPU',
      ram: 'RAM',
      ticker: ['CPU OPTIMIERT', 'GPU GETUNED', 'RAM ÜBERTAKTET', 'LATENZ REDUZIERT', 'TEMPERATUR KONTROLLIERT', 'FPS ENTRIEGELT', 'BLOATWARE ENTFERNT', 'NETZWERK PRIORISIERT'],
    },
    tiersSection: {
      badge: 'DXT Optimization',
      title: 'PREISE IN EUR',
      titleHighlight: 'GÜNSTIGSTE AM MARKT',
      desc: 'Alle Preise in Euro (€). Die günstigste Optimisierung am Markt. €30 ≈ $50 CAD ≈ $37 USD.',
      popular: 'Beliebteste',
      select: 'Auswählen',
      standalone: 'Standalone',
      bestValue: 'BESTER WERT',
      items: [
        {
          name: 'Tier 2 OTM', tagline: 'Komplettes Optimierungspaket',
          badge: 'BESTER WERT',
          features: [
            { label: 'Erweiterte Windows-Optimierung', detail: 'Tiefe System- und Performance-Abstimmung' },
            { label: 'CPU & RAM Tuning', detail: 'Frequenz- und Speicherkalibrierung' },
            { label: 'GPU-Optimierung', detail: 'Takt-Kurve und Leistungsprofil' },
            { label: 'Netzwerk-Optimierung', detail: 'Reduzierte Latenz und Paketpriorisierung' },
            { label: 'Lüfter-Verwaltung', detail: 'Optimierte Kurve für Temperatur' },
            { label: 'Komplette FPS-Optimierung', detail: 'Maximale Gaming-Leistung' },
          ],
        },
        {
          name: 'Tier 1 OTM', tagline: 'Basis FPS- und Stabilitätsoptimierung',
          features: [
            { label: 'FPS- & Stabilitätsoptimierung', detail: 'Direkte FPS-Gewinne' },
            { label: 'Windows-Optimierung', detail: 'Systembereinigung und -abstimmung' },
            { label: 'Basis CPU/RAM-Tuning', detail: 'Initiale Performance-Anpassungen' },
            { label: 'Treiber-Tuning', detail: 'Saubere Treiber für Gaming' },
          ],
        },
        {
          name: 'BIOS OTM', tagline: 'CPU & RAM BIOS-Overclocking',
          badge: 'Standalone',
          features: [
            { label: 'CPU & RAM Overclocking', detail: 'Frequenz und Spannung kalibriert' },
            { label: 'Spannungs-Tuning', detail: 'Präzise Spannungskalibrierung' },
            { label: 'Stabilitätstest', detail: 'Vollständige Systemvalidierung' },
            { label: 'Intel & AMD Unterstützt', detail: 'Kompatibel mit allen Plattformen' },
          ],
        },
        {
          name: 'White-Bullet OTM', tagline: 'FiveM Netzwerk- und Latenzoptimierung',
          features: [
            { label: 'FiveM Netzwerk-Optimierung', detail: 'Lag- und Packet-Loss-Reduktion' },
            { label: 'Latenz-Optimierung', detail: 'Reduzierter Ping auf Servern' },
            { label: 'Verbindungsstabilität', detail: 'Stabile Verbindung ohne Abbrüche' },
          ],
        },
        {
          name: 'Strafe OTM', tagline: 'FiveM Bewegungs- und Input-Optimierung',
          features: [
            { label: 'Bewegungs-Optimierung', detail: 'Flüssigere und reaktionsschnellere Bewegung' },
            { label: 'Input-Optimierung', detail: 'Geringste Input-Latenz' },
            { label: 'Verbesserte Reaktion', detail: 'Sofortige Reaktion auf Befehle' },
          ],
        },
      ],
    },
    processSection: {
      badge: 'DXT-Protokoll',
      title: 'OPTIMIERUNGS',
      titleHighlight: 'PROZESS',
      desc: 'Vier Engineering-Phasen werden auf dein System angewendet. Jeder Schritt wird dokumentiert und validiert, bevor der nächste folgt.',
      steps: [
        { title: 'Diagnose', description: 'Vollständige Analyse deiner Hardware, Temperatur, Treiber und Leistungsengpässe mit proprietären Tools.' },
        { title: 'Kalibrierung', description: 'Feinabstimmung von CPU, GPU, Speicher und Storage. Jede Komponente innerhalb sicherer Grenzen optimiert.' },
        { title: 'Stresstest', description: 'Langer Stresstest validiert Systemstabilität unter realer Gaming- und Rendering-Last.' },
        { title: 'Lieferung', description: 'Du erhältst einen vollständigen Bericht mit Vorher/Nachher-Metriken und Empfehlungen.' },
      ],
    },
    statsSection: { fps: 'Ø FPS-Gewinn', boot: 'Boot-Reduzierung', temp: 'Temperaturabfall', pcs: 'PCs optimiert' },
    contactSection: {
      badge: 'Protokoll Starten',
      title: 'TRETTE DEM',
      titleHighlight: 'DISCORD BEI',
      desc: 'Tritt unserem Discord-Server bei für direkten Support, Service-News und Hilfe in Echtzeit. Kein Formular auf der Website.',
      email: 'Email',
      discord: 'Discord',
      response: 'Innerhalb 24 Stunden',
      discordCardDescription: 'Komm in den Server für schnellen Support, Updates und direkten Kontakt zum Team.',
      discordCardNote: 'Kein Kontaktformular auf der Seite — direkt über Discord.',
      guaranteeTitle: 'DXT-Garantie',
      guaranteeDesc: 'Wenn du nach der Optimierung keinen Unterschied spürst, machen wir den Service kostenlos neu. 100% Zufriedenheitsgarantie.',
      name: 'Name',
      namePlaceholder: 'Dein Name',
      emailLabel: 'Email',
      emailPlaceholder: 'deine@email.com',
      tierLabel: 'Gewünschte Stufe',
      specsLabel: 'PC-Spezifikationen',
      specsPlaceholder: 'z.B.: Ryzen 5 5600, RTX 3060, 16GB RAM...',
      submit: 'Anfrage Senden',
      submitted: 'Protokoll Gestartet',
    },
    footer: { tagline: 'Performance Engineered' },
  },
};
