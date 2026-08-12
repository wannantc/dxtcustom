import { useLang } from '@/hooks/useLang';
import { processSteps } from '@/data/tiers';
import { useReveal } from '@/hooks/useReveal';

export default function Process() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <div className="inline-flex items-center gap-2 border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-neon-cyan">
            {t.processSection.badge}
          </div>
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t.processSection.title} <span className="text-glow-cyan text-neon-cyan">{t.processSection.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-slate-400">
            {t.processSection.desc}
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 top-16 hidden h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <ProcessCard key={step.step} step={step} tr={t.processSection.steps[idx]} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  tr,
  index,
}: {
  step: typeof processSteps[number];
  tr: { title: string; description: string };
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} relative`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="hud-corner glass group relative h-full rounded-lg border border-white/5 p-6 transition-all duration-500 hover:border-neon-cyan/40 hover:bg-ink-700/60">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-lg border border-neon-cyan/30 bg-neon-cyan/5 transition-all duration-500 group-hover:bg-neon-cyan/10 group-hover:shadow-neon-cyan">
            <step.icon className="h-6 w-6 text-neon-cyan" />
          </div>
          <div className="font-display text-5xl font-black text-white/5 transition-colors duration-500 group-hover:text-neon-cyan/20">
            {step.step}
          </div>
        </div>

        <h3 className="mt-5 font-display text-xl font-bold tracking-wide text-white">
          {tr.title}
        </h3>
        <p className="mt-2 font-body text-sm text-slate-400">{tr.description}</p>
      </div>
    </div>
  );
}
