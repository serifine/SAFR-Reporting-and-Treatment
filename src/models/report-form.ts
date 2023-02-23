import type { InjuryOption } from './injury-options'

export interface ReportForm {
  patientIdentifier: string
  injuries: InjuryOption[]

  location: string
  notes: string
  callType: '' | '911 Call' | '10-52' | '10-13'

  airway: string
  breathing: string
  circulation: string
  skin: string
  pulse: string
  alertness: string

  painLevel: number

  allergies: string
  prescriptions: string
  dora: boolean | null
  dora_type: string

  painMedicationQualification: string
  painMedication: string

  safrDischarge: string
  hospital: string
  hospitalHandoff: string

  leoName: string
  hospitalStaffName: string
}
