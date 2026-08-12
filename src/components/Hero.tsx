import { useEffect, useState } from 'react';
import { Cpu, Thermometer, Gauge, Zap, ArrowDown, Activity } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

export default function Hero() {
  const { t } = useLang();
  const [bootTime, setBootTime] = useState(0);
  const [fps, setFps] = useState(0);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const bootTarget = 4.2;
    const fpsTarget = 240;
    const tempTarget = 38;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setBootTime(+(bootTarget * eased).toFixed(1));
      setFps(Math.round(fpsTarget * eased));
      setTemp(Math.round(tempTarget * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-neon-cyan">
              <span className="h-2 w-2 animate-pulse rounded-full bg-neon-green" />
              {t.hero.badge}
            </div>

            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t.hero.title1}
              <br />
              <span className="text-glow-cyan text-neon-cyan">{t.hero.title2}</span>
              <br />
              <span className="text-glow-blue text-neon-blue">{t.hero.title3}</span>
            </h1>

            <p className="mt-6 max-w-xl font-body text-lg text-slate-400">
              {t.hero.descPre && <>{t.hero.descPre} </>}
              <span className="text-neon-cyan font-semibold">{t.hero.descHighlight}</span>
              {t.hero.descPre && ' '}
              {t.hero.descPost}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#tiers"
                className="btn-neon bg-neon-cyan text-ink-900 hover:shadow-neon-cyan"
              >
                {t.hero.btnTiers}
              </a>
              <a
                href="#process"
                className="btn-neon border border-neon-cyan/40 bg-transparent text-neon-cyan hover:bg-neon-cyan/10"
              >
                {t.hero.btnProcess}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500">
              <ArrowDown className="h-4 w-4 animate-bounce text-neon-cyan" />
              {t.hero.explore}
            </div>
          </div>

          {/* HUD Panel */}
          <div className="relative">
            <div className="hud-corner glass relative overflow-hidden rounded-lg border-neon-cyan/30 p-6 text-neon-cyan">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="scanline animate-scan absolute inset-x-0" />
              </div>

              <div className="relative flex items-center justify-between border-b border-neon-cyan/20 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                  <Activity className="h-4 w-4" />
                  {t.hero.hudTitle}
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neon-red/70" />
                  <span className="h-2 w-2 rounded-full bg-neon-amber/70" />
                  <span className="h-2 w-2 rounded-full bg-neon-green/70" />
                </div>
              </div>

              <div className="relative mt-5 space-y-5">
                <MetricBar
                  icon={Gauge}
                  label={t.hero.fps}
                  value={`${fps}`}
                  suffix=" FPS"
                  percent={(fps / 240) * 100}
                  color="cyan"
                />
                <MetricBar
                  icon={Zap}
                  label={t.hero.boot}
                  value={`${bootTime}`}
                  suffix=" s"
                  percent={100 - (bootTime / 4.2) * 100}
                  color="green"
                />
                <MetricBar
                  icon={Thermometer}
                  label={t.hero.temp}
                  value={`${temp}`}
                  suffix=" °C"
                  percent={100 - (temp / 90) * 100}
                  color="amber"
                />
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-3 border-t border-neon-cyan/20 pt-4">
                {[
                  { icon: Cpu, label: t.hero.cpu, val: '5.2GHz' },
                  { icon: Activity, label: t.hero.gpu, val: '2850MHz' },
                  { icon: Gauge, label: t.hero.ram, val: '6400MT' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="mx-auto h-5 w-5 text-neon-cyan/70" />
                    <div className="mt-1 font-mono text-lg font-bold text-white">{s.val}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating ring decoration */}
            <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 animate-spin-slow">
              <div className="h-full w-full rounded-full border-2 border-dashed border-neon-cyan/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative mt-16 overflow-hidden border-y border-neon-cyan/20 bg-ink-800/50 py-3">
        <div className="flex w-max animate-ticker gap-12 font-display text-sm font-bold uppercase tracking-widest text-slate-500">
          {[...t.hero.ticker, ...t.hero.ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              {item}
              <span className="text-neon-cyan">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricBar({
  icon: Icon,
  label,
  value,
  suffix,
  percent,
  color,
}: {
  icon: typeof Cpu;
  label: string;
  value: string;
  suffix: string;
  percent: number;
  color: 'cyan' | 'green' | 'amber';
}) {
  const barColor =
    color === 'cyan' ? 'bg-neon-cyan' : color === 'green' ? 'bg-neon-green' : 'bg-neon-amber';
  const textColor =
    color === 'cyan' ? 'text-neon-cyan' : color === 'green' ? 'text-neon-green' : 'text-neon-amber';

  return (
    <div>
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
        <span className="flex items-center gap-2 text-slate-400">
          <Icon className={`h-4 w-4 ${textColor}`} />
          {label}
        </span>
        <span className={`font-bold ${textColor}`}>
          {value}
          {suffix}
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-600">
        <div
          className={`h-full rounded-full ${barColor} transition-all duration-100`}
          style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
        />
      </div>
    </div>
  );
}
