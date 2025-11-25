
import { Framework } from '../types';

export const globalFrameworks: Framework[] = [
  {
    id: "nist-csf",
    name: "NIST Cybersecurity Framework (CSF) 2.0",
    link: "https://www.nist.gov/cyberframework",
    category: "Framework",
    industry: "General / Cross-Industry",
    overview: "The NIST Cybersecurity Framework (CSF) 2.0 provides guidance to industry, government agencies, and other organizations to manage cybersecurity risks. It offers a taxonomy of high-level cybersecurity outcomes that can be used by any organization — regardless of its size, sector, or maturity — to better understand, assess, prioritize, and communicate its cybersecurity efforts.",
    purpose: "To help organizations understand, assess, prioritize, and communicate their cybersecurity efforts and risks.",
    importance: "It is the de facto standard for building a cybersecurity program, providing a common language for technical staff and the C-Suite to discuss risk.",
    howToApply: "The Framework is organized around six core functions which provide a strategic view of the lifecycle of an organization's management of cybersecurity risk:\n\n1. **GOVERN (GV)**: The organization’s cybersecurity risk management strategy, expectations, and policy are established, communicated, and monitored.\n\n2. **IDENTIFY (ID)**: The organization’s current cybersecurity risks are understood. This involves asset management, risk assessment, and supply chain risk management.\n\n3. **PROTECT (PR)**: Safeguards to ensure the delivery of critical infrastructure services are outlined. This includes identity management, awareness training, and data security.\n\n4. **DETECT (DE)**: Activities to identify the occurrence of a cybersecurity event are defined. Continuous monitoring is essential here.\n\n5. **RESPOND (RS)**: Actions to take regarding a detected cybersecurity incident are established. This covers incident analysis, mitigation, and reporting.\n\n6. **RECOVER (RC)**: Plans to maintain resilience and restore any capabilities or services that were impaired due to a cybersecurity incident.",
    whereToApply: "Applicable to organizations of all sizes, sectors, and maturities.",
    whenToApply: "Continuously, as a lifecycle for managing cybersecurity risk.",
    scenarios: "**Scenario: Mergers & Acquisitions Integration**\n\n**Challenge**: A multinational retail bank acquired a regional fintech company. The fintech used ad-hoc security tools, while the bank used ISO 27001. The Board needed a unified view of risk.\n\n**Application**: The CISO used NIST CSF 2.0 as the translation layer. They mapped the bank's ISO controls and the fintech's tools to the CSF Core Functions.\n\n**Outcome**: The 'GOVERN' function highlighted a lack of unified policy in the fintech arm. The 'DETECT' function revealed overlapping toolsets. The unified dashboard allowed the Board to visualize risk reduction across the combined entity.",
    diagramType: 'nist-csf-cycle',
    colorTheme: 'sky',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdVSURBVHgB7charge/3sVKbo4wL+p5I/H/m/sP8JgEuSJL2AD2sB2C84kPwsx/Z3W+4wADiCNmF8/u52d1t+bAAAIETx0yT52c7ud1vqAwCSJEkw5tP9nS/1ECRIkiRJmqA5iJ9K8vGuf+f3fA5j/BMA4/E4Xl1d/TNJ9vM5jDGmIUnaAQDc3d09EAqFftr/Uu6+7q/a/wuAQAABQAAAABJRU5ErkJggg==',
    implementationSteps: [
      { phase: 1, title: "Scope & Orient", description: "Identify business mission, objectives, and high-level organizational priorities. Determine scope of systems." },
      { phase: 2, title: "Create Current Profile", description: "Map current cybersecurity activities and controls against the NIST CSF Core functions (Govern, Identify, etc.)." },
      { phase: 3, title: "Risk Assessment", description: "Analyze the operational environment to discern the likelihood of a cybersecurity event and the impact." },
      { phase: 4, title: "Create Target Profile", description: "Describe the desired cybersecurity outcomes based on risk assessment and business needs." },
      { phase: 5, title: "Gap Analysis & Action Plan", description: "Compare Current vs. Target Profiles to identify gaps and create a prioritized implementation plan." }
    ],
    controls: [
      // 1. GOVERN (GV) - 16 Controls (Approx subset of categories/subcategories for readability)
      { id: "GV.OC-01", name: "Organizational Context", description: "The organizational mission, objectives, stakeholders, and legal/regulatory requirements are understood and communicated.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.OC-02", name: "Internal & External Stakeholders", description: "Internal and external stakeholders are determined, and their needs and expectations regarding cybersecurity risk management are understood.", isImplemented: false, priority: 'Medium', group: 'GOVERN' },
      { id: "GV.OC-03", name: "Legal & Regulatory Requirements", description: "Legal, regulatory, and contractual requirements regarding cybersecurity are understood and managed.", isImplemented: true, priority: 'High', group: 'GOVERN' },
      { id: "GV.OC-04", name: "Critical Objectives", description: "Critical objectives, capabilities, and services that stakeholders depend on are identified and communicated.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.RM-01", name: "Risk Management Strategy", description: "Risk management objectives, risk appetite, and risk tolerance statements are established and communicated.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.RM-02", name: "Risk Appetite & Tolerance", description: "Risk appetite and risk tolerance statements are established, communicated, and maintained.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.RM-03", name: "Cybersecurity Risk Determination", description: "Cybersecurity risk is determined and documented.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.RR-01", name: "Leadership & Oversight", description: "Organizational leadership is responsible and accountable for cybersecurity risk and fosters a culture of cybersecurity risk management.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.RR-02", name: "Roles & Responsibilities", description: "Roles, responsibilities, and authorities to foster accountability for performance of cybersecurity risk management are established and communicated.", isImplemented: true, priority: 'High', group: 'GOVERN' },
      { id: "GV.RR-03", name: "Resources", description: "Resources (people, hardware, software, and funding) are allocated to manage cybersecurity risks.", isImplemented: false, priority: 'Medium', group: 'GOVERN' },
      { id: "GV.PO-01", name: "Policy Establishment", description: "Organizational cybersecurity policies are established, communicated, and enforced.", isImplemented: true, priority: 'High', group: 'GOVERN' },
      { id: "GV.PO-02", name: "Policy Review", description: "Organizational cybersecurity policies are reviewed and updated.", isImplemented: false, priority: 'Medium', group: 'GOVERN' },
      { id: "GV.OV-01", name: "Strategy Oversight", description: "Cybersecurity risk management strategy outcomes are reviewed to inform and adjust strategy and direction.", isImplemented: false, priority: 'Medium', group: 'GOVERN' },
      { id: "GV.SC-01", name: "Supply Chain Strategy", description: "Cybersecurity supply chain risk management processes are identified, established, assessed, managed, and agreed to by organizational stakeholders.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.SC-04", name: "Supplier Assessment", description: "Suppliers, third-party providers, and their services are assessed to determine their ability to meet cybersecurity requirements.", isImplemented: false, priority: 'High', group: 'GOVERN' },
      { id: "GV.SC-05", name: "Supplier Monitoring", description: "The cybersecurity posture of suppliers and third-party providers is monitored.", isImplemented: false, priority: 'Medium', group: 'GOVERN' },

      // 2. IDENTIFY (ID) - 15 Controls
      { id: "ID.AM-01", name: "Hardware Inventory", description: "Inventories of hardware managed by the organization are maintained.", isImplemented: true, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.AM-02", name: "Software Inventory", description: "Inventories of software, services, and systems managed by the organization are maintained.", isImplemented: true, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.AM-03", name: "External Systems Inventory", description: "Representations of the organization's external information systems are maintained.", isImplemented: false, priority: 'Medium', group: 'IDENTIFY' },
      { id: "ID.AM-04", name: "Data Inventory", description: "Inventories of data and information assets are maintained.", isImplemented: false, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.AM-05", name: "Asset Prioritization", description: "Assets are prioritized based on criticality and business value.", isImplemented: false, priority: 'Medium', group: 'IDENTIFY' },
      { id: "ID.AM-07", name: "Asset Disposal", description: "Data, hardware, software, and other assets are disposed of securely.", isImplemented: true, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.RA-01", name: "Vulnerabilities Identified", description: "Cybersecurity vulnerabilities are identified and documented.", isImplemented: true, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.RA-07", name: "Continuous Vulnerability Scanning", description: "Automated vulnerability scans are performed continuously (e.g., weekly or daily) on all internal and external assets to identify emerging threats.", isImplemented: false, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.RA-02", name: "Threat Intelligence", description: "Cyber threat intelligence is received from information sharing forums and sources.", isImplemented: false, priority: 'Medium', group: 'IDENTIFY' },
      { id: "ID.RA-03", name: "Threat Identification", description: "Internal and external threats to the organization are identified and documented.", isImplemented: false, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.RA-04", name: "Impact Analysis", description: "Potential business impacts and likelihoods are identified.", isImplemented: false, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.RA-05", name: "Risk Assessment", description: "Threats, vulnerabilities, likelihoods, and impacts are used to determine risk.", isImplemented: false, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.RA-06", name: "Risk Responses", description: "Risk responses are identified and prioritized.", isImplemented: false, priority: 'High', group: 'IDENTIFY' },
      { id: "ID.IM-01", name: "Improvement Plans", description: "Improvements to the organization's cybersecurity capabilities are identified.", isImplemented: false, priority: 'Medium', group: 'IDENTIFY' },
      { id: "ID.IM-02", name: "Improvement Execution", description: "Improvements are implemented and monitored.", isImplemented: false, priority: 'Medium', group: 'IDENTIFY' },
      { id: "ID.IM-03", name: "Improvement Sharing", description: "Lessons learned are shared within the organization.", isImplemented: false, priority: 'Medium', group: 'IDENTIFY' },

      // 3. PROTECT (PR) - 34 Controls
      { id: "PR.AA-01", name: "Identity Policy", description: "Identity and access management policies and procedures are established.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AA-02", name: "Access Authorization", description: "Access to assets and associated facilities is limited to authorized users, processes, and devices.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AA-03", name: "Access Enforcement", description: "Access permissions and authorizations are managed, incorporating the principles of least privilege and separation of duties.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AA-04", name: "Identity Proofing", description: "Users, devices, and other assets are authenticated (e.g., single-factor, multi-factor) commensurate with the risk of the transaction.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AA-05", name: "Authenticator Management", description: "Credentials and identities are issued, managed, verified, revoked, and audited.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AA-06", name: "Physical Access", description: "Physical access to assets is managed and protected.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AT-01", name: "Role-Based Training", description: "All personnel are provided cybersecurity awareness training.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AT-02", name: "Specialized Training", description: "Specialized training is provided to personnel with specific cybersecurity responsibilities.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.DS-01", name: "Data Confidentiality", description: "Data-at-rest is protected (e.g., encrypted).", isImplemented: false, priority: 'High', group: 'PROTECT' },
      { id: "PR.DS-02", name: "Data Integrity", description: "Data-in-transit is protected (e.g., TLS/SSL).", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.DS-10", name: "Data Availability", description: "Adequate capacity is maintained to ensure availability.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.DS-11", name: "Backups", description: "Backups of information are conducted, maintained, and tested.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.PS-01", name: "Configuration Management", description: "Configuration management practices are established and applied.", isImplemented: false, priority: 'High', group: 'PROTECT' },
      { id: "PR.PS-02", name: "Software Integrity", description: "Software is checked for integrity (e.g., code signing) before execution.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.PS-03", name: "Software Installation", description: "Software installation is controlled (e.g., allow-listing).", isImplemented: true, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.PS-04", name: "Log Records", description: "Log records are determined, documented, implemented, and reviewed.", isImplemented: false, priority: 'High', group: 'PROTECT' },
      { id: "PR.PS-05", name: "Installation Restrictions", description: "Installation and execution of unauthorized software are prevented.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.PS-06", name: "Vulnerability Management", description: "Vulnerabilities are managed and patched.", isImplemented: false, priority: 'High', group: 'PROTECT' },
      { id: "PR.PS-07", name: "Automated Patch Management", description: "Patches for operating systems and third-party applications are deployed automatically within defined timeframes based on severity (e.g., Critical < 48hrs).", isImplemented: false, priority: 'Critical', group: 'PROTECT' },
      { id: "PR.IR-01", name: "Network Security", description: "Networks are protected (e.g., segmentation, firewalls).", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.IR-02", name: "Remote Access", description: "Remote access is managed (e.g., VPN, MFA).", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.IR-03", name: "Resilient Architecture", description: "Systems are designed to be resilient to adverse events.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.IR-04", name: "Endpoint Security", description: "Endpoints are protected (e.g., EDR/EPP).", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AC-01", name: "Access Control Policy", description: "Access control policies are enforced.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AC-02", name: "Remote Access Mgmt", description: "Remote access is managed and controlled.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AC-03", name: "Access Permissions", description: "Access permissions are managed.", isImplemented: true, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.AC-04", name: "User Privacy", description: "User privacy is protected.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.AC-05", name: "Separation of Duties", description: "Separation of duties is enforced.", isImplemented: false, priority: 'High', group: 'PROTECT' },
      { id: "PR.AC-06", name: "Least Privilege", description: "Least privilege is enforced.", isImplemented: true, priority: 'High', group: 'PROTECT' },
      { id: "PR.AC-07", name: "Privileged Access", description: "Privileged accounts are managed and monitored.", isImplemented: false, priority: 'High', group: 'PROTECT' },
      { id: "PR.MA-01", name: "Maintenance", description: "Maintenance and repair of assets is performed and logged.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.MA-02", name: "Remote Maintenance", description: "Remote maintenance is controlled.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.PT-01", name: "Audit/Log Records", description: "Audit/log records are determined, documented, implemented, and reviewed.", isImplemented: false, priority: 'High', group: 'PROTECT' },
      { id: "PR.PT-02", name: "Removable Media", description: "Removable media is protected and restricted.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },
      { id: "PR.PT-03", name: "Least Functionality", description: "Systems are configured to provide only essential capabilities.", isImplemented: false, priority: 'Medium', group: 'PROTECT' },

      // 4. DETECT (DE) - 15 Controls
      { id: "DE.CM-01", name: "Monitoring Environment", description: "The physical environment and assets are monitored to detect potential cybersecurity events.", isImplemented: false, priority: 'Medium', group: 'DETECT' },
      { id: "DE.CM-02", name: "Monitoring External", description: "The external environment is monitored to detect potential cybersecurity events.", isImplemented: false, priority: 'Medium', group: 'DETECT' },
      { id: "DE.CM-03", name: "Monitoring Personnel", description: "Personnel activity is monitored to detect potential cybersecurity events.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.CM-06", name: "Activity Monitoring", description: "External service provider activity is monitored to detect potential cybersecurity events.", isImplemented: false, priority: 'Medium', group: 'DETECT' },
      { id: "DE.CM-09", name: "Vulnerability Scans", description: "Vulnerability scans are performed.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.AE-01", name: "Event Detection", description: "A baseline of network operations and expected data flows for users and systems is established and managed.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.AE-02", name: "Event Analysis", description: "Detected events are analyzed to understand targets and methods.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.AE-03", name: "Event Collection", description: "Event data are collected and correlated from multiple sources and sensors.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.AE-04", name: "Impact Determination", description: "Impact of events is determined.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.AE-05", name: "Incident Alerting", description: "Incident alert thresholds are established.", isImplemented: false, priority: 'Medium', group: 'DETECT' },
      { id: "DE.AE-06", name: "Forensics", description: "Forensic analysis is performed.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.AE-07", name: "Reporting", description: "Incident reporting is performed.", isImplemented: false, priority: 'High', group: 'DETECT' },
      { id: "DE.AE-08", name: "Threat Hunting", description: "Cyber threat hunting activities are conducted.", isImplemented: false, priority: 'Medium', group: 'DETECT' },
      { id: "DE.DP-01", name: "Detection Roles", description: "Roles and responsibilities for detection are defined.", isImplemented: true, priority: 'Medium', group: 'DETECT' },
      { id: "DE.DP-02", name: "Detection Activities", description: "Detection activities comply with all applicable requirements.", isImplemented: true, priority: 'High', group: 'DETECT' },

      // 5. RESPOND (RS) - 17 Controls
      { id: "RS.MA-01", name: "Incident Plan", description: "An incident response plan is established and maintained.", isImplemented: true, priority: 'High', group: 'RESPOND' },
      { id: "RS.MA-02", name: "Incident Reporting", description: "Incident reporting requirements are understood and met.", isImplemented: true, priority: 'High', group: 'RESPOND' },
      { id: "RS.MA-03", name: "Personnel Support", description: "Personnel are supported during incident handling.", isImplemented: false, priority: 'Medium', group: 'RESPOND' },
      { id: "RS.MA-04", name: "Incident Categorization", description: "Incidents are categorized and prioritized.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.MA-05", name: "Incident Tracking", description: "Incidents are tracked and documented.", isImplemented: false, priority: 'Medium', group: 'RESPOND' },
      { id: "RS.AN-03", name: "Forensic Analysis", description: "Forensic analysis is performed in support of incident response.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.CO-02", name: "Communication Internal", description: "Internal stakeholders are notified of incidents.", isImplemented: true, priority: 'High', group: 'RESPOND' },
      { id: "RS.CO-03", name: "Communication External", description: "External stakeholders are notified of incidents.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.MI-01", name: "Containment", description: "Incidents are contained.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.MI-02", name: "Mitigation", description: "Incidents are mitigated.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.MI-03", name: "Vulnerability Mitigation", description: "Newly identified vulnerabilities are mitigated or accepted as risk.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.MI-04", name: "Risk-Based Remediation", description: "Vulnerabilities are prioritized for remediation based on risk (CVSS score, exploitability, and asset criticality) rather than just severity.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.MI-05", name: "Remediation Verification", description: "Remediation actions are verified through re-scanning or penetration testing to ensure the vulnerability is effectively closed.", isImplemented: false, priority: 'Medium', group: 'RESPOND' },
      { id: "RS.IM-01", name: "Response Improvement", description: "Response plans are improved based on lessons learned.", isImplemented: false, priority: 'Medium', group: 'RESPOND' },
      { id: "RS.IM-02", name: "Response Strategies", description: "Response strategies are updated.", isImplemented: false, priority: 'Medium', group: 'RESPOND' },
      { id: "RS.AN-01", name: "Analysis Investigation", description: "Notifications from detection systems are investigated.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.AN-02", name: "Analysis Impact", description: "The impact of the incident is understood.", isImplemented: false, priority: 'High', group: 'RESPOND' },
      { id: "RS.AN-04", name: "Analysis Categorization", description: "Incidents are categorized consistent with response plans.", isImplemented: false, priority: 'Medium', group: 'RESPOND' },
      { id: "RS.AN-05", name: "Analysis Processes", description: "Processes are established to receive, analyze and respond to vulnerabilities.", isImplemented: false, priority: 'Medium', group: 'RESPOND' },

      // 6. RECOVER (RC) - 10 Controls
      { id: "RC.RP-01", name: "Recovery Plan", description: "Recovery plan is executed during or after an incident.", isImplemented: false, priority: 'High', group: 'RECOVER' },
      { id: "RC.RP-02", name: "Recovery Execution", description: "Recovery activities are performed to restore systems and assets.", isImplemented: false, priority: 'High', group: 'RECOVER' },
      { id: "RC.RP-03", name: "Recovery Restoration", description: "Restoration activities are coordinated with internal and external parties.", isImplemented: false, priority: 'Medium', group: 'RECOVER' },
      { id: "RC.RP-04", name: "Recovery Verification", description: "Restored systems are verified to be functioning correctly.", isImplemented: false, priority: 'High', group: 'RECOVER' },
      { id: "RC.RP-05", name: "Recovery Backups", description: "Backups are used for restoration.", isImplemented: true, priority: 'High', group: 'RECOVER' },
      { id: "RC.RP-06", name: "Recovery Integrity", description: "Integrity of backups is verified.", isImplemented: false, priority: 'Medium', group: 'RECOVER' },
      { id: "RC.CO-01", name: "Public Relations", description: "Public relations are managed.", isImplemented: false, priority: 'Medium', group: 'RECOVER' },
      { id: "RC.CO-02", name: "Reputation Repair", description: "Reputation repair activities are performed.", isImplemented: false, priority: 'Low', group: 'RECOVER' },
      { id: "RC.CO-03", name: "Recovery Communication", description: "Recovery activities are communicated to stakeholders.", isImplemented: false, priority: 'Medium', group: 'RECOVER' },
      { id: "RC.IM-01", name: "Recovery Improvement", description: "Recovery plans are improved based on lessons learned.", isImplemented: false, priority: 'Medium', group: 'RECOVER' },
    ],
    useCases: [
      { title: "Strategic Alignment", description: "Aligning technical activities with business mission and risk tolerance." },
      { title: "Reporting", description: "Communicating cybersecurity posture to non-technical stakeholders (Board/CEO)." }
    ]
  },
  {
    id: "iso-27001",
    name: "ISO/IEC 27001:2022",
    link: "https://www.iso.org/standard/27001",
    category: "Framework",
    industry: "General / Cross-Industry",
    overview: "ISO/IEC 27001:2022 is the world's best-known standard for information security management systems (ISMS). The 2022 update consolidated the previous 114 controls into 93, categorized into 4 themes: Organizational, People, Physical, and Technological.",
    purpose: "To provide requirements for establishing, implementing, maintaining, and continually improving an information security management system.",
    importance: "It is the global gold standard for information security. Certification demonstrates to clients and partners that an organization manages security risks holistically.",
    howToApply: "Implementation involves a structured, top-down approach:\n\n1. **Context & Scope (Clauses 4-5)**: Determine internal and external issues relevant to the ISMS and define the scope.\n\n2. **Risk Assessment (Clause 6)**: Identify risks to confidentiality, integrity, and availability. Assess likelihood and impact.\n\n3. **Risk Treatment (Clause 6)**: Select appropriate controls from Annex A to mitigate identified risks and produce a Statement of Applicability (SoA).\n\n4. **Support & Operation (Clauses 7-8)**: Ensure resources, competence, awareness, and documented information are managed.\n\n5. **Performance Evaluation (Clause 9)**: Monitor, measure, analyze, and evaluate the ISMS. Conduct internal audits and management reviews.\n\n6. **Improvement (Clause 10)**: Address non-conformities and take corrective actions.",
    whereToApply: "Any organization, regardless of size or sector, seeking to secure its information assets.",
    whenToApply: "When establishing a formal security program or seeking independent certification to prove security maturity.",
    scenarios: "**Scenario: Enterprise Sales Enablement**\n\n**Challenge**: A B2B SaaS company was blocked from closing deals with Enterprise clients in Europe because they lacked third-party security validation.\n\n**Application**: The company implemented an ISMS aligned with ISO 27001. They defined their scope to include their cloud infrastructure and support operations. They conducted a risk assessment, applied Annex A controls (like Access Control and Supplier Relationships), and underwent an external audit.\n\n**Outcome**: Achieving ISO 27001 certification reduced the sales cycle by 30% and eliminated the need to fill out lengthy security questionnaires for every prospect.",
    diagramType: 'generic-pdca',
    colorTheme: 'blue',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMESURBVHgB7d3/ThRBFMfxj6ACUggKX4AUCgGlUAgKhEIhFIJCqIdSqAdSqAdSqAdSqAdKCRQKhUAgFAKBQCAUjs/ZzOzO7u7c3Xl/5CSZO9nN7j5/27nZtovj8fgFAQBwXqXtXAB0yJAAQIaEBAAZEmQIECEhAZAhAQFIGRggQEiAAAEhCgQQICHAAIGgCAQQICHAAIGgCAQQICHAAIGgCAQQICDAAEEQhAECCgwgQAIIgxAECCgwgAARIAhCECCgwgAARIAhCECCgwgAARIQhCECCgwgAAhCEIAgQkGECAhCEIAgQkGECAhCEIAgQkGECAhAECBCEIAgQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBAgIgyAIECBAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBCEIAgQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBAgIgyAIECBAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCMQg/A9k/z/1v/wB+AAAAAElFTkSuQmCC',
    implementationSteps: [
      { phase: 1, title: "Context & Leadership", description: "Define ISMS scope, interested parties, and obtain management commitment (Clauses 4-5)." },
      { phase: 2, title: "Risk Assessment", description: "Identify assets, threats, and vulnerabilities. Assess risk impact and likelihood (Clause 6)." },
      { phase: 3, title: "Risk Treatment", description: "Decide to avoid, transfer, mitigate, or accept risks. Produce the Statement of Applicability (SoA) (Clause 6)." },
      { phase: 4, title: "Internal Audit & Review", description: "Conduct internal audits to ensure controls are working and hold management reviews (Clause 9)." },
      { phase: 5, title: "Certification Audit", description: "Stage 1 (Document Review) and Stage 2 (Implementation Audit) by an accredited external body." }
    ],
    controls: [
      // 5. ORGANIZATIONAL CONTROLS (37)
      { id: "5.1", name: "Policies for information security", description: "Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.2", name: "Information security roles and responsibilities", description: "Information security roles and responsibilities shall be defined and allocated according to the organization needs.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.3", name: "Segregation of duties", description: "Conflicting duties and conflicting areas of responsibility shall be segregated.", isImplemented: false, priority: 'High', group: 'Organizational' },
      { id: "5.4", name: "Management responsibilities", description: "Management shall require all personnel to apply information security in accordance with the established policy and procedures.", isImplemented: true, priority: 'Medium', group: 'Organizational' },
      { id: "5.5", name: "Contact with authorities", description: "The organization shall establish and maintain contact with relevant authorities.", isImplemented: false, priority: 'Low', group: 'Organizational' },
      { id: "5.6", name: "Contact with special interest groups", description: "The organization shall establish and maintain contact with special interest groups or other specialist security forums and professional associations.", isImplemented: false, priority: 'Low', group: 'Organizational' },
      { id: "5.7", name: "Threat intelligence", description: "Information relating to information security threats shall be collected and analysed to produce threat intelligence.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.8", name: "Information security in project management", description: "Information security shall be integrated into project management.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.9", name: "Inventory of information and other associated assets", description: "An inventory of information and other associated assets, including owners, shall be developed and maintained.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.10", name: "Acceptable use of information", description: "Rules for the acceptable use of information and other associated assets shall be identified, documented and implemented.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.11", name: "Return of assets", description: "Personnel and other interested parties as appropriate shall return all of the organization’s assets in their possession upon change or termination of their employment, contract or agreement.", isImplemented: true, priority: 'Medium', group: 'Organizational' },
      { id: "5.12", name: "Classification of information", description: "Information shall be classified in terms of legal requirements, value, criticality and sensitivity to unauthorised disclosure or modification.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.13", name: "Labelling of information", description: "An appropriate set of procedures for information labelling shall be developed and implemented in accordance with the information classification scheme.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.14", name: "Information transfer", description: "Information transfer rules, procedures and agreements shall be in place for all types of transfer facilities.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.15", name: "Access control", description: "Rules to control physical and logical access to information and other associated assets shall be established and implemented.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.16", name: "Identity management", description: "The full life cycle of identities shall be managed.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.17", name: "Authentication information", description: "Allocation and management of authentication information shall be controlled by a management process, including advising personnel on appropriate handling.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.18", name: "Access rights", description: "Access rights to information and other associated assets shall be provisioned, reviewed, modified and removed.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.19", name: "Information security in supplier relationships", description: "Processes and procedures shall be defined and implemented to manage the information security risks associated with the use of supplier's products or services.", isImplemented: false, priority: 'High', group: 'Organizational' },
      { id: "5.20", name: "Addressing information security within supplier agreements", description: "Relevant information security requirements shall be established and agreed with each supplier that may access, process, store, communicate, or provide IT infrastructure components for, the organization’s information.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.21", name: "Managing information security in the ICT supply chain", description: "Processes and procedures shall be defined and implemented to manage the information security risks associated with the ICT products and services supply chain.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.22", name: "Monitoring, review and change management of supplier services", description: "The organization shall regularly monitor, review and audit supplier service delivery.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.23", name: "Information security for use of cloud services", description: "Processes for acquisition, use, management and exit from cloud services shall be established in accordance with the organization’s information security requirements.", isImplemented: false, priority: 'High', group: 'Organizational' },
      { id: "5.24", name: "Information security incident management planning", description: "The organization shall plan and prepare for managing information security incidents by defining, establishing and communicating information security incident management processes.", isImplemented: false, priority: 'High', group: 'Organizational' },
      { id: "5.25", name: "Assessment and decision on information security events", description: "The organization shall assess information security events and decide if they are to be categorized as information security incidents.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.26", name: "Response to information security incidents", description: "Information security incidents shall be responded to in accordance with the documented procedures.", isImplemented: false, priority: 'High', group: 'Organizational' },
      { id: "5.27", name: "Learning from information security incidents", description: "Knowledge gained from information security incidents shall be used to strengthen and improve the information security controls.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.28", name: "Collection of evidence", description: "The organization shall define and apply procedures for the identification, collection, acquisition and preservation of evidence related to information security events.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.29", name: "Information security during disruption", description: "The organization shall define how its information security requirements and other controls will be addressed during a disruption.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.30", name: "ICT readiness for business continuity", description: "ICT readiness shall be planned, implemented, maintained and tested based on business continuity objectives and ICT continuity requirements.", isImplemented: false, priority: 'High', group: 'Organizational' },
      { id: "5.31", name: "Legal, statutory, regulatory and contractual requirements", description: "Legal, statutory, regulatory and contractual requirements relevant to information security and the organization’s approach to meet these requirements shall be identified, documented and kept up to date.", isImplemented: true, priority: 'High', group: 'Organizational' },
      { id: "5.32", name: "Intellectual property rights", description: "The organization shall implement appropriate procedures to protect intellectual property rights.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.33", name: "Protection of records", description: "Records shall be protected from loss, destruction, falsification, unauthorized access and unauthorized release.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.34", name: "Privacy and protection of PII", description: "The organization shall identify and meet the requirements regarding the preservation of privacy and protection of PII.", isImplemented: false, priority: 'High', group: 'Organizational' },
      { id: "5.35", name: "Independent review of information security", description: "The organization’s approach to managing information security and its implementation including people, processes and technologies shall be reviewed independently at planned intervals.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.36", name: "Compliance with policies, rules and standards", description: "Compliance with the organization’s information security policy, topic-specific policies, rules and standards shall be regularly reviewed.", isImplemented: false, priority: 'Medium', group: 'Organizational' },
      { id: "5.37", name: "Documented operating procedures", description: "Operating procedures for information processing facilities shall be documented and made available to personnel who need them.", isImplemented: true, priority: 'Medium', group: 'Organizational' },

      // 6. PEOPLE CONTROLS (8)
      { id: "6.1", name: "Screening", description: "Background verification checks on all candidates to become personnel shall be carried out prior to joining the organization.", isImplemented: true, priority: 'High', group: 'People' },
      { id: "6.2", name: "Terms and conditions of employment", description: "The employment agreements shall state the personnel’s and the organization’s responsibilities for information security.", isImplemented: true, priority: 'Medium', group: 'People' },
      { id: "6.3", name: "Information security awareness, education and training", description: "Personnel of the organization and relevant interested parties shall receive appropriate information security awareness, education and training.", isImplemented: true, priority: 'High', group: 'People' },
      { id: "6.4", name: "Disciplinary process", description: "A disciplinary process shall be formalized and communicated to take action against personnel and other relevant interested parties who have committed an information security policy violation.", isImplemented: false, priority: 'Medium', group: 'People' },
      { id: "6.5", name: "Responsibilities after termination or change of employment", description: "Information security responsibilities and duties that remain valid after termination or change of employment shall be defined, enforced and communicated to relevant personnel.", isImplemented: true, priority: 'Medium', group: 'People' },
      { id: "6.6", name: "Confidentiality or non-disclosure agreements", description: "Confidentiality or non-disclosure agreements reflecting the organization’s needs for the protection of information shall be identified, documented, reviewed and signed.", isImplemented: true, priority: 'High', group: 'People' },
      { id: "6.7", name: "Remote working", description: "Security measures shall be implemented when personnel are working remotely to protect information accessed, processed or stored outside the organization’s premises.", isImplemented: true, priority: 'High', group: 'People' },
      { id: "6.8", name: "Information security event reporting", description: "The organization shall provide a mechanism for personnel to report observed or suspected information security events.", isImplemented: false, priority: 'High', group: 'People' },

      // 7. PHYSICAL CONTROLS (14)
      { id: "7.1", name: "Physical security perimeters", description: "Security perimeters shall be defined and used to protect areas that contain information and other associated assets.", isImplemented: true, priority: 'High', group: 'Physical' },
      { id: "7.2", name: "Physical entry", description: "Secure areas shall be protected by appropriate entry controls and access points.", isImplemented: true, priority: 'High', group: 'Physical' },
      { id: "7.3", name: "Securing offices, rooms and facilities", description: "Physical security for offices, rooms and facilities shall be designed and implemented.", isImplemented: true, priority: 'Medium', group: 'Physical' },
      { id: "7.4", name: "Physical security monitoring", description: "Premises shall be continuously monitored for unauthorized physical access.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "7.5", name: "Protecting against physical threats", description: "Protection against physical and environmental threats, such as natural disasters and other intentional or accidental threats to infrastructure shall be designed and implemented.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "7.6", name: "Working in secure areas", description: "Security measures for working in secure areas shall be designed and implemented.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "7.7", name: "Clear desk and clear screen", description: "Clear desk rules for papers and removable storage media and clear screen rules for information processing facilities shall be defined and appropriately enforced.", isImplemented: true, priority: 'Medium', group: 'Physical' },
      { id: "7.8", name: "Equipment siting and protection", description: "Equipment shall be sited and protected to reduce the risks from environmental threats and hazards, and opportunities for unauthorized access.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "7.9", name: "Security of assets off-premises", description: "Security of assets off-premises shall be assured.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "7.10", name: "Storage media", description: "Storage media shall be managed through their life cycle of acquisition, use, storage and disposal.", isImplemented: false, priority: 'High', group: 'Physical' },
      { id: "7.11", name: "Supporting utilities", description: "Information processing facilities shall be protected from power failures and other disruptions caused by failures in supporting utilities.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "7.12", name: "Cabling security", description: "Cabling carrying power, data or supporting information services shall be protected from interception, interference or damage.", isImplemented: false, priority: 'Low', group: 'Physical' },
      { id: "7.13", name: "Equipment maintenance", description: "Equipment shall be maintained correctly to ensure its continued availability and integrity.", isImplemented: true, priority: 'Medium', group: 'Physical' },
      { id: "7.14", name: "Secure disposal or re-use of equipment", description: "Items of equipment containing storage media shall be verified to ensure that any sensitive data and licensed software has been removed or securely overwritten prior to disposal or re-use.", isImplemented: false, priority: 'High', group: 'Physical' },

      // 8. TECHNOLOGICAL CONTROLS (34)
      { id: "8.1", name: "User endpoint devices", description: "User endpoint devices shall be protected to prevent unauthorized access or disclosure of information.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.2", name: "Privileged access rights", description: "The allocation and use of privileged access rights shall be restricted and managed.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.3", name: "Information access restriction", description: "Access to information and other associated assets shall be restricted in accordance with the established topic-specific policy on access control.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.4", name: "Access to source code", description: "Read and write access to source code, development tools and software libraries shall be appropriately managed.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.5", name: "Secure authentication", description: "Secure authentication technologies and procedures shall be implemented based on information security risk assessments.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.6", name: "Capacity management", description: "The use of resources shall be monitored and adjusted in line with current and expected capacity requirements.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.7", name: "Protection against malware", description: "Protection against malware shall be implemented and supported by appropriate user awareness.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.8", name: "Management of technical vulnerabilities", description: "Information about technical vulnerabilities of information systems being used shall be obtained, the organization’s exposure evaluated and appropriate measures taken.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.9", name: "Configuration management", description: "Configurations, including security configurations, of hardware, software, services and networks shall be established, documented, implemented, monitored and reviewed.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.10", name: "Information deletion", description: "Information stored in information systems, devices or in any other storage media shall be deleted when no longer required.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.11", name: "Data masking", description: "Data masking shall be used in accordance with the organization’s access control policy and other related topic-specific policies.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.12", name: "Data leakage prevention", description: "Data leakage prevention measures shall be applied to systems, networks and any other devices that process, store or transmit sensitive information.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.13", name: "Information backup", description: "Backup copies of information, software and systems shall be maintained and regularly tested in accordance with the agreed topic-specific policy on backup.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.14", name: "Redundancy of information processing facilities", description: "Information processing facilities shall be implemented with redundancy sufficient to meet availability requirements.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.15", name: "Logging", description: "Logs that record activities, exceptions, faults and other relevant events shall be produced, stored, protected and analysed.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.16", name: "Monitoring activities", description: "Networks, systems and applications shall be monitored for anomalous behavior and appropriate actions taken to evaluate potential information security incidents.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.17", name: "Clock synchronization", description: "The clocks of information processing systems used by the organization shall be synchronized to a single reference time source.", isImplemented: true, priority: 'Low', group: 'Technological' },
      { id: "8.18", name: "Use of privileged utility programs", description: "The use of utility programs that might be capable of overriding system and application controls shall be restricted and tightly controlled.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.19", name: "Installation of software on operational systems", description: "Procedures and measures shall be implemented to securely manage software installation on operational systems.", isImplemented: true, priority: 'Medium', group: 'Technological' },
      { id: "8.20", name: "Networks security", description: "Networks and network devices shall be secured, managed and controlled to protect information in systems and applications.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.21", name: "Security of network services", description: "Security mechanisms, service levels and management requirements of all network services shall be identified, implemented and monitored.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.22", name: "Segregation of networks", description: "Groups of information services, users and information systems shall be segregated on networks.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.23", name: "Web filtering", description: "Access to external websites shall be managed to reduce exposure to malicious content.", isImplemented: true, priority: 'Medium', group: 'Technological' },
      { id: "8.24", name: "Use of cryptography", description: "Rules for the effective use of cryptography, including cryptographic key management, shall be defined and implemented.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.25", name: "Secure development life cycle", description: "Rules for the secure development of software and systems shall be established and applied.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.26", name: "Application security requirements", description: "Information security requirements shall be identified, specified and approved when developing or acquiring applications.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.27", name: "Secure system architecture and engineering principles", description: "Principles for engineering secure systems shall be established, documented, maintained and applied to any information system development activities.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.28", name: "Secure coding", description: "Secure coding principles shall be applied to software development.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.29", name: "Security testing in development and acceptance", description: "Security testing processes shall be defined and implemented in the development life cycle.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.30", name: "Outsourced development", description: "The organization shall direct, monitor and review the activities related to outsourced system development.", isImplemented: false, priority: 'Medium', group: 'Technological' },
      { id: "8.31", name: "Separation of development, test and production environments", description: "Development, testing, and production environments shall be separated to reduce the risks of unauthorized access or changes to the operational environment.", isImplemented: true, priority: 'High', group: 'Technological' },
      { id: "8.32", name: "Change management", description: "Changes to information processing facilities and information systems shall be subject to change management procedures.", isImplemented: false, priority: 'High', group: 'Technological' },
      { id: "8.33", name: "Test information", description: "Test information shall be appropriately selected, protected and managed.", isImplemented: false, priority: 'Low', group: 'Technological' },
      { id: "8.34", name: "Protection of information systems during audit testing", description: "Audit tests and other assurance activities involving operational systems shall be planned and agreed between the tester and appropriate management.", isImplemented: false, priority: 'Low', group: 'Technological' },
    ],
    useCases: [
      { title: "Market Entry", description: "Satisfying vendor security requirements for global enterprise customers." },
      { title: "Legal Compliance", description: "Demonstrating due diligence for data protection regulations (like GDPR)." }
    ]
  },
  {
    id: "cis-controls",
    name: "CIS Controls v8",
    link: "https://www.cisecurity.org/controls",
    category: "Standard",
    industry: "General / Cross-Industry",
    overview: "The CIS Critical Security Controls (CIS Controls) are a prioritized set of Safeguards to mitigate the most prevalent cyber-attacks against systems and networks. They are mapped to and referenced by multiple legal, regulatory, and policy frameworks.",
    purpose: "To provide a prioritized path to improve an enterprise's cybersecurity posture by focusing on the most effective defenses.",
    importance: "It is highly practical and prescriptive. Unlike high-level frameworks, CIS tells you exactly *what* to do to stop attacks, prioritized by impact.",
    howToApply: "The controls are divided into three Implementation Groups (IGs) to provide a prioritized path:\n\n1. **IG1 (Basic Cyber Hygiene)**: The foundational set of 56 Safeguards that every organization should apply to guard against the most common attacks.\n\n2. **IG2 (Enterprise)**: For organizations with IT staff and resources to handle more complexity. Includes all IG1 Safeguards plus additional ones.\n\n3. **IG3 (Enterprise Security)**: For organizations with sensitive data or those targeted by sophisticated adversaries. Includes all IG1 and IG2 Safeguards.",
    whereToApply: "IT operations, security engineering, and system administration teams.",
    whenToApply: "When looking for a technical, prescriptive checklist to harden systems and networks.",
    scenarios: "**Scenario: Ransomware Defense for an SME**\n\n**Challenge**: A mid-sized manufacturing firm was hit by ransomware. They recovered from backups but needed to prevent recurrence with limited budget.\n\n**Application**: They adopted CIS Controls v8, focusing solely on Implementation Group 1 (IG1). They established an accurate inventory of hardware (CIS 1) and software (CIS 2), securely configured their laptops (CIS 4), and implemented multi-factor authentication (CIS 6).\n\n**Outcome**: By focusing on the 'Essential Cyber Hygiene' of IG1, they successfully blocked 85% of common attack vectors used by ransomware gangs without needing expensive new tools.",
    colorTheme: 'teal',
    diagramType: 'process-flow',
    implementationSteps: [
      { phase: 1, title: "Assess IG1 Status", description: "Perform a gap analysis against Implementation Group 1 (Basic Cyber Hygiene)." },
      { phase: 2, title: "Implement Inventory", description: "Establish hardware (Control 1) and software (Control 2) inventories." },
      { phase: 3, title: "Secure Configurations", description: "Harden device and software configurations (Control 4)." },
      { phase: 4, title: "MFA & Access", description: "Implement strict access control and MFA (Control 5 & 6)." },
      { phase: 5, title: "Vulnerability Mgmt", description: "Establish continuous vulnerability management (Control 7)." }
    ],
    controls: [
      // 01. Inventory and Control of Enterprise Assets
      { id: "CIS-1.1", name: "Establish and Maintain Detailed Enterprise Asset Inventory", description: "Establish and maintain an accurate, detailed, and up-to-date inventory of all enterprise assets with the potential to store or process data.", isImplemented: false, priority: 'High', group: '01. Inventory and Control of Enterprise Assets' },
      { id: "CIS-1.2", name: "Address Unauthorized Assets", description: "Ensure that a process exists to address unauthorized assets on a weekly basis. The enterprise may choose to remove the asset from the network, deny the asset from connecting to the network, or quarantine the asset.", isImplemented: false, priority: 'High', group: '01. Inventory and Control of Enterprise Assets' },
      { id: "CIS-1.3", name: "Utilize an Active Discovery Tool", description: "Utilize an active discovery tool to identify assets connected to the enterprise’s network.", isImplemented: false, priority: 'Medium', group: '01. Inventory and Control of Enterprise Assets' },
      { id: "CIS-1.4", name: "Use DHCP Logging to Update Asset Inventory", description: "Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the enterprise asset inventory.", isImplemented: false, priority: 'Medium', group: '01. Inventory and Control of Enterprise Assets' },

      // 02. Inventory and Control of Software Assets
      { id: "CIS-2.1", name: "Establish and Maintain a Software Inventory", description: "Establish and maintain a detailed inventory of all licensed software installed on enterprise assets.", isImplemented: false, priority: 'High', group: '02. Inventory and Control of Software Assets' },
      { id: "CIS-2.2", name: "Ensure Authorized Software is Currently Supported", description: "Ensure that only currently supported software is designated as authorized in the software inventory for enterprise assets.", isImplemented: false, priority: 'High', group: '02. Inventory and Control of Software Assets' },
      { id: "CIS-2.3", name: "Address Unauthorized Software", description: "Ensure that unauthorized software is either removed or a detailed exception is documented.", isImplemented: false, priority: 'High', group: '02. Inventory and Control of Software Assets' },
      { id: "CIS-2.5", name: "Allowlist Authorized Software", description: "Use technical controls, such as application allowlisting, to ensure that only authorized software can execute or be accessed.", isImplemented: false, priority: 'Medium', group: '02. Inventory and Control of Software Assets' },

      // 03. Data Protection
      { id: "CIS-3.1", name: "Establish and Maintain a Data Management Process", description: "Establish and maintain a data management process to address data sensitivity, owner, handling, and retention.", isImplemented: false, priority: 'High', group: '03. Data Protection' },
      { id: "CIS-3.2", name: "Establish and Maintain a Data Inventory", description: "Establish and maintain a data inventory, based on the enterprise’s data management process.", isImplemented: false, priority: 'High', group: '03. Data Protection' },
      { id: "CIS-3.3", name: "Configure Data Access Control Lists", description: "Configure data access control lists based on a user’s need to know. Apply data access control lists, also known as access permissions, to local and remote file systems, databases, and applications.", isImplemented: false, priority: 'High', group: '03. Data Protection' },
      { id: "CIS-3.6", name: "Encrypt Data on End-User Devices", description: "Encrypt data on end-user devices containing sensitive data.", isImplemented: false, priority: 'High', group: '03. Data Protection' },
      { id: "CIS-3.9", name: "Encrypt Data on Removable Media", description: "Encrypt data on removable media.", isImplemented: false, priority: 'High', group: '03. Data Protection' },

      // 04. Secure Configuration of Enterprise Assets and Software
      { id: "CIS-4.1", name: "Establish and Maintain a Secure Configuration Process", description: "Establish and maintain a secure configuration process for enterprise assets (end-user devices, including portable and mobile; non-computing/IoT devices; and servers) and software.", isImplemented: false, priority: 'High', group: '04. Secure Configuration' },
      { id: "CIS-4.2", name: "Establish and Maintain a Secure Configuration Infrastructure", description: "Establish and maintain a secure configuration infrastructure for enterprise assets and software.", isImplemented: false, priority: 'High', group: '04. Secure Configuration' },
      { id: "CIS-4.4", name: "Implement and Manage a Firewall on Servers", description: "Implement and manage a firewall on servers, where supported.", isImplemented: false, priority: 'High', group: '04. Secure Configuration' },
      { id: "CIS-4.5", name: "Implement and Manage a Firewall on End-User Devices", description: "Implement and manage a host-based firewall or port-filtering tool on end-user devices.", isImplemented: false, priority: 'High', group: '04. Secure Configuration' },
      { id: "CIS-4.8", name: "Uninstall or Disable Unnecessary Services", description: "Uninstall or disable unnecessary services on enterprise assets and software.", isImplemented: false, priority: 'High', group: '04. Secure Configuration' },

      // 05. Account Management
      { id: "CIS-5.1", name: "Establish and Maintain an Inventory of Accounts", description: "Establish and maintain an inventory of all accounts managed in the enterprise.", isImplemented: false, priority: 'High', group: '05. Account Management' },
      { id: "CIS-5.2", name: "Use Unique Passwords", description: "Use unique passwords for all enterprise assets.", isImplemented: false, priority: 'High', group: '05. Account Management' },
      { id: "CIS-5.3", name: "Disable Dormant Accounts", description: "Delete or disable any dormant accounts after a set period of inactivity (e.g., 45 days).", isImplemented: false, priority: 'High', group: '05. Account Management' },
      { id: "CIS-5.4", name: "Restrict Administrator Privileges", description: "Restrict administrator privileges to dedicated administrator accounts.", isImplemented: false, priority: 'High', group: '05. Account Management' },

      // 06. Access Control Management
      { id: "CIS-6.1", name: "Establish an Access Granting Process", description: "Establish and follow a process, preferably automated, for granting access to enterprise assets upon new hire, rights grant, or role change.", isImplemented: false, priority: 'High', group: '06. Access Control Management' },
      { id: "CIS-6.2", name: "Establish an Access Revoking Process", description: "Establish and follow a process, preferably automated, for revoking access to enterprise assets upon termination, rights revocation, or role change.", isImplemented: false, priority: 'High', group: '06. Access Control Management' },
      { id: "CIS-6.3", name: "Require MFA for Externally-Exposed Applications", description: "Require all externally-exposed enterprise applications to use Multi-Factor Authentication (MFA).", isImplemented: false, priority: 'High', group: '06. Access Control Management' },
      { id: "CIS-6.4", name: "Require MFA for Remote Network Access", description: "Require MFA for remote network access.", isImplemented: false, priority: 'High', group: '06. Access Control Management' },
      { id: "CIS-6.5", name: "Require MFA for Administrative Access", description: "Require MFA for administrative access.", isImplemented: false, priority: 'High', group: '06. Access Control Management' },

      // 07. Continuous Vulnerability Management
      { id: "CIS-7.1", name: "Establish and Maintain a Vulnerability Management Process", description: "Establish and maintain a documented vulnerability management process for enterprise assets.", isImplemented: false, priority: 'High', group: '07. Continuous Vulnerability Management' },
      { id: "CIS-7.2", name: "Establish and Maintain a Remediation Process", description: "Establish and maintain a risk-based remediation strategy for discovered vulnerabilities.", isImplemented: false, priority: 'High', group: '07. Continuous Vulnerability Management' },
      { id: "CIS-7.3", name: "Perform Automated Operating System Patch Management", description: "Perform automated patch management on operating systems.", isImplemented: false, priority: 'High', group: '07. Continuous Vulnerability Management' },
      { id: "CIS-7.4", name: "Perform Automated Application Patch Management", description: "Perform automated patch management on applications.", isImplemented: false, priority: 'High', group: '07. Continuous Vulnerability Management' },

      // 08. Audit Log Management
      { id: "CIS-8.1", name: "Establish and Maintain an Audit Log Management Process", description: "Establish and maintain an audit log management process that defines the enterprise’s logging requirements.", isImplemented: false, priority: 'High', group: '08. Audit Log Management' },
      { id: "CIS-8.2", name: "Collect Audit Logs", description: "Collect audit logs. Ensure that logging, per the enterprise’s audit log management process, has been enabled across enterprise assets.", isImplemented: false, priority: 'High', group: '08. Audit Log Management' },
      { id: "CIS-8.3", name: "Ensure Adequate Audit Log Storage", description: "Ensure that logging destinations maintain adequate storage to comply with the enterprise’s audit log management process.", isImplemented: false, priority: 'High', group: '08. Audit Log Management' },

      // 09. Email and Web Browser Protections
      { id: "CIS-9.1", name: "Ensure Use of Supported Browsers and Email Clients", description: "Ensure that only fully supported browsers and email clients are allowed to execute in the enterprise.", isImplemented: false, priority: 'High', group: '09. Email & Web Protection' },
      { id: "CIS-9.2", name: "Use DNS Filtering Services", description: "Use DNS filtering services to block access to known malicious domains.", isImplemented: false, priority: 'High', group: '09. Email & Web Protection' },
      { id: "CIS-9.3", name: "Maintain and Enforce Network-Based URL Filters", description: "Maintain and enforce network-based URL filters to block access to known malicious websites.", isImplemented: false, priority: 'Medium', group: '09. Email & Web Protection' },
      { id: "CIS-9.6", name: "Block Unnecessary File Types", description: "Block unnecessary file types attempting to enter the enterprise’s email gateway.", isImplemented: false, priority: 'Medium', group: '09. Email & Web Protection' },

      // 10. Malware Defenses
      { id: "CIS-10.1", name: "Deploy and Maintain Anti-Malware Software", description: "Deploy and maintain anti-malware software on all enterprise assets.", isImplemented: false, priority: 'High', group: '10. Malware Defenses' },
      { id: "CIS-10.2", name: "Configure Automatic Anti-Malware Signature Updates", description: "Configure automatic updates for anti-malware signatures.", isImplemented: false, priority: 'High', group: '10. Malware Defenses' },
      { id: "CIS-10.3", name: "Disable Autorun and Autoplay", description: "Disable autorun and autoplay functionality for removable media.", isImplemented: false, priority: 'High', group: '10. Malware Defenses' },

      // 11. Data Recovery
      { id: "CIS-11.1", name: "Establish and Maintain a Data Recovery Process", description: "Establish and maintain a data recovery process.", isImplemented: false, priority: 'High', group: '11. Data Recovery' },
      { id: "CIS-11.2", name: "Perform Automated Backups", description: "Perform automated backups of in-scope enterprise assets.", isImplemented: false, priority: 'High', group: '11. Data Recovery' },
      { id: "CIS-11.3", name: "Protect Recovery Data", description: "Protect recovery data with equivalent controls to the data being backed up.", isImplemented: false, priority: 'High', group: '11. Data Recovery' },
      { id: "CIS-11.4", name: "Establish and Maintain an Isolated Instance of Recovery Data", description: "Establish and maintain an isolated instance of recovery data (e.g., offline, air-gapped).", isImplemented: false, priority: 'High', group: '11. Data Recovery' },

      // 12. Network Infrastructure Management
      { id: "CIS-12.1", name: "Ensure Network Infrastructure is Up-to-Date", description: "Ensure network infrastructure is kept up-to-date.", isImplemented: false, priority: 'High', group: '12. Network Infrastructure' },
      { id: "CIS-12.2", name: "Secure Network Infrastructure Architecture", description: "Establish and maintain a secure network architecture.", isImplemented: false, priority: 'Medium', group: '12. Network Infrastructure' },
      { id: "CIS-12.3", name: "Securely Manage Network Infrastructure", description: "Securely manage network infrastructure devices (e.g., version control, centralized authentication).", isImplemented: false, priority: 'Medium', group: '12. Network Infrastructure' },

      // 13. Network Monitoring and Defense
      { id: "CIS-13.1", name: "Centralize Security Event Alerting", description: "Centralize security event alerting.", isImplemented: false, priority: 'Medium', group: '13. Network Monitoring' },
      { id: "CIS-13.2", name: "Deploy a Host-Based Intrusion Detection Solution", description: "Deploy a host-based intrusion detection solution on enterprise assets.", isImplemented: false, priority: 'Medium', group: '13. Network Monitoring' },
      { id: "CIS-13.3", name: "Deploy a Network Intrusion Detection Solution", description: "Deploy a network intrusion detection solution.", isImplemented: false, priority: 'Medium', group: '13. Network Monitoring' },

      // 14. Security Awareness and Skills Training
      { id: "CIS-14.1", name: "Establish and Maintain a Security Awareness Program", description: "Establish and maintain a security awareness program.", isImplemented: false, priority: 'High', group: '14. Security Awareness' },
      { id: "CIS-14.2", name: "Train Workforce Members to Recognize Social Engineering Attacks", description: "Train workforce members to recognize social engineering attacks, such as phishing.", isImplemented: false, priority: 'High', group: '14. Security Awareness' },
      { id: "CIS-14.3", name: "Train Workforce Members on Authentication Best Practices", description: "Train workforce members on authentication best practices.", isImplemented: false, priority: 'High', group: '14. Security Awareness' },
      { id: "CIS-14.4", name: "Train Workforce Members on Data Handling Best Practices", description: "Train workforce members on data handling best practices.", isImplemented: false, priority: 'High', group: '14. Security Awareness' },

      // 15. Service Provider Management
      { id: "CIS-15.1", name: "Establish and Maintain an Inventory of Service Providers", description: "Establish and maintain an inventory of service providers.", isImplemented: false, priority: 'High', group: '15. Service Provider Management' },
      { id: "CIS-15.2", name: "Establish and Maintain a Service Provider Management Policy", description: "Establish and maintain a service provider management policy.", isImplemented: false, priority: 'Medium', group: '15. Service Provider Management' },

      // 16. Application Software Security
      { id: "CIS-16.1", name: "Establish and Maintain a Secure Application Development Process", description: "Establish and maintain a secure application development process.", isImplemented: false, priority: 'Medium', group: '16. Application Security' },
      { id: "CIS-16.2", name: "Establish and Maintain a Process to Accept and Address Software Vulnerabilities", description: "Establish and maintain a process to accept and address software vulnerabilities.", isImplemented: false, priority: 'High', group: '16. Application Security' },

      // 17. Incident Response Management
      { id: "CIS-17.1", name: "Designate Personnel to Manage Incident Handling", description: "Designate personnel to manage incident handling.", isImplemented: false, priority: 'High', group: '17. Incident Response' },
      { id: "CIS-17.2", name: "Establish and Maintain Contact Information for Reporting Security Incidents", description: "Establish and maintain contact information for reporting security incidents.", isImplemented: false, priority: 'High', group: '17. Incident Response' },
      { id: "CIS-17.3", name: "Establish and Maintain an Enterprise Process for Reporting Incidents", description: "Establish and maintain an enterprise process for the workforce to report security incidents.", isImplemented: false, priority: 'High', group: '17. Incident Response' },

      // 18. Penetration Testing
      { id: "CIS-18.1", name: "Establish and Maintain a Penetration Testing Program", description: "Establish and maintain a penetration testing program.", isImplemented: false, priority: 'Medium', group: '18. Penetration Testing' },
      { id: "CIS-18.2", name: "Perform Periodic External Penetration Tests", description: "Perform periodic external penetration tests.", isImplemented: false, priority: 'Medium', group: '18. Penetration Testing' },
      { id: "CIS-18.3", name: "Remediate Penetration Test Findings", description: "Remediate penetration test findings.", isImplemented: false, priority: 'Medium', group: '18. Penetration Testing' },
    ],
    useCases: [
      { title: "Technical Hardening", description: "Using CIS Benchmarks to configure operating systems securely." },
      { title: "Prioritized Defense", description: "Focusing limited resources on the controls that stop the most attacks." }
    ]
  },
  {
    id: "cobit-2019",
    name: "COBIT 2019",
    link: "https://www.isaca.org/resources/cobit",
    category: "Governance",
    industry: "General / Cross-Industry",
    overview: "COBIT 2019 is a framework for the governance and management of enterprise information and technology (I&T). It is aimed at the whole enterprise, defining the components to build and sustain a governance system: processes, policies, structures, information flows, skills, and infrastructure.",
    purpose: "To align IT goals with business goals, ensuring that IT delivers value while mitigating risk.",
    importance: "It bridges the gap between technical issues, business risks, and control requirements. It is widely used for SOX compliance and strategic IT alignment.",
    howToApply: "COBIT uses a Core Model of 40 governance and management objectives:\n\n1. **Design a System**: Use the COBIT Design Factors (e.g., Enterprise Strategy, Risk Profile) to tailor the governance system.\n\n2. **Align Goals**: Map Enterprise Goals to Alignment Goals, and then to Governance/Management Objectives (The Goals Cascade).\n\n3. **Implement**: Execute the objectives across the five domains (EDM, APO, BAI, DSS, MEA).",
    whereToApply: "Board level, Executive Management, and IT Leadership.",
    whenToApply: "When restructuring IT governance, aligning IT with business strategy, or addressing audit findings related to IT management.",
    scenarios: "**Scenario: Strategic IT Alignment**\n\n**Challenge**: A large financial institution was spending millions on IT projects that failed to deliver business value. The Board felt IT was a 'black box'.\n\n**Application**: They adopted COBIT 2019 to link IT performance to business goals. They implemented the 'Evaluate, Direct and Monitor' (EDM) domain to give the Board oversight mechanisms.\n\n**Outcome**: By using the COBIT Goals Cascade, they identified that 20% of IT projects did not support any strategic business objective and cancelled them, reallocating budget to high-value digital transformation initiatives.",
    colorTheme: 'indigo',
    diagramType: 'pillar-structure',
    implementationSteps: [
      { phase: 1, title: "Initiate Program", description: "Recognize the need for governance and establish the implementation team." },
      { phase: 2, title: "Define Problems", description: "Identify pain points and opportunities using COBIT Design Factors." },
      { phase: 3, title: "Define Roadmap", description: "Set the target state and identify gaps." },
      { phase: 4, title: "Plan Program", description: "Define practical projects to close the gaps." },
      { phase: 5, title: "Execute", description: "Implement the improvements (e.g., new processes, structures)." }
    ],
    controls: [
      // EDM - Evaluate, Direct and Monitor
      { id: "EDM01", name: "Ensured Governance Framework Setting", description: "Analyze and articulate the requirements for the governance of enterprise I&T.", isImplemented: false, priority: 'High', group: 'Governance (EDM)' },
      { id: "EDM02", name: "Ensured Benefits Delivery", description: "Optimize the value contribution to the business from the business processes, IT services and IT assets.", isImplemented: false, priority: 'High', group: 'Governance (EDM)' },
      { id: "EDM03", name: "Ensured Risk Optimization", description: "Ensure that I&T-related enterprise risk does not exceed risk appetite and risk tolerance.", isImplemented: false, priority: 'High', group: 'Governance (EDM)' },
      
      // APO - Align, Plan and Organize
      { id: "APO01", name: "Managed I&T Management Framework", description: "Implement the management system for enterprise I&T.", isImplemented: false, priority: 'Medium', group: 'Management (APO)' },
      { id: "APO03", name: "Managed Enterprise Architecture", description: "Establish a common architecture consisting of business process, information, data, application and technology architecture layers.", isImplemented: false, priority: 'Medium', group: 'Management (APO)' },
      { id: "APO12", name: "Managed Risk", description: "Integrate the management of I&T-related enterprise risk with overall enterprise risk management (ERM).", isImplemented: false, priority: 'High', group: 'Management (APO)' },
      { id: "APO13", name: "Managed Security", description: "Define, operate and monitor a system for information security management.", isImplemented: false, priority: 'High', group: 'Management (APO)' },

      // BAI - Build, Acquire and Implement
      { id: "BAI06", name: "Managed IT Changes", description: "Manage all changes in a controlled manner, including standard changes and emergency maintenance.", isImplemented: false, priority: 'High', group: 'Management (BAI)' },
      { id: "BAI10", name: "Managed Configuration", description: "Define and maintain descriptions of the attributes and relationships of the key resources and capabilities required to deliver IT services.", isImplemented: false, priority: 'High', group: 'Management (BAI)' },

      // DSS - Deliver, Service and Support
      { id: "DSS01", name: "Managed Operations", description: "Coordinate and execute the activities and operational procedures required to deliver internal and outsourced IT services.", isImplemented: false, priority: 'Medium', group: 'Management (DSS)' },
      { id: "DSS05", name: "Managed Security Services", description: "Protect enterprise information to maintain the level of information security risk acceptable to the enterprise.", isImplemented: false, priority: 'High', group: 'Management (DSS)' },

      // MEA - Monitor, Evaluate and Assess
      { id: "MEA01", name: "Managed Performance and Conformance Monitoring", description: "Collect, validate and evaluate management and governance objectives and metrics.", isImplemented: false, priority: 'Medium', group: 'Management (MEA)' },
    ],
    useCases: [
      { title: "Value Delivery", description: "Ensuring IT investments generate business value." },
      { title: "Risk Optimization", description: "Addressing IT risk as part of Enterprise Risk Management." }
    ]
  },
  {
    id: "csa-star",
    name: "CSA STAR (Cloud Security Alliance)",
    link: "https://cloudsecurityalliance.org/star/",
    category: "Framework",
    industry: "Technology & SaaS",
    overview: "The CSA Security, Trust, Assurance, and Risk (STAR) Registry is a publicly accessible registry that documents the security and privacy controls provided by popular cloud computing offerings. It encompasses the Cloud Controls Matrix (CCM) and the Consensus Assessments Initiative Questionnaire (CAIQ).",
    purpose: "To provide transparency into the security and privacy controls of cloud providers, reducing the need for redundant audits.",
    importance: "It is the industry standard for cloud security assurance. For CSPs, it builds trust; for customers, it simplifies vendor risk assessment.",
    howToApply: "The program has three levels of assurance:\n\n1. **Level 1 (Self-Assessment)**: Submit the CAIQ to the STAR registry. Useful for low-risk environments.\n\n2. **Level 2 (Third-Party Certification)**: A rigorous third-party audit (SOC 2 + CCM or ISO 27001 + CCM) for medium-to-high risk environments.\n\n3. **Level 3 (Continuous Monitoring)**: Automated continuous monitoring of security controls.",
    whereToApply: "Cloud Service Providers (CSPs) and Cloud Consumers (for vendor assessment).",
    whenToApply: "When selling cloud services (to prove security) or procuring cloud services (to verify security).",
    scenarios: "**Scenario: Vendor Trust for a Startup**\n\n**Challenge**: A small B2B SaaS startup was struggling to answer the hundreds of security questionnaires sent by potential enterprise customers.\n\n**Application**: They completed the CSA STAR Level 1 Self-Assessment. They filled out the CAIQ detailed descriptions of their controls and published it to the CSA Registry.\n\n**Outcome**: Instead of filling out new questionnaires, they directed customers to their STAR entry. This reduced the time spent on security diligence by 80% and accelerated deal flow.",
    colorTheme: 'sky',
    diagramType: 'pyramid-maturity',
    implementationSteps: [
       { phase: 1, title: "Level 1: Self-Assessment", description: "Complete the CAIQ (Consensus Assessments Initiative Questionnaire) and publish to registry." },
       { phase: 2, title: "Level 2: Third-Party Certification", description: "Undergo independent audit (SOC 2 + CCM) or ISO 27001 + CCM." },
       { phase: 3, title: "Level 3: Continuous Monitoring", description: "Automated ongoing validation of security controls." }
    ],
    controls: [
      // CCM v4 Domains
      { id: "AIS-04", name: "Application Security", description: "Establish and maintain a process to identify, report and remediate security vulnerabilities in applications.", isImplemented: false, priority: 'High', group: 'App & Interface Security' },
      { id: "BCR-06", name: "Business Continuity Testing", description: "Test business continuity and disaster recovery plans at least annually.", isImplemented: false, priority: 'Medium', group: 'Business Continuity' },
      { id: "CCC-01", name: "Change Management Agreements", description: "Include change management provisions in SLAs/contracts.", isImplemented: false, priority: 'Medium', group: 'Change Control' },
      { id: "DCS-01", name: "Data Classification", description: "Data is classified according to its sensitivity and business value.", isImplemented: true, priority: 'High', group: 'Data Security' },
      { id: "DCS-05", name: "Data Deletion", description: "Securely delete data upon termination of services.", isImplemented: false, priority: 'High', group: 'Data Security' },
      { id: "IAM-01", name: "Identity Management", description: "Manage the lifecycle of identities and their entitlements.", isImplemented: true, priority: 'High', group: 'Identity & Access' },
      { id: "IAM-03", name: "Strong Authentication", description: "Enforce strong authentication (MFA) for access to data and systems.", isImplemented: true, priority: 'Critical', group: 'Identity & Access' },
      { id: "IVS-06", name: "Network Security", description: "Implement network security controls (firewalls, segmentation).", isImplemented: true, priority: 'High', group: 'Infrastructure' },
      { id: "LOG-03", name: "Audit Logs", description: "Retain audit logs for a defined period to facilitate investigation.", isImplemented: false, priority: 'High', group: 'Logging' },
    ],
    useCases: [
      { title: "Vendor Assessment", description: "Using the CAIQ to evaluate a new cloud storage vendor." },
      { title: "Sales Enablement", description: "Proactively proving security posture to customers." }
    ]
  },
  {
    id: "iso-22301",
    name: "ISO 22301:2019",
    link: "https://www.iso.org/standard/75106.html",
    category: "Standard",
    industry: "General / Cross-Industry",
    overview: "ISO 22301:2019 is the international standard for Business Continuity Management Systems (BCMS). It specifies requirements to implement, maintain and improve a management system to protect against, reduce the likelihood of the occurrence of, prepare for, respond to and recover from disruptions when they arise.",
    purpose: "To ensure an organization can continue to operate during a disruption (e.g., cyberattack, natural disaster, pandemic).",
    importance: "It ensures resilience. In a world of increasing supply chain and cyber disruptions, ISO 22301 provides a proven framework for survival and recovery.",
    howToApply: "Key steps in the BCMS lifecycle include:\n\n1. **Business Impact Analysis (BIA)**: Identify critical activities and the resources supporting them. Determine Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).\n\n2. **Risk Assessment**: Identify risks that could cause disruptions.\n\n3. **Business Continuity Strategies**: Select options to protect priority activities (e.g., alternate sites, redundant systems).\n\n4. **Business Continuity Plans (BCP)**: Document procedures to respond to an incident and restore activities.\n\n5. **Exercising & Testing**: Validate that the plans actually work through drills and simulations.",
    whereToApply: "Critical operations, IT disaster recovery teams, and crisis management leadership.",
    whenToApply: "To ensure operational resilience against major disruptions.",
    scenarios: "**Scenario: Ransomware Resilience**\n\n**Challenge**: A logistics company realized that a ransomware attack could halt their shipping operations for weeks, bankrupting them.\n\n**Application**: They implemented ISO 22301. The Business Impact Analysis (BIA) identified that their 'Shipping Label Generation' system had a maximum tolerable downtime of 4 hours. They implemented an immutable backup strategy and a manual fallback process.\n\n**Outcome**: When a minor outage occurred, they activated the BCP. Operations continued manually for 6 hours with minimal financial loss, validating their RTO targets.",
    colorTheme: 'orange',
    diagramType: 'generic-pdca',
    implementationSteps: [
      { phase: 1, title: "Context & Scope", description: "Define what parts of the organization are critical to keep running." },
      { phase: 2, title: "Business Impact Analysis", description: "Determine RTO (Time) and RPO (Data) for critical processes." },
      { phase: 3, title: "Strategy Selection", description: "Choose recovery strategies (e.g., hot site, cold site, cloud failover)." },
      { phase: 4, title: "Plan Development", description: "Write specific Incident Response and Business Continuity Plans." },
      { phase: 5, title: "Testing & Exercise", description: "Regularly test the plans to ensure they work in reality." }
    ],
    controls: [
      { id: "8.2.2", name: "Business Impact Analysis (BIA)", description: "Identify critical activities and the impact of disruption. Establish RTO and RPO.", isImplemented: false, priority: 'High', group: 'Operations' },
      { id: "8.2.3", name: "Risk Assessment", description: "Identify risks of disruption to critical activities and their likelihood.", isImplemented: false, priority: 'High', group: 'Operations' },
      { id: "8.3", name: "Business Continuity Strategies", description: "Select strategies to protect and recover critical activities (e.g., redundancy, diversification).", isImplemented: false, priority: 'High', group: 'Operations' },
      { id: "8.4.2", name: "Incident Response Structure", description: "Establish a structure to respond to disruptions (e.g., Crisis Management Team).", isImplemented: false, priority: 'High', group: 'Operations' },
      { id: "8.4.3", name: "Warning and Communication", description: "Procedures to detect incidents and communicate with stakeholders.", isImplemented: false, priority: 'Medium', group: 'Operations' },
      { id: "8.4.4", name: "Business Continuity Plans", description: "Documented procedures to guide the organization to respond to, recover, and restore to a pre-defined level of operation.", isImplemented: false, priority: 'High', group: 'Operations' },
      { id: "8.5", name: "Exercise Program", description: "Regularly test and exercise continuity capabilities to ensure they are effective.", isImplemented: false, priority: 'High', group: 'Operations' },
      { id: "9.1", name: "Performance Evaluation", description: "Monitor and measure the performance of the BCMS.", isImplemented: false, priority: 'Medium', group: 'Evaluation' },
    ],
    useCases: [
      { title: "Disaster Recovery", description: "Developing technical recovery plans for IT systems." },
      { title: "Supply Chain Resilience", description: "Ensuring suppliers have adequate continuity plans." }
    ]
  }
];
