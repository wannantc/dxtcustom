import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock, Thermometer, Activity } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';

const statsData = [
  { icon: TrendingUp, value: 52, suffix: '%', prefix: '+' },
  { icon: Clock, value: 58, suffix: '%', prefix: '-' },
  { icon: Thermometer, value: 14, suffix: '°C', prefix: '-' },
  { icon: Activity, value: 3240, suffix: '', prefix: '' },
];

export default function Stats() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const labels = [t.statsSection.fps, t.statsSection.boot, t.statsSection.temp, t.statsSection.pcs];

  return (
    <section id="stats" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} glass hud-corner relative overflow-hidden rounded-xl border border-neon-cyan/20 p-10 text-neon-cyan`}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="scanline animate-scan absolute inset-x-0" />
          </div>

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((s, i) => (
              <Counter key={labels[i]} stat={s} label={labels[i]} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({
  stat,
  label,
  index,
  visible,
}: {
  stat: (typeof statsData)[number];
  label: string;
  index: number;
  visible: boolean;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(stat.value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, stat.value]);

  return (
    <div ref={ref} className="text-center" style={{ transitionDelay: `${index * 120}ms` }}>
      <stat.icon className="mx-auto h-8 w-8 text-neon-cyan/70" />
      <div className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">
        {stat.prefix}
        {value.toLocaleString('pt-BR')}
        {stat.suffix}
      </div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-slate-500">
        {label}
      </div>
    </div>
  );
}
