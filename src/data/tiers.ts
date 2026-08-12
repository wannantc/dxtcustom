import {
  Gauge, Zap, Cpu, Shield, Wrench, Activity, MemoryStick, Network, Fan, MonitorSmartphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type TierAccent = 'cyan' | 'green' | 'amber' | 'blue' | 'red';

export type Tier = {
  id: string;
  accent: TierAccent;
  glowClass: string;
  borderClass: string;
  textClass: string;
  shadowClass: string;
  popular?: boolean;
  featureIcons: LucideIcon[];
};

export const mainTiers: Tier[] = [
  {
    id: 'tier1',
    accent: 'green',
    glowClass: 'shadow-neon-green',
    borderClass: 'border-neon-green/40',
    textClass: 'text-neon-green',
    shadowClass: 'group-hover:shadow-neon-green',
    featureIcons: [Gauge, MonitorSmartphone, Cpu, Wrench],
  },
  {
    id: 'tier2',
    accent: 'cyan',
    glowClass: 'shadow-neon-cyan',
    borderClass: 'border-neon-cyan/50',
    textClass: 'text-neon-cyan',
    shadowClass: 'group-hover:shadow-neon-cyan',
    popular: true,
    featureIcons: [MonitorSmartphone, Cpu, Activity, Network, Fan, Gauge],
  },
  {
    id: 'tier3',
    accent: 'amber',
    glowClass: 'shadow-neon-amber',
    borderClass: 'border-neon-amber/50',
    textClass: 'text-neon-amber',
    shadowClass: 'group-hover:shadow-neon-amber',
    featureIcons: [Cpu, MemoryStick, Shield, Zap],
  },
];

export const fivemTiers: Tier[] = [
  {
    id: 'white-bullet',
    accent: 'blue',
    glowClass: 'shadow-neon-blue',
    borderClass: 'border-neon-blue/50',
    textClass: 'text-neon-blue',
    shadowClass: 'group-hover:shadow-neon-blue',
    featureIcons: [Network, Activity, Shield],
  },
  {
    id: 'strafe',
    accent: 'red',
    glowClass: 'shadow-neon-red',
    borderClass: 'border-neon-red/50',
    textClass: 'text-neon-red',
    shadowClass: 'group-hover:shadow-neon-red',
    featureIcons: [Zap, Activity, Gauge],
  },
];

export const allTiers: Tier[] = [...mainTiers, ...fivemTiers];

export function tierIndexById(id: string): number {
  return allTiers.findIndex((t) => t.id === id);
}

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Análise completa do seu hardware, temperatura, drivers e gargalos de performance com ferramentas proprietárias.',
    icon: Activity,
  },
  {
    step: '02',
    title: 'Calibração',
    description: 'Ajuste fino de CPU, GPU, memória e armazenamento. Cada componente é otimizado dentro dos limites seguros.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Stress Test',
    description: 'Testes de estresse prolongados validam a estabilidade do sistema em cargas reais de jogo e renderização.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Entrega',
    description: 'Você recebe um relatório completo com métricas antes/depois e recomendações para manter o desempenho.',
    icon: Shield,
  },
];
