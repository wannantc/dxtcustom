import { useEffect, useRef, useState } from 'react';
import { Cpu, Thermometer, Gauge, ShieldCheck, Terminal, Zap, Activity, HardDrive, Wifi, Fan } from 'lucide-react';

type LogLine = { id: number; text: string; level: 'info' | 'ok' | 'warn' };

const STAGES = [
  { key: 'diag', label: 'DIAGNOSTICS', icon: Gauge, target: 22 },
  { key: 'calib', label: 'CALIBRATION', icon: Cpu, target: 52 },
  { key: 'stress', label: 'STRESS TEST', icon: Thermometer, target: 78 },
  { key: 'deliver', label: 'DELIVERY', icon: ShieldCheck, target: 100 },
];

const LOG_POOL: Record<string, string[]> = {
  diag: [
    'Connecting to remote system via AnyDesk...',
    'CPU detected: Ryzen 5 5600X @ 3.7GHz',
    'GPU detected: RTX 3060 12GB',
    'RAM: 16GB DDR4 @ 3200MHz',
    'Thermal analysis: 78°C (elevated)',
    'Bottleneck identified: GPU 92% / CPU 64%',
    'Outdated drivers found: 3',
    'Bloatware detected: 7 processes',
  ],
  calib: [
    'Applying DXT-OS v4.2 profile...',
    'CPU: PBO curve optimized',
    'GPU: undervolt -85mV stable',
    'RAM: CL14 primary timings',
    'Network: Nagle disabled, gaming priority',
    'Fans: custom curve applied',
    'Windows: non-essential services suspended',
    'Bloatware removed: 7/7',
  ],
  stress: [
    'Running Cinebench R23 (10 min)...',
    'CPU temp stabilized at 64°C (-14°C)',
    'GPU temp stabilized at 58°C (-20°C)',
    'No crashes in 600s of testing',
    'Input latency measured: 2.1ms',
    'Frame pacing: 99% within 3ms',
    'System validated: STABLE',
  ],
  deliver: [
    'Generating DXT report...',
    'Average FPS gain: +38%',
    'Boot reduction: -42%',
    'Saving optimization profile...',
    'Optimization completed successfully',
  ],
};

const SUCCESS_LINES: Record<string, string> = {
  diag: 'Diagnostics complete',
  calib: 'Calibration applied',
  stress: 'System validated',
  deliver: 'Report delivered',
};

const METRICS = [
  { icon: Activity, label: 'CPU LOAD', unit: '%', base: 64, range: 30 },
  { icon: Thermometer, label: 'CPU TEMP', unit: '°C', base: 64, range: 8 },
  { icon: HardDrive, label: 'RAM USAGE', unit: '%', base: 58, range: 12 },
  { icon: Wifi, label: 'LATENCY', unit: 'ms', base: 8, range: 4 },
  { icon: Fan, label: 'FAN RPM', unit: '', base: 1850, range: 200 },
];

function useAnimatedMetric(base: number, range: number) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setVal(Math.round(base + (Math.random() - 0.5) * range));
    }, 600 + Math.random() * 400);
    return () => clearInterval(id);
  }, [base, range]);
  return val;
}

