import type { InjuryOption } from "./injury-options";

export interface ReportForm {
  patientIdentifier: string;
  injuries: InjuryOption[];

  airway: string;
  breathing: string;
  circulation: string;
  skin: string;
  pulse: string;
  alertness: string;

  painLevel: number;

  allergies: string;
  prescriptions: string;
  drugs: boolean;
  alcohol: boolean;

  painMedicationQualification: string;
  painMedication: string;

  safrDischarge: string;
  hospital: string;
  hospitalHandoff: string;
  
  leoName: string;
  hospitalStaffName: string;
}
