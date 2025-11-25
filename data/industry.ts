
import { Framework } from '../types';

export const industrySpecificFrameworks: Framework[] = [
  {
    id: "tisax",
    name: "TISAX (VDA ISA)",
    link: "https://enx.com/tisax",
    category: "Standard",
    industry: "Automotive",
    overview: "TISAX (Trusted Information Security Assessment Exchange) is an assessment mechanism for the information security of enterprises, based on the VDA ISA (Information Security Assessment) catalog, which is derived from ISO 27001.",
    purpose: "To ensure a consistent level of information security across the automotive supply chain and facilitate the mutual acceptance of assessments.",
    importance: "It is mandatory for suppliers wishing to work with the German automotive industry (e.g., VW, BMW, Daimler). Without TISAX, you cannot receive contracts involving sensitive data.",
    howToApply: "The process involves three steps:\n\n1. **Registration**: Register with the ENX Association.\n\n2. **Assessment**: Conduct a self-assessment based on the VDA ISA questionnaire. Then, hire an audit provider to perform the TISAX assessment (Level 2 = Remote, Level 3 = On-site).\n\n3. **Exchange**: Share the assessment result with partners via the ENX platform.",
    whereToApply: "Automotive manufacturers (OEMs) and suppliers (Tier 1, 2, etc.).",
    whenToApply: "When handling prototype data or sensitive design information for German OEMs.",
    scenarios: "**Scenario: Prototype Protection**\n\n**Challenge**: A Tier 1 supplier needed to receive CAD files for a unreleased vehicle model from a German OEM.\n\n**Application**: The OEM required TISAX Level 3 (high protection + prototype protection). The supplier secured their physical prototype shop with biometric access and covered windows. They implemented strict network segregation for the CAD terminals.\n\n**Outcome**: They passed the TISAX on-site audit and the OEM released the design files, allowing production planning to start.",
    colorTheme: 'blue',
    diagramType: 'process-flow',
    controls: [
      { id: "1.1", name: "Information Security Policy", description: "Policies for information security are defined, approved by management, published and communicated.", isImplemented: false, priority: 'Medium', group: 'Policies' },
      { id: "2.1", name: "Asset Management", description: "Assets associated with information and information processing facilities are identified and managed (specifically Prototypes).", isImplemented: false, priority: 'High', group: 'Prototypes' },
    ],
    useCases: [
      { title: "Prototype Protection", description: "Securing physical and digital vehicle prototypes." },
      { title: "Supply Chain Trust", description: "Reducing audit fatigue by sharing one TISAX label with many OEMs." }
    ]
  },
  {
    id: "nerc-cip",
    name: "NERC CIP",
    link: "https://www.nerc.com/pa/Stand/Pages/CIPStandards.aspx",
    category: "Regulation",
    industry: "Energy & Utilities",
    overview: "The NERC Critical Infrastructure Protection (CIP) standards are a set of requirements designed to secure the assets required for operating North America's bulk electric system.",
    purpose: "To identify and protect Critical Cyber Assets (CCAs) that control or monitor the reliability of the high-voltage power grid.",
    importance: "Mandatory for Bulk Electric System (BES) owners and operators. Violations can lead to fines of up to $1 million per day per violation.",
    howToApply: "Comply with the standards CIP-002 through CIP-014:\n\n1. **Identify (CIP-002)**: Categorize BES Cyber Systems (Low, Medium, High Impact).\n\n2. **Defend (CIP-005, 007)**: Establish Electronic Security Perimeters (ESPs) and manage systems security.\n\n3. **Access (CIP-004)**: Train staff and manage personnel risk.\n\n4. **Recover (CIP-009)**: Plan for recovery of BES Cyber Systems.",
    whereToApply: "Electric Utilities, Generation, and Transmission owners in North America.",
    whenToApply: "Continuously.",
    scenarios: "**Scenario: Substation Security**\n\n**Challenge**: A utility had remote access to its transmission substations via the internet, a risk to grid stability.\n\n**Application**: Under NERC CIP-005, they established an Electronic Security Perimeter (ESP). They mandated that all remote access pass through an Intermediate System (Jump Host) with MFA and encryption. All traffic bypassing this jump host was blocked.\n\n**Outcome**: Compliance with CIP-005 R2 and isolation of the grid control network from the public internet.",
    colorTheme: 'yellow',
    diagramType: 'process-flow',
    controls: [
      { id: "CIP-005", name: "Electronic Security Perimeter", description: "Manage electronic access to BES Cyber Systems by establishing an Electronic Security Perimeter.", isImplemented: false, priority: 'High', group: 'Perimeter' },
      { id: "CIP-007", name: "Systems Security Management", description: "Manage system security by specifying select technical, operational, and procedural requirements (Patching, Malicious Code Prevention).", isImplemented: false, priority: 'High', group: 'Management' },
    ],
    useCases: [
      { title: "Grid Security", description: "Protecting SCADA systems controlling the power grid." },
      { title: "Physical Security", description: "Securing physical perimeters of critical substations (CIP-006)." }
    ]
  },
  {
    id: "iec-62443",
    name: "IEC 62443 (ISA-99)",
    link: "https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards",
    category: "Standard",
    industry: "Manufacturing",
    overview: "IEC 62443 is the global standard for the security of Industrial Control Systems (ICS) and Operational Technology (OT). It addresses security for industrial automation from the component level to the system and operator level.",
    purpose: "To secure industrial automation and control systems (IACS) against cyber threats, ensuring safety and availability.",
    importance: "It is the reference architecture for OT security. Unlike IT standards, it prioritizes Availability and Safety over Confidentiality.",
    howToApply: "Apply the 'Zones and Conduits' model:\n\n1. **Zones**: Group assets with similar security requirements into zones.\n\n2. **Conduits**: Define the communication paths between zones.\n\n3. **Foundational Requirements**: Implement the 7 FRs (e.g., Identification & Authentication, Restricted Data Flow) based on the Security Level (SL 1-4) required.",
    whereToApply: "Manufacturing, Oil & Gas, Chemicals, Water Treatment, and Critical Infrastructure.",
    whenToApply: "When designing or operating SCADA/ICS environments.",
    scenarios: "**Scenario: Chemical Plant Segmentation**\n\n**Challenge**: A chemical plant had a flat network where an infection in the office could spread to the safety controllers.\n\n**Application**: Using IEC 62443, they segmented the network. The Safety Instrumented System (SIS) was placed in a high-security zone. The Manufacturing Execution System (MES) was in a separate zone. A firewall (Conduit) allowed only specific tags to pass between them.\n\n**Outcome**: Increased resilience. When a ransomware hit the office IT, the plant operations continued safely, unaffected.",
    colorTheme: 'orange',
    diagramType: 'pillar-structure',
    controls: [
      { id: "FR-1", name: "Identification and Authentication Control", description: "Identify and authenticate all users (humans, software processes and devices) before allowing access.", isImplemented: false, priority: 'High', group: 'FR' },
      { id: "FR-5", name: "Restricted Data Flow", description: "Segment networks into zones and conduits to limit the flow of data to minimum necessary.", isImplemented: false, priority: 'High', group: 'FR' },
    ],
    useCases: [
      { title: "OT Security", description: "Securing PLCs and HMIs in a factory." },
      { title: "Safety Systems", description: "Protecting Safety Instrumented Systems (SIS) from cyber compromise." }
    ]
  },
  {
    id: "ferpa",
    name: "FERPA",
    link: "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
    category: "Regulation",
    industry: "Education",
    overview: "The Family Educational Rights and Privacy Act (FERPA) is a Federal law that protects the privacy of student education records.",
    purpose: "To give parents control over their children's education records and transfer that control to the student at age 18.",
    importance: "Mandatory for all schools that receive funds under an applicable program of the U.S. Department of Education. Violation can lead to loss of federal funding.",
    howToApply: "Schools must:\n\n1. **Consent**: Obtain written permission from the parent or eligible student to release any information from a student's education record.\n\n2. **Access**: Allow parents/students to inspect and review records.\n\n3. **Correction**: Allow parents/students to request correction of inaccurate records.",
    whereToApply: "Public and private elementary, secondary, and post-secondary schools.",
    whenToApply: "Continuously.",
    scenarios: "**Scenario: University Grading App**\n\n**Challenge**: A university professor wanted to post grades on a public website using student ID numbers.\n\n**Application**: The Registrar flagged this as a FERPA violation because ID numbers can be linked to students. They mandated the use of the secure Learning Management System (LMS) where students must log in to see only their own grades.\n\n**Outcome**: Protection of student privacy and compliance with FERPA disclosure rules.",
    colorTheme: 'emerald',
    diagramType: 'process-flow',
    controls: [
      { id: "FERPA-1", name: "Consent for Disclosure", description: "Generally, schools must have written permission from the parent or eligible student in order to release any information from a student's education record.", isImplemented: false, priority: 'High', group: 'Privacy' },
    ],
    useCases: [
      { title: "Student Privacy", description: "Protecting transcripts and disciplinary records." }
    ]
  },
  {
    id: "coppa",
    name: "COPPA",
    link: "https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa",
    category: "Law",
    industry: "Technology & SaaS",
    overview: "The Children's Online Privacy Protection Act (COPPA) imposes certain requirements on operators of websites or online services directed to children under 13 years of age, and on operators of other websites or online services that have actual knowledge that they are collecting personal information online from a child under 13.",
    purpose: "To give parents control over what information is collected from their children online.",
    importance: "Strictly enforced by the FTC. Violations can result in penalties of up to $50,120 per violation.",
    howToApply: "Operators must:\n\n1. **Notice**: Post a clear online privacy policy describing information practices for children.\n\n2. **Consent**: Obtain verifiable parental consent before collecting personal info.\n\n3. **Rights**: Give parents the choice of consenting to collection but not disclosure to third parties.",
    whereToApply: "Websites and online services directed to children under 13.",
    whenToApply: "Always, if kids are the audience.",
    scenarios: "**Scenario: Kids Gaming App**\n\n**Challenge**: A mobile game allowed users to upload photos and chat. Many users were under 13.\n\n**Application**: To comply with COPPA, the developer implemented an 'Age Gate'. Users under 13 were directed to a 'Kids Mode' where chat and photo uploads were disabled, and no personal data was collected.\n\n**Outcome**: Continued service to child audience without violating collection rules.",
    colorTheme: 'purple',
    diagramType: 'process-flow',
    controls: [
      { id: "COPPA-1", name: "Parental Consent", description: "Obtain verifiable parental consent before any collection, use, or disclosure of personal information from children.", isImplemented: false, priority: 'High', group: 'Consent' },
    ],
    useCases: [
      { title: "Child Safety", description: "Designing safe online experiences for children." }
    ]
  }
];
