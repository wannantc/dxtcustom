import { MessageCircle } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const discordInfo = {
    icon: MessageCircle,
    title: t.contactSection.discord,
    description: t.contactSection.discordCardDescription,
    value: 'discord.gg/dxtcustom',
    note: t.contactSection.discordCardNote,
  };
  const Icon = discordInfo.icon;

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-neon-cyan">
              {t.contactSection.badge}
            </div>
            <h2 className="mt-6 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
              {t.contactSection.title} <span className="text-glow-cyan text-neon-cyan">{t.contactSection.titleHighlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate-400">
              {t.contactSection.desc}
            </p>
          </div>

          <div className="mt-12 flex justify-center px-4">
            <a
              href="https://discord.gg/dxtcustom"
              target="_blank"
              rel="noreferrer"
              className="hud-corner glass relative overflow-hidden max-w-2xl rounded-3xl border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/30 hover:bg-neon-cyan/5"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon-cyan via-transparent to-neon-amber opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-neon-cyan/20 bg-ink-900/90 text-neon-cyan shadow-[0_0_30px_rgba(0,255,255,0.12)]">
                <Icon className="h-6 w-6" />
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {discordInfo.title}
                  </p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                    {discordInfo.value}
                  </h3>
                </div>

                <p className="font-body text-sm leading-6 text-slate-400">
                  {discordInfo.description}
                </p>

                <p className="rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-3 text-sm font-medium text-neon-cyan">
                  {discordInfo.note}
                </p>
              </div>
            </a>
          </div>

          <div className="mt-10 rounded-3xl border border-neon-green/20 bg-ink-900/80 p-8 text-center shadow-[0_0_60px_rgba(0,255,136,0.08)]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neon-green">
              {t.contactSection.guaranteeTitle}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              {t.contactSection.guaranteeDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

