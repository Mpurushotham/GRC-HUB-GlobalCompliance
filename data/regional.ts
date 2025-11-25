
import { Framework } from '../types';

export const regionalFrameworks: Framework[] = [
  {
    id: "nis2",
    name: "NIS 2 Directive",
    link: "https://digital-strategy.ec.europa.eu/en/policies/nis2-directive",
    category: "Regulation",
    industry: "Energy & Utilities",
    overview: "Directive (EU) 2022/2555 (NIS 2) aims to achieve a high common level of cybersecurity across the Union. It builds on the original NIS Directive but expands the scope to new sectors and introduces stricter enforcement.",
    purpose: "To eliminate differences in cybersecurity requirements among EU Member States and raise the bar for security in critical infrastructure.",
    importance: "It marks a paradigm shift for 'Essential' and 'Important' entities in the EU (Energy, Transport, Health, Digital Infra), introducing personal liability for management bodies.",
    howToApply: "Entities must implement technical and organizational measures to manage risk:\n\n1. **Risk Analysis**: Conduct security policies validation and risk analysis.\n\n2. **Incident Handling**: Implement prevention, detection, and response protocols.\n\n3. **Supply Chain**: Ensure security in the acquisition and maintenance of network systems.\n\n4. **Reporting**: Submit an 'early warning' of significant incidents within 24 hours to the CSIRT.",
    whereToApply: "Medium and large entities in critical sectors (Essential) and other critical sectors (Important) within the EU.",
    whenToApply: "Member states must transpose into national law by Oct 2024.",
    scenarios: "**Scenario: Utility Grid Upgrade**\n\n**Challenge**: A regional electricity distributor needed to comply with NIS 2. Their SCADA systems were isolated but lacked formal incident reporting.\n\n**Application**: They implemented a SIEM solution to detect anomalies. They established a 24/7 SOC to ensure they could meet the 24-hour 'early warning' reporting requirement to the national CSIRT.\n\n**Outcome**: Compliance with NIS 2 Article 23 (Reporting Obligations) and enhanced visibility into grid threats.",
    colorTheme: 'blue',
    diagramType: 'pillar-structure',
    controls: [
      { id: "NIS2-1", name: "Incident Handling", description: "Measures for the prevention, detection, and response to incidents.", isImplemented: false, priority: 'High', group: 'Risk Management' },
      { id: "NIS2-2", name: "Supply Chain Security", description: "Security of supply chain and relationship between the entity and its direct suppliers.", isImplemented: false, priority: 'High', group: 'Risk Management' },
      { id: "NIS2-3", name: "Management Accountability", description: "Management bodies must approve cybersecurity measures, supervise their implementation, and can be held personally liable.", isImplemented: false, priority: 'High', group: 'Governance' },
    ],
    useCases: [
      { title: "Critical Sectors", description: "Ensuring business continuity for a water supply company." },
      { title: "Incident Reporting", description: "Meeting the 24-hour Early Warning requirement." }
    ]
  },
  {
    id: "dora",
    name: "DORA (Digital Operational Resilience Act)",
    link: "https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en",
    category: "Regulation",
    industry: "Financial Services",
    overview: "Regulation (EU) 2022/2554 (DORA) consolidates and upgrades ICT risk requirements for the financial sector. Unlike other regulations that focus on financial resilience, DORA focuses on operational resilience—the ability to withstand ICT disruptions.",
    purpose: "To ensure that the financial sector in Europe is able to stay resilient through a severe operational disruption.",
    importance: "It harmonizes digital resilience rules for 20 types of financial entities (Banks, Insurers, Crypto, Cloud Providers) across the EU.",
    howToApply: "DORA stands on five pillars:\n\n1. **ICT Risk Management**: Establish a comprehensive framework.\n\n2. **Incident Reporting**: Streamline reporting of major ICT-related incidents.\n\n3. **Resilience Testing**: Perform basic testing annually and Threat-Led Penetration Testing (TLPT) every 3 years.\n\n4. **Third-Party Risk**: Manage risk from ICT third-party service providers (Critical providers like Cloud Hyperscalers will be directly overseen).\n\n5. **Info Sharing**: Voluntary exchange of cyber threat intel.",
    whereToApply: "EU Financial entities and critical ICT third-party service providers.",
    whenToApply: "Applicable from January 17, 2025.",
    scenarios: "**Scenario: Third-Party Risk for a Bank**\n\n**Challenge**: A European bank relied heavily on a single cloud provider for its core banking. DORA requires managing this concentration risk.\n\n**Application**: The bank updated its 'Register of Information' to map all third-party dependencies. They implemented a Multi-Cloud exit strategy to ensure they could switch providers if their primary one failed.\n\n**Outcome**: Compliance with DORA's Third-Party Risk Management requirements and enhanced resilience against cloud outages.",
    colorTheme: 'indigo',
    diagramType: 'pillar-structure',
    controls: [
      { id: "DORA-1", name: "ICT Risk Management Framework", description: "Governance and control framework for ICT risks, including identification, protection, detection, response, and recovery.", isImplemented: false, priority: 'High', group: 'Risk' },
      { id: "DORA-2", name: "ICT Incident Reporting", description: "Streamlined process to report major ICT-related incidents to competent authorities.", isImplemented: false, priority: 'High', group: 'Incidents' },
      { id: "DORA-3", name: "Digital Operational Resilience Testing", description: "Periodic testing of ICT tools and systems, including TLPT (Threat-Led Penetration Testing).", isImplemented: false, priority: 'Medium', group: 'Testing' },
    ],
    useCases: [
      { title: "Third Party Risk", description: "Assessing critical ICT third-party service providers (CTPPs)." },
      { title: "Resilience Testing", description: "Conducting TIBER-EU style penetration tests." }
    ]
  },
  {
    id: "essential-eight",
    name: "ACSC Essential Eight",
    link: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security-mitigation-strategies/essential-eight",
    category: "Framework",
    industry: "General / Cross-Industry",
    overview: "The Essential Eight is a prioritized list of mitigation strategies developed by the Australian Cyber Security Centre (ACSC). It is considered the most effective baseline for protecting Microsoft Windows-based internet-connected networks.",
    purpose: "To protect organizations against a range of cyber threats by focusing on prevention and limiting the extent of incidents.",
    importance: "It is the mandatory baseline for Australian government entities and the recommended standard for Australian businesses.",
    howToApply: "Implement the 8 strategies across defined Maturity Levels:\n\n1. **Application Control**: Prevent execution of unapproved programs.\n\n2. **Patch Applications**: Remediate vulnerabilities.\n\n3. **Configure Office Macros**: Block internet macros.\n\n4. **User Application Hardening**: Block Flash/Java.\n\n5. **Restrict Admin Privileges**: Limit powerful accounts.\n\n6. **Patch Operating Systems**: Keep OS updated.\n\n7. **Multi-Factor Authentication**: Protect access.\n\n8. **Regular Backups**: Ensure data recovery.\n\nTarget **Maturity Level 1, 2, or 3** based on risk exposure.",
    whereToApply: "Australian government and businesses.",
    whenToApply: "When establishing a cyber defense baseline.",
    scenarios: "**Scenario: Ransomware Prevention**\n\n**Challenge**: A law firm was concerned about ransomware encrypting their client files.\n\n**Application**: They targeted Essential Eight Maturity Level 2. Crucially, they implemented 'Application Control' to only allow digitally signed apps to run, and 'Regular Backups' stored offline (immutable).\n\n**Outcome**: When an employee clicked a phishing link downloading a malicious exe, Application Control blocked it from running. The firm remained secure.",
    colorTheme: 'emerald',
    diagramType: 'pyramid-maturity',
    controls: [
      { id: "E8-1", name: "Application Control", description: "Prevent execution of unapproved/malicious programs (e.g., .exe, .dll, scripts) in the workstation environment.", isImplemented: false, priority: 'High', group: 'Prevention' },
      { id: "E8-2", name: "Patch Applications", description: "Patch Flash, web browsers, Microsoft Office, Java and PDF viewers. Patch critical vulnerabilities within 48 hours.", isImplemented: false, priority: 'High', group: 'Prevention' },
      { id: "E8-3", name: "Configure Microsoft Office Macro Settings", description: "Block macros from the internet. Only allow macros from trusted locations with digital signatures.", isImplemented: false, priority: 'Medium', group: 'Prevention' },
      { id: "E8-6", name: "Restrict Administrative Privileges", description: "Limit access to operating systems and applications based on user duties. Revalidate privileges regularly.", isImplemented: false, priority: 'High', group: 'Limitation' },
    ],
    useCases: [
      { title: "Ransomware Defense", description: "Using Application Control to stop unknown executables." },
      { title: "Insider Threat", description: "Restricting Admin Privileges to limit damage from compromised accounts." }
    ]
  },
  {
    id: "cyber-essentials",
    name: "Cyber Essentials Plus",
    link: "https://www.ncsc.gov.uk/cyberessentials/overview",
    category: "Compliance",
    industry: "General / Cross-Industry",
    overview: "Cyber Essentials is a UK government-backed scheme to help organizations protect themselves against a whole range of the most common cyber attacks. 'Plus' involves a technical audit.",
    purpose: "To provide a clear statement of the basic controls all organizations should implement to mitigate risk from common internet-based threats.",
    importance: "It is mandatory for suppliers bidding for certain UK government contracts dealing with sensitive personal information.",
    howToApply: "Address the five technical controls themes:\n\n1. **Firewalls**: Secure internet connection.\n\n2. **Secure Configuration**: Choose secure settings.\n\n3. **User Access Control**: Manage accounts.\n\n4. **Malware Protection**: Virus protection.\n\n5. **Patch Management**: Keep software updated.\n\nFor 'Plus', an external auditor will scan your network to verify these controls.",
    whereToApply: "UK organizations and suppliers to the UK government.",
    whenToApply: "When bidding for UK govt contracts or demonstrating baseline security.",
    scenarios: "**Scenario: SME Government Bid**\n\n**Challenge**: A small construction firm wanted to bid on a Ministry of Defence project but required Cyber Essentials Plus.\n\n**Application**: They replaced their default router passwords (Secure Config), removed local admin rights from staff laptops (Access Control), and enabled automatic updates (Patching). An external auditor scanned their workstations.\n\n**Outcome**: They passed the audit, received the certification badge, and successfully qualified for the tender.",
    colorTheme: 'rose',
    diagramType: 'pillar-structure',
    controls: [
      { id: "CE-1", name: "Firewalls", description: "Ensure that only safe and necessary network services can be accessed from the internet.", isImplemented: false, priority: 'High', group: 'Technical' },
      { id: "CE-2", name: "Secure Configuration", description: "Choose the most secure settings for your devices and software. Remove unused software.", isImplemented: false, priority: 'High', group: 'Technical' },
      { id: "CE-3", name: "User Access Control", description: "Control who has access to your data and services. Use admin accounts only when necessary.", isImplemented: false, priority: 'High', group: 'Technical' },
    ],
    useCases: [
      { title: "SME Security", description: "Establishing a cost-effective security baseline." },
      { title: "Supply Chain", description: "Demonstrating cyber hygiene to partners." }
    ]
  },
  {
    id: "nesa-ias",
    name: "NESA / SIA (UAE IAS)",
    link: "https://u.ae/en/information-and-services/justice-safety-and-the-law/cyber-safety-and-digital-security",
    category: "Standard",
    industry: "Defense & Government",
    overview: "The UAE Information Assurance Standards (formerly NESA) are a set of critical information security controls tailored for government entities and critical national services in the UAE.",
    purpose: "To protect the critical information infrastructure of the UAE and raise the national cybersecurity level.",
    importance: "Mandatory for all UAE government entities, semi-government entities, and business sectors identified as critical infrastructure.",
    howToApply: "Implement the controls categorized into management and technical domains:\n\n1. **Plan**: Establish the Information Security Management System (ISMS).\n\n2. **Do**: Implement the 188 controls (prioritized as P1, P2, P3, P4).\n\n3. **Check**: Monitor and audit compliance.\n\n4. **Act**: Improve based on audit findings.",
    whereToApply: "United Arab Emirates Critical Information Infrastructure (CII).",
    whenToApply: "Mandatory compliance for identified entities.",
    scenarios: "**Scenario: Government Audit**\n\n**Challenge**: A Dubai government department faced a mandatory SIA audit.\n\n**Application**: They focused on the 'P1' (Priority 1) controls first, which address critical risks like Access Control and Incident Management. They documented their policies and conducted a mock audit.\n\n**Outcome**: They passed the audit with minor observations, ensuring continued operation and funding.",
    colorTheme: 'amber',
    diagramType: 'generic-pdca',
    controls: [
      { id: "M1", name: "Information Security Governance", description: "Establish a framework for security governance, roles, and responsibilities.", isImplemented: false, priority: 'High', group: 'Management' },
      { id: "T1", name: "Asset Management", description: "Identify, classify, and manage information assets throughout their lifecycle.", isImplemented: false, priority: 'Medium', group: 'Technical' },
    ],
    useCases: [
      { title: "National Security", description: "Securing UAE critical data and infrastructure." }
    ]
  },
  {
    id: "bsi-it-grundschutz",
    name: "BSI IT-Grundschutz",
    link: "https://www.bsi.bund.de/EN/Themen/ITGrundschutz/itgrundschutz_node.html",
    category: "Standard",
    industry: "General / Cross-Industry",
    overview: "BSI IT-Grundschutz (IT Baseline Protection) is a methodology from the German Federal Office for Information Security. It identifies standard security safeguards for typical IT systems.",
    purpose: "To achieve an appropriate level of security for all types of information in an organization.",
    importance: "It is the de facto standard in Germany for securing government and private sector IT. It is compatible with ISO 27001 (ISO 27001 certification on the basis of IT-Grundschutz).",
    howToApply: "Use the IT-Grundschutz Compendium:\n\n1. **Structure Analysis**: Map the IT network and applications.\n\n2. **Protection Needs Assessment**: Determine if protection needs are Normal, High, or Very High.\n\n3. **Modeling**: Map the 'Modules' (building blocks) to the components.\n\n4. **Check**: Verify if the standard safeguards are implemented.",
    whereToApply: "Germany (Public and Private Sectors).",
    whenToApply: "When operating in Germany requiring high assurance or government connectivity.",
    scenarios: "**Scenario: German Auto Manufacturer**\n\n**Challenge**: An automotive plant needed to secure its production network (OT) against sabotage.\n\n**Application**: They applied the IT-Grundschutz modules for 'Industrial IT'. They conducted a Protection Needs Assessment and identified the assembly line controllers as 'Very High' need. They applied specific safeguards for network segmentation and physical access.\n\n**Outcome**: A robust, certified security posture that satisfied German regulatory requirements.",
    colorTheme: 'yellow',
    diagramType: 'process-flow',
    controls: [
      { id: "APP.1.1", name: "Office Software", description: "Secure configuration of office products to prevent macro viruses and data leakage.", isImplemented: false, priority: 'Medium', group: 'Applications' },
      { id: "INF.1", name: "General Building", description: "Physical security for IT infrastructure, including access control and fire protection.", isImplemented: false, priority: 'Medium', group: 'Infrastructure' },
    ],
    useCases: [
      { title: "German Public Sector", description: "Compliance for federal agencies (Bund)." },
      { title: "ISO 27001 Certification", description: "Using the IT-Grundschutz route to ISO certification." }
    ]
  },
  {
    id: "nsm-gpr",
    name: "NSM Principles for ICT Security (Norway)",
    link: "https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet-2-0/",
    category: "Framework",
    industry: "Defense & Government",
    overview: "The 'Grunnprinsipper for IKT-sikkerhet' (Fundamental Principles for ICT Security) 2.0 is developed by the Norwegian National Security Authority (NSM). It provides a prioritized set of measures to protect information systems against cyberattacks, widely adopted across Norway's public and private sectors.",
    purpose: "To provide a baseline for ICT security that helps organizations protect their values and deliver essential services.",
    importance: "It is the standard reference for ICT security in Norway, often mandated for critical infrastructure and government suppliers.",
    howToApply: "The principles are structured into four categories:\n\n1. **Manage and Learn**: Governance, risk management, and learning from incidents.\n\n2. **Identify and Map**: Know your assets, systems, and information flows.\n\n3. **Protect**: Implement barriers against attacks (e.g., configuration, access control).\n\n4. **Maintain and Detect**: Continuous monitoring, updating, and incident response.",
    whereToApply: "Norwegian public enterprises and private companies operating critical infrastructure.",
    whenToApply: "When establishing a security baseline in Norway.",
    scenarios: "**Scenario: Municipal Security Upgrade**\n\n**Challenge**: A Norwegian municipality needed to upgrade its defenses after a wave of cyberattacks targeting local governments.\n\n**Application**: They used NSM's principles to prioritize budget. They started with 'Protect' measures: specifically, enforcing 2-factor authentication (Principle 2.4) and restricting admin privileges (Principle 2.2).\n\n**Outcome**: Significant reduction in attack surface and compliance with national recommendations.",
    colorTheme: 'red',
    diagramType: 'process-flow',
    controls: [
      { id: "2.2", name: "Control Privileges", description: "Restrict, control, and monitor the use of administrative privileges.", isImplemented: false, priority: 'High', group: 'Protect' },
      { id: "2.4", name: "Strong Authentication", description: "Use strong authentication (e.g., MFA) for all remote access and administrative accounts.", isImplemented: false, priority: 'High', group: 'Protect' },
      { id: "3.2", name: "Security Monitoring", description: "Establish capabilities to detect security incidents (Log analysis, IDS).", isImplemented: false, priority: 'High', group: 'Detect' },
    ],
    useCases: [
      { title: "National Baseline", description: "Establishing a defensible security posture in Norway." }
    ]
  },
  {
    id: "katakri",
    name: "Katakri 2020 (Finland)",
    link: "https://um.fi/katakri-information-security-audit-tool",
    category: "Standard",
    industry: "Defense & Government",
    overview: "Katakri is the Information Security Audit Tool for Authorities in Finland. It serves as a unified audit framework used by Finnish authorities (like the NSA and Defense Forces) to assess an organization's ability to protect classified information.",
    purpose: "To harmonize official security audits and ensure adequate protection of classified data (National or International/EU/NATO).",
    importance: "Mandatory for companies in Finland wishing to handle classified information or participate in sensitive government projects.",
    howToApply: "Katakri is divided into three subdivisions:\n\n1. **Administrative Security (T)**: Leadership, risk management, personnel security, and training.\n\n2. **Physical Security (F)**: Zoning, perimeter security, access control systems, and intrusion detection.\n\n3. **Information Assurance (I)**: Technical IT security controls, network segregation, and cryptography.",
    whereToApply: "Finnish organizations handling classified information (ST IV–I).",
    whenToApply: "During facility security clearance audits.",
    scenarios: "**Scenario: Defense Contracting in Finland**\n\n**Challenge**: A Finnish technology firm won a tender to develop software for the Finnish Defence Forces requiring handling of 'Restricted' (ST IV) data.\n\n**Application**: They underwent a Katakri audit. They had to reinforce their server room walls (Physical Security) and implement strict network segregation (Information Assurance) to meet ST IV requirements.\n\n**Outcome**: Passed the audit, received Facility Security Clearance (FSC), and commenced the project.",
    colorTheme: 'sky',
    diagramType: 'pillar-structure',
    controls: [
      { id: "T-01", name: "Security Management", description: "The organization has a nominated security manager and defined security responsibilities.", isImplemented: false, priority: 'High', group: 'Administrative' },
      { id: "F-04", name: "Security Areas", description: "Premises are divided into security areas based on the classification level of information handled.", isImplemented: false, priority: 'High', group: 'Physical' },
      { id: "I-08", name: "Network Segregation", description: "Networks processing classified information are logically or physically separated from public networks.", isImplemented: false, priority: 'High', group: 'Info Assurance' },
    ],
    useCases: [
      { title: "Security Clearance", description: "Preparing for a Facility Security Clearance (FSC) audit." }
    ]
  },
  {
    id: "d-seal",
    name: "The D-seal (Denmark)",
    link: "https://www.d-maerket.dk/en",
    category: "Compliance",
    industry: "General / Cross-Industry",
    overview: "The D-seal (D-mærket) is Denmark's national labeling program for IT security and responsible data use. It combines strict cybersecurity requirements with GDPR accountability parameters.",
    purpose: "To drive digital trust and help consumers and businesses identify companies that handle data responsibly.",
    importance: "It acts as a visible trust badge for Danish companies, differentiating them in the market based on verified security and ethics.",
    howToApply: "Obtaining the seal involves meeting criteria based on company size and risk:\n\n1. **Self-Assessment**: Map the company's systems and data usage.\n\n2. **Criteria Implementation**: Implement controls derived from ISO 27001 (Security) and GDPR (Data Ethics).\n\n3. **Audit**: An independent audit ensures compliance.\n\n4. **Surveillance**: Annual renewal audits.",
    whereToApply: "Danish companies of all sizes, especially those in B2B supply chains.",
    whenToApply: "To demonstrate digital responsibility to customers.",
    scenarios: "**Scenario: SaaS Trust Badge**\n\n**Challenge**: A Danish SaaS startup wanted to compete with larger enterprise vendors but lacked a recognizable security credential.\n\n**Application**: They applied for the D-seal. They formalized their data ethics policy (e.g., not selling user data) and implemented MFA and log monitoring. An external auditor verified their controls.\n\n**Outcome**: Displaying the D-seal on their website increased conversion rates by signaling verified trust.",
    colorTheme: 'red',
    diagramType: 'process-flow',
    controls: [
      { id: "DS-1", name: "Data Ethics Policy", description: "Define and publish a policy on how data is used responsibly beyond just legal compliance.", isImplemented: false, priority: 'High', group: 'Ethics' },
      { id: "DS-2", name: "IT Security Basics", description: "Implement fundamental controls like backups, updates, and access control (aligned with CIS/ISO).", isImplemented: false, priority: 'High', group: 'Security' },
    ],
    useCases: [
      { title: "Market Differentiation", description: "Using the seal to prove digital responsibility." }
    ]
  },
  {
    id: "ssf-1101",
    name: "SSF 1101 (Cybersäkerhet BAS)",
    link: "https://www.stoldskyddsforeningen.se/foretag/cybersakerhet/",
    category: "Standard",
    industry: "General / Cross-Industry",
    overview: "SSF 1101 'Cybersäkerhet BAS' is a Swedish cybersecurity standard developed by the Swedish Theft Prevention Association (Stöldskyddsföreningen). It is designed to provide small and medium-sized enterprises (SMEs) with a concrete, manageable baseline for IT security, comparable to the UK's Cyber Essentials.",
    purpose: "To offer a simplified yet effective level of protection against the most common digital threats facing smaller businesses.",
    importance: "It serves as a hygiene factor for Swedish businesses. Certification against SSF 1101 demonstrates to customers and partners that a company takes basic cybersecurity seriously.",
    howToApply: "Implement the basic technical and organizational measures:\n\n1. **Software Updates**: Keeping systems patched.\n\n2. **Malware Protection**: Using antivirus/EDR.\n\n3. **Access Control**: Strong passwords/MFA and least privilege.\n\n4. **Backups**: Regular, tested backups.\n\n5. **Network Security**: Firewalls and secure configuration.\n\n6. **Training**: Basic security awareness for employees.",
    whereToApply: "Swedish SMEs and organizations looking for a basic security baseline.",
    whenToApply: "When establishing an initial security posture or satisfying basic B2B security requirements.",
    scenarios: "**Scenario: Small Consultancy Firm**\n\n**Challenge**: A Swedish consultancy firm with 20 employees wanted to prove their security maturity to a larger client but found ISO 27001 too expensive and complex.\n\n**Application**: They adopted SSF 1101. They implemented 2FA on Microsoft 365, automated their patch management, and established an offline backup routine. They underwent the self-assessment and verification process.\n\n**Outcome**: They received the SSF 1101 certificate, satisfying the client's procurement requirements with a cost-effective solution.",
    colorTheme: 'blue',
    diagramType: 'pillar-structure',
    controls: [
      { id: "SSF-1", name: "Patch Management", description: "Ensure operating systems and applications are updated automatically or within a set timeframe.", isImplemented: false, priority: 'High', group: 'Technical' },
      { id: "SSF-2", name: "Strong Authentication", description: "Use Multi-Factor Authentication (MFA) for all external access and cloud services.", isImplemented: false, priority: 'High', group: 'Access' },
      { id: "SSF-3", name: "Backups", description: "Perform regular backups and verify that data can be restored. Keep at least one copy offline.", isImplemented: false, priority: 'High', group: 'Recovery' },
    ],
    useCases: [
      { title: "SME Security", description: "Establishing basic cyber hygiene for small businesses." },
      { title: "Supply Chain", description: "Meeting basic security requirements for Swedish enterprise contracts." }
    ]
  },
  {
    id: "msbfs-2020-6",
    name: "MSBFS 2020:6 / 2020:7",
    link: "https://www.msb.se/sv/regler/gallande-regler/msbfs-20206/",
    category: "Regulation",
    industry: "Defense & Government",
    overview: "Regulations from the Swedish Civil Contingencies Agency (MSB) on information security for government agencies (2020:6) and for providers of essential services (2020:7). They mandate a systematic work approach (LIS) based on ISO/IEC 27001.",
    purpose: "To ensure that critical societal functions and government operations maintain a systematic and risk-based approach to information security.",
    importance: "Mandatory for all Swedish state authorities, regions, municipalities, and private companies designated as operating critical infrastructure.",
    howToApply: "Establish a Systematic Information Security Management System (LIS):\n\n1. **Analyze**: Identify assets, assess risks, and classify information (KLASSA model).\n\n2. **Design**: Select security controls (often referencing ISO 27002).\n\n3. **Implement**: Deploy controls and training.\n\n4. **Follow-up**: Evaluate effectiveness and report to MSB.",
    whereToApply: "Swedish government agencies and critical infrastructure operators.",
    whenToApply: "Continuously, with annual follow-ups.",
    scenarios: "**Scenario: Municipal Water Supply**\n\n**Challenge**: A Swedish municipality needed to secure its water treatment SCADA systems according to MSBFS 2020:7.\n\n**Application**: They used the KLASSA tool to classify the SCADA data as 'Critical'. Based on this, they implemented network segmentation (separating OT from IT) and established an incident reporting routine to MSB/CERT-SE.\n\n**Outcome**: Compliance with the regulation and increased resilience of the water supply against cyber sabotage.",
    colorTheme: 'yellow',
    diagramType: 'generic-pdca',
    controls: [
      { id: "LIS-1", name: "Management Commitment", description: "Top management must decide on the information security policy and allocate resources.", isImplemented: false, priority: 'High', group: 'Governance' },
      { id: "LIS-2", name: "Risk Assessment", description: "Systematically identify, analyze, and evaluate information security risks.", isImplemented: false, priority: 'High', group: 'Planning' },
      { id: "LIS-3", name: "Information Classification", description: "Classify information based on confidentiality, integrity, and availability requirements.", isImplemented: false, priority: 'High', group: 'Planning' },
    ],
    useCases: [
      { title: "Critical Infrastructure", description: "Securing essential services in Sweden." },
      { title: "Government Compliance", description: "Meeting the legal requirements for Swedish authorities." }
    ]
  }
];
