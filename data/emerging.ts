
import { Framework } from '../types';

export const emergingFrameworks: Framework[] = [
  {
    id: "iso-42001",
    name: "ISO/IEC 42001:2023",
    link: "https://www.iso.org/standard/81230.html",
    category: "Standard",
    industry: "Technology & SaaS",
    overview: "ISO/IEC 42001:2023 'Information technology — Artificial intelligence — Management system' is the world's first global standard for an AI management system (AIMS). It provides requirements for establishing, implementing, maintaining, and continually improving an AIMS.",
    purpose: "To help organizations develop, provide, or use AI systems responsibly, addressing unique challenges like transparency, explainability, and bias.",
    importance: "It provides a certifiable framework for 'Responsible AI'. As AI regulations (like the EU AI Act) emerge, ISO 42001 will be the gold standard for demonstrating compliance and ethics.",
    howToApply: "Implement the AIMS framework:\n\n1. **AI Risk Assessment**: Identify specific AI risks (e.g., bias, hallucinations, autonomy).\n\n2. **Controls**: Implement controls from Annex A (e.g., Data Quality, Human Oversight, Transparency).\n\n3. **AI Impact Assessment**: Assess the impact on individuals and society.\n\n4. **Governance**: Establish an AI governance board to oversee lifecycle management.",
    whereToApply: "Any organization developing, providing, or using AI products or services.",
    whenToApply: "When deploying AI systems, especially in high-stakes environments.",
    scenarios: "**Scenario: Ethical AI for HR**\n\n**Challenge**: An HR tech company developed an AI resume screener but feared it might learn gender bias.\n\n**Application**: Adopting ISO 42001, they implemented the 'Data Quality' control. They audited their training data for balance. They also applied the 'Human Oversight' control, ensuring a human recruiter reviewed the AI's rejections before final decision.\n\n**Outcome**: They marketed their 'ISO 42001 Aligned' process, building trust with clients worried about AI bias liability.",
    colorTheme: 'fuchsia',
    diagramType: 'generic-pdca',
    controls: [
      { id: "A.6.1", name: "AI Risk Assessment", description: "Assess risks related to AI systems, including unintended consequences and lack of transparency.", isImplemented: false, priority: 'High', group: 'Annex A: Risk' },
      { id: "A.6.2", name: "System Impact Assessment", description: "Assess the potential impact of AI systems on individuals, groups, and society (e.g., fairness, privacy).", isImplemented: false, priority: 'High', group: 'Annex A: Risk' },
      
      { id: "A.7.1", name: "Resources for AI Systems", description: "Ensure adequate resources (computing, data, expertise) are available for the AI system.", isImplemented: false, priority: 'Medium', group: 'Annex A: Lifecycle' },
      { id: "A.7.2", name: "Data Management", description: "Implement processes for data collection, pre-processing, and quality assurance to minimize bias.", isImplemented: false, priority: 'High', group: 'Annex A: Data' },
      { id: "A.7.3", name: "AI System Development", description: "Establish a development lifecycle including requirements, design, coding, and testing.", isImplemented: false, priority: 'High', group: 'Annex A: Lifecycle' },
      
      { id: "A.8.1", name: "Transparency and Explainability", description: "Provide information to users about the AI system's purpose, capabilities, and limitations.", isImplemented: false, priority: 'High', group: 'Annex A: Transparency' },
      { id: "A.8.2", name: "External Communication", description: "Establish channels for users to report issues or concerns about the AI system.", isImplemented: false, priority: 'Medium', group: 'Annex A: Transparency' },
      
      { id: "A.9.1", name: "AI System Operation", description: "Monitor the AI system during operation for performance drift or unexpected behavior.", isImplemented: false, priority: 'High', group: 'Annex A: Ops' },
      { id: "A.9.3", name: "Human Oversight", description: "Enable human intervention or override capabilities for high-risk AI decisions.", isImplemented: false, priority: 'High', group: 'Annex A: Ops' },
      
      { id: "A.10.1", name: "Supplier Management", description: "Manage risks associated with third-party AI components or data providers.", isImplemented: false, priority: 'Medium', group: 'Annex A: Third Party' },
    ],
    useCases: [
      { title: "Responsible AI", description: "Managing bias, fairness, and transparency in algorithms." },
      { title: "Regulatory Prep", description: "Preparing for the EU AI Act." }
    ]
  },
  {
    id: "nist-ai-rmf",
    name: "NIST AI RMF",
    link: "https://www.nist.gov/itl/ai-risk-management-framework",
    category: "Framework",
    industry: "Technology & SaaS",
    overview: "The NIST AI Risk Management Framework (AI RMF 1.0) is a voluntary framework for trustworthy Artificial Intelligence. It is designed to equip organizations to manage risks to individuals, organizations, and society associated with AI systems.",
    purpose: "To improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems.",
    importance: "It is the leading US guidance for AI safety. It shifts the focus from just 'accuracy' to 'trustworthiness' (valid, reliable, safe, secure, resilient, accountable, transparent, explainable, interpretable, privacy-enhanced, and fair).",
    howToApply: "Follow the four core functions:\n\n1. **GOVERN**: Cultivate a culture of risk management.\n\n2. **MAP**: Contextualize risks and understand the AI system's impacts.\n\n3. **MEASURE**: Assess, analyze, and track AI risks quantitatively and qualitatively.\n\n4. **MANAGE**: Prioritize and act upon risks (treat, transfer, avoid).",
    whereToApply: "AI Developers, Users, and Evaluators.",
    whenToApply: "Throughout the AI lifecycle, from design to deployment.",
    scenarios: "**Scenario: Fintech Credit Model**\n\n**Challenge**: A bank wanted to launch an AI credit scoring model but needed to ensure it wasn't discriminatory.\n\n**Application**: Using NIST AI RMF, they 'Mapped' the risk of disparate impact. They 'Measured' fairness using statistical parity metrics. They 'Managed' the risk by adjusting the model weights to ensure equal opportunity across demographics.\n\n**Outcome**: A trustworthy model that met internal ethics standards and regulatory expectations.",
    colorTheme: 'sky',
    diagramType: 'ai-rmf-cycle',
    controls: [
      // GOVERN
      { id: "GOVERN-1.1", name: "Risk Culture", description: "Organizational leadership establishes and cultivates a culture of risk management.", isImplemented: false, priority: 'High', group: 'Govern' },
      { id: "GOVERN-1.2", name: "Strategy Alignment", description: "AI risk management is integrated into organizational strategies and policies.", isImplemented: false, priority: 'High', group: 'Govern' },
      { id: "GOVERN-1.5", name: "Workforce Diversity", description: "Workforce diversity, equity, inclusion, and accessibility are prioritized in AI teams to reduce bias.", isImplemented: false, priority: 'Medium', group: 'Govern' },
      
      // MAP
      { id: "MAP-1.1", name: "Context Establishment", description: "Context is established and understood, including intended use and deployment environment.", isImplemented: false, priority: 'High', group: 'Map' },
      { id: "MAP-1.5", name: "Impact Analysis", description: "Potential impacts to individuals, groups, communities, and society are identified.", isImplemented: false, priority: 'High', group: 'Map' },
      { id: "MAP-2.3", name: "Scientific Integrity", description: "Scientific integrity and data quality processes are verified.", isImplemented: false, priority: 'Medium', group: 'Map' },
      
      // MEASURE
      { id: "MEASURE-1.1", name: "Metric Selection", description: "Appropriate methods and metrics for AI trustworthiness are identified and applied.", isImplemented: false, priority: 'High', group: 'Measure' },
      { id: "MEASURE-2.2", name: "Independent Evaluation", description: "Evaluations involve independent experts or third parties not involved in development.", isImplemented: false, priority: 'High', group: 'Measure' },
      { id: "MEASURE-2.6", name: "Human-AI Interaction", description: "Human-AI interaction is evaluated for clarity and safety.", isImplemented: false, priority: 'Medium', group: 'Measure' },
      
      // MANAGE
      { id: "MANAGE-1.3", name: "Response Strategies", description: "Risk response strategies (avoid, mitigate, transfer, accept) are implemented.", isImplemented: false, priority: 'High', group: 'Manage' },
      { id: "MANAGE-2.4", name: "Incident Response", description: "Mechanisms to track and respond to AI incidents are in place.", isImplemented: false, priority: 'High', group: 'Manage' },
      { id: "MANAGE-4.1", name: "Post-Deployment Monitoring", description: "Post-deployment monitoring is conducted to detect performance degradation or new risks.", isImplemented: false, priority: 'High', group: 'Manage' },
    ],
    useCases: [
      { title: "AI Safety", description: "Ensuring AI systems are safe, secure, and resilient." },
      { title: "Bias Mitigation", description: "Identifying and reducing algorithmic bias." }
    ]
  },
  {
    id: "owasp-samm",
    name: "OWASP SAMM",
    link: "https://owaspsamm.org/",
    category: "Methodology",
    industry: "Technology & SaaS",
    overview: "The Software Assurance Maturity Model (SAMM) is an open framework to help organizations formulate and implement a strategy for software security that is tailored to the specific risks facing the organization.",
    purpose: "To evaluate an organization's existing software security practices and build a balanced software security assurance program.",
    importance: "It is a pragmatic, measurable approach to Application Security (AppSec). It moves beyond 'finding bugs' to 'building secure software'.",
    howToApply: "Assess and improve across 5 business functions and 15 security practices:\n\n1. **Governance**: Strategy, Metrics, Policy.\n\n2. **Design**: Threat Modeling, Security Requirements.\n\n3. **Implementation**: Secure Build, Secure Deployment.\n\n4. **Verification**: Security Testing, Code Review.\n\n5. **Operations**: Incident Management, Environment Management.\n\nTarget maturity levels (1-3) for each practice.",
    whereToApply: "Software Development Teams and AppSec Programs.",
    whenToApply: "When building or improving a Secure SDLC (Software Development Life Cycle).",
    scenarios: "**Scenario: Shift Left**\n\n**Challenge**: A software house only tested for security right before release, causing delays.\n\n**Application**: Using SAMM, they assessed themselves as 'Maturity Level 0' in 'Security Testing'. They implemented a Level 1 practice: automated SAST scanning in the CI/CD pipeline (Implementation/Verification).\n\n**Outcome**: Vulnerabilities were caught during coding (Shift Left), reducing release delays by 40%.",
    colorTheme: 'indigo',
    diagramType: 'pyramid-maturity',
    controls: [
      { id: "DG-1", name: "Strategy & Metrics", description: "Establish a security assurance roadmap and measure progress.", isImplemented: false, priority: 'Medium', group: 'Governance' },
      { id: "IM-1", name: "Defect Management", description: "Track security defects and ensure they are resolved within SLAs.", isImplemented: false, priority: 'High', group: 'Implementation' },
    ],
    useCases: [
      { title: "AppSec", description: "Building security into the software development lifecycle." },
      { title: "DevSecOps", description: "Integrating security into CI/CD pipelines." }
    ]
  },
  {
    id: "iso-27701",
    name: "ISO/IEC 27701:2019",
    link: "https://www.iso.org/standard/71670.html",
    category: "Standard",
    industry: "General / Cross-Industry",
    overview: "ISO/IEC 27701:2019 specifies requirements for a Privacy Information Management System (PIMS). It is an extension to ISO/IEC 27001 and ISO/IEC 27002 for privacy management.",
    purpose: "To help organizations manage privacy controls and demonstrate compliance with privacy laws (like GDPR and CCPA) within the structure of their ISMS.",
    importance: "It bridges the gap between Information Security (ISMS) and Privacy (PIMS). It allows an organization to certify its privacy program.",
    howToApply: "Extend the ISO 27001 ISMS:\n\n1. **Scope**: Include 'processing of PII' in the ISMS scope.\n\n2. **Risk Assessment**: Assess privacy risks to PII principals.\n\n3. **Controls**: Implement PIMS-specific controls (Clause 7 & 8) for PII Controllers and/or Processors.\n\n4. **Audit**: Validate the integrated ISMS/PIMS.",
    whereToApply: "PII Controllers (who decide why/how to process) and PII Processors (who process on behalf of others).",
    whenToApply: "When looking to integrate privacy compliance into an existing security framework.",
    scenarios: "**Scenario: Integrated Audit**\n\n**Challenge**: A company was doing two separate audits: one for Security (ISO 27001) and one for GDPR compliance.\n\n**Application**: They adopted ISO 27701. They mapped their GDPR controls (like Data Subject Rights) to the ISO 27701 framework. They updated their ISO 27001 Risk Assessment to include privacy risks.\n\n**Outcome**: A single, integrated external audit covered both Security and Privacy, saving 30% on audit fees.",
    colorTheme: 'blue',
    diagramType: 'generic-pdca',
    controls: [
      { id: "5.2.1", name: "Determine Role", description: "Determine if the organization acts as a PII controller or PII processor and apply relevant controls.", isImplemented: false, priority: 'High', group: 'PIMS' },
      { id: "7.2.1", name: "Identify Lawful Basis", description: "Determine, document, and communicate the specific lawful basis for processing.", isImplemented: false, priority: 'High', group: 'Controller' },
    ],
    useCases: [
      { title: "Integrated Compliance", description: "Managing GDPR and ISO 27001 in a single system." },
      { title: "Processor Assurance", description: "Proving to clients that you handle their PII securely." }
    ]
  }
];
