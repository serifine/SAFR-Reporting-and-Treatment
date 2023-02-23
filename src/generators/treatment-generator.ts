import { GenerateTransportation } from './transportation-generator'
import type { ReportForm } from "@/models/report-form"

export function GenerateTreatment(form: ReportForm) {
  let treatment = ``

  const injuries = form.injuries.map(t => t.injuryName)

  if (injuries.includes('Blunt Force Trauma')) {
    treatment += 'Patient made stable with a c-collar and a spine board. IV saline administered. Ice packs applied to bruising.'
  }
  if (
    injuries.includes('GSW') ||
    injuries.includes("Multiple GSW's") ||
    injuries.includes('Animal Attack') ||
    injuries.includes('Stabbing')
  ) {
    treatment +=
      'Oxygen mask applied to paitent. Patients wounds were packed with gauze to stop bleeding. IV saline and TXA administered. Wounds flushed with IV saline, packed with fresh gauze, and wrapped in bandages. Patient was made stable with a C-collar and spine board.'
  }
  if (injuries.includes('First Degree Burn')) {
    treatment +=
      "Patient's burns cooled with saline. Aloe gel applied. Patient advised to stay out of the sun and to keep burn site away from sources of elevated heat."
  }
  if (injuries.includes('Second Degree Burn')) {
    treatment +=
      "Patient's burns cooled with saline. Aloe gel applied. Burn dressing applied to wound. Patient advised to reapply aloe and change bandage every 24 hours until wound has healed."
  }
  if (injuries.includes('Third Degree Burn')) {
    treatment +=
      'Oxygen mask applied to paitent. IV saline administered. All burns covered with burn dressings. Patient hooked up to oxygen monitor. Patient was made stable with a C-collar and spine board.'
  }
  if (injuries.includes('Fall')) {
    treatment +=
      'C-Collar and oxygen mask applied to patient. IV saline started. Open wounds flushed with saline, covered in gauze, and wrapped in bandages. Concussion questions asked and (PASSED/FAILED). Patient secured with spine board, vaccum mattress, and head blocks.'
  }
  if (injuries.includes('MVA')) {
    treatment +=
      'C-Collar and oxygen mask applied to patient. IV saline started. Open wounds flushed with saline, covered in gauze, and wrapped in bandages. Patient secured with spine board, and ice packs applied to bruises.'
  }
  if (injuries.includes('Other')) {
    treatment += 'FILL IN OTHER TREATMENT'
  }

  treatment += '\r\r'
  switch (form.painMedicationQualification) {
    case 'Patient was given pain medication':
      treatment += `Patient was given ${form.painMedication} for pain management.`
      break
    case 'Patient declined pain medication':
      treatment += 'Patient declined pain medication.'
      break
    case 'Patient did not qualify for pain medication':
    default:
      treatment += 'Patient did not qualify for pain medication.'
      break
  }

  treatment += `\r\r${GenerateTransportation(form)}`

  return treatment
}
