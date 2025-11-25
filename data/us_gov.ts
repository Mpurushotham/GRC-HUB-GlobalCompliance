
import { Framework } from '../types';

export const usGovFrameworks: Framework[] = [
  {
    id: "nist-800-53",
    name: "NIST SP 800-53 r5",
    link: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    category: "Standard",
    industry: "Defense & Government",
    overview: "NIST Special Publication 800-53 Revision 5, 'Security and Privacy Controls for Information Systems and Organizations', provides a catalog of security and privacy controls for all U.S. federal information systems except those related to national security. It represents a multi-year effort to develop the next generation of security and privacy controls.",
    purpose: "To protect the confidentiality, integrity, and availability of federal information systems and the information processed, stored, and transmitted by those systems.",
    importance: "It is the foundational document for the Risk Management Framework (RMF). Compliance is mandatory for federal agencies (FISMA) and key for contractors (FedRAMP).",
    howToApply: "The RMF process drives the application of 800-53:\n\n1. **Categorize**: Define the system impact level (Low, Moderate, High) for Confidentiality, Integrity, and Availability (FIPS 199).\n\n2. **Select**: Choose the baseline controls from SP 800-53B relevant to the impact level.\n\n3. **Implement**: Deploy the controls and document the implementation details in the System Security Plan (SSP).\n\n4. **Assess**: Use assessment procedures (SP 800-53A) to verify the controls are implemented correctly and operating effectively.\n\n5. **Authorize**: Senior management accepts the risk and grants an Authority to Operate (ATO).",
    whereToApply: "Federal agencies, state agencies administering federal programs, and federal contractors.",
    whenToApply: "Mandatory for all U.S. federal information systems; continuously monitored.",
    scenarios: "**Scenario: ATO for a New Agency System**\n\n**Challenge**: A federal agency was deploying a new HR portal containing PII. They needed to ensure it met FISMA requirements before launch.\n\n**Application**: They categorized the system as 'Moderate' impact. They selected the 'Moderate' baseline of 800-53 controls. They implemented the controls, including strong authentication (AC-2) and audit logging (AU-2). An independent assessor verified compliance.\n\n**Outcome**: The Authorizing Official (AO) reviewed the Security Assessment Report (SAR) and granted the Authority to Operate (ATO), allowing the system to go live.",
    colorTheme: 'slate',
    diagramType: 'process-flow',
    implementationSteps: [
        { phase: 1, title: "Categorize System", description: "Determine impact level (Low/Mod/High) based on data types." },
        { phase: 2, title: "Select Controls", description: "Identify the control baseline from NIST SP 800-53B." },
        { phase: 3, title: "Implement & Document", description: "Deploy controls and write the System Security Plan (SSP)." },
        { phase: 4, title: "Assess Controls", description: "Independent testing of control effectiveness." },
        { phase: 5, title: "Authorize (ATO)", description: "Executive decision to accept risk and operate the system." }
    ],
    controls: [
      // AC - Access Control
      { id: "AC-1", name: "Access Control Policy and Procedures", description: "Develop, document, and disseminate access control policy and procedures.", isImplemented: true, priority: 'Medium', group: 'Access Control' },
      { id: "AC-2", name: "Account Management", description: "Manage information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts.", isImplemented: false, priority: 'High', group: 'Access Control' },
      { id: "AC-3", name: "Access Enforcement", description: "Enforce approved authorizations for logical access to information and system resources.", isImplemented: true, priority: 'High', group: 'Access Control' },
      { id: "AC-4", name: "Information Flow Enforcement", description: "Enforce approved authorizations for controlling the flow of information within the system and between connected systems.", isImplemented: false, priority: 'Medium', group: 'Access Control' },
      { id: "AC-5", name: "Separation of Duties", description: "Separate duties of individuals to prevent malevolent activity without collusion.", isImplemented: false, priority: 'Medium', group: 'Access Control' },
      { id: "AC-6", name: "Least Privilege", description: "Employ the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users).", isImplemented: true, priority: 'High', group: 'Access Control' },
      { id: "AC-7", name: "Unsuccessful Logon Attempts", description: "Enforce a limit of consecutive invalid logon attempts by a user during a defined time period.", isImplemented: true, priority: 'Medium', group: 'Access Control' },
      { id: "AC-8", name: "System Use Notification", description: "Display system use notification messages before granting access.", isImplemented: true, priority: 'Low', group: 'Access Control' },
      
      // AT - Awareness and Training
      { id: "AT-2", name: "Security Awareness Training", description: "Provide basic security awareness training to information system users.", isImplemented: true, priority: 'High', group: 'Training' },
      { id: "AT-3", name: "Role-Based Security Training", description: "Provide role-based security training to personnel with assigned security roles and responsibilities.", isImplemented: false, priority: 'Medium', group: 'Training' },

      // AU - Audit and Accountability
      { id: "AU-2", name: "Audit Events", description: "Determine that the information system is capable of auditing defined events.", isImplemented: true, priority: 'High', group: 'Audit' },
      { id: "AU-3", name: "Content of Audit Records", description: "Ensure audit records contain information that establishes what type of event occurred, when, where, source, and outcome.", isImplemented: true, priority: 'High', group: 'Audit' },
      { id: "AU-6", name: "Audit Review, Analysis, and Reporting", description: "Review and analyze information system audit records for indications of inappropriate or unusual activity.", isImplemented: false, priority: 'High', group: 'Audit' },
      
      // CA - Security Assessment and Authorization
      { id: "CA-2", name: "Control Assessments", description: "Assess the controls in the information system and its environment of operation to determine the extent to which the controls are implemented correctly.", isImplemented: false, priority: 'High', group: 'Assessment' },
      { id: "CA-7", name: "Continuous Monitoring", description: "Develop a continuous monitoring strategy and implement a continuous monitoring program.", isImplemented: false, priority: 'High', group: 'Assessment' },

      // CM - Configuration Management
      { id: "CM-2", name: "Baseline Configuration", description: "Develop, document, and maintain under configuration control, a current baseline configuration of the information system.", isImplemented: false, priority: 'High', group: 'Configuration' },
      { id: "CM-3", name: "Configuration Change Control", description: "Enforce restrictions on changes to the system and implement a systematic change control process.", isImplemented: false, priority: 'High', group: 'Configuration' },
      { id: "CM-6", name: "Configuration Settings", description: "Establish and enforce security configuration settings.", isImplemented: true, priority: 'High', group: 'Configuration' },
      { id: "CM-8", name: "Information System Component Inventory", description: "Develop and document an inventory of information system components.", isImplemented: true, priority: 'High', group: 'Configuration' },

      // CP - Contingency Planning
      { id: "CP-2", name: "Contingency Plan", description: "Develop a contingency plan for the information system.", isImplemented: false, priority: 'High', group: 'Contingency' },
      { id: "CP-9", name: "Information System Backup", description: "Conduct user-level and system-level information system backups.", isImplemented: true, priority: 'High', group: 'Contingency' },

      // IA - Identification and Authentication
      { id: "IA-2", name: "Identification and Authentication", description: "Uniquely identify and authenticate organizational users (or processes acting on behalf of users).", isImplemented: true, priority: 'Critical', group: 'Authentication' },
      { id: "IA-5", name: "Authenticator Management", description: "Manage information system authenticators (e.g., passwords, tokens, certificates).", isImplemented: true, priority: 'High', group: 'Authentication' },
      { id: "IA-8", name: "Identification and Authentication (Non-Organizational Users)", description: "Uniquely identify and authenticate non-organizational users (or processes acting on behalf of non-organizational users).", isImplemented: true, priority: 'High', group: 'Authentication' },

      // IR - Incident Response
      { id: "IR-4", name: "Incident Handling", description: "Implement an incident handling capability for security incidents.", isImplemented: false, priority: 'High', group: 'Incident Response' },
      { id: "IR-6", name: "Incident Reporting", description: "Report security incidents to appropriate officials and authorities.", isImplemented: true, priority: 'Medium', group: 'Incident Response' },

      // MA - Maintenance
      { id: "MA-2", name: "Controlled Maintenance", description: "Schedule, perform, document, and review records of maintenance and repairs.", isImplemented: false, priority: 'Medium', group: 'Maintenance' },

      // MP - Media Protection
      { id: "MP-4", name: "Media Storage", description: "Physically control and securely store information system media.", isImplemented: true, priority: 'Medium', group: 'Media' },
      { id: "MP-6", name: "Media Sanitization", description: "Sanitize media prior to disposal, release out of organizational control, or release for reuse.", isImplemented: true, priority: 'High', group: 'Media' },

      // PE - Physical and Environmental Protection
      { id: "PE-2", name: "Physical Access Authorizations", description: "Develop and maintain a list of individuals with authorized access to the facility.", isImplemented: true, priority: 'High', group: 'Physical' },
      { id: "PE-3", name: "Physical Access Control", description: "Enforce physical access authorizations at entry/exit points.", isImplemented: true, priority: 'High', group: 'Physical' },

      // PL - Planning
      { id: "PL-2", name: "System Security Plan", description: "Develop a security plan for the information system.", isImplemented: false, priority: 'High', group: 'Planning' },

      // PS - Personnel Security
      { id: "PS-3", name: "Personnel Screening", description: "Screen individuals prior to authorizing access to the information system.", isImplemented: true, priority: 'Medium', group: 'Personnel' },
      { id: "PS-4", name: "Personnel Termination", description: "Disable information system access upon termination of individual employment.", isImplemented: true, priority: 'High', group: 'Personnel' },

      // RA - Risk Assessment
      { id: "RA-3", name: "Risk Assessment", description: "Conduct an assessment of risk, including the likelihood and magnitude of harm.", isImplemented: false, priority: 'High', group: 'Risk' },
      { id: "RA-5", name: "Vulnerability Monitoring and Scanning", description: "Scan for vulnerabilities in the information system and hosted applications.", isImplemented: false, priority: 'High', group: 'Risk' },

      // SA - System and Services Acquisition
      { id: "SA-9", name: "External Information System Services", description: "Require that providers of external information system services comply with organizational information security requirements.", isImplemented: false, priority: 'High', group: 'Acquisition' },

      // SC - System and Communications Protection
      { id: "SC-7", name: "Boundary Protection", description: "Monitor and control communications at the external boundary of the system and at key internal boundaries.", isImplemented: true, priority: 'High', group: 'Protection' },
      { id: "SC-8", name: "Transmission Confidentiality and Integrity", description: "Protect the confidentiality and integrity of transmitted information.", isImplemented: true, priority: 'High', group: 'Protection' },
      { id: "SC-13", name: "Cryptographic Protection", description: "Implement cryptographic mechanisms to prevent unauthorized disclosure of information.", isImplemented: true, priority: 'High', group: 'Protection' },
      { id: "SC-28", name: "Protection of Information at Rest", description: "Protect the confidentiality and integrity of information at rest.", isImplemented: false, priority: 'High', group: 'Protection' },

      // SI - System and Information Integrity
      { id: "SI-2", name: "Flaw Remediation", description: "Identify, report, and correct information system flaws.", isImplemented: false, priority: 'High', group: 'Integrity' },
      { id: "SI-3", name: "Malicious Code Protection", description: "Implement malicious code protection mechanisms at system entry and exit points.", isImplemented: true, priority: 'High', group: 'Integrity' },
      { id: "SI-4", name: "Information System Monitoring", description: "Monitor the information system to detect attacks and indicators of potential attacks.", isImplemented: false, priority: 'High', group: 'Integrity' },
    ],
    useCases: [
      { title: "FISMA Compliance", description: "Achieving Authority to Operate (ATO) for a federal agency system." },
      { title: "Privacy Protection", description: "Safeguarding PII in government systems using the Privacy Control Overlay." }
    ]
  },
  {
    id: "cmmc",
    name: "CMMC 2.0 (Cybersecurity Maturity Model Certification)",
    link: "https://dodcio.defense.gov/CMMC/",
    category: "Regulation",
    industry: "Defense & Government",
    overview: "The Cybersecurity Maturity Model Certification (CMMC) 2.0 is a comprehensive framework to verify that the Defense Industrial Base (DIB) has implemented security standards to protect FCI and CUI. It streamlines the original model into three levels.",
    purpose: "To safeguard Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) that is shared with contractors and subcontractors of the Department of Defense (DoD).",
    importance: "It is a mandatory prerequisite for awarding DoD contracts. Without the required CMMC level, a contractor cannot bid on or execute DoD work.",
    howToApply: "Application depends on the sensitivity of the information handled:\n\n1. **Level 1 (Foundational)**: For contractors handling only FCI. Requires implementing 17 basic cyber hygiene practices. Verified by an annual Self-Assessment.\n\n2. **Level 2 (Advanced)**: For contractors handling CUI. Requires implementing 110 practices aligned with NIST SP 800-171. Verified by a Third-Party Assessment Organization (C3PAO) every 3 years.\n\n3. **Level 3 (Expert)**: For the highest priority programs. Requires 110+ practices aligned with NIST SP 800-172. Verified by a government-led assessment.",
    whereToApply: "All DoD contractors and subcontractors (The Defense Industrial Base).",
    whenToApply: "Required to be certified prior to contract award.",
    scenarios: "**Scenario: Small Manufacturer Bidding on DoD Contract**\n\n**Challenge**: A manufacturer of specialized bolts produces parts for a DoD aircraft. The contract involves receiving engineering drawings marked as CUI.\n\n**Application**: Because they handle CUI, they must achieve CMMC Level 2. They implemented all 110 controls from NIST 800-171, including physical access controls to the factory floor and multi-factor authentication for their IT systems. They hired a C3PAO to conduct the assessment.\n\n**Outcome**: They received their Level 2 certification and successfully won the contract.",
    colorTheme: 'emerald',
    diagramType: 'pyramid-maturity',
    implementationSteps: [
        { phase: 1, title: "Identify Data", description: "Determine if you handle FCI or CUI to define the required CMMC Level." },
        { phase: 2, title: "Gap Analysis", description: "Assess current state against NIST 800-171 (for Level 2)." },
        { phase: 3, title: "Remediation", description: "Implement missing controls and generate a System Security Plan (SSP)." },
        { phase: 4, title: "Assessment", description: "Undergo Self-Assessment (L1) or C3PAO Audit (L2)." },
        { phase: 5, title: "Maintenance", description: "Continuous monitoring to maintain the certification." }
    ],
    controls: [
      // Level 1 Practices (17)
      { id: "AC.L1-3.1.1", name: "Authorized Access Control", description: "Limit information system access to authorized users, processes acting on behalf of authorized users, or devices (including other information systems).", isImplemented: true, priority: 'High', group: 'Level 1: Foundational' },
      { id: "AC.L1-3.1.2", name: "Transaction & Function Control", description: "Limit information system access to the types of transactions and functions that authorized users are permitted to execute.", isImplemented: false, priority: 'Medium', group: 'Level 1: Foundational' },
      { id: "AC.L1-3.1.20", name: "External Connections", description: "Verify and control/limit connections to and use of external information systems.", isImplemented: false, priority: 'High', group: 'Level 1: Foundational' },
      { id: "AC.L1-3.1.22", name: "Public Information", description: "Control information posted or processed on publicly accessible information systems.", isImplemented: true, priority: 'Medium', group: 'Level 1: Foundational' },
      { id: "IA.L1-3.5.1", name: "Identification", description: "Identify information system users, processes acting on behalf of users, or devices.", isImplemented: true, priority: 'Critical', group: 'Level 1: Foundational' },
      { id: "IA.L1-3.5.2", name: "Authentication", description: "Authenticate (or verify) the identities of those users, processes, or devices, as a prerequisite to allowing access to organizational information systems.", isImplemented: true, priority: 'Critical', group: 'Level 1: Foundational' },
      { id: "MP.L1-3.8.3", name: "Media Disposal", description: "Sanitize or destroy information system media containing Federal Contract Information before disposal or release for reuse.", isImplemented: false, priority: 'High', group: 'Level 1: Foundational' },
      { id: "PE.L1-3.10.1", name: "Physical Protection", description: "Limit physical access to organizational information systems, equipment, and the respective operating environments to authorized individuals.", isImplemented: true, priority: 'High', group: 'Level 1: Foundational' },
      { id: "PE.L1-3.10.3", name: "Escort Visitors", description: "Escort visitors and monitor visitor activity.", isImplemented: true, priority: 'Medium', group: 'Level 1: Foundational' },
      { id: "PE.L1-3.10.4", name: "Access Logs", description: "Maintain audit logs of physical access.", isImplemented: false, priority: 'Medium', group: 'Level 1: Foundational' },
      { id: "PE.L1-3.10.5", name: "Access Control Devices", description: "Control and manage physical access devices.", isImplemented: true, priority: 'Medium', group: 'Level 1: Foundational' },
      { id: "SI.L1-3.14.1", name: "Flaw Remediation", description: "Identify, report, and correct information and information system flaws in a timely manner.", isImplemented: false, priority: 'High', group: 'Level 1: Foundational' },
      { id: "SI.L1-3.14.2", name: "Malicious Code Protection", description: "Provide protection from malicious code at appropriate locations within organizational information systems.", isImplemented: true, priority: 'High', group: 'Level 1: Foundational' },
      { id: "SI.L1-3.14.4", name: "Update Malicious Code Protection", description: "Update malicious code protection mechanisms when new releases are available.", isImplemented: true, priority: 'High', group: 'Level 1: Foundational' },
      { id: "SI.L1-3.14.5", name: "System Scanning", description: "Perform periodic scans of the information system and real-time scans of files from external sources as files are downloaded, opened, or executed.", isImplemented: false, priority: 'High', group: 'Level 1: Foundational' },
      
      // Level 2 Practices (Selection of High Impact)
      { id: "AC.L2-3.1.3", name: "CUI Flow Control", description: "Control the flow of CUI in accordance with approved authorizations.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "AC.L2-3.1.5", name: "Separation of Duties", description: "Separate the duties of individuals to reduce the risk of malevolent activity without collusion.", isImplemented: false, priority: 'Medium', group: 'Level 2: Advanced' },
      { id: "AC.L2-3.1.6", name: "Least Privilege", description: "Employ the principle of least privilege, including for specific security functions and privileged accounts.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "AT.L2-3.2.1", name: "Awareness Training", description: "Ensure that managers, systems administrators, and users of organizational information systems are made aware of the security risks associated with their activities.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "AU.L2-3.3.1", name: "Audit Logging", description: "Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "CM.L2-3.4.1", name: "Baseline Configuration", description: "Establish and maintain baseline configurations and inventories of organizational information systems.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "IA.L2-3.5.3", name: "Multi-Factor Authentication", description: "Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.", isImplemented: false, priority: 'Critical', group: 'Level 2: Advanced' },
      { id: "IR.L2-3.6.1", name: "Incident Response Capability", description: "Establish an operational incident-handling capability for organizational information systems that includes preparation, detection, analysis, containment, recovery, and user response activities.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "MA.L2-3.7.2", name: "Control Maintenance Tools", description: "Control tools, techniques, mechanisms, and personnel used to conduct system maintenance.", isImplemented: false, priority: 'Medium', group: 'Level 2: Advanced' },
      { id: "MP.L2-3.8.7", name: "Control Media Use", description: "Control the use of removable media on information system components.", isImplemented: false, priority: 'Medium', group: 'Level 2: Advanced' },
      { id: "PS.L2-3.9.2", name: "Personnel Termination", description: "Ensure that organizational systems are notified when the status of personnel changes (e.g., termination, transfer).", isImplemented: false, priority: 'Medium', group: 'Level 2: Advanced' },
      { id: "RA.L2-3.11.1", name: "Risk Assessment", description: "Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "RA.L2-3.11.2", name: "Vulnerability Remediation", description: "Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems are identified.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "SC.L2-3.13.1", name: "Boundary Protection", description: "Monitor, control, and protect organizational communications (i.e., information transmitted or received by organizational information systems) at the external boundaries and key internal boundaries of the information systems.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "SC.L2-3.13.8", name: "Data in Transit Protection", description: "Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "SC.L2-3.13.11", name: "Data at Rest Protection", description: "Employ FIPS-validated cryptography to protect the confidentiality of CUI at rest.", isImplemented: false, priority: 'High', group: 'Level 2: Advanced' },
      { id: "SI.L2-3.14.3", name: "Security Alerts", description: "Monitor security advisories and alerts and take appropriate actions in response.", isImplemented: false, priority: 'Medium', group: 'Level 2: Advanced' },
    ],
    useCases: [
      { title: "Contract Eligibility", description: "Meeting the 'Go/No-Go' criteria for Defense contracts." },
      { title: "Supply Chain Security", description: "Ensuring flow-down requirements to subcontractors." }
    ]
  },
  {
    id: "fedramp",
    name: "FedRAMP",
    link: "https://www.fedramp.gov/",
    category: "Compliance",
    industry: "Defense & Government",
    overview: "The Federal Risk and Authorization Management Program (FedRAMP) is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services.",
    purpose: "To accelerate the adoption of secure cloud solutions by the federal government through reuse of assessments and authorizations.",
    importance: "It is mandatory for any Cloud Service Provider (CSP) (SaaS, PaaS, IaaS) that wants to sell to a US federal agency.",
    howToApply: "There are two paths to authorization:\n\n1. **Agency Authorization**: A specific agency sponsors the CSP, reviews their package, and issues an ATO.\n\n2. **JAB Provisional Authorization**: The Joint Authorization Board (DoD, DHS, GSA) selects the CSP and grants a Provisional ATO (P-ATO), which is widely accepted.\n\nBoth paths require a rigorous audit by a Third Party Assessment Organization (3PAO) based on NIST 800-53 controls.",
    whereToApply: "Cloud Service Providers (CSPs) serving the US Government.",
    whenToApply: "Before a federal agency can use the cloud service.",
    scenarios: "**Scenario: SaaS Market Expansion**\n\n**Challenge**: A successful project management SaaS wanted to tap into the lucrative US government market but was blocked by security regulations.\n\n**Application**: They pursued FedRAMP Moderate authorization. They hardened their environment to NIST 800-53 standards, hired a 3PAO for the assessment, and secured an agency sponsor.\n\n**Outcome**: After achieving authorization, they were listed in the FedRAMP Marketplace. This allowed 50 different government agencies to adopt their tool without repeating the full security audit, generating $10M in new ARR.",
    colorTheme: 'blue',
    diagramType: 'process-flow',
    implementationSteps: [
      { phase: 1, title: "Preparation", description: "Implement NIST 800-53 controls and prepare documentation (SSP)." },
      { phase: 2, title: "Assessment", description: "Hire a 3PAO to conduct the independent security assessment." },
      { phase: 3, title: "Authorization", description: "Agency or JAB reviews the package and grants ATO/P-ATO." },
      { phase: 4, title: "Continuous Monitoring", description: "Provide monthly data feeds (ConMon) to maintain authorization." }
    ],
    controls: [
      // Core FedRAMP Specifics (mapped to 800-53 but with higher scrutiny)
      { id: "SA-9", name: "External Information System Services", description: "Require that providers of external information system services comply with organizational information security requirements and employ appropriate controls.", isImplemented: false, priority: 'High', group: 'System & Services' },
      { id: "RA-5", name: "Vulnerability Scanning", description: "Scan for vulnerabilities in the information system and hosted applications monthly and when new vulnerabilities affecting the system are identified.", isImplemented: false, priority: 'High', group: 'Risk Assessment' },
      { id: "IA-2(1)", name: "MFA for Network Access", description: "Implement Multi-Factor Authentication for all network access to privileged and non-privileged accounts (FedRAMP Requirement).", isImplemented: false, priority: 'Critical', group: 'Authentication' },
      { id: "IA-2(2)", name: "MFA for Local Access", description: "Implement MFA for local access to privileged accounts.", isImplemented: false, priority: 'High', group: 'Authentication' },
      { id: "SC-7(18)", name: "Boundary Protection - Fail Secure", description: "The information system fails to a secure state in the event of an operational failure of a boundary protection device.", isImplemented: false, priority: 'High', group: 'Protection' },
      { id: "SC-13", name: "Cryptographic Protection", description: "Use FIPS 140-2 validated cryptography for all encryption modules.", isImplemented: false, priority: 'Critical', group: 'Protection' },
      { id: "AU-6(1)", name: "Automated Audit Review", description: "Employ automated mechanisms to integrate audit review, analysis, and reporting processes (e.g., SIEM).", isImplemented: false, priority: 'High', group: 'Audit' },
      { id: "CM-6", name: "Configuration Settings", description: "Establish and enforce security configuration settings for information technology products employed in the system (e.g., USGCB/CIS Benchmarks).", isImplemented: false, priority: 'High', group: 'Configuration' },
      { id: "IR-6", name: "Incident Reporting", description: "Report security incidents to US-CERT within one hour of discovery.", isImplemented: false, priority: 'High', group: 'Incident Response' },
      { id: "CP-9", name: "Information System Backup", description: "Conduct backups of user-level and system-level information and ensure they are FIPS encrypted.", isImplemented: false, priority: 'High', group: 'Contingency' },
    ],
    useCases: [
      { title: "Government Sales", description: "Unlocking the US Federal market for a commercial SaaS product." }
    ]
  },
  {
    id: "nist-800-171",
    name: "NIST SP 800-171 r2",
    link: "https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final",
    category: "Standard",
    industry: "Defense & Government",
    overview: "NIST Special Publication 800-171, 'Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations', provides requirements for protecting CUI in non-federal systems (e.g., contractor networks).",
    purpose: "To protect sensitive government data (CUI) when it resides on contractor networks.",
    importance: "Compliance is required by DFARS clause 252.204-7012 in DoD contracts. It is the technical foundation for CMMC Level 2.",
    howToApply: "Organizations must implement the 110 security requirements across 14 families:\n\n1. **Implement**: Apply controls like Access Control, Incident Response, and Media Protection.\n\n2. **Assess**: Self-assess against the requirements.\n\n3. **Report**: Submit a score to the Supplier Performance Risk System (SPRS).\n\n4. **POAM**: Create a Plan of Action and Milestones for any unmet requirements.",
    whereToApply: "Government contractors, universities, and research institutes handling CUI.",
    whenToApply: "Continuously, as long as CUI is processed or stored.",
    scenarios: "**Scenario: University Research Grant**\n\n**Challenge**: A university engineering lab received a federal grant to research advanced materials. The data provided was marked CUI.\n\n**Application**: The university IT team created a secure enclave (a segmented network) specifically for this lab. They applied NIST 800-171 controls to this enclave, restricting access to only the researchers named on the grant and enforcing 2FA.\n\n**Outcome**: They met the grant requirements (DFARS 7012) and preserved their funding while keeping the open campus network separate.",
    colorTheme: 'slate',
    diagramType: 'pillar-structure',
    implementationSteps: [
      { phase: 1, title: "Scope CUI", description: "Identify where CUI lives in the network." },
      { phase: 2, title: "Gap Assessment", description: "Test against the 110 controls of 800-171." },
      { phase: 3, title: "SSP & POAM", description: "Document the System Security Plan and Plan of Action for gaps." },
      { phase: 4, title: "SPRS Reporting", description: "Submit the assessment score to the DoD." }
    ],
    controls: [
      // 3.1 Access Control
      { id: "3.1.1", name: "Limit Access", description: "Limit information system access to authorized users, processes acting on behalf of authorized users, or devices.", isImplemented: true, priority: 'High', group: '3.1 Access Control' },
      { id: "3.1.3", name: "Information Flow Enforcement", description: "Control the flow of CUI in accordance with approved authorizations.", isImplemented: false, priority: 'Medium', group: '3.1 Access Control' },
      { id: "3.1.12", name: "Monitor Remote Access", description: "Monitor and control remote access sessions.", isImplemented: false, priority: 'High', group: '3.1 Access Control' },
      
      // 3.2 Awareness and Training
      { id: "3.2.1", name: "Security Training", description: "Ensure that managers, systems administrators, and users of organizational information systems are made aware of the security risks associated with their activities.", isImplemented: false, priority: 'High', group: '3.2 Training' },

      // 3.3 Audit and Accountability
      { id: "3.3.1", name: "Audit Logs", description: "Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.", isImplemented: false, priority: 'High', group: '3.3 Audit' },
      { id: "3.3.2", name: "User Accountability", description: "Ensure that the actions of individual information system users can be uniquely traced to those users.", isImplemented: true, priority: 'High', group: '3.3 Audit' },

      // 3.4 Configuration Management
      { id: "3.4.1", name: "Baseline Configuration", description: "Establish and maintain baseline configurations and inventories of organizational information systems.", isImplemented: false, priority: 'High', group: '3.4 Config Mgmt' },
      { id: "3.4.2", name: "Enforce Settings", description: "Establish and enforce security configuration settings for information technology products employed in organizational information systems.", isImplemented: false, priority: 'High', group: '3.4 Config Mgmt' },

      // 3.5 Identification and Authentication
      { id: "3.5.1", name: "Identify Users", description: "Identify information system users, processes acting on behalf of users, or devices.", isImplemented: true, priority: 'Critical', group: '3.5 Auth' },
      { id: "3.5.3", name: "Multi-factor Authentication", description: "Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.", isImplemented: false, priority: 'Critical', group: '3.5 Auth' },

      // 3.6 Incident Response
      { id: "3.6.1", name: "Incident Handling", description: "Establish an operational incident-handling capability for organizational information systems.", isImplemented: false, priority: 'High', group: '3.6 Incident Response' },

      // 3.7 Maintenance
      { id: "3.7.2", name: "Control Maintenance Tools", description: "Control tools, techniques, mechanisms, and personnel used to conduct system maintenance.", isImplemented: false, priority: 'Medium', group: '3.7 Maintenance' },

      // 3.8 Media Protection
      { id: "3.8.1", name: "Protect Media", description: "Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.", isImplemented: true, priority: 'High', group: '3.8 Media' },
      { id: "3.8.3", name: "Sanitize Media", description: "Sanitize or destroy information system media containing CUI before disposal or release for reuse.", isImplemented: true, priority: 'High', group: '3.8 Media' },

      // 3.9 Personnel Security
      { id: "3.9.1", name: "Personnel Screening", description: "Screen individuals prior to authorizing access to the information system.", isImplemented: true, priority: 'Medium', group: '3.9 Personnel' },

      // 3.10 Physical Protection
      { id: "3.10.1", name: "Limit Physical Access", description: "Limit physical access to organizational information systems, equipment, and the respective operating environments to authorized individuals.", isImplemented: true, priority: 'High', group: '3.10 Physical' },

      // 3.11 Risk Assessment
      { id: "3.11.1", name: "Assess Risk", description: "Periodically assess the risk to organizational operations, organizational assets, and individuals.", isImplemented: false, priority: 'High', group: '3.11 Risk' },
      { id: "3.11.2", name: "Scan for Vulnerabilities", description: "Scan for vulnerabilities in the information system and hosted applications periodically and when new vulnerabilities affecting those systems are identified.", isImplemented: false, priority: 'High', group: '3.11 Risk' },

      // 3.12 Security Assessment
      { id: "3.12.1", name: "Assess Controls", description: "Periodically assess the security controls in organizational information systems to determine if the controls are effective.", isImplemented: false, priority: 'High', group: '3.12 Assessment' },

      // 3.13 System and Communications Protection
      { id: "3.13.1", name: "Monitor Boundary", description: "Monitor, control, and protect organizational communications at the external boundaries and key internal boundaries of the information systems.", isImplemented: false, priority: 'High', group: '3.13 Protection' },
      { id: "3.13.8", name: "Cryptographic Protection (Transmission)", description: "Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission.", isImplemented: false, priority: 'High', group: '3.13 Protection' },
      { id: "3.13.11", name: "Cryptographic Protection (Rest)", description: "Employ FIPS-validated cryptography to protect the confidentiality of CUI at rest.", isImplemented: false, priority: 'High', group: '3.13 Protection' },

      // 3.14 System and Information Integrity
      { id: "3.14.1", name: "Flaw Remediation", description: "Identify, report, and correct information and information system flaws in a timely manner.", isImplemented: false, priority: 'High', group: '3.14 Integrity' },
      { id: "3.14.2", name: "Malicious Code Protection", description: "Provide protection from malicious code at appropriate locations within organizational information systems.", isImplemented: true, priority: 'High', group: '3.14 Integrity' },
    ],
    useCases: [
      { title: "DFARS Compliance", description: "Meeting contractual obligations for DoD grants and contracts." }
    ]
  }
];
