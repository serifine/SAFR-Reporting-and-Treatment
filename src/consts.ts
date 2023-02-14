export const StandardComplaints = [
  "Animal Attack",
  "Blunt Force Trauma",
  "Burn",
  "Fall",
  "GSW",
  "MVA",
  "Stabbing",
  "Starvation/Dehydration/Low Blood Sugar",
  "Other",
];

export const BurnDegrees = ["First Degree", "Second Degree", "Third Degree"];

export const AirwayOptions = [
  "Clear",
  "Partially Obstructed",
  "Fully Obstructed",
];

export const BreathingTypes = ["Normal", "Labored", "Not Breathing"];

export const SkinConditions = [
  "Normal",
  "Minor Bruising",
  "Moderate Bruising",
  "Severe Bruising",
  "Extreme Bruising",
];

export const CirculationDescriptions = [
  "Normal",
  "Minor bleeding",
  "Moderate bleeding",
  "Severe bleeding",
  "Extreme bleeding",
];

export const PulseDescription = [
  "Normal (60-100 BPM)",
  "Mild Tachycardia (100-120 BPM)",
  "Mild Bradycardia (<60 BPM)",
  "No Pulse",
  "Custom",
];

export const AlernessOptions = [
  "Patient was responsive, alert, and oriented on scene.",
  "Patient was responsive/alert, but not oriented on scene.",
  "Patient was non-responsive/unconscious on scene.",
];

export const SafrTreatmentDischargeOptions = [
  'Patient was transported to hospital by SAFR.',
  'Patient was transported to hospital by LEO.',
  'Patients wounds did not warrant transport to a hospital, and they were discharged on-scene.',
  'Patient refused transportation to the hospital.'
]

export const HospitalStaffOptions = [
  "Local Nurses",
  "Specific Staff Member"
]

export const HospitalLocations = [
  'Pillbox Medical Center',
  'Sandy Medical Center',
  'Paleto Medical Center'
]

export function GetPainDescription(indicatedPainLevel: number) {
  switch (true) {
    case indicatedPainLevel >= 1 || indicatedPainLevel <= 3:
      return "Mild Pain";
    case indicatedPainLevel >= 4 || indicatedPainLevel <= 6:
      return "Moderate Pain";
    case indicatedPainLevel >= 7 || indicatedPainLevel <= 10:
      return "Severe Pain";
    case indicatedPainLevel == 0:
    default:
      return "No Pain";
  }
}

export function GetHighestPainMedication(indicatedPainLevel: number) {
  switch (true) {
    case indicatedPainLevel >= 1 || indicatedPainLevel <= 3:
      return "Ibuprofen/Tylenol";
    case indicatedPainLevel >= 4 || indicatedPainLevel <= 6:
      return "Tramadol";
    case indicatedPainLevel >= 7 || indicatedPainLevel <= 10:
      return "Morphine";
    case indicatedPainLevel == 0:
    default:
      return "No Pain";
  }
}

export const PainMedicationAdministrationOptions = [
  'Patient was given pain medication.',
  'patient declined pain medication',
  'Patient did not qualify for pain medication'
]

export const PainMedicationOptions = [
  'Ibuprofin',
  'Tylenol',
  'Tramadol',
  'Morphine'
]
