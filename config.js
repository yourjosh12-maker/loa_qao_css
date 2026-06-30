/**
 * Lyceum of Alabang Inc. - QAO Feedback Portal
 * CENTRALIZED CONFIGURATION & CONTENT MANAGEMENT SHEET
 * * * Safe Editing Rule: Only modify values inside the quotes (""). Do not alter object structure keys.
 */
const SURVEY_CONFIG = {
    // Your API Web App Endpoint URL (Google Apps Script). Leave blank to run in local offline demo mode.
    apiEndpoint: "",

    // SCREEN 1: Data Privacy Policy Text Strings
    privacy: {
        title: "Informed Consent & Data Privacy",
        subtitle: "Complying with the Data Privacy Act of 2012",
        checkboxLabel: "I have read, understood, and consent to the data collection policy and confidentiality terms stated above.",
        sections: [
            {
                heading: "1. Data Security Guarantee:",
                text: "Pursuant to Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012, all metrics, scores, and personal identities processed on this platform are handled with absolute confidentiality and secure encryption standards."
            },
            {
                heading: "2. Strict Confidentiality Pledge:",
                text: "Your identification fields (Name, Emails, and ID keys) are collected solely to maintain data integrity and prevent fraudulent duplicates. These features are completely stripped before report compilation. Individual department heads only see anonymous feedback narratives."
            },
            {
                heading: "3. Loop Resolution Commitment:",
                text: "By registering your active email address, you consent to being updated by the Quality Assurance team regarding the specific corrective measures implemented by departments in direct response to your feedback."
            }
        ]
    },

    // SCREEN 4: Evaluation Questions & Satisfaction Scales (ISO 9001:2015 Compliant)
    evaluation: {
        title: "Your Evaluation",
        subtitle: "Rate department performance and submit valid feedback",
        instructionsTitle: "Satisfaction Scoring Legend:",
        instructionsText: "Based on your recent experience with the services provided by this office, kindly rate how satisfied you are using the following scale:",
        
        // Unshortened Legends for maximum clarity
        legend: {
            5: "Very Satisfied",
            4: "Satisfied",
            3: "Neutral",
            2: "Dissatisfied",
            1: "Very Dissatisfied"
        },

        // 5 Core Likert Scale Questions (Aligned with ISO 9001 Quality Management Principles)
        questions: [
            {
                id: "q1",
                text: "This office provides speedy and efficient service."
            },
            {
                id: "q2",
                text: "This office is easy to reach for inquiries and assistance."
            },
            {
                id: "q3",
                text: "The staff is courteous, knowledgeable, and helpful in administering your concerns."
            },
            {
                id: "q4",
                text: "This office provides clear and understandable guidelines, requirements, and procedures."
            },
            {
                id: "q5",
                text: "This office is effective in resolving concern feedback in a timely manner."
            }
        ],

        // Split Open-Ended Fields
        openEnded: [
            {
                id: "appreciate",
                label: "What do you appreciate most about the service provided by this department/office? (Positive Feedback) *",
                placeholder: "State specific elements or personnel actions you appreciated..."
            },
            {
                id: "improvements",
                label: "What areas do you think that this department/office needs improvement for customer satisfaction? (Areas for Improvement) *",
                placeholder: "State structural workflows, behavior, or procedures that can be enhanced..."
            }
        ]
    },

    // DROPDOWN OPTIONS DATA OBJECTS
    // All departments mapped directly from DEPARMENT.pdf
    departments: [
        { code: "PO", name: "Office of the President" },
        { code: "ADMIN", name: "Administration" },
        { code: "ADM", name: "Admission" },
        { code: "BKS", name: "Bookstore" },
        { code: "CAN", name: "Canteen" },
        { code: "CHS", name: "Clinic Health Services" },
        { code: "HRDO", name: "Human Resources Development Office" },
        { code: "ITM", name: "Information Technology Management" },
        { code: "CUS", name: "Laboratory Management Office" },
        { code: "GCO", name: "LCC: Guidance Counseling Office" },
        { code: "TAO", name: "LCC: Testing and Assessment Office" },
        { code: "MKT", name: "Marketing" },
        { code: "PFMO", name: "Physical Facilities Management Office" },
        { code: "PRD", name: "Property Department" },
        { code: "PUR", name: "Purchasing Department" },
        { code: "SEC", name: "Security Department" },
        { code: "TECH", name: "TESDA - Technology Department" },
        { code: "VCAT", name: "Virtual Communication Assistance Team" },
        { code: "DPO", name: "Data Privacy Office" },
        { code: "ELEM", name: "Elementary" },
        { code: "JHS", name: "Junior High School" },
        { code: "BEDLIB", name: "Library (Basic Education)" },
        { code: "OPD", name: "Office of the Perfect Discipline" },
        { code: "BEDREG", name: "Registrar (Basic Ed)" },
        { code: "LIBSHS", name: "Senior High Library" },
        { code: "SHS", name: "Senior High School" },
        { code: "CBA", name: "College of Business Administration" },
        { code: "CCA", name: "College of Customs Administration" },
        { code: "CAS", name: "College of Arts and Science" },
        { code: "CREM", name: "College of Real Estate Management" },
        { code: "CRID", name: "Center for Research Innovation and Development" },
        { code: "COA", name: "College of Accountancy" },
        { code: "CCS", name: "College of Computer Studies" },
        { code: "CCJ", name: "College of Criminal Justice" },
        { code: "COED", name: "College of Education" },
        { code: "COE", name: "College of Engineering" },
        { code: "CTHM", name: "College of Tourism and Hospitality Management" },
        { code: "GENED", name: "General Education" },
        { code: "CLIR", name: "Center for Learning and Information Resources" },
        { code: "OAA", name: "Office of Academic Affairs" },
        { code: "COLOSA", name: "Office of Student Affairs" },
        { code: "OSSD", name: "Office of Student Scholarship and Development" },
        { code: "COLREG", name: "Registrar (College)" },
        { code: "SCDO", name: "Sports and Cultural Development Office" },
        { code: "ESO", name: "Extension Services Office" },
        { code: "CSO", name: "Community Services Office" },
        { code: "ACC", name: "Accounting" },
        { code: "FIN", name: "Finance" },
        { code: "CCAS", name: "Center for Career and Alumni Services" },
        { code: "PDO", name: "Planning and Development Office" },
        { code: "QAO", name: "Quality Assurance Office" },
        { code: "LAWLIB", name: "Law Library" },
        { code: "CLAW", name: "College of Law" },
        { code: "PE", name: "P.E Department" },
        { code: "NSTP", name: "NSTP-CWTS/ROTC" }
    ],

    // Higher Education College Units
    collegePrograms: [
        { code: "COA", name: "College of Accountancy" },
        { code: "CBA", name: "College of Business Administration" },
        { code: "CCS", name: "College of Computer Studies" },
        { code: "CCJ", name: "College of Criminal Justice" },
        { code: "COED", name: "College of Education" },
        { code: "COE", name: "College of Engineering" },
        { code: "CTHM", name: "College of Tourism and Hospitality Management" },
        { code: "CAS", name: "College of Arts and Science" },
        { code: "CCA", name: "College of Customs Administration" },
        { code: "CREM", name: "College of Real Estate Management" },
        { code: "CLAW", name: "College of Law" },
        { code: "TECH", name: "TESDA - Technology Department" }
    ],

    // Senior High School Tracks/Strands
    shsStrands: ["ABM", "STEM", "ICT", "HUMSS", "HE", "IA", "GAS"]
};