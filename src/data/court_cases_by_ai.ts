import type { CourtCase } from "@/types/caseData.type";

export const caseData: CourtCase[] = [
  {
    case_id: "SC-2023-001",
    case_title: "State v. Johnson",
    case_type: "Criminal",
    filing_date: "2023-01-15",
    summary:
      "First-degree murder case against defendant Michael Johnson, with the State represented by the Attorney General and the defendant by a public defender.",
    outcome:
      "Pending jury trial - Prosecution seeking life without parole; defense argues mistaken identity",
    court: {
      name: "Supreme Court",
      jurisdiction: "State",
      location: "Capital City",
    },
    parties: [
      {
        name: "State of Example",
        role: "Plaintiff",
        attorney: "Attorney General Smith",
      },
      {
        name: "Michael Johnson",
        role: "Defendant",
        attorney: "Public Defender Williams",
      },
    ],
    charges: ["Murder in the first degree"],
    status: "Pending",
    next_hearing: "2023-06-10",
    judge: "Hon. Patricia Roberts",
  },
  {
    case_id: "DC-2022-0456",
    case_title: "Doe v. ABC Corporation",
    case_type: "Civil",
    filing_date: "2022-11-03",
    summary:
      "Employment discrimination and wrongful termination lawsuit settled for $250,000 between plaintiff Jane Doe and corporate defendant.",
    outcome:
      "Settled with confidentiality agreement - Defendant required to implement diversity training programs",
    court: {
      name: "District Court",
      jurisdiction: "Federal",
      location: "Metro City",
    },
    parties: [
      {
        name: "Jane Doe",
        role: "Plaintiff",
        attorney: "Lisa Chen, Esq.",
      },
      {
        name: "ABC Corporation",
        role: "Defendant",
        attorney: "Robert Goldstein, Esq.",
      },
    ],
    charges: ["Wrongful termination", "Discrimination"],
    status: "Settled",
    settlement_amount: 250000,
    judge: "Hon. Samuel Wilson",
  },
  {
    case_id: "FC-2023-0078",
    case_title: "In re: Peterson Marriage",
    case_type: "Family",
    filing_date: "2023-02-28",
    summary:
      "Contested divorce proceeding involving child custody disputes between Sarah and David Peterson.",
    outcome:
      "Pending mediation - Temporary orders grant joint custody with primary residence to mother",
    court: {
      name: "Family Court",
      jurisdiction: "County",
      location: "Suburb County",
    },
    parties: [
      {
        name: "Sarah Peterson",
        role: "Petitioner",
        attorney: "Amanda Lee, Esq.",
      },
      {
        name: "David Peterson",
        role: "Respondent",
        attorney: "James Miller, Esq.",
      },
    ],
    charges: ["Divorce", "Child custody"],
    status: "Active",
    next_hearing: "2023-05-15",
    judge: "Hon. Elizabeth Carter",
  },
  {
    case_id: "BC-2021-1122",
    case_title: "First Bank v. TechStart Inc.",
    case_type: "Bankruptcy",
    filing_date: "2021-09-12",
    summary:
      "Chapter 11 bankruptcy reorganization case where TechStart Inc. successfully negotiated terms with primary creditor First National Bank.",
    outcome:
      "Reorganization plan approved - 60% debt forgiveness with 5-year repayment schedule for remaining balance",
    court: {
      name: "Bankruptcy Court",
      jurisdiction: "Federal",
      location: "Downtown",
    },
    parties: [
      {
        name: "First National Bank",
        role: "Creditor",
        attorney: "Thomas Harris, Esq.",
      },
      {
        name: "TechStart Inc.",
        role: "Debtor",
        attorney: "Nancy Drew, Esq.",
      },
    ],
    charges: ["Chapter 11 bankruptcy"],
    status: "Closed",
    judge: "Hon. Richard Stone",
  },
  {
    case_id: "AP-2023-0033",
    case_title: "State v. Martinez",
    case_type: "Appeal",
    filing_date: "2023-03-05",
    summary:
      "Appeal of robbery conviction by defendant Carlos Martinez, challenging evidentiary rulings from the original trial.",
    outcome:
      "Pending appellate review - Appellant argues key evidence was obtained through unconstitutional search",
    court: {
      name: "Appellate Court",
      jurisdiction: "State",
      location: "Capital City",
    },
    parties: [
      {
        name: "State of Example",
        role: "Appellee",
        attorney: "ADA Rachel Kim",
      },
      {
        name: "Carlos Martinez",
        role: "Appellant",
        attorney: "Franklin Pierce, Esq.",
      },
    ],
    charges: ["Appeal of robbery conviction"],
    status: "Pending",
    next_hearing: "2023-07-20",
    original_case: "DC-2022-0789",
    judge: "Hon. Margaret Cho",
  },
  {
    case_id: "SC-2023-0055",
    case_title: "Green v. State",
    case_type: "Habeas Corpus",
    filing_date: "2023-01-30",
    summary:
      "Post-conviction habeas corpus petition filed by Thomas Green with assistance from the Innocence Project, alleging wrongful conviction.",
    outcome:
      "Pending DNA evidence review - Court ordered retesting of crime scene materials",
    court: {
      name: "Supreme Court",
      jurisdiction: "State",
      location: "Capital City",
    },
    parties: [
      {
        name: "Thomas Green",
        role: "Petitioner",
        attorney: "Innocence Project",
      },
      {
        name: "State of Example",
        role: "Respondent",
        attorney: "Attorney General Office",
      },
    ],
    charges: ["Wrongful conviction appeal"],
    status: "Pending",
    next_hearing: "2023-08-01",
    judge: "Hon. Patricia Roberts",
  },
  {
    case_id: "DC-2023-0099",
    case_title: "Smith v. Jones",
    case_type: "Personal Injury",
    filing_date: "2023-02-14",
    summary:
      "Personal injury lawsuit alleging negligence by defendant Alex Jones caused significant harm to plaintiff Emily Smith.",
    outcome:
      "Pending discovery - Plaintiff seeks $1.2M in damages for medical expenses and lost wages",
    court: {
      name: "District Court",
      jurisdiction: "State",
      location: "Riverside County",
    },
    parties: [
      {
        name: "Emily Smith",
        role: "Plaintiff",
        attorney: "David Wilson, Esq.",
      },
      {
        name: "Alex Jones",
        role: "Defendant",
        attorney: "Sarah Johnson, Esq.",
      },
    ],
    charges: ["Negligence", "Personal injury"],
    status: "Active",
    next_hearing: "2023-05-30",
    judge: "Hon. Michael Brown",
  },
  {
    case_id: "TC-2022-0876",
    case_title: "City v. Landmark Properties",
    case_type: "Tax",
    filing_date: "2022-08-22",
    summary:
      "Property tax valuation dispute where Landmark Properties successfully challenged the city's assessment of commercial property.",
    outcome:
      "Judgment for defendant - Property valuation reduced by 40%, resulting in $280,000 tax refund",
    court: {
      name: "Tax Court",
      jurisdiction: "State",
      location: "Capital City",
    },
    parties: [
      {
        name: "City of Capital",
        role: "Plaintiff",
        attorney: "City Attorney Office",
      },
      {
        name: "Landmark Properties LLC",
        role: "Defendant",
        attorney: "Robert Taxman, CPA",
      },
    ],
    charges: ["Property tax dispute"],
    status: "Decided",
    judge: "Hon. William Numbers",
  },
  {
    case_id: "JC-2023-0021",
    case_title: "In re: J.D. (a minor)",
    case_type: "Juvenile",
    filing_date: "2023-02-01",
    summary:
      "Juvenile truancy case where minor J.D. was placed in a diversion program rather than facing formal adjudication.",
    outcome:
      "Diversion program successful - Attendance improved to 95% with counseling and mentoring",
    court: {
      name: "Juvenile Court",
      jurisdiction: "County",
      location: "Suburb County",
    },
    parties: [
      {
        name: "State of Example",
        role: "Petitioner",
        attorney: "Juvenile Prosecutor",
      },
      {
        name: "J.D.",
        role: "Respondent",
        attorney: "Public Defender",
      },
    ],
    charges: ["Truancy"],
    status: "Diversion program",
    next_review: "2023-09-15",
    judge: "Hon. Susan Parker",
  },
  {
    case_id: "SC-2023-0007",
    case_title: "ACLU v. State of Example",
    case_type: "Constitutional",
    filing_date: "2023-01-10",
    summary:
      "Landmark First Amendment challenge brought by the ACLU against a state law restricting public demonstrations.",
    outcome:
      "Pending oral arguments - Potential to overturn state law as unconstitutional",
    court: {
      name: "Supreme Court",
      jurisdiction: "State",
      location: "Capital City",
    },
    parties: [
      {
        name: "ACLU",
        role: "Plaintiff",
        attorney: "Civil Rights Division",
      },
      {
        name: "State of Example",
        role: "Defendant",
        attorney: "Attorney General Office",
      },
    ],
    charges: ["First Amendment violation"],
    status: "Pending",
    next_hearing: "2023-06-05",
    judge: "Hon. Patricia Roberts",
  },
];
