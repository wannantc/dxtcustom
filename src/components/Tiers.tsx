import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { fivemTiers, mainTiers, tierIndexById, type Tier } from '@/data/tiers';
import { currencyByLang, type CurrencyCode } from '@/data/translations';

const currencyOptions: { code: CurrencyCode; label: string }[] = [
  { code: 'CAD', label: 'Dólar Canadiano' },
  { code: 'EUR', label: 'Euro' },
  { code: 'USD', label: 'Dólar Americano' },
  { code: 'RUB', label: 'Rublo' },
];

export default function Tiers() {
  const { t, lang, currency, setCurrency } = useLang();
  const [activeTab, setActiveTab] = useState<'main' | 'fivem'>('main');
  const { ref, visible } = useReveal<HTMLDivElement>();
  const currencyData = currencyByLang[lang];
  const visibleTiers = activeTab === 'main' ? mainTiers : fivemTiers;

  return (
    <section id="tiers" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <div className="inline-flex items-center gap-2 border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-neon-cyan">
            <Star className="h-3 w-3" />
            {t.tiersSection.badge}
          </div>
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t.tiersSection.title} <span className="text-glow-cyan text-neon-cyan">{t.tiersSection.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate-400">{t.tiersSection.desc}</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setActiveTab('main')}
            className={`flex-1 rounded border px-5 py-3 font-display text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'main' ? 'border-neon-cyan bg-neon-cyan/15 text-neon-cyan shadow-neon-cyan' : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/30 hover:text-white'}`}
          >
            Tiers de Otimização
          </button>
          <button
            onClick={() => setActiveTab('fivem')}
            className={`flex-1 rounded border px-5 py-3 font-display text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'fivem' ? 'border-neon-blue bg-neon-blue/15 text-neon-blue shadow-neon-blue' : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/30 hover:text-white'}`}
          >
            FiveM OTM
          </button>
        </div>

        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2">
          {currencyOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => setCurrency(option.code)}
              className={`rounded border px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${currency === option.code ? 'border-neon-amber/70 bg-neon-amber/10 text-neon-amber' : 'border-white/10 text-slate-500 hover:border-white/30 hover:text-white'}`}
            >
              {option.code} · {option.label}
            </button>
          ))}
        </div>

        <div className={`mt-16 grid gap-6 ${activeTab === 'main' ? 'lg:grid-cols-3' : 'mx-auto max-w-4xl lg:grid-cols-2'}`}>
          {visibleTiers.map((tier, idx) => (
            <TierCard
              key={tier.id}
              tier={tier}
              translationIndex={tierIndexById(tier.id)}
              price={currencyData.prices[currency][tierIndexById(tier.id)]}
              period={currency}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier, translationIndex, price, period, index }: { tier: Tier; translationIndex: number; price: string; period: string; index: number }) {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const translation = t.tiersSection.items[translationIndex];
  const name = tier.id === 'tier3' ? 'Tier 3 OTM' : translation.name;
  const badgeText = translation.badge || (tier.popular ? t.tiersSection.popular : '');
  const isFivem = tier.id === 'white-bullet' || tier.id === 'strafe';

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} group relative flex flex-col`} style={{ transitionDelay: `${index * 150}ms` }}>
      {badgeText && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
          <div className={`border px-4 py-1 font-display text-[10px] font-bold uppercase tracking-widest ${tier.popular ? 'border-neon-cyan bg-neon-cyan text-ink-900 shadow-neon-cyan' : 'border-white/20 bg-white/10 text-white'}`}>{badgeText}</div>
        </div>
      )}
      <div className={`hud-corner glass relative flex flex-1 flex-col overflow-hidden rounded-lg border ${tier.borderClass} p-8 transition-all duration-500 hover:-translate-y-2`}>
        <div className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${tier.accent === 'cyan' ? 'bg-neon-cyan' : tier.accent === 'green' ? 'bg-neon-green' : tier.accent === 'amber' ? 'bg-neon-amber' : tier.accent === 'blue' ? 'bg-neon-blue' : 'bg-neon-red'}`} />
        <div className="relative">
          <div className={`font-display text-2xl font-black tracking-wider ${tier.textClass}`}>{name}</div>
          <p className="mt-2 font-body text-sm text-slate-400">{translation.tagline}</p>
          {isFivem && (
            <div className="mt-3 inline-flex items-center justify-center">
              <div className={`rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-widest bg-white/5 ${tier.borderClass} text-white`}>FiveM OTM</div>
            </div>
          )}
          <div className="mt-6 flex items-end gap-1">
            <span className="font-display text-4xl font-black text-white">{price}</span>
            <span className="mb-1 font-mono text-xs text-slate-500">{period}</span>
          </div>
          <ul className="mt-6 space-y-3">
            {translation.features.map((feature, featureIndex) => {
              const Icon = tier.featureIcons[featureIndex] || Check;
              return <li key={feature.label} className="flex items-start gap-3"><div className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border ${tier.borderClass} bg-white/5`}><Icon className={`h-3 w-3 ${tier.textClass}`} /></div><div><div className="font-body text-sm font-semibold text-white">{feature.label}</div><div className="font-body text-xs text-slate-500">{feature.detail}</div></div></li>;
            })}
          </ul>
        </div>
        <a href="#contact" className={`btn-neon relative mt-8 block text-center ${tier.popular ? 'bg-neon-cyan text-ink-900 hover:shadow-neon-cyan' : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'}`}>{t.tiersSection.select} {name}</a>
      </div>
    </div>
  );
}
