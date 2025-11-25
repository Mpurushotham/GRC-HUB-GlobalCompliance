
import { Framework } from '../types';

export const privacyFrameworks: Framework[] = [
  {
    id: "gdpr",
    name: "EU GDPR (General Data Protection Regulation)",
    link: "https://gdpr.eu/",
    category: "Regulation",
    industry: "General / Cross-Industry",
    overview: "Regulation (EU) 2016/679, commonly known as the GDPR, is a regulation in EU law on data protection and privacy. It is the toughest privacy and security law in the world, imposing obligations onto organizations anywhere, so long as they target or collect data related to people in the EU.",
    purpose: "To protect the fundamental rights and freedoms of natural persons (specifically their right to the protection of personal data) and to ensure the free movement of personal data within the EU.",
    importance: "Non-compliance can lead to fines of up to €20 million or 4% of global turnover. It sets the global benchmark for privacy rights.",
    howToApply: "Compliance requires a holistic data governance framework:\n\n1. **Record of Processing (Art. 30)**: Maintain detailed records of data processing activities (ROPA).\n\n2. **Legal Basis (Art. 6)**: Identify valid grounds for processing (e.g., Consent, Contract, Legitimate Interest) before collecting data.\n\n3. **Data Subject Rights (Ch. 3)**: Implement mechanisms to handle requests for Access, Rectification, Erasure ('Right to be Forgotten'), and Portability.\n\n4. **DPIA (Art. 35)**: Conduct Data Protection Impact Assessments for high-risk processing activities.\n\n5. **Breach Notification (Art. 33)**: Report data breaches to the supervisory authority within 72 hours of becoming aware of them.",
    whereToApply: "Any organization processing the personal data of data subjects residing in the EU.",
    whenToApply: "Whenever personal data is collected, processed, or stored.",
    scenarios: "**Scenario: Marketing Consent**\n\n**Challenge**: A US-based e-commerce site was selling to European customers but had a generic 'By using this site you agree' cookie banner.\n\n**Application**: To comply with GDPR, they implemented a granular Consent Management Platform (CMP). They blocked all non-essential cookies until the user explicitly opted in. They also updated their Privacy Policy to clearly state the legal basis for processing email addresses (Consent).\n\n**Outcome**: They avoided potential fines from EU regulators and built trust with customers by being transparent about data usage.",
    colorTheme: 'amber',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP0SURBVHgB7d3/ThRBFMfxj6ACUggKX4AUCgGlUAgKhEIhFIJCqIdSqAdSqAdSqAdSqAdKCRQKhUAgFAKBQCAUjs/ZzOzO7u7c3Xl/5CSZO9nN7j5/27nZtovj8fgFAQBwXqXtXAB0yJAAQIaEBAAZEmQIECEhAZAhAQFIGRggQEiAAAEhCgQQICHAAIGgCAQQICHAAIGgCAQQICHAAIGgCAQQICDAAEEQhAECCgwgQAIIgxAECCgwgAARIAhCECCgwgAARIAhCECCgwgAARIQhCECCgwgAAhCEIAgQkGECAhCEIAgQkGECAhCEIAgQkGECAhAECBCEIAgQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBAgIgyAIECBAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBCEIAgQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBAgIgyAIECBAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBCEIAgQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBAgIgyAIECBAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBCEIAgQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBAgIgyAIECBAhAECBCQIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECCIQgCBCEIAAQkGECAhAECBCEIAgQkGECAhAECBCEIAgQkGECAhAECBCQIAAQkGECAhAECCMQg/A9k/z/1v/wB+AAAAAElFTkSuQmCC',
    diagramType: 'pillar-structure',
    implementationSteps: [
        { phase: 1, title: "Data Mapping (ROPA)", description: "Identify what personal data is held, where it comes from, and who it is shared with (Article 30)." },
        { phase: 2, title: "Lawful Basis", description: "Determine the legal justification for each processing activity (Consent, Contract, etc.)." },
        { phase: 3, title: "Rights Management", description: "Establish processes to handle DSARs (Data Subject Access Requests) within 30 days." },
        { phase: 4, title: "Breach Protocol", description: "Implement detection and reporting mechanisms for the 72-hour notification window." },
        { phase: 5, title: "Privacy by Design", description: "Integrate data protection into new projects from the start (DPIA)." }
    ],
    controls: [
      // 1. Lawfulness, Fairness, Transparency (7)
      { id: "Art.5(1)(a)", name: "Principle of Lawfulness, Fairness, Transparency", description: "Personal data shall be processed lawfully, fairly and in a transparent manner in relation to the data subject.", isImplemented: true, priority: 'High', group: 'Lawfulness & Transparency' },
      { id: "Art.6", name: "Lawfulness of Processing", description: "Processing is only lawful if at least one legal basis applies (Consent, Contract, Legal Obligation, Vital Interests, Public Task, Legitimate Interests).", isImplemented: true, priority: 'High', group: 'Lawfulness & Transparency' },
      { id: "Art.7", name: "Conditions for Consent", description: "Where processing is based on consent, the controller must be able to demonstrate that the data subject has consented. Consent must be distinguishable, intelligible, and easily withdrawn.", isImplemented: false, priority: 'High', group: 'Lawfulness & Transparency' },
      { id: "Art.8", name: "Child's Consent", description: "Where the child is below the age of 16 years, processing is lawful only if and to the extent that consent is given or authorised by the holder of parental responsibility.", isImplemented: false, priority: 'Medium', group: 'Lawfulness & Transparency' },
      { id: "Art.9", name: "Special Categories of Data", description: "Processing of sensitive data (race, health, biometric, etc.) is prohibited unless a specific exception (e.g., explicit consent) applies.", isImplemented: false, priority: 'High', group: 'Lawfulness & Transparency' },
      { id: "Art.12", name: "Transparent Communication", description: "The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 in a concise, transparent, intelligible and easily accessible form.", isImplemented: false, priority: 'Medium', group: 'Lawfulness & Transparency' },
      { id: "Art.13-14", name: "Information to be Provided", description: "Data subjects must be informed about the identity of the controller, purposes of processing, recipients, and their rights at the time of collection.", isImplemented: true, priority: 'High', group: 'Lawfulness & Transparency' },

      // 2. Data Subject Rights (8)
      { id: "Art.15", name: "Right of Access", description: "The data subject has the right to obtain confirmation as to whether or not personal data concerning them are being processed, and access to that data.", isImplemented: false, priority: 'High', group: 'Data Subject Rights' },
      { id: "Art.16", name: "Right to Rectification", description: "The data subject has the right to obtain without undue delay the rectification of inaccurate personal data concerning him or her.", isImplemented: false, priority: 'Medium', group: 'Data Subject Rights' },
      { id: "Art.17", name: "Right to Erasure ('Right to be Forgotten')", description: "The data subject has the right to obtain the erasure of personal data without undue delay where specific grounds apply (e.g., no longer necessary, consent withdrawn).", isImplemented: false, priority: 'High', group: 'Data Subject Rights' },
      { id: "Art.18", name: "Right to Restriction of Processing", description: "The data subject has the right to obtain restriction of processing where accuracy is contested or processing is unlawful.", isImplemented: false, priority: 'Medium', group: 'Data Subject Rights' },
      { id: "Art.19", name: "Notification Obligation", description: "The controller shall communicate any rectification or erasure of personal data or restriction of processing to each recipient to whom the personal data have been disclosed.", isImplemented: false, priority: 'Low', group: 'Data Subject Rights' },
      { id: "Art.20", name: "Right to Data Portability", description: "The data subject has the right to receive their personal data in a structured, commonly used and machine-readable format and transmit it to another controller.", isImplemented: false, priority: 'Medium', group: 'Data Subject Rights' },
      { id: "Art.21", name: "Right to Object", description: "The data subject has the right to object at any time to processing based on legitimate interests or public task, and absolutely for direct marketing.", isImplemented: false, priority: 'High', group: 'Data Subject Rights' },
      { id: "Art.22", name: "Automated Decision-Making", description: "The data subject has the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects.", isImplemented: false, priority: 'Medium', group: 'Data Subject Rights' },

      // 3. Data Governance (11)
      { id: "Art.5(1)(b)", name: "Purpose Limitation", description: "Data collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes.", isImplemented: true, priority: 'High', group: 'Data Governance' },
      { id: "Art.5(1)(c)", name: "Data Minimization", description: "Data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.", isImplemented: false, priority: 'High', group: 'Data Governance' },
      { id: "Art.5(1)(d)", name: "Accuracy", description: "Data shall be accurate and, where necessary, kept up to date; reasonable steps must be taken to ensure inaccurate data is erased or rectified.", isImplemented: true, priority: 'Medium', group: 'Data Governance' },
      { id: "Art.5(1)(e)", name: "Storage Limitation", description: "Data kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed.", isImplemented: false, priority: 'Medium', group: 'Data Governance' },
      { id: "Art.24", name: "Responsibility of the Controller", description: "Implement appropriate technical and organizational measures to ensure and to be able to demonstrate that processing is performed in accordance with this Regulation.", isImplemented: true, priority: 'High', group: 'Data Governance' },
      { id: "Art.25", name: "Data Protection by Design & Default", description: "Implement appropriate technical and organizational measures (like pseudonymisation) designed to implement data-protection principles effectively.", isImplemented: false, priority: 'High', group: 'Data Governance' },
      { id: "Art.28", name: "Processor Agreements", description: "Processing by a processor shall be governed by a contract setting out the subject-matter, duration, nature and purpose of the processing.", isImplemented: false, priority: 'High', group: 'Data Governance' },
      { id: "Art.30", name: "Records of Processing (ROPA)", description: "Maintain a record of processing activities under its responsibility (purposes, categories of data, recipients, transfers, time limits).", isImplemented: false, priority: 'High', group: 'Data Governance' },
      { id: "Art.35", name: "Data Protection Impact Assessment (DPIA)", description: "Carry out an assessment of the impact of the envisaged processing operations on the protection of personal data for high-risk processing.", isImplemented: false, priority: 'High', group: 'Data Governance' },
      { id: "Art.37", name: "Data Protection Officer (DPO)", description: "Designate a data protection officer where processing is carried out by a public authority or core activities require regular and systematic monitoring on a large scale.", isImplemented: false, priority: 'High', group: 'Data Governance' },
      { id: "Art.44", name: "Cross-Border Transfers", description: "Transfers of personal data to a third country or an international organisation shall take place only if conditions are complied with (Adequacy, SCCs, BCRs).", isImplemented: false, priority: 'High', group: 'Data Governance' },

      // 4. Security & Breach (6)
      { id: "Art.5(1)(f)", name: "Integrity and Confidentiality", description: "Processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing.", isImplemented: true, priority: 'High', group: 'Security & Breach' },
      { id: "Art.32(1)(a)", name: "Encryption & Pseudonymisation", description: "Implement pseudonymisation and encryption of personal data where appropriate.", isImplemented: true, priority: 'High', group: 'Security & Breach' },
      { id: "Art.32(1)(b)", name: "Resilience of Systems", description: "Ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services.", isImplemented: true, priority: 'High', group: 'Security & Breach' },
      { id: "Art.32(1)(d)", name: "Testing & Evaluation", description: "Process for regularly testing, assessing and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing.", isImplemented: false, priority: 'Medium', group: 'Security & Breach' },
      { id: "Art.33", name: "Notification to Supervisory Authority", description: "In the case of a personal data breach, notify the supervisory authority without undue delay and, where feasible, not later than 72 hours.", isImplemented: false, priority: 'High', group: 'Security & Breach' },
      { id: "Art.34", name: "Notification to Data Subject", description: "When the personal data breach is likely to result in a high risk to the rights and freedoms of natural persons, communicate the breach to the data subject without undue delay.", isImplemented: false, priority: 'High', group: 'Security & Breach' },
    ],
    useCases: [
      { title: "Consent Management", description: "Implementing a CMP to handle cookie consent and preference management." },
      { title: "Cross-Border Transfer", description: "Using Standard Contractual Clauses (SCCs) to legalize data transfer outside the EEA." }
    ]
  },
  {
    id: "ccpa-cpra",
    name: "CCPA / CPRA",
    link: "https://oag.ca.gov/privacy/ccpa",
    category: "Law",
    industry: "General / Cross-Industry",
    overview: "The California Consumer Privacy Act (CCPA), amended by the California Privacy Rights Act (CPRA), gives consumers more control over the personal information that businesses collect about them. It is the first comprehensive modern privacy law in the United States.",
    purpose: "To provide California residents with rights to know, delete, and opt-out of the sale or sharing of their personal information.",
    importance: "It applies to many businesses worldwide that trade in California. The CPRA established the California Privacy Protection Agency (CPPA), the first dedicated privacy regulator in the US.",
    howToApply: "Key compliance requirements include:\n\n1. **Notice**: Inform consumers at or before the point of collection about the categories of PI collected and the purposes.\n\n2. **Opt-Out**: Provide a clear 'Do Not Sell or Share My Personal Information' link on the homepage.\n\n3. **Limit Use**: Provide a link to 'Limit the Use of My Sensitive Personal Information'.\n\n4. **Request Handling**: Respond to verifiable consumer requests to know, delete, or correct data within 45 days.",
    whereToApply: "For-profit businesses doing business in California that meet revenue (> $25M) or data volume thresholds.",
    whenToApply: "Continuously regarding data collection and handling practices.",
    scenarios: "**Scenario: Ad-Tech Opt-Out**\n\n**Challenge**: A news website relied on ad revenue and shared user browsing data with third-party networks, which constituted a 'sale' under CCPA.\n\n**Application**: To comply, they added a 'Do Not Sell or Share My Info' link to their footer. They configured their site to detect the Global Privacy Control (GPC) signal from browsers and automatically opt-out users who had it enabled.\n\n**Outcome**: They avoided enforcement actions from the California Attorney General and honored user privacy preferences.",
    colorTheme: 'amber',
    diagramType: 'process-flow',
    controls: [
      { id: "CCPA-1", name: "Notice at Collection", description: "Inform consumers at or before the point of collection what categories of PI will be collected and the purposes for use.", isImplemented: false, priority: 'High', group: 'Notices' },
      { id: "CCPA-2", name: "Right to Opt-Out", description: "Provide a clear and conspicuous link on the business’s homepage titled 'Do Not Sell or Share My Personal Information'.", isImplemented: false, priority: 'High', group: 'Rights' },
      { id: "CPRA-1", name: "Data Minimization", description: "Collection, use, retention, and sharing of consumer PI shall be reasonably necessary and proportionate to achieve the purposes for which it was collected.", isImplemented: false, priority: 'Medium', group: 'Principles' },
    ],
    useCases: [
      { title: "Universal Opt-Out", description: "Handling Global Privacy Control (GPC) signals from browsers." }
    ]
  },
  {
    id: "lgpd",
    name: "LGPD (Brazil)",
    link: "https://www.gov.br/anpd/pt-br",
    category: "Law",
    industry: "General / Cross-Industry",
    overview: "The Lei Geral de Proteção de Dados (LGPD) is Brazil's comprehensive data protection law. It is heavily modeled after the GDPR but contains unique provisions regarding the legal bases for processing.",
    purpose: "To protect the fundamental rights of freedom and privacy and the free development of the personality of the natural person.",
    importance: "It unifies over 40 different statutes that previously governed data in Brazil. Compliance is essential for operating in South America's largest economy.",
    howToApply: "Similar to GDPR, but with specifics:\n\n1. **Appoint a DPO**: Every controller must appoint a 'Encarregado' (Data Protection Officer) to interface with the ANPD (National Authority).\n\n2. **Legal Basis**: Map processing to one of the 10 legal bases (Art. 7).\n\n3. **ROPA**: Maintain a Record of Processing Activities.",
    whereToApply: "Any processing operation carried out in Brazil, or related to individuals in Brazil.",
    whenToApply: "When processing personal data of individuals located in Brazil.",
    scenarios: "**Scenario: Fintech Expansion**\n\n**Challenge**: A European fintech expanded to Brazil. They assumed GDPR compliance was enough.\n\n**Application**: They realized LGPD requires a DPO ('Encarregado') identity to be publicly available. They appointed a local DPO and updated their privacy notices to reference LGPD Article 18 rights instead of GDPR Article 15-22.\n\n**Outcome**: Seamless entry into the Brazilian market with full regulatory approval.",
    colorTheme: 'emerald',
    diagramType: 'pillar-structure',
    controls: [
      { id: "LGPD-1", name: "Legal Basis", description: "Identify one of the 10 legal bases for processing data (e.g., Credit Protection is a unique basis in LGPD).", isImplemented: false, priority: 'High', group: 'Principles' },
      { id: "LGPD-2", name: "Data Protection Officer", description: "Appoint a 'Encarregado' (DPO) to accept complaints and communications from data subjects and the National Authority.", isImplemented: false, priority: 'High', group: 'Governance' },
    ],
    useCases: [
      { title: "International Transfer", description: "Ensuring adequate safeguards for data leaving Brazil." }
    ]
  },
  {
    id: "pdpa-sg",
    name: "PDPA (Singapore)",
    link: "https://www.pdpc.gov.sg/",
    category: "Law",
    industry: "General / Cross-Industry",
    overview: "The Personal Data Protection Act (PDPA) governs the collection, use, and disclosure of personal data in Singapore. It recognizes both the rights of individuals to protect their personal data and the needs of organizations to collect it for legitimate purposes.",
    purpose: "To govern data activities in a way that balances individual rights with business needs.",
    importance: "Singapore is a major Asian financial hub. The PDPA is the primary standard, and recent amendments introduced mandatory breach notification and higher fines.",
    howToApply: "Adhere to the Data Protection Provisions:\n\n1. **Consent Obligation**: Obtain consent before collection.\n\n2. **Purpose Limitation**: Collect only for reasonable purposes.\n\n3. **Notification Obligation**: Notify individuals of the purposes.\n\n4. **Protection Obligation**: Make reasonable security arrangements.\n\n5. **Accountability**: Appoint a Data Protection Officer (DPO).",
    whereToApply: "Organizations in Singapore or collecting data in Singapore.",
    whenToApply: "Continuously.",
    scenarios: "**Scenario: ID Card Collection**\n\n**Challenge**: A hotel in Singapore was photocopying guests' NRIC (National ID) cards at check-in, which violates the PDPA advisory guidelines on NRIC.\n\n**Application**: They changed their process to only inspect the ID for verification and record the name/partial ID manually. They destroyed their archive of full NRIC scans.\n\n**Outcome**: Compliance with PDPC guidelines and reduced risk of identity theft liability.",
    colorTheme: 'red',
    diagramType: 'pillar-structure',
    controls: [
      { id: "PDPA-1", name: "Consent Obligation", description: "Obtain consent from the individual before collecting, using, or disclosing their personal data.", isImplemented: false, priority: 'High', group: 'Obligations' },
      { id: "PDPA-2", name: "Protection Obligation", description: "Make reasonable security arrangements to protect personal data in your possession or under your control.", isImplemented: false, priority: 'High', group: 'Obligations' },
      { id: "PDPA-3", name: "Data Breach Notification", description: "Notify the PDPC and affected individuals of data breaches that cause significant harm or affect 500+ individuals.", isImplemented: false, priority: 'High', group: 'Obligations' },
    ],
    useCases: [
      { title: "NRIC Handling", description: "Stopping the collection of full NRIC numbers unless required by law." }
    ]
  },
  {
    id: "popia",
    name: "POPIA (South Africa)",
    link: "https://popia.co.za/",
    category: "Law",
    industry: "General / Cross-Industry",
    overview: "The Protection of Personal Information Act (POPIA) is South Africa's data protection law. It gives effect to the constitutional right to privacy.",
    purpose: "To promote the protection of personal information processed by public and private bodies.",
    importance: "It is the primary privacy standard for Africa's largest economy.",
    howToApply: "Process data according to the 8 Conditions for Lawful Processing:\n\n1. **Accountability**\n2. **Processing Limitation**\n3. **Purpose Specification**\n4. **Further Processing Limitation**\n5. **Information Quality**\n6. **Openness**\n7. **Security Safeguards**\n8. **Data Subject Participation**",
    whereToApply: "South Africa.",
    whenToApply: "When processing personal information entered into a record within the Republic.",
    scenarios: "**Scenario: Direct Marketing**\n\n**Challenge**: A retail chain was sending SMS marketing to thousands of people who never opted in.\n\n**Application**: Under POPIA, electronic direct marketing requires consent (opt-in) unless the person is an existing customer. They scrubbed their database and implemented a strict opt-in workflow.\n\n**Outcome**: Compliance with POPIA Section 69 and improved customer sentiment.",
    colorTheme: 'yellow',
    diagramType: 'process-flow',
    controls: [
      { id: "POPIA-1", name: "Accountability", description: "Ensure that the conditions for lawful processing are complied with.", isImplemented: false, priority: 'High', group: 'Conditions' },
      { id: "POPIA-2", name: "Processing Limitation", description: "Processing must be lawful, reasonable, and minimal (Data Minimization).", isImplemented: false, priority: 'Medium', group: 'Conditions' },
    ],
    useCases: [
      { title: "Direct Marketing", description: "Obtaining consent before electronic direct marketing (Section 69)." }
    ]
  }
];
