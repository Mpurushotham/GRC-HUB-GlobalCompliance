
import { Framework } from '../types';

export const healthcareFrameworks: Framework[] = [
  {
    id: "hipaa",
    name: "HIPAA (Health Insurance Portability and Accountability Act)",
    link: "https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html",
    category: "Regulation",
    industry: "Healthcare",
    overview: "Public Law 104-191, the Health Insurance Portability and Accountability Act of 1996 (HIPAA), establishes national standards to protect individuals' medical records and other personal health information.",
    purpose: "To protect the privacy and security of Protected Health Information (PHI) while allowing the flow of health information needed to provide high-quality health care.",
    importance: "Mandatory for Covered Entities (Providers, Plans, Clearinghouses) and Business Associates in the US. Violations carry stiff civil and criminal penalties.",
    howToApply: "Comply with the two main Rules:\n\n1. **Privacy Rule**: Protects PHI and gives patients rights over their health info.\n\n2. **Security Rule**: Mandates Administrative, Physical, and Technical safeguards for ePHI.\n\n   - **Administrative**: Risk analysis, security management process.\n\n   - **Physical**: Facility access controls, workstation security.\n\n   - **Technical**: Access control, audit controls, encryption.",
    whereToApply: "US Covered Entities and Business Associates.",
    whenToApply: "Continuously.",
    scenarios: "**Scenario: Hospital Ransomware Protection**\n\n**Challenge**: A hospital wanted to prevent ransomware from locking patient records.\n\n**Application**: Per the HIPAA Security Rule 'Risk Analysis' requirement, they identified legacy systems as a risk. They implemented network segmentation (Technical Safeguard) to isolate medical devices and offline backups (Administrative Safeguard - Contingency Plan).\n\n**Outcome**: Compliance with 45 CFR 164.308(a)(1) and increased resilience against attacks.",
    colorTheme: 'rose',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiDSURBVHgB7d1vTBNRHMfxz5+lHQqS5AWGKBw0sAKiRjQQExMTI4wXJ0w8MB6MMb15YoxGE4/GGGM8MCaGiUYMaoyJIh6ICoogYjAwwI6gyBAykJFlW2v/1P7d6XSnO92lu13a1+Z9J5Hs0u7Sff69S/vTzgAA/g9tfw0A+DkSIECgCBAgQIAAAQIECEgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILC/BHiS/N/Gz283frbtbSb7L0n2M6CbXIAA+2/e+u36tST9Odm/2L7rW022TQIEWJXtL7/7vyR9kNzvbxUAP99u/VqSBHi8V/5/9e3Ntr0v2S/yTwGAf6jttw4C/P+k9s/y/yX5HwD+Q9vWSoAA/1L7p/l/S/I3AP4r2/bWZgIE+Jf2L/N/S/I3AP7Ltm2tAQIE2LZWAgQIECAgQYAAAQIEJAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWPsJ8C39/wB+AAAAAElFTkSuQmCC',
    diagramType: 'pillar-structure',
    controls: [
      // ADMINISTRATIVE SAFEGUARDS (164.308)
      { id: "164.308(a)(1)(i)", name: "Security Management Process", description: "Implement policies and procedures to prevent, detect, contain, and correct security violations.", isImplemented: true, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(1)(ii)(A)", name: "Risk Analysis (Required)", description: "Conduct an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of e-PHI.", isImplemented: true, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(1)(ii)(B)", name: "Risk Management (Required)", description: "Implement security measures sufficient to reduce risks and vulnerabilities to a reasonable and appropriate level.", isImplemented: false, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(1)(ii)(C)", name: "Sanction Policy (Required)", description: "Apply appropriate sanctions against workforce members who fail to comply with the security policies and procedures.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(1)(ii)(D)", name: "Information System Activity Review (Required)", description: "Implement procedures to regularly review records of information system activity, such as audit logs, access reports, and security incident tracking reports.", isImplemented: false, priority: 'High', group: 'Administrative' },
      
      { id: "164.308(a)(2)", name: "Assigned Security Responsibility", description: "Identify the security official who is responsible for the development and implementation of the policies and procedures.", isImplemented: true, priority: 'High', group: 'Administrative' },
      
      { id: "164.308(a)(3)(i)", name: "Workforce Security", description: "Implement policies and procedures to ensure that all members of its workforce have appropriate access to e-PHI.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(3)(ii)(A)", name: "Authorization and/or Supervision (Addressable)", description: "Implement procedures for the authorization and/or supervision of workforce members who work with e-PHI or in locations where it might be accessed.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(3)(ii)(B)", name: "Workforce Clearance Procedure (Addressable)", description: "Implement procedures to determine that the access of a workforce member to e-PHI is appropriate.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(3)(ii)(C)", name: "Termination Procedures (Addressable)", description: "Implement procedures for terminating access to e-PHI when the employment of a workforce member ends.", isImplemented: true, priority: 'High', group: 'Administrative' },

      { id: "164.308(a)(4)(i)", name: "Information Access Management", description: "Implement policies and procedures for authorizing access to e-PHI.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(4)(ii)(B)", name: "Access Authorization (Addressable)", description: "Implement policies and procedures for granting access to e-PHI, for example, through access to a workstation, transaction, program, process, or other mechanism.", isImplemented: false, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(4)(ii)(C)", name: "Access Establishment and Modification (Addressable)", description: "Implement policies and procedures that, based upon the entity's access authorization policies, establish, document, review, and modify a user's right of access to a workstation, transaction, program, or process.", isImplemented: false, priority: 'Medium', group: 'Administrative' },

      { id: "164.308(a)(5)(i)", name: "Security Awareness and Training", description: "Implement a security awareness and training program for all members of its workforce (including management).", isImplemented: true, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(5)(ii)(A)", name: "Security Reminders (Addressable)", description: "Periodic security updates.", isImplemented: false, priority: 'Low', group: 'Administrative' },
      { id: "164.308(a)(5)(ii)(B)", name: "Protection from Malicious Software (Addressable)", description: "Procedures for guarding against, detecting, and reporting malicious software.", isImplemented: true, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(5)(ii)(C)", name: "Log-in Monitoring (Addressable)", description: "Procedures for monitoring log-in attempts and reporting discrepancies.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(5)(ii)(D)", name: "Password Management (Addressable)", description: "Procedures for creating, changing, and safeguarding passwords.", isImplemented: true, priority: 'High', group: 'Administrative' },

      { id: "164.308(a)(6)(i)", name: "Security Incident Procedures", description: "Implement policies and procedures to address security incidents.", isImplemented: true, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(6)(ii)", name: "Response and Reporting (Required)", description: "Identify and respond to suspected or known security incidents; mitigate, to the extent practicable, harmful effects; and document incidents and their outcomes.", isImplemented: false, priority: 'High', group: 'Administrative' },

      { id: "164.308(a)(7)(i)", name: "Contingency Plan", description: "Establish (and implement as needed) policies and procedures for responding to an emergency or other occurrence (like fire, vandalism, system failure, and natural disaster) that damages systems containing e-PHI.", isImplemented: false, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(7)(ii)(A)", name: "Data Backup Plan (Required)", description: "Establish and implement procedures to create and maintain retrievable exact copies of e-PHI.", isImplemented: true, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(7)(ii)(B)", name: "Disaster Recovery Plan (Required)", description: "Establish (and implement as needed) procedures to restore any loss of data.", isImplemented: false, priority: 'High', group: 'Administrative' },
      { id: "164.308(a)(7)(ii)(C)", name: "Emergency Mode Operation Plan (Required)", description: "Establish (and implement as needed) procedures to enable continuation of critical business processes for protection of the security of e-PHI while operating in emergency mode.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(7)(ii)(D)", name: "Testing and Revision Procedures (Addressable)", description: "Implement procedures for periodic testing and revision of contingency plans.", isImplemented: false, priority: 'Medium', group: 'Administrative' },
      { id: "164.308(a)(7)(ii)(E)", name: "Applications and Data Criticality Analysis (Addressable)", description: "Assess the relative criticality of specific applications and data in support of other contingency plan components.", isImplemented: false, priority: 'Medium', group: 'Administrative' },

      { id: "164.308(a)(8)", name: "Evaluation", description: "Perform a periodic technical and nontechnical evaluation that establishes the extent to which an entity's security policies and procedures meet the requirements of this subpart.", isImplemented: false, priority: 'Medium', group: 'Administrative' },

      { id: "164.308(b)(1)", name: "Business Associate Contracts", description: "A covered entity may permit a business associate to create, receive, maintain, or transmit e-PHI on the covered entity's behalf only if the covered entity obtains satisfactory assurances that the business associate will appropriately safeguard the information.", isImplemented: true, priority: 'High', group: 'Administrative' },

      // PHYSICAL SAFEGUARDS (164.310)
      { id: "164.310(a)(1)", name: "Facility Access Controls", description: "Implement policies and procedures to limit physical access to its electronic information systems and the facility or facilities in which they are housed, while ensuring that properly authorized access is allowed.", isImplemented: true, priority: 'High', group: 'Physical' },
      { id: "164.310(a)(2)(i)", name: "Contingency Operations (Addressable)", description: "Establish (and implement as needed) procedures that allow facility access in support of restoration of lost data under the disaster recovery plan and emergency mode operations plan.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "164.310(a)(2)(ii)", name: "Facility Security Plan (Addressable)", description: "Implement policies and procedures to safeguard the facility and the equipment therein from unauthorized physical access, tampering, and theft.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "164.310(a)(2)(iii)", name: "Access Control and Validation Procedures (Addressable)", description: "Implement procedures to control and validate a person's access to facilities based on their role or function.", isImplemented: true, priority: 'High', group: 'Physical' },
      { id: "164.310(a)(2)(iv)", name: "Maintenance Records (Addressable)", description: "Implement policies and procedures to document repairs and modifications to the physical components of a facility which are related to security.", isImplemented: false, priority: 'Low', group: 'Physical' },

      { id: "164.310(b)", name: "Workstation Use", description: "Implement policies and procedures that specify the proper functions to be performed, the manner in which those functions are to be performed, and the physical attributes of the surroundings of a specific workstation or class of workstation that can access e-PHI.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "164.310(c)", name: "Workstation Security", description: "Implement physical safeguards for all workstations that access e-PHI, to restrict access to authorized users.", isImplemented: true, priority: 'High', group: 'Physical' },

      { id: "164.310(d)(1)", name: "Device and Media Controls", description: "Implement policies and procedures that govern the receipt and removal of hardware and electronic media that contain e-PHI into and out of a facility, and the movement of these items within the facility.", isImplemented: false, priority: 'Medium', group: 'Physical' },
      { id: "164.310(d)(2)(i)", name: "Disposal (Required)", description: "Implement policies and procedures to address the final disposition of e-PHI, and/or the hardware or electronic media on which it is stored.", isImplemented: true, priority: 'High', group: 'Physical' },
      { id: "164.310(d)(2)(ii)", name: "Media Re-use (Required)", description: "Implement procedures for removal of e-PHI from electronic media before the media are made available for re-use.", isImplemented: true, priority: 'High', group: 'Physical' },
      { id: "164.310(d)(2)(iii)", name: "Accountability (Addressable)", description: "Maintain a record of the movements of hardware and electronic media and any person responsible therefore.", isImplemented: false, priority: 'Low', group: 'Physical' },
      { id: "164.310(d)(2)(iv)", name: "Data Backup and Storage (Addressable)", description: "Create a retrievable, exact copy of e-PHI, when needed, before movement of equipment.", isImplemented: true, priority: 'High', group: 'Physical' },

      // TECHNICAL SAFEGUARDS (164.312)
      { id: "164.312(a)(1)", name: "Access Control (Technical)", description: "Implement technical policies and procedures for electronic information systems that maintain e-PHI to allow access only to those persons or software programs that have been granted access rights.", isImplemented: true, priority: 'High', group: 'Technical' },
      { id: "164.312(a)(2)(i)", name: "Unique User Identification (Required)", description: "Assign a unique name and/or number for identifying and tracking user identity.", isImplemented: true, priority: 'High', group: 'Technical' },
      { id: "164.312(a)(2)(ii)", name: "Emergency Access Procedure (Required)", description: "Establish (and implement as needed) procedures for obtaining necessary e-PHI during an emergency.", isImplemented: false, priority: 'High', group: 'Technical' },
      { id: "164.312(a)(2)(iii)", name: "Automatic Logoff (Addressable)", description: "Implement electronic procedures that terminate an electronic session after a predetermined time of inactivity.", isImplemented: true, priority: 'Medium', group: 'Technical' },
      { id: "164.312(a)(2)(iv)", name: "Encryption and Decryption (Addressable)", description: "Implement a mechanism to encrypt and decrypt e-PHI.", isImplemented: true, priority: 'High', group: 'Technical' },

      { id: "164.312(b)", name: "Audit Controls", description: "Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use e-PHI.", isImplemented: false, priority: 'High', group: 'Technical' },

      { id: "164.312(c)(1)", name: "Integrity", description: "Implement policies and procedures to protect e-PHI from improper alteration or destruction.", isImplemented: false, priority: 'Medium', group: 'Technical' },
      { id: "164.312(c)(2)", name: "Mechanism to Authenticate e-PHI (Addressable)", description: "Implement electronic mechanisms to corroborate that e-PHI has not been altered or destroyed in an unauthorized manner.", isImplemented: false, priority: 'Low', group: 'Technical' },

      { id: "164.312(d)", name: "Person or Entity Authentication", description: "Implement procedures to verify that a person or entity seeking access to e-PHI is the one claimed.", isImplemented: true, priority: 'High', group: 'Technical' },

      { id: "164.312(e)(1)", name: "Transmission Security", description: "Implement technical security measures to guard against unauthorized access to e-PHI that is being transmitted over an electronic communications network.", isImplemented: true, priority: 'High', group: 'Technical' },
      { id: "164.312(e)(2)(i)", name: "Integrity Controls (Addressable)", description: "Implement security measures to ensure that electronically transmitted e-PHI is not improperly modified without detection until disposed of.", isImplemented: false, priority: 'Medium', group: 'Technical' },
      { id: "164.312(e)(2)(ii)", name: "Encryption (Addressable)", description: "Implement a mechanism to encrypt e-PHI whenever deemed appropriate.", isImplemented: true, priority: 'High', group: 'Technical' },
    ],
    useCases: [
      { title: "EHR Security", description: "Securing Electronic Health Records against unauthorized access." },
      { title: "Telehealth", description: "Ensuring secure transmission of patient data during video consults." }
    ]
  },
  {
    id: "hitrust-csf",
    name: "HITRUST CSF",
    link: "https://hitrustalliance.net/product-tool/r2/",
    category: "Framework",
    industry: "Healthcare",
    overview: "The HITRUST CSF is a certifiable framework that harmonizes dozens of authoritative sources (HIPAA, ISO, NIST, COBIT, etc.) into a single comprehensive set of security and privacy controls.",
    purpose: "To provide a single, unified benchmark for managing information risk and compliance, particularly in healthcare.",
    importance: "It is the de facto standard for demonstrating HIPAA compliance. Many major payers and hospital systems require their vendors to be HITRUST Certified.",
    howToApply: "Achieve certification via the 'Assess Once, Report Many' approach:\n\n1. **MyCSF**: Use the HITRUST portal to scope the assessment based on size and risk.\n\n2. **Self-Assessment**: Implement controls and score yourself.\n\n3. **Validated Assessment**: An External Assessor tests the controls.\n\n4. **Certification**: HITRUST reviews the work and issues the certification.",
    whereToApply: "Healthcare organizations and their Business Associates (vendors).",
    whenToApply: "When demonstrating high assurance to healthcare partners or consolidating multiple audit requirements.",
    scenarios: "**Scenario: Health-Tech Vendor**\n\n**Challenge**: A startup selling a patient analytics platform was asked for SOC 2, HIPAA, and ISO 27001 by different hospitals.\n\n**Application**: They pursued HITRUST r2 Certification. They implemented the required controls once. The HITRUST report mapped these controls to HIPAA, ISO, and NIST.\n\n**Outcome**: They obtained HITRUST Certification. They submitted this single report to all hospital clients, satisfying all their varied requirements at once.",
    colorTheme: 'teal',
    diagramType: 'process-flow',
    controls: [
      { id: "0.0", name: "Information Security Management Program", description: "A comprehensive information security program shall be established and maintained.", isImplemented: false, priority: 'High', group: 'Program' },
      { id: "01.0", name: "Access Control", description: "Access to information, information processing facilities, and business processes shall be controlled on the basis of business and security requirements.", isImplemented: false, priority: 'High', group: 'Access' },
    ],
    useCases: [
      { title: "Vendor Consolidation", description: "One audit to rule them all (HIPAA, ISO, NIST)." },
      { title: "Risk Management", description: "Using the maturity model to measure program effectiveness." }
    ]
  },
  {
    id: "gxp-21cfr",
    name: "GxP / 21 CFR Part 11",
    link: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application",
    category: "Regulation",
    industry: "Healthcare",
    overview: "FDA 21 CFR Part 11 establishes criteria under which the FDA considers electronic records and electronic signatures to be trustworthy, reliable, and generally equivalent to paper records and handwritten signatures.",
    purpose: "To ensure the integrity, reliability, and authenticity of electronic records in the Life Sciences industry (GxP - Good Practice).",
    importance: "Critical for Pharmaceutical and Medical Device companies. Non-compliance can lead to FDA warning letters and product bans.",
    howToApply: "Implement technical controls for records:\n\n1. **Validation**: Validate systems to ensure accuracy and consistency.\n\n2. **Audit Trails**: Secure, computer-generated, time-stamped audit trails that record the date and time of operator entries and actions.\n\n3. **Electronic Signatures**: Ensure signatures are linked to records and cannot be excised.",
    whereToApply: "Life Sciences (Pharma, Biotech, MedTech) regulated by the FDA.",
    whenToApply: "When using computer systems to manage regulated data (Clinical Trials, Manufacturing, Labs).",
    scenarios: "**Scenario: Lab Data Integrity**\n\n**Challenge**: A pharma company was moving from paper lab notebooks to an Electronic Lab Notebook (ELN) system.\n\n**Application**: To comply with Part 11, they configured the ELN to force users to re-authenticate before signing a record. They enabled an immutable audit log that tracked every change to experimental data, showing 'old value', 'new value', and 'reason for change'.\n\n**Outcome**: The system passed validation, and the FDA accepted the electronic data for their drug application.",
    colorTheme: 'cyan',
    diagramType: 'process-flow',
    controls: [
      { id: "11.10(b)", name: "Audit Trails", description: "Use of secure, computer-generated, time-stamped audit trails to independently record the date and time of operator entries and actions.", isImplemented: false, priority: 'High', group: 'Records' },
      { id: "11.50", name: "Signature Manifestations", description: "Signed electronic records shall contain information indicating the name of the signer, the time of signing, and the meaning of the signing.", isImplemented: false, priority: 'High', group: 'Signatures' },
    ],
    useCases: [
      { title: "Clinical Trials", description: "Ensuring data integrity in electronic data capture (EDC) systems." },
      { title: "Manufacturing", description: "Validating batch records in MES systems." }
    ]
  }
];
