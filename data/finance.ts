
import { Framework } from '../types';

export const financeFrameworks: Framework[] = [
  {
    id: "pci-dss",
    name: "PCI DSS v4.0",
    link: "https://www.pcisecuritystandards.org/",
    category: "Standard",
    industry: "Retail & E-commerce",
    overview: "The Payment Card Industry Data Security Standard (PCI DSS) v4.0 is the global benchmark for data security in payment processing. It comprises 12 principal requirements organized into 6 high-level goals. v4.0 introduces a focus on continuous security, the 'Customized Approach' for flexibility, and enhanced requirements for authentication and client-side web security.",
    purpose: "To secure credit and debit card transactions, protect cardholder data (CHD) against breach, and standardize security operations across the payments ecosystem.",
    importance: "Mandatory for merchants, processors, acquirers, issuers, and service providers. Non-compliance results in fines, increased transaction fees, or revocation of card processing privileges.",
    howToApply: "Implementation is structured around the 12 Requirements:\n\n1. **Build and Maintain a Secure Network**: Install firewalls and secure configurations.\n\n2. **Protect Account Data**: Encrypt transmission and storage; do not store authentication data.\n\n3. **Maintain a Vulnerability Management Program**: Anti-malware, secure coding, and patching.\n\n4. **Implement Strong Access Control**: MFA, unique IDs, and physical security.\n\n5. **Monitor and Test**: Track logs daily, test security systems quarterly.\n\n6. **Information Security Policy**: Maintain policies and manage service providers.",
    whereToApply: "Any organization that stores, processes, or transmits PAN (Primary Account Number) or SAD (Sensitive Authentication Data).",
    whenToApply: "Continuously. Validated annually via SAQ (Self-Assessment Questionnaire) or ROC (Report on Compliance) by a QSA.",
    scenarios: "**Scenario: E-Commerce Migration to v4.0**\n\n**Challenge**: An online retailer was moving to v4.0 and identified a gap in Requirement 6.4.3 (management of client-side scripts) due to third-party trackers.\n\n**Application**: They implemented a specialized script monitoring tool to inventory and authorize all scripts running in the consumer's browser on the payment page. They also updated their password policy to meet the new 12-character minimum (Req 8.3.6).\n\n**Outcome**: Successful ROC (Report on Compliance) under v4.0, mitigating the risk of digital skimming (Magecart) attacks.",
    colorTheme: 'red',
    diagramType: 'pillar-structure',
    implementationSteps: [
      { phase: 1, title: "Scope & Assess", description: "Identify all flows of cardholder data and scope the CDE (Cardholder Data Environment)." },
      { phase: 2, title: "Remediate Gaps", description: "Implement controls for the 12 Requirements (e.g., install firewalls, encrypt DBs)." },
      { phase: 3, title: "Compensating Controls", description: "Document valid constraints and alternative controls if strict adherence isn't feasible." },
      { phase: 4, title: "Test & Scan", description: "Perform ASV scans, internal vulnerability scans, and penetration tests." },
      { phase: 5, title: "Attest", description: "Complete the Report on Compliance (ROC) or Self-Assessment Questionnaire (SAQ)." }
    ],
    controls: [
      // GOAL 1: Build and Maintain a Secure Network and Systems
      { id: "1.1.2", name: "Network Diagrams", description: "Current network diagrams that identify all connections between the CDE and other networks, including wireless networks, are maintained.", isImplemented: false, priority: 'Medium', group: '1. Network Security' },
      { id: "1.2.1", name: "Restrict Traffic", description: "Traffic is restricted to/from the CDE to only that which is necessary. All other traffic is denied (Deny-All default).", isImplemented: true, priority: 'High', group: '1. Network Security' },
      { id: "1.3.1", name: "DMZ Implementation", description: "Implement a DMZ to limit inbound traffic to only system components that provide authorized publicly accessible services.", isImplemented: true, priority: 'High', group: '1. Network Security' },
      { id: "2.2.2", name: "Vendor Defaults", description: "Vendor-supplied default passwords are changed and unnecessary default accounts are removed or disabled.", isImplemented: true, priority: 'Critical', group: '2. Secure Configuration' },
      { id: "2.2.4", name: "Primary Functions", description: "System components are configured to perform only one primary function (e.g., web server, database server) to prevent co-mingling of security levels.", isImplemented: false, priority: 'Medium', group: '2. Secure Configuration' },

      // GOAL 2: Protect Account Data
      { id: "3.2.1", name: "Data Retention", description: "Data storage and retention time is minimized. Procedures are in place to purge stored cardholder data (CHD) at least quarterly.", isImplemented: false, priority: 'High', group: '3. Protect Account Data' },
      { id: "3.3.1", name: "SAD Storage", description: "Sensitive Authentication Data (CVC, PINs, Track Data) is NOT stored after authorization, even if encrypted.", isImplemented: true, priority: 'Critical', group: '3. Protect Account Data' },
      { id: "3.4.1", name: "PAN Masking", description: "The PAN is masked when displayed (the first six and last four digits are the maximum number of digits to be displayed).", isImplemented: true, priority: 'High', group: '3. Protect Account Data' },
      { id: "3.5.1", name: "PAN Encryption", description: "PAN is rendered unreadable anywhere it is stored using strong cryptography (AES-256, etc.) or hashing.", isImplemented: true, priority: 'Critical', group: '3. Protect Account Data' },
      { id: "4.2.1", name: "Transmission Security", description: "Strong cryptography and security protocols (e.g., TLS 1.2+) are used to safeguard PAN during transmission over open, public networks.", isImplemented: true, priority: 'High', group: '4. Protect Transmission' },

      // GOAL 3: Maintain a Vulnerability Management Program
      { id: "5.1.2", name: "Malware Protection", description: "Anti-malware solution is deployed on all system components commonly affected by malicious software.", isImplemented: true, priority: 'High', group: '5. Malware Protection' },
      { id: "5.3.3", name: "Anti-Phishing Mechanisms", description: "Mechanisms are in place to detect and protect personnel against phishing attacks (e.g., DMARC/SPF/DKIM, email filtering).", isImplemented: false, priority: 'Medium', group: '5. Malware Protection' },
      { id: "6.2.4", name: "Software Engineering", description: "Software engineering processes include preventing common software attacks (Injection, Buffer Overflow, XSS, CSRF) in custom code.", isImplemented: false, priority: 'High', group: '6. Secure Systems' },
      { id: "6.3.1", name: "Vulnerability Management", description: "Security vulnerabilities are identified and ranked. High-risk vulnerabilities are patched within one month.", isImplemented: false, priority: 'High', group: '6. Secure Systems' },
      { id: "6.4.2", name: "WAF / Web Assessments", description: "For public-facing web apps, either an automated technical solution (WAF) is used OR manual vulnerability assessments are performed annually.", isImplemented: true, priority: 'High', group: '6. Secure Systems' },
      { id: "6.4.3", name: "Client-Side Scripts (v4.0)", description: "Payment page scripts are managed. A method is implemented to confirm that each script is authorized and the integrity of the script is assured.", isImplemented: false, priority: 'High', group: '6. Secure Systems' },

      // GOAL 4: Implement Strong Access Control Measures
      { id: "7.2.1", name: "Least Privilege", description: "Access to system components and data is granted only upon business need to know.", isImplemented: true, priority: 'High', group: '7. Access Control' },
      { id: "8.2.1", name: "Unique IDs", description: "Assign a unique ID to each person with access. Shared/Generic accounts are prohibited.", isImplemented: true, priority: 'Critical', group: '8. Authentication' },
      { id: "8.3.6", name: "Password Complexity (v4.0)", description: "Passwords must be a minimum length of 12 characters (or if system does not support 12, 8 characters) and contain numeric and alphabetic characters.", isImplemented: false, priority: 'High', group: '8. Authentication' },
      { id: "8.4.2", name: "MFA Implementation", description: "MFA is implemented for all access to the CDE (Cardholder Data Environment).", isImplemented: true, priority: 'Critical', group: '8. Authentication' },
      { id: "9.2.1", name: "Physical Entry Controls", description: "Appropriate facility entry controls are in place to limit and monitor physical access to systems in the CDE.", isImplemented: true, priority: 'Medium', group: '9. Physical Security' },
      { id: "9.5.1", name: "Media Protection", description: "Media containing CHD is stored and transported securely.", isImplemented: false, priority: 'Medium', group: '9. Physical Security' },

      // GOAL 5: Regularly Monitor and Test Networks
      { id: "10.2.1", name: "Audit Logs", description: "Audit logs are enabled and active for all system components. Logs capture user ID, type of event, date/time, success/failure, and origin.", isImplemented: true, priority: 'High', group: '10. Logging & Monitoring' },
      { id: "10.4.1", name: "Log Review", description: "Audit logs are reviewed (manual or automated via SIEM) to detect anomalies and suspicious activity.", isImplemented: false, priority: 'High', group: '10. Logging & Monitoring' },
      { id: "11.2.1", name: "Wireless Scanning", description: "Quarterly wireless vulnerability scans are performed to identify and address unauthorized wireless access points.", isImplemented: false, priority: 'Medium', group: '11. Security Testing' },
      { id: "11.3.1", name: "Internal Vuln Scanning", description: "Internal vulnerability scans are performed at least once every three months.", isImplemented: false, priority: 'High', group: '11. Security Testing' },
      { id: "11.3.2", name: "ASV Scanning", description: "External vulnerability scans are performed by an Approved Scanning Vendor (ASV) at least once every three months.", isImplemented: true, priority: 'High', group: '11. Security Testing' },
      { id: "11.4.1", name: "Penetration Testing", description: "Internal and external penetration testing is performed at least every 12 months and after any significant infrastructure or application upgrade.", isImplemented: false, priority: 'High', group: '11. Security Testing' },

      // GOAL 6: Maintain an Information Security Policy
      { id: "12.1.1", name: "Policy Establishment", description: "An information security policy is established, published, maintained, and disseminated to all personnel.", isImplemented: true, priority: 'Medium', group: '12. Policy' },
      { id: "12.5.2", name: "PCI Scope Review", description: "PCI DSS scope is documented and confirmed at least once every 12 months.", isImplemented: false, priority: 'Medium', group: '12. Policy' },
      { id: "12.6.1", name: "Security Awareness", description: "A formal security awareness program is implemented to make all personnel aware of the cardholder data security policy and procedures.", isImplemented: true, priority: 'Medium', group: '12. Policy' },
      { id: "12.8.1", name: "Service Providers", description: "A list of service providers is maintained, including a description of the services provided.", isImplemented: false, priority: 'Low', group: '12. Policy' },
    ],
    useCases: [
      { title: "E-Commerce", description: "Securing the checkout flow against skimming (Magecart) and data breaches." },
      { title: "POS Security", description: "Protecting Point of Sale terminals and network segmentation." }
    ]
  },
  {
    id: "soc2",
    name: "SOC 2 Type II",
    link: "https://www.aicpa.org/topic/audit-assurance/audit-and-assurance-greater-than-soc-2",
    category: "Compliance",
    industry: "Technology & SaaS",
    overview: "SOC 2 (System and Organization Controls 2) is a comprehensive reporting framework for service organizations, developed by the AICPA. It specifies how organizations should manage customer data based on the five Trust Services Criteria (TSC): Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
    purpose: "To provide assurance to clients that the service provider securely manages their data, protects the interests of the organization, and safeguards client privacy.",
    importance: "It is the gold standard for B2B trust in the SaaS and Cloud industry. A SOC 2 report is often a non-negotiable prerequisite for selling to enterprise customers.",
    howToApply: "The audit evaluates controls against the chosen Trust Services Criteria (TSC):\n\n1. **Security (Common Criteria)**: The only mandatory criteria. Covers firewalls, intrusion detection, MFA, governance, and HR.\n\n2. **Availability**: Focuses on uptime, disaster recovery, and capacity planning.\n\n3. **Processing Integrity**: Ensures system processing is complete, valid, accurate, timely, and authorized.\n\n4. **Confidentiality**: Protects confidential information from unauthorized disclosure (e.g., NDA, data classification).\n\n5. **Privacy**: Protects personal information (PII) in conformity with Generally Accepted Privacy Principles (GAPP).",
    whereToApply: "Service organizations (SaaS, Cloud, IaaS, PaaS, Data Processors).",
    whenToApply: "When clients request assurance over data handling. Type I (point in time) vs Type II (period of 6-12 months).",
    scenarios: "**Scenario: Enterprise Deal Breaker**\n\n**Challenge**: A startup lost a major contract because they couldn't prove their security posture.\n\n**Application**: They engaged an auditor for a SOC 2 Type II including Security, Availability, and Confidentiality. They defined their observation period (6 months), implemented change management and logical access controls, and gathered evidence via their GRC platform.\n\n**Outcome**: Armed with the clean Type II report, they closed the deal and used the report to speed up future vendor reviews, shortening their sales cycle by 40%.",
    colorTheme: 'orange',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbMSURBVHgB7d1vTBNRHMfxz5+lHQqS5AWGKBw0sAKiRjQQExMTI4wXJ0w8MB6MMb15YoxGE4/GGGM8MCaGiUYMaoyJIh6ICoogYjAwwI6gyBAykJFlW2v/1P7d6XSnO92lu13a1+Z9J5Hs0u7Sff69S/vTzgAA/g9tfw0A+DkSIECgCBAgQIAAAQIECEgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILC/BHiS/N/Gz283frbtbSb7L0n2M6CbXIAA+2/e+u36tST9Odm/2L7rW022TQIEWJXtL7/7vyR9kNzvbxUAP99u/VqSBHi8V/5/9e3Ntr0v2S/yTwGAf6jttw4C/P+k9s/y/yX5HwD+Q9vWSoAA/1L7p/l/S/I3AP4r2/bWZgIE+Jf2L/N/S/I3AP7Ltm2tAQIE2LZWAgQIECAgQYAAAQIEJAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWPsJ8C39/wB+AAAAAElFTkSuQmCC',
    diagramType: 'pillar-structure',
    implementationSteps: [
        { phase: 1, title: "Define Scope", description: "Determine which Trust Services Criteria apply (Security is mandatory)."},
        { phase: 2, title: "Gap Analysis", description: "Assess current controls against the TSC requirements."},
        { phase: 3, title: "Remediation", description: "Implement necessary policies, procedures, and technical controls."},
        { phase: 4, title: "Readiness Assessment", description: "A pre-audit check to ensure controls are designed correctly."},
        { phase: 5, title: "Observation Period", description: "Run controls for 3-12 months (for Type II) while collecting evidence."},
        { phase: 6, title: "Final Audit", description: "External auditor tests the design and operating effectiveness of controls."}
    ],
    controls: [
      // CC1: Control Environment
      { id: "CC1.1", name: "Integrity & Ethical Values", description: "The entity demonstrates a commitment to integrity and ethical values.", isImplemented: true, priority: 'High', group: 'CC1: Control Environment' },
      { id: "CC1.2", name: "Board Oversight", description: "The board of directors demonstrates independence from management and exercises oversight of the development and performance of internal control.", isImplemented: false, priority: 'High', group: 'CC1: Control Environment' },
      { id: "CC1.3", name: "Management Structure", description: "Management establishes, with board oversight, structures, reporting lines, and appropriate authorities and responsibilities in the pursuit of objectives.", isImplemented: true, priority: 'Medium', group: 'CC1: Control Environment' },
      { id: "CC1.4", name: "Competence", description: "The entity demonstrates a commitment to attract, develop, and retain competent individuals in alignment with objectives.", isImplemented: true, priority: 'Medium', group: 'CC1: Control Environment' },
      { id: "CC1.5", name: "Accountability", description: "The entity holds individuals accountable for their internal control responsibilities in the pursuit of objectives.", isImplemented: true, priority: 'Medium', group: 'CC1: Control Environment' },

      // CC2: Communication
      { id: "CC2.1", name: "Internal Communication", description: "The entity obtains or generates and uses relevant, quality information to support the functioning of internal control.", isImplemented: true, priority: 'Medium', group: 'CC2: Communication' },
      { id: "CC2.2", name: "External Communication", description: "The entity internally communicates information, including objectives and responsibilities for internal control, necessary to support the functioning of internal control.", isImplemented: false, priority: 'Low', group: 'CC2: Communication' },
      { id: "CC2.3", name: "Whistleblowing", description: "The entity communicates with external parties regarding matters affecting the functioning of internal control.", isImplemented: false, priority: 'Medium', group: 'CC2: Communication' },

      // CC3: Risk Assessment
      { id: "CC3.1", name: "Objectives", description: "The entity specifies objectives with sufficient clarity to enable the identification and assessment of risks relating to objectives.", isImplemented: true, priority: 'High', group: 'CC3: Risk Assessment' },
      { id: "CC3.2", name: "Risk Identification", description: "The entity identifies risks to the achievement of its objectives across the entity and analyzes risks as a basis for determining how the risks should be managed.", isImplemented: true, priority: 'High', group: 'CC3: Risk Assessment' },
      { id: "CC3.3", name: "Fraud Risk", description: "The entity considers the potential for fraud in assessing risks to the achievement of objectives.", isImplemented: false, priority: 'High', group: 'CC3: Risk Assessment' },
      { id: "CC3.4", name: "Change Risk", description: "The entity identifies and assesses changes that could significantly impact the system of internal control.", isImplemented: false, priority: 'High', group: 'CC3: Risk Assessment' },

      // CC4: Monitoring
      { id: "CC4.1", name: "Continuous Monitoring", description: "The entity selects, develops, and performs ongoing and/or separate evaluations to ascertain whether the components of internal control are present and functioning.", isImplemented: false, priority: 'High', group: 'CC4: Monitoring' },
      { id: "CC4.2", name: "Deficiencies", description: "The entity evaluates and communicates internal control deficiencies in a timely manner to those parties responsible for taking corrective action, including senior management and the board of directors, as appropriate.", isImplemented: false, priority: 'Medium', group: 'CC4: Monitoring' },

      // CC5: Control Activities
      { id: "CC5.1", name: "Control Selection", description: "The entity selects and develops control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels.", isImplemented: true, priority: 'High', group: 'CC5: Control Activities' },
      { id: "CC5.2", name: "Technology Controls", description: "The entity selects and develops general control activities over technology to support the achievement of objectives.", isImplemented: true, priority: 'High', group: 'CC5: Control Activities' },
      { id: "CC5.3", name: "Policies & Procedures", description: "The entity deploys control activities through policies that establish what is expected and procedures that put policies into action.", isImplemented: true, priority: 'High', group: 'CC5: Control Activities' },

      // CC6: Logical & Physical Access
      { id: "CC6.1", name: "Logical Access Security", description: "The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity's objectives.", isImplemented: true, priority: 'High', group: 'CC6: Access Controls' },
      { id: "CC6.2", name: "User Provisioning", description: "Prior to issuing system credentials and granting system access, the entity registers and authorizes new internal and external users whose access is administered by the entity.", isImplemented: true, priority: 'High', group: 'CC6: Access Controls' },
      { id: "CC6.3", name: "Least Privilege", description: "The entity authorizes internal and external users to access information assets based on their roles and responsibilities (Least Privilege).", isImplemented: true, priority: 'High', group: 'CC6: Access Controls' },
      { id: "CC6.4", name: "Physical Access", description: "The entity restricts physical access to facilities and protected information assets to authorized personnel to meet the entity's objectives.", isImplemented: false, priority: 'Medium', group: 'CC6: Access Controls' },
      { id: "CC6.5", name: "Revocation", description: "The entity discontinues logical and physical access to protected information assets when employment or the relationship is terminated.", isImplemented: true, priority: 'High', group: 'CC6: Access Controls' },
      { id: "CC6.6", name: "Boundary Protection", description: "The entity implements logical access security measures to protect against threats from outside its system boundaries.", isImplemented: true, priority: 'High', group: 'CC6: Access Controls' },
      { id: "CC6.7", name: "Transmission Protection", description: "The entity restricts the transmission, movement, and removal of information to authorized internal and external users and processes, and protects it during transmission.", isImplemented: true, priority: 'High', group: 'CC6: Access Controls' },
      { id: "CC6.8", name: "Malicious Code", description: "The entity implements controls to prevent or detect and act upon the introduction of malicious software.", isImplemented: true, priority: 'High', group: 'CC6: Access Controls' },

      // CC7: System Operations
      { id: "CC7.1", name: "Configuration Management", description: "The entity uses detection and monitoring procedures to identify changes to configurations that result in the introduction of new vulnerabilities.", isImplemented: false, priority: 'High', group: 'CC7: System Operations' },
      { id: "CC7.2", name: "Vulnerability Management", description: "The entity monitors system components and the operation of those components for anomalies that are indicative of malicious acts, natural disasters, and errors.", isImplemented: false, priority: 'High', group: 'CC7: System Operations' },
      { id: "CC7.3", name: "Incident Response", description: "The entity evaluates security events to determine whether they could or have resulted in a failure of the entity to meet its objectives.", isImplemented: false, priority: 'High', group: 'CC7: System Operations' },
      { id: "CC7.4", name: "Incident Containment", description: "The entity responds to identified security incidents by executing a defined incident response program to understand, contain, remediate, and communicate security incidents.", isImplemented: false, priority: 'High', group: 'CC7: System Operations' },
      { id: "CC7.5", name: "Disaster Recovery", description: "The entity identifies, develops, and implements activities to recover from identified security incidents.", isImplemented: false, priority: 'Medium', group: 'CC7: System Operations' },

      // CC8: Change Management
      { id: "CC8.1", name: "Change Authorization", description: "The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to infrastructure, data, software, and procedures.", isImplemented: true, priority: 'High', group: 'CC8: Change Management' },

      // CC9: Risk Mitigation
      { id: "CC9.1", name: "Business Disruption", description: "The entity identifies, selects, and develops risk mitigation activities for risks arising from business disruptions.", isImplemented: false, priority: 'High', group: 'CC9: Risk Mitigation' },
      { id: "CC9.2", name: "Vendor Risk", description: "The entity assesses and manages risks associated with vendors and business partners.", isImplemented: false, priority: 'High', group: 'CC9: Risk Mitigation' },

      // Availability (A)
      { id: "A1.1", name: "Capacity Management", description: "The entity maintains, monitors, and evaluates current processing capacity and use of system components to manage capacity demand.", isImplemented: false, priority: 'Medium', group: 'Availability' },
      { id: "A1.2", name: "Authorization of Backups", description: "The entity authorizes, designs, develops or acquires, implements, operates, approves, maintains, and monitors environmental protections, software, data back-up processes, and recovery infrastructure.", isImplemented: true, priority: 'High', group: 'Availability' },
      { id: "A1.3", name: "Recovery Testing", description: "The entity tests recovery plan procedures to support the recovery of the system.", isImplemented: false, priority: 'Medium', group: 'Availability' },
      { id: "A1.4", name: "Environmental Controls", description: "The entity designs, develops, implements, operates, maintains, and monitors environmental protections to prevent or mitigate physical and environmental risks.", isImplemented: false, priority: 'Medium', group: 'Availability' },

      // Confidentiality (C)
      { id: "C1.1", name: "Data Identification", description: "The entity identifies and maintains confidential information to meet the entity's objectives related to confidentiality.", isImplemented: false, priority: 'Medium', group: 'Confidentiality' },
      { id: "C1.2", name: "Disposal", description: "The entity disposes of confidential information to meet the entity's objectives related to confidentiality.", isImplemented: true, priority: 'High', group: 'Confidentiality' },

      // Processing Integrity (PI)
      { id: "PI1.1", name: "Processing Objectives", description: "The entity obtains or generates, uses, and communicates relevant, quality information to support the functioning of internal control.", isImplemented: false, priority: 'Medium', group: 'Processing Integrity' },
      { id: "PI1.2", name: "Input Validation", description: "The entity implements policies and procedures to ensure that input data is validated and accurate.", isImplemented: false, priority: 'Medium', group: 'Processing Integrity' },
      { id: "PI1.3", name: "Processing Accuracy", description: "The entity implements policies and procedures to ensure that processing is accurate, complete, and timely.", isImplemented: false, priority: 'Medium', group: 'Processing Integrity' },
      { id: "PI1.4", name: "Output Delivery", description: "The entity implements policies and procedures to ensure that output is distributed only to authorized personnel and is accurate and complete.", isImplemented: false, priority: 'Medium', group: 'Processing Integrity' },
      { id: "PI1.5", name: "Storage Accuracy", description: "The entity implements policies and procedures to ensure that data storage is maintained accurately.", isImplemented: false, priority: 'Medium', group: 'Processing Integrity' },

      // Privacy (P)
      { id: "P1.1", name: "Notice", description: "The entity provides notice to data subjects about its privacy practices.", isImplemented: true, priority: 'High', group: 'Privacy' },
      { id: "P2.1", name: "Choice and Consent", description: "The entity describes the choices available to the individual and obtains implicit or explicit consent with respect to the collection, use, and disclosure of personal information.", isImplemented: true, priority: 'High', group: 'Privacy' },
      { id: "P3.1", name: "Collection", description: "The entity collects personal information only for the purposes identified in the notice.", isImplemented: false, priority: 'Medium', group: 'Privacy' },
      { id: "P4.1", name: "Use, Retention, Disposal", description: "The entity limits the use of personal information to the purposes identified in the notice and for which the individual has provided implicit or explicit consent.", isImplemented: false, priority: 'High', group: 'Privacy' },
      { id: "P4.2", name: "Retention", description: "The entity retains personal information for no longer than necessary to fulfill the stated purposes.", isImplemented: false, priority: 'Medium', group: 'Privacy' },
      { id: "P4.3", name: "Secure Disposal", description: "The entity disposes of personal information in a secure manner.", isImplemented: true, priority: 'High', group: 'Privacy' },
      { id: "P5.1", name: "Access", description: "The entity provides individuals with access to their personal information for review and update.", isImplemented: false, priority: 'Medium', group: 'Privacy' },
      { id: "P5.2", name: "Disclosure", description: "The entity discloses personal information to third parties only for the purposes identified in the notice and with the implicit or explicit consent of the individual.", isImplemented: false, priority: 'High', group: 'Privacy' },
      { id: "P6.1", name: "Security for Privacy", description: "The entity protects personal information against unauthorized access (both physical and logical).", isImplemented: true, priority: 'High', group: 'Privacy' },
      { id: "P7.1", name: "Quality", description: "The entity maintains accurate, complete, and relevant personal information for the purposes identified in the notice.", isImplemented: false, priority: 'Low', group: 'Privacy' },
      { id: "P8.1", name: "Monitoring and Enforcement", description: "The entity monitors compliance with its privacy policies and procedures and has procedures to address privacy-related complaints and disputes.", isImplemented: false, priority: 'Medium', group: 'Privacy' },
    ],
    useCases: [
      { title: "Vendor Trust", description: "Passing procurement reviews for Enterprise customers." },
      { title: "Internal Governance", description: "Formalizing IT policies and procedures." }
    ]
  },
  {
    id: "glba",
    name: "GLBA (Gramm-Leach-Bliley Act)",
    link: "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act",
    category: "Regulation",
    industry: "Financial Services",
    overview: "The Gramm-Leach-Bliley Act (GLBA) requires financial institutions to explain their information-sharing practices to their customers and to safeguard sensitive data.",
    purpose: "To protect consumer financial privacy and ensure the security and confidentiality of customer records and information.",
    importance: "Mandatory for US financial institutions (Banks, Lenders, Insurers). Non-compliance can result in severe penalties and reputational damage.",
    howToApply: "Comply with the two main rules:\n\n1. **The Privacy Rule**: Provide customers with a Privacy Notice explaining how data is shared and their opt-out rights.\n\n2. **The Safeguards Rule**: Implement a written Information Security Program. Key requirements include: Designating a 'Qualified Individual', conducting Risk Assessments, encrypting data, and implementing MFA.",
    whereToApply: "US Financial Institutions and companies offering financial products (e.g., car dealers, tax preparers).",
    whenToApply: "Continuously.",
    scenarios: "**Scenario: Mortgage Lender Security**\n\n**Challenge**: A non-bank mortgage lender held vast amounts of sensitive financial data but lacked a formal security team.\n\n**Application**: To meet the revised GLBA Safeguards Rule, they designated a Virtual CISO as their 'Qualified Individual'. They implemented encryption for all data at rest (customer files) and enforced MFA for all employee accounts.\n\n**Outcome**: Compliance with the Safeguards Rule and enhanced protection against data breaches.",
    colorTheme: 'green',
    diagramType: 'process-flow',
    controls: [
      { id: "314.4(a)", name: "Designate Qualified Individual", description: "Designate a qualified individual responsible for overseeing and implementing the information security program.", isImplemented: false, priority: 'High', group: 'Safeguards Rule' },
      { id: "314.4(b)", name: "Risk Assessment", description: "Base your information security program on a risk assessment that identifies reasonably foreseeable internal and external risks.", isImplemented: false, priority: 'High', group: 'Safeguards Rule' },
      { id: "314.4(c)(1)", name: "Access Controls", description: "Implement and periodically review access controls, including technical and physical controls.", isImplemented: false, priority: 'High', group: 'Safeguards Rule' },
      { id: "314.4(c)(2)", name: "Inventory", description: "Identify and manage the data, personnel, devices, systems, and facilities.", isImplemented: true, priority: 'Medium', group: 'Safeguards Rule' },
      { id: "314.4(c)(3)", name: "Encryption", description: "Encrypt customer information in transit over external networks and at rest.", isImplemented: true, priority: 'Critical', group: 'Safeguards Rule' },
      { id: "314.4(c)(4)", name: "Secure Development", description: "Adopt secure development practices for in-house developed applications and assess security of third-party apps.", isImplemented: false, priority: 'Medium', group: 'Safeguards Rule' },
      { id: "314.4(c)(5)", name: "Multi-Factor Authentication", description: "Implement multi-factor authentication for any individual accessing any information system.", isImplemented: true, priority: 'Critical', group: 'Safeguards Rule' },
      { id: "314.4(c)(6)", name: "Secure Disposal", description: "Develop, implement, and maintain procedures for the secure disposal of customer information.", isImplemented: true, priority: 'Medium', group: 'Safeguards Rule' },
      { id: "314.4(c)(7)", name: "Change Management", description: "Adopt procedures for change management.", isImplemented: false, priority: 'Medium', group: 'Safeguards Rule' },
      { id: "314.4(c)(8)", name: "Monitoring", description: "Monitor and log the activity of authorized users and detect unauthorized access.", isImplemented: false, priority: 'High', group: 'Safeguards Rule' },
      { id: "314.4(d)", name: "Penetration Testing", description: "Regularly test or otherwise monitor the effectiveness of the safeguards' key controls (including annual pen testing).", isImplemented: false, priority: 'High', group: 'Safeguards Rule' },
      { id: "314.4(e)", name: "Training", description: "Provide personnel with security awareness training.", isImplemented: true, priority: 'High', group: 'Safeguards Rule' },
      { id: "314.4(f)", name: "Service Providers", description: "Oversee service providers (due diligence and contractual requirements).", isImplemented: false, priority: 'Medium', group: 'Safeguards Rule' },
      { id: "314.4(h)", name: "Incident Response Plan", description: "Establish a written incident response plan.", isImplemented: false, priority: 'High', group: 'Safeguards Rule' },
      { id: "314.4(i)", name: "Report to Board", description: "Require the Qualified Individual to report in writing, at least annually, to the board of directors.", isImplemented: false, priority: 'Medium', group: 'Safeguards Rule' },
    ],
    useCases: [
      { title: "Consumer Trust", description: "Protecting loan applications and credit reports." },
      { title: "Regulatory Compliance", description: "Avoiding FTC enforcement actions." }
    ]
  },
  {
    id: "sox",
    name: "SOX (Sarbanes-Oxley)",
    link: "https://www.sec.gov/spotlight/sarbanes-oxley.htm",
    category: "Regulation",
    industry: "Financial Services",
    overview: "The Sarbanes-Oxley Act of 2002 (SOX) protects investors from fraudulent accounting activities by corporations. While financial in nature, it has major IT implications because financial data is processed by IT systems.",
    purpose: "To ensure accuracy, reliability, and integrity of corporate disclosures and financial reporting.",
    importance: "Mandatory for all US public companies. Executives can face criminal penalties for certification of false financial reports.",
    howToApply: "Focus on Section 404 (Management Assessment of Internal Controls):\n\n1. **IT General Controls (ITGC)**: Implement controls over Access (who can change financial data), Change Management (how system changes are made), and Operations (backups/job scheduling).\n\n2. **Audit**: An external auditor reviews these controls annually.",
    whereToApply: "US Public Companies and their wholly-owned subsidiaries.",
    whenToApply: "Annual audits and continuous monitoring of internal controls.",
    scenarios: "**Scenario: IPO Preparation**\n\n**Challenge**: A tech company was preparing for an IPO. They needed to prove their financial data couldn't be tampered with.\n\n**Application**: They implemented SOX ITGCs. Specifically, they removed developer access to the production ERP system (Segregation of Duties) and implemented a ticketing system to log every change to financial software (Change Management).\n\n**Outcome**: A clean SOX audit opinion, facilitating a successful IPO.",
    colorTheme: 'slate',
    diagramType: 'pillar-structure',
    controls: [
      // Access to Programs and Data
      { id: "ITGC-AC-1", name: "User Access Provisioning", description: "Access to financial applications is authorized by management and commensurate with job responsibilities.", isImplemented: true, priority: 'High', group: 'Access Control' },
      { id: "ITGC-AC-2", name: "User Access Revocation", description: "Access is timely removed upon termination or transfer.", isImplemented: true, priority: 'High', group: 'Access Control' },
      { id: "ITGC-AC-3", name: "Periodic Access Review", description: "Management periodically reviews user access rights to ensure they remain appropriate.", isImplemented: false, priority: 'High', group: 'Access Control' },
      { id: "ITGC-AC-4", name: "Privileged Access", description: "Access to privileged accounts (e.g., admin) is restricted and monitored.", isImplemented: false, priority: 'High', group: 'Access Control' },
      { id: "ITGC-AC-5", name: "Segregation of Duties", description: "Conflicting duties (e.g., developing code and deploying to production) are segregated.", isImplemented: false, priority: 'High', group: 'Access Control' },
      { id: "ITGC-AC-6", name: "Password Policy", description: "Strong password configurations (length, complexity, expiration) are enforced.", isImplemented: true, priority: 'Medium', group: 'Access Control' },

      // Change Management
      { id: "ITGC-CM-1", name: "Change Authorization", description: "Changes to financial systems are authorized before development begins.", isImplemented: true, priority: 'High', group: 'Change Management' },
      { id: "ITGC-CM-2", name: "Testing", description: "Changes are tested and validated (UAT) prior to migration to production.", isImplemented: true, priority: 'High', group: 'Change Management' },
      { id: "ITGC-CM-3", name: "Migration Control", description: "Access to migrate changes to production is restricted to authorized personnel independent of developers.", isImplemented: false, priority: 'High', group: 'Change Management' },
      { id: "ITGC-CM-4", name: "Emergency Changes", description: "Emergency changes are documented and approved retrospectively.", isImplemented: false, priority: 'Medium', group: 'Change Management' },

      // Computer Operations
      { id: "ITGC-OP-1", name: "Job Scheduling", description: "Batch jobs are scheduled, monitored, and failures are resolved.", isImplemented: true, priority: 'Medium', group: 'Operations' },
      { id: "ITGC-OP-2", name: "Backups", description: "Backups of financial data are performed regularly and tested for restorability.", isImplemented: true, priority: 'High', group: 'Operations' },
      { id: "ITGC-OP-3", name: "Incident Management", description: "Incidents affecting financial systems are recorded and resolved.", isImplemented: false, priority: 'Medium', group: 'Operations' },
    ],
    useCases: [
      { title: "Financial Integrity", description: "Preventing accounting fraud via IT systems." },
      { title: "Change Management", description: "Ensuring code changes don't break financial reporting." }
    ]
  },
  {
    id: "nydfs-500",
    name: "NYDFS 23 NYCRR 500",
    link: "https://www.dfs.ny.gov/industry_guidance/cybersecurity",
    category: "Regulation",
    industry: "Financial Services",
    overview: "The New York Department of Financial Services (NYDFS) Cybersecurity Regulation (23 NYCRR 500) places cybersecurity requirements on all covered financial institutions.",
    purpose: "To protect New York's financial services industry and consumers from the threat of cyber attacks.",
    importance: "It is considered one of the most prescriptive US state regulations. It requires a CISO certification of compliance annually.",
    howToApply: "Implement the 23 sections, including:\n\n1. **Governance**: Designate a CISO (500.04).\n\n2. **Defenses**: Penetration testing (500.05) and MFA (500.12).\n\n3. **Encryption**: Encrypt non-public information (500.15).\n\n4. **Reporting**: Report cybersecurity events within 72 hours (500.17).",
    whereToApply: "Financial services companies (Banks, Insurance, Mortgage) operating in New York.",
    whenToApply: "Continuously; Annual certification filing by April 15.",
    scenarios: "**Scenario: Insurance Firm Compliance**\n\n**Challenge**: A NY-based insurance broker needed to certify compliance with 23 NYCRR 500.\n\n**Application**: They appointed a CISO. They implemented MFA for all remote access (a strict requirement). They encrypted all emails containing customer info.\n\n**Outcome**: The Board approved the cybersecurity policy, and the CISO successfully filed the Certificate of Compliance with NYDFS.",
    colorTheme: 'indigo',
    diagramType: 'process-flow',
    controls: [
      { id: "500.02", name: "Cybersecurity Program", description: "Maintain a cybersecurity program designed to protect the confidentiality, integrity, and availability of information systems.", isImplemented: true, priority: 'High', group: 'Governance' },
      { id: "500.03", name: "Cybersecurity Policy", description: "Implement and maintain a written cybersecurity policy approved by a Senior Officer or Board.", isImplemented: true, priority: 'High', group: 'Governance' },
      { id: "500.04", name: "CISO Designation", description: "Designate a qualified individual (CISO) responsible for overseeing and implementing the cybersecurity program.", isImplemented: true, priority: 'High', group: 'Governance' },
      { id: "500.05", name: "Penetration Testing & Vulnerability Assessments", description: "Conduct annual penetration testing and bi-annual vulnerability assessments.", isImplemented: false, priority: 'High', group: 'Testing' },
      { id: "500.06", name: "Audit Trails", description: "Maintain systems that reconstruct material financial transactions and log access privileges.", isImplemented: false, priority: 'High', group: 'Monitoring' },
      { id: "500.07", name: "Access Privileges", description: "Limit user access privileges to systems providing Nonpublic Information and periodically review them.", isImplemented: true, priority: 'High', group: 'Access' },
      { id: "500.08", name: "Application Security", description: "Written procedures for the secure development of in-house applications.", isImplemented: false, priority: 'Medium', group: 'Development' },
      { id: "500.09", name: "Risk Assessment", description: "Conduct a periodic risk assessment of the information systems.", isImplemented: false, priority: 'High', group: 'Risk' },
      { id: "500.10", name: "Cybersecurity Personnel", description: "Provide cybersecurity personnel with updates and training.", isImplemented: false, priority: 'Medium', group: 'Personnel' },
      { id: "500.11", name: "Third Party Provider Security Policy", description: "Implement policies for the security of Nonpublic Information held by third parties.", isImplemented: false, priority: 'High', group: 'Third Party' },
      { id: "500.12", name: "Multi-Factor Authentication", description: "MFA required for any individual accessing internal networks from an external network.", isImplemented: true, priority: 'Critical', group: 'Access' },
      { id: "500.13", name: "Limitations on Data Retention", description: "Policies for the secure disposal of Nonpublic Information no longer necessary.", isImplemented: false, priority: 'Medium', group: 'Data' },
      { id: "500.14", name: "Training and Monitoring", description: "Monitor user activity and provide regular cybersecurity awareness training.", isImplemented: true, priority: 'High', group: 'Training' },
      { id: "500.15", name: "Encryption", description: "Encrypt Nonpublic Information held or transmitted over external networks and at rest.", isImplemented: true, priority: 'High', group: 'Encryption' },
      { id: "500.16", name: "Incident Response Plan", description: "Establish a written incident response plan.", isImplemented: true, priority: 'High', group: 'Incident Response' },
      { id: "500.17", name: "Notices to Superintendent", description: "Notify the superintendent of cybersecurity events within 72 hours.", isImplemented: false, priority: 'High', group: 'Reporting' },
    ],
    useCases: [
      { title: "State Compliance", description: "Meeting NYDFS specific requirements for NY operations." }
    ]
  },
  {
    id: "ffiec",
    name: "FFIEC IT Examination Handbooks",
    link: "https://ithandbook.ffiec.gov/",
    category: "Standard",
    industry: "Financial Services",
    overview: "The FFIEC (Federal Financial Institutions Examination Council) IT Examination Handbooks are guides used by examiners to evaluate the IT security and risk management of financial institutions.",
    purpose: "To ensure financial institutions manage IT risk effectively and comply with laws.",
    importance: "This is the 'textbook' for US banking audits. If you fail an FFIEC exam, you face regulatory enforcement.",
    howToApply: "Use the **Cybersecurity Assessment Tool (CAT)**:\n\n1. **Inherent Risk Profile**: Determine if risk is Least, Minimal, Moderate, Significant, or Most.\n\n2. **Cybersecurity Maturity**: Assess maturity (Baseline, Evolving, Intermediate, Advanced, Innovative) across 5 domains.\n\n3. **Gap Analysis**: Align maturity with risk profile.",
    whereToApply: "US Banks, Credit Unions, and Thrifts.",
    whenToApply: "Preparing for regulatory exams (FDIC, OCC, FRB).",
    scenarios: "**Scenario: Community Bank Audit**\n\n**Challenge**: A community bank was preparing for an FDIC IT exam. They feared a finding on 'Business Continuity'.\n\n**Application**: They reviewed the FFIEC 'Business Continuity Management' booklet. They updated their testing schedule to include a pandemic scenario (a gap identified). They documented the test results.\n\n**Outcome**: The examiner cited strong adherence to FFIEC guidance, resulting in a favorable exam rating.",
    colorTheme: 'blue',
    diagramType: 'pyramid-maturity',
    controls: [
      { id: "D1.G1", name: "Cyber Risk Governance", description: "Board and management oversight of cybersecurity risk.", isImplemented: true, priority: 'High', group: 'Domain 1: Governance' },
      { id: "D1.S", name: "Audit", description: "Independent audit of the cybersecurity program.", isImplemented: true, priority: 'High', group: 'Domain 1: Governance' },
      { id: "D2.IM", name: "Inventory Management", description: "Inventory of hardware and software assets.", isImplemented: true, priority: 'High', group: 'Domain 2: Risk Mgmt' },
      { id: "D3.AC", name: "Access Controls", description: "Limit access to authorized users only.", isImplemented: true, priority: 'High', group: 'Domain 3: Protection' },
      { id: "D3.DP", name: "Data Protection", description: "Encryption and DLP controls.", isImplemented: false, priority: 'High', group: 'Domain 3: Protection' },
      { id: "D4.IR", name: "Incident Response", description: "Capabilities to detect, respond to, and recover from incidents.", isImplemented: false, priority: 'High', group: 'Domain 4: Response' },
      { id: "D5.BC", name: "Business Continuity", description: "Resilience and recovery capabilities.", isImplemented: false, priority: 'High', group: 'Domain 5: Recovery' },
    ],
    useCases: [
      { title: "Banking Audit", description: "Passing the FDIC/OCC IT examination." }
    ]
  },
  {
    id: "swift-csp",
    name: "SWIFT CSP (Customer Security Programme)",
    link: "https://www.swift.com/our-solutions/compliance-and-shared-services/customer-security-programme",
    category: "Standard",
    industry: "Financial Services",
    overview: "The SWIFT Customer Security Programme (CSP) helps financial institutions ensure their defenses against cyberattacks are up to date and effective, to protect the integrity of the wider financial network.",
    purpose: "To detect and prevent fraudulent activity in users' local environments and secure the global financial messaging network.",
    importance: "Mandatory for all SWIFT users. Failure to comply is reported to the user's local regulators and counterparties.",
    howToApply: "Attest compliance with the **Customer Security Controls Framework (CSCF)** annually:\n\n1. **Assess**: Verify compliance with mandatory controls (e.g., restrict internet access, segregate critical systems).\n\n2. **Independent Assessment**: An internal or external auditor must verify the assessment.\n\n3. **Attest**: Submit the attestation to the KYC-SA application.",
    whereToApply: "Any organization connecting to SWIFT (Banks, Corporates).",
    whenToApply: "Annual attestation required by year-end.",
    scenarios: "**Scenario: SWIFT Environment Hardening**\n\n**Challenge**: A bank's SWIFT server was on the same network as the back-office PC network, a violation of CSP.\n\n**Application**: They created a 'Secure Zone'—a segregated network segment solely for SWIFT infrastructure with strict firewall rules blocking all internet traffic. They implemented Jump Servers for administration.\n\n**Outcome**: Successful independent assessment and attestation of compliance with the 'Secure Zone' principle.",
    colorTheme: 'cyan',
    diagramType: 'process-flow',
    controls: [
      { id: "1.1", name: "SWIFT Environment Protection", description: "Restrict internet access to the secure zone. Internet access must be prohibited.", isImplemented: true, priority: 'Critical', group: '1. Secure Zone' },
      { id: "1.2", name: "Operating System Privileges", description: "Restrict administrative privileges to the secure zone.", isImplemented: true, priority: 'High', group: '1. Secure Zone' },
      { id: "1.3", name: "Virtualization Platform Protection", description: "Protect the virtualization platform hosting the secure zone.", isImplemented: false, priority: 'High', group: '1. Secure Zone' },
      { id: "2.1", name: "Internal Data Flow Security", description: "Protect data flows between the secure zone and other enterprise zones.", isImplemented: false, priority: 'High', group: '2. Attack Surface' },
      { id: "2.2", name: "Security Updates", description: "Install security updates on all components in the secure zone.", isImplemented: true, priority: 'Critical', group: '2. Attack Surface' },
      { id: "2.3", name: "System Hardening", description: "Harden systems within the secure zone (remove unnecessary services).", isImplemented: false, priority: 'Medium', group: '2. Attack Surface' },
      { id: "2.6", name: "Operator Session Confidentiality", description: "Protect confidentiality of operator sessions (encrypted).", isImplemented: false, priority: 'High', group: '2. Attack Surface' },
      { id: "2.7", name: "Vulnerability Scanning", description: "Scan for vulnerabilities within the secure zone.", isImplemented: false, priority: 'High', group: '2. Attack Surface' },
      { id: "3.1", name: "Physical Security", description: "Physically secure the environment hosting SWIFT infrastructure.", isImplemented: true, priority: 'Medium', group: '3. Physical' },
      { id: "4.1", name: "Password Policy", description: "Enforce strong password policies.", isImplemented: true, priority: 'High', group: '4. Identity' },
      { id: "4.2", name: "Multi-Factor Authentication", description: "Use MFA for all access to the secure zone.", isImplemented: true, priority: 'Critical', group: '4. Identity' },
      { id: "5.1", name: "Logical Access Control", description: "Restrict access based on least privilege and need-to-know.", isImplemented: true, priority: 'High', group: '5. Access' },
      { id: "6.1", name: "Malware Protection", description: "Implement anti-malware protection.", isImplemented: true, priority: 'High', group: '6. Detection' },
      { id: "6.4", name: "Logging and Monitoring", description: "Log and monitor security events.", isImplemented: false, priority: 'High', group: '6. Detection' },
      { id: "7.1", name: "Cyber Incident Response Plan", description: "Maintain a plan to respond to cyber incidents.", isImplemented: false, priority: 'High', group: '7. Response' },
    ],
    useCases: [
      { title: "Anti-Fraud", description: "Preventing payment tampering and heist attempts." },
      { title: "Network Segmentation", description: "Isolating critical payment infrastructure." }
    ]
  },
  {
    id: "mas-trm",
    name: "MAS TRM Guidelines",
    link: "https://www.mas.gov.sg/regulation/guidelines/technology-risk-management-guidelines",
    category: "Regulation",
    industry: "Financial Services",
    overview: "The Monetary Authority of Singapore (MAS) Technology Risk Management (TRM) Guidelines set out risk management principles and best practices to guide financial institutions in Singapore.",
    purpose: "To manage technology risk effectively and maintain high system availability and recoverability.",
    importance: "The definitive standard for Singapore's financial sector. While 'guidelines', MAS expects strict adherence.",
    howToApply: "Implement the guidelines across domains:\n\n1. **Governance**: Board oversight of TRM.\n\n2. **Risk Framework**: Identification and assessment of risks.\n\n3. **IT Ops**: Management of system reliability, capacity, and patching.\n\n4. **Cyber Security**: Adversarial Attack Simulation (Red Teaming).",
    whereToApply: "Singapore Financial Institutions (Banks, Insurers, Payment Services).",
    whenToApply: "Continuously.",
    scenarios: "**Scenario: Red Teaming**\n\n**Challenge**: A major Singaporean bank needed to validate its detection capabilities against advanced threats.\n\n**Application**: Per MAS TRM, they conducted an Adversarial Attack Simulation Exercise (Red Teaming). The Red Team mimicked a ransomware actor.\n\n**Outcome**: The exercise revealed gaps in lateral movement detection. The bank improved its EDR configuration, satisfying the MAS requirement for rigorous testing.",
    colorTheme: 'red',
    diagramType: 'pillar-structure',
    controls: [
      { id: "TRM-1", name: "Risk Management Framework", description: "Establish a framework to identify, assess, and manage technology risks.", isImplemented: false, priority: 'High', group: 'Gov' },
      { id: "TRM-12", name: "Cyber Security Surveillance", description: "Implement 24/7 security monitoring to detect cyber attacks.", isImplemented: false, priority: 'High', group: 'Ops' },
    ],
    useCases: [
      { title: "Asian Banking", description: "Operational resilience in Singapore." }
    ]
  },
  {
    id: "pci-3ds",
    name: "PCI 3DS",
    link: "https://www.pcisecuritystandards.org/standards/3ds/",
    category: "Standard",
    industry: "Financial Services",
    overview: "The PCI 3-D Secure (3DS) Security Standard applies to the EMV 3-D Secure protocol (e.g., 'Verified by Visa', 'Mastercard Identity Check'), which adds an extra layer of authentication for online card transactions.",
    purpose: "To secure the 3DS environment (Access Control Servers, Directory Servers) and protect 3DS data.",
    importance: "Critical for the security of 2-factor authentication in payments.",
    howToApply: "Implement controls specific to 3DS environments:\n\n1. **Secure Platform**: Harden the servers hosting 3DS functions.\n\n2. **Logical Access**: Strict access control to 3DS systems.\n\n3. **Physical Security**: Secure the data centers hosting 3DS.",
    whereToApply: "3DS Service Providers (ACS, DS, 3DSS operators).",
    whenToApply: "When performing 3-D Secure functions.",
    scenarios: "**Scenario: Payment Processor 3DS**\n\n**Challenge**: A payment processor wanted to offer 3DS services to merchants.\n\n**Application**: They built a segregated 3DS environment. They applied the PCI 3DS Core Security Standard controls, such as Hardware Security Modules (HSMs) for key management. They underwent a QSA audit.\n\n**Outcome**: Achieved PCI 3DS compliance, allowing them to process authenticated transactions securely.",
    colorTheme: 'red',
    diagramType: 'pillar-structure',
    controls: [
      { id: "3DS-1", name: "Security Policy", description: "Maintain a policy that addresses information security for all personnel.", isImplemented: false, priority: 'Medium', group: 'Policy' },
      { id: "3DS-2", name: "Secure Configuration", description: "Do not use vendor-supplied defaults for system passwords and other security parameters.", isImplemented: false, priority: 'High', group: 'Config' },
    ],
    useCases: [
      { title: "Payment Authentication", description: "Securing the infrastructure behind 2FA for online payments." }
    ]
  }
];
