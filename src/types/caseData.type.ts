export interface Court {
  name: string;
  jurisdiction: string;
  location: string;
}

export interface Party {
  name: string;
  role: string;
  attorney: string;
}

export interface CourtCase {
  case_id: string;
  case_title: string;
  case_type: string;
  summary: string;
  filing_date: string;
  court: Court;
  parties: Party[];
  charges: string[];
  status: string;
  judge: string;
  next_hearing?: string;
  settlement_amount?: number;
  outcome: string;
  original_case?: string;
  next_review?: string;
}

export interface CourtCasesData {
  court_cases: CourtCase[];
}