export default function BootLoader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stageIdx, setStageIdx] = useState(0);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const logIdRef = useRef(0);
  const logBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) {
      setFadeOut(true);
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
  }, [done, onDone]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setProgress((p) => {
        if (p >= 100) {
          setDone(true);
          return 100;
        }
        const stage = STAGES[Math.min(stageIdx, STAGES.length - 1)];
        const speed = p < stage.target ? 14 + Math.random() * 10 : 6;
        return Math.min(p + speed * dt, 100);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stageIdx]);

  useEffect(() => {
    if (done) return;
    const stage = STAGES[stageIdx];
    if (progress >= stage.target) {
      setLogs((l) => [
        ...l,
        { id: logIdRef.current++, text: `[OK] ${SUCCESS_LINES[stage.key]}`, level: 'ok' },
      ]);
      if (stageIdx < STAGES.length - 1) setStageIdx(stageIdx + 1);
      else setDone(true);
    }
  }, [progress, stageIdx, done]);

  useEffect(() => {
    if (done) return;
    const stage = STAGES[stageIdx];
    const pool = LOG_POOL[stage.key];
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * pool.length);
      setLogs((l) => {
        if (l.length > 40) l = l.slice(l.length - 40);
        return [...l, { id: logIdRef.current++, text: pool[idx], level: 'info' }];
      });
    }, 380 + Math.random() * 280);
    return () => clearInterval(interval);
  }, [stageIdx, done]);

  useEffect(() => {
    if (logBoxRef.current) {
      logBoxRef.current.scrollTop = logBoxRef.current.scrollHeight;
    }
  }, [logs]);

  const currentStage = STAGES[stageIdx];
  const StageIcon = currentStage.icon;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-ink-950 grid-bg overflow-hidden transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="scanline absolute left-0 w-full animate-scan" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 animate-ping-slow rounded-full bg-neon-cyan/20" />
            <div className="absolute -inset-4 animate-pulse rounded-full border border-neon-cyan/20" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-neon-cyan/50 bg-ink-900/80 shadow-[0_0_40px_rgba(0,240,255,0.3)]">
              <Cpu className="h-14 w-14 text-neon-cyan text-glow-cyan" />
            </div>
            <Zap className="absolute -right-2 -top-2 h-7 w-7 text-neon-amber animate-pulse" />
          </div>
          <h1 className="font-display text-4xl font-black tracking-[0.3em] text-white text-glow-cyan sm:text-5xl">
            DXT-OS
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.5em] text-neon-cyan/70 sm:text-sm">
            Optimization Protocol Running
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STAGES.map((s, i) => {
            const Icon = s.icon;
            const active = i === stageIdx && !done;
            const complete = i < stageIdx || done;
            return (
              <div
                key={s.key}
                className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-4 transition-all duration-500 ${
                  complete
                    ? 'border-neon-green/50 bg-neon-green/10 shadow-[0_0_20px_rgba(0,255,136,0.15)]'
                    : active
                    ? 'border-neon-cyan/70 bg-neon-cyan/10 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                    : 'border-white/10 bg-ink-900/40 opacity-40'
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${
                    complete ? 'text-neon-green' : active ? 'text-neon-cyan' : 'text-slate-500'
                  } ${active ? 'animate-pulse' : ''}`}
                />
                <span
                  className={`font-mono text-[10px] tracking-wider sm:text-xs ${
                    complete ? 'text-neon-green' : active ? 'text-neon-cyan' : 'text-slate-500'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {METRICS.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        <div className="mb-2 flex items-end justify-between">
          <span className="font-mono text-sm text-slate-300">
            <StageIcon className="mr-2 inline h-4 w-4 text-neon-cyan" />
            {currentStage.label}
          </span>
          <span className="font-display text-3xl font-bold text-neon-cyan text-glow-cyan">
            {Math.floor(progress)}%
          </span>
        </div>

        <div className="relative mb-6 h-3 w-full overflow-hidden rounded-full bg-ink-900">
          <div
            className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-green transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute inset-0 animate-pulse bg-neon-cyan/10" />
        </div>

        <div
          ref={logBoxRef}
          className="hud-corner h-48 overflow-y-auto rounded-lg border border-neon-cyan/20 bg-black/80 p-4 font-mono text-[11px] leading-relaxed sm:text-xs"
        >
          {logs.map((l) => (
            <div key={l.id} className="flex gap-2">
              <span className="text-slate-600">›</span>
              <span
                className={
                  l.level === 'ok'
                    ? 'text-neon-green'
                    : l.level === 'warn'
                    ? 'text-neon-amber'
                    : 'text-slate-300'
                }
              >
                {l.text}
              </span>
            </div>
          ))}
          {done && (
            <div className="mt-2 flex items-center gap-2 text-neon-green">
              <Terminal className="h-4 w-4" />
              <span className="font-bold">System optimized. Launching DXT Custom...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  unit,
  base,
  range,
}: {
  icon: typeof Activity;
  label: string;
  unit: string;
  base: number;
  range: number;
}) {
  const val = useAnimatedMetric(base, range);
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-ink-900/60 px-2 py-3">
      <Icon className="h-4 w-4 text-neon-cyan/70" />
      <span className="font-display text-lg font-bold text-white">{val}{unit}</span>
      <span className="font-mono text-[9px] tracking-wider text-slate-500">{label}</span>
    </div>
  );
}
