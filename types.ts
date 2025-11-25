
export type Category = 
  | 'Framework' 
  | 'Compliance' 
  | 'Governance' 
  | 'Regulation' 
  | 'Standard' 
  | 'Methodology'
  | 'Privacy'
  | 'Law'
  | 'Best Practice';

export type Industry = 
  | 'General / Cross-Industry'
  | 'Financial Services'
  | 'Healthcare'
  | 'Automotive'
  | 'Defense & Government'
  | 'Energy & Utilities'
  | 'Technology & SaaS'
  | 'Retail & E-commerce'
  | 'Education'
  | 'Manufacturing'
  | 'Telecommunications';

export interface Control {
  id: string;
  name: string;
  description: string;
  isImplemented: boolean;
  priority?: 'Critical' | 'High' | 'Medium' | 'Low'; 
  group?: string; 
  groupColor?: string;
  isCustom?: boolean;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface ImplementationStep {
  title: string;
  description: string;
  phase: number;
}

export interface Framework {
  id: string;
  name: string;
  link: string;
  category: Category;
  industry: Industry;
  overview: string;
  purpose: string;
  importance: string; 
  howToApply: string;
  whereToApply: string;
  whenToApply: string;
  scenarios: string;
  controls: Control[];
  useCases: UseCase[];
  implementationSteps?: ImplementationStep[];
  diagramType?: 'nist-csf-cycle' | 'generic-pdca' | 'ai-rmf-cycle' | 'pyramid-maturity' | 'pillar-structure' | 'process-flow' | 'none';
  logoUrl?: string;
  colorTheme: string;
}

export interface FilterState {
  search: string;
  category: Category | 'All';
  industry: Industry | 'All';
}

// --- Toolkit Types ---

export interface ToolkitSettings {
  companyName: string;
  cisoName: string;
  reportDate: string;
  executiveSummary: string;
}

export interface RiskItem {
  id: string;
  risk: string;
  description: string;
  likelihood: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  owner: string;
  status: 'Open' | 'Mitigated' | 'Accepted' | 'Closed';
}

export interface IncidentItem {
  id: string;
  title: string;
  description?: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Investigating' | 'Contained' | 'Closed';
  dateOpened: string;
  owner: string;
}

export interface PolicyItem {
  id: string;
  name: string;
  status: 'Draft' | 'Review' | 'Approved' | 'Deprecated';
  lastReview: string;
  nextReview: string;
  owner: string;
}

export interface AuditItem {
  id: string;
  name: string; 
  type: 'Internal' | 'External';
  status: 'Planned' | 'In Progress' | 'Completed';
  date: string;
  auditor: string;
}

// --- AI Assistant Types ---

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
