import type { InjuryOption } from './models/injury-options'

export const StandardComplaints: InjuryOption[] = [{
    injuryName: 'Animal Attack',
    subInjuries: null,
    treatments: [{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'Wounds packed',
      reportText: 'Patients wounds packed with gauze to help stop bleeding.',
      emote: '/me packs the patients wounds with gauze to help control bleeding.'
    },{
      label: 'IV Saline and TXA',
      reportText: 'IV saline and TXA administered.',
      emote: '/me hooks up IV line of saline. Pushes a unit of TXA into IV bag.'
    },{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    },{
      label: 'C-Collar',
      reportText: 'Patient was made stable with a C-collar and spine board.',
      emote: '/me secures patient with c-collar, then rolls them onto a spine board and secures them with straps.'
    }]
  }, {
    injuryName: 'Animal Attack (Minor)',
    subInjuries: null,
    treatments: [{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    }]
  }, {
    injuryName: 'Blunt Force Trauma',
    subInjuries: null,
    treatments: [{
      label: 'C-Collar and Spine Board',
      reportText: 'Patient made stable with a c-collar and a spine board.',
      emote: '/me secures patient with c-collar, then rolls them onto a spine board and secures them with straps.'
    },{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    },{
      label: 'IV saline administered.',
      reportText: 'IV saline administered.',
      emote: '/me hooks up IV line of saline.'
    },{
      label: 'Ice Packs',
      reportText: 'Ice packs applied to bruising.',
      emote: '/me applies stick on ice packs to bruising.'
    },]
  }, {
    injuryName: 'First Degree Burn',
    subInjuries: null,
    treatments: [{
      label: 'Cool With Saline',
      reportText: 'Patient\'s burns cooled with saline.',
      emote: '/me Flushes patient\'s burns with saline solution to cool them.'
    },{
      label: 'Aloe Gel',
      reportText: 'Aloe gel applied.',
      emote: '/me applies aloe gel to patient\'s burns.'
    },{
      label: 'Advise Patient',
      reportText: 'Patient advised to stay out of the sun and to keep burn site away from sources of elevated heat.',
      emote: 'N/A'
    }]
  }, {
    injuryName: 'Second Degree Burn',
    subInjuries: null,
    treatments: [{
      label: 'Cool With Saline',
      reportText: 'Patient\'s burns cooled with saline.',
      emote: '/me Flushes patient\'s burns with saline solution to cool them.'
    },{
      label: 'Aloe Gel',
      reportText: 'Aloe gel applied.',
      emote: '/me applies aloe gel to patient\'s burns.'
    },{
      label: 'Burn Dressing Applied',
      reportText: 'Burn dressing applied to wound.',
      emote: '/me applies burn dressing to patient\'s wound.'
    },{
      label: 'Advise Patient',
      reportText: 'Patient advised to reapply aloe and change bandage every 24 hours until wound has healed.',
      emote: 'N/A'
    }]
  }, {
    injuryName: 'Third Degree Burn',
    subInjuries: null,
    treatments: [{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'IV saline administered.',
      reportText: 'IV saline administered.',
      emote: '/me hooks up IV line of saline.'
    },{
      label: 'Burn Dressing Applied',
      reportText: 'Burn dressing applied to wound.',
      emote: '/me applies burn dressing to patient\'s wound.'
    },{
      label: 'Oxygen Monitor',
      reportText: 'Patient hooked up to oxygen monitor.',
      emote: '/me hooks up patient to vitals monitoring to watch oxygen levels and pulse.'
    },{
      label: 'C-Collar and Spine Board',
      reportText: 'Patient made stable with a c-collar and a spine board.',
      emote: '/me secures patient with c-collar, then rolls them onto a spine board and secures them with straps.'
    },]
  }, {
    injuryName: 'Drowning',
    subInjuries: null,
    treatments: [
      {
        label: 'Airway Check',
        reportText: 'Checked patient\'s airway to confirm if lungs were waterlogged. Patient\'s airway (Clear/Blocked by Water)',
        emote: '/me checks patient\'s airway to confirm if lungs are full of water.'
      },{
        label: 'CPR',
        reportText: '(#) rounds of CPR administered to help expel water from lungs',
        emote: 'Use CPR Emotes'
      },{
        label: 'Recovery Position',
        reportText: 'Patient turned into recovery position to promote water expulsion from lungs. Water evacuated',
        emote: '/me hooks up IV line of saline.'
      },{
        label: 'Oxygen Mask',
        reportText: 'Oxygen mask applied to paitent.',
        emote: '/me applies oxygen mask to patient and sets flow to high.'
      },{
        label: 'Warm IV saline administered.',
        reportText: 'Warm IV saline administered.',
        emote: '/me hooks up IV line of saline.'
      },{
        label: 'Space Blanket.',
        reportText: 'Patient wrapped in space blanket to help warm up.',
        emote: '/me wraps patient in space blanket to help warm up.'
      },{
        label: 'C-Collar and Spine Board',
        reportText: 'Patient made stable for transport with a c-collar and a spine board.',
        emote: '/me secures patient with c-collar, then rolls them onto a spine board and secures them with straps.'
      },
    ]
  }, {
    injuryName: 'Fall',
    subInjuries: null,
    treatments: [{
      label: 'C-Collar',
      reportText: 'Patient\'s neck stablized and immobilized with a c-collar',
      emote: '/me ataches C-collar around patient\'s next to stabilize and immobilize it. '
    },{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'IV saline administered.',
      reportText: 'IV saline administered.',
      emote: '/me hooks up IV line of saline.'
    },{
      label: 'Concussion Questions',
      reportText: ' Concussion questions asked and (PASSED/FAILED).',
      emote: 'N/A'
    },{
      label: 'Advanced Transport Security',
      reportText: 'Patient secured with spine board, vaccum mattress, and head blocks.',
      emote: '/me rolls patient carefully onto a spine board and secures them with straps. Further secures their body with a vacuum mattress and their head with head blocks.'
    }]
  }, {
    injuryName: 'GSW',
    subInjuries: null,
    treatments: [{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'Wounds packed',
      reportText: 'Patients woundspacked with gauze to help stop bleeding.',
      emote: '/me packs the patients wounds with gauze to help control bleeding.'
    },{
      label: 'IV Saline and TXA',
      reportText: 'IV saline and TXA administered.',
      emote: '/me hooks up IV line of saline. Pushes a unit of TXA into IV bag.'
    },{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    },{
      label: 'C-Collar',
      reportText: 'Patient was made stable with a C-collar and spine board.',
      emote: '/me secures patient with c-collar, then rolls them onto a spine board and secures them with straps.'
    }]
  }, {
    injuryName: 'Head Wound',
    subInjuries: null,
    treatments: [{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    },{
      label: 'Concussion Questions',
      reportText: ' Concussion questions asked and (PASSED/FAILED).',
      emote: 'N/A'
    }]
  }, {
    injuryName: 'Head Trauma',
    subInjuries: null,
    treatments: [{
      label: 'C-Collar',
      reportText: 'Patient\'s neck stablized and immobilized with a c-collar',
      emote: '/me ataches C-collar around patient\'s next to stabilize and immobilize it. '
    },{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'Head Evaluation.',
      reportText: 'Head wound evaluated for significant bleeding or other fluids. (FINDINGS)',
      emote: '/me looks carefully over patient\'s head wounds for any significant bleeding, or any fluid coming from the ears.'
    },{
      label: 'IV Saline and TXA',
      reportText: 'IV saline and TXA administered.',
      emote: '/me hooks up IV line of saline. Pushes a unit of TXA into IV bag.'
    },{
      label: 'Concussion Questions',
      reportText: ' Concussion questions asked and (PASSED/FAILED).',
      emote: 'N/A'
    },{
      label: 'Advanced Head Transport Security',
      reportText: 'Patient secured with spine board and head blocks for transport.',
      emote: '/me rolls patient carefully onto a spine board and secures them with straps. Further secures their head with head blocks.'
    }]
  }, {
    injuryName: 'Multiple GSW\'s',
    subInjuries: null,
    treatments: [{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'Wounds packed',
      reportText: 'Patients woundspacked with gauze to help stop bleeding.',
      emote: '/me packs the patients wounds with gauze to help control bleeding.'
    },{
      label: 'IV Saline and TXA',
      reportText: 'IV saline and TXA administered.',
      emote: '/me hooks up IV line of saline. Pushes a unit of TXA into IV bag.'
    },{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    },{
      label: 'C-Collar',
      reportText: 'Patient was made stable with a C-collar and spine board.',
      emote: '/me secures patient with c-collar, then rolls them onto a spine board and secures them with straps.'
    }]
  }, {
    injuryName: 'MVA',
    subInjuries: null,
    treatments: [{
      label: 'C-Collar',
      reportText: 'Patient\'s neck stablized and immobilized with a c-collar',
      emote: '/me ataches C-collar around patient\'s next to stabilize and immobilize it. '
    },{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'IV saline administered.',
      reportText: 'IV saline administered.',
      emote: '/me hooks up IV line of saline.'
    },{
      label: 'Concussion Questions',
      reportText: ' Concussion questions asked and (PASSED/FAILED).',
      emote: 'N/A'
    },{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    },{
      label: 'Ice Packs',
      reportText: 'Ice packs applied to bruising.',
      emote: '/me applies stick on ice packs to bruising.'
    },{
      label: 'Spine Board OR Advanced Transport',
      reportText: 'Patient was made stable with a spine board for transport. OR Patient secured with spine board and head blocks for transport.',
      emote: '/me carefully rolls the patient onto a spine board and secures them with straps. OR /me rolls patient carefully onto a spine board and secures them with straps. Further secures their head with head blocks.'
    },]
  }, {
    injuryName: 'Stabbing',
    subInjuries: null,
    treatments: [{
      label: 'Oxygen Mask',
      reportText: 'Oxygen mask applied to paitent.',
      emote: '/me applies oxygen mask to patient and sets flow to high.'
    },{
      label: 'Wounds packed',
      reportText: 'Patient\'s woundspacked with gauze to help stop bleeding.',
      emote: '/me packs the patients wounds with gauze to help control bleeding.'
    },{
      label: 'Item ',
      reportText: 'Lodged item secured to prevent movement.',
      emote: '/me Secures the lodged item to prevent it from moving.'
    },{
      label: 'IV Saline and TXA',
      reportText: 'IV saline and TXA administered.',
      emote: '/me hooks up IV line of saline. Pushes a unit of TXA into IV bag.'
    },{
      label: 'Flush/Pack/Wrap',
      reportText: 'Wounds flushed with saline solution, packed with fresh gauze, and wrapped in bandages.',
      emote: '/me flushes wounds with saline solution, packs with gauze, and wraps in bandages.'
    },{
      label: 'C-Collar',
      reportText: 'Patient was made stable with a C-collar and spine board for transport.',
      emote: '/me secures patient with c-collar, then rolls them onto a spine board and secures them with straps.'
    }]
  }, {
    injuryName: 'Starvation/Dehydration/Low Blood Sugar',
    subInjuries: null,
    treatments: []
  }, {
    injuryName: 'Other',
    subInjuries: null,
    treatments: []
  }
]

export const CallType = [ '911 Call', '911 Text', '311 Call', '311 Text','10-52', '10-13', "10-13B"]

export const BurnDegrees = ['First Degree', 'Second Degree', 'Third Degree']

export const AirwayOptions = ['Clear', 'Partially Obstructed', 'Fully Obstructed']

export const BreathingTypes = ['Normal', 'Labored', 'Not Breathing']

export const SkinConditions = ['Normal', 'Minor Bruising', 'Moderate Bruising', 'Severe Bruising', 'Extreme Bruising','Localized Burns', 'Significant Burns', 'Extensive Burns', 'Full-Body Burns']

export const CirculationDescriptions = ['Normal', 'Minor bleeding', 'Moderate bleeding', 'Severe bleeding', 'Extreme bleeding']

export const PulseDescription = [
  'Mild Bradycardia (<60 BPM)',
  'Normal (60-100 BPM)',
  'Mild Tachycardia (100-120 BPM)',
  'Moderate Tachycardia (121-170 BPM)',
  'Severe Tachycardia (180+ BPM)',
  'No Pulse',
  'Custom'
]

export const AlernessOptions = [
  'Patient was responsive, alert, and oriented on scene.',
  'Patient was responsive/alert, but not oriented on scene.',
  'Patient was non-responsive/unconscious on scene.'
]

export const SafrTreatmentDischargeOptions = [
  'Patient was transported to hospital by SAFR.',
  'Patient was transported to hospital by LEO.',
  'Patients wounds did not warrant transport to a hospital, and they were discharged on-scene.',
  'Patient refused transportation to the hospital.'
]

export const HospitalStaffOptions = ['Local Nurses', 'Specific Staff Member']

export const HospitalLocations = ['Mt. Zonah Medical Center', 'Sandy Medical Center', 'Paleto Medical Center']

export function GetPainDescription(indicatedPainLevel: number) {
  switch (true) {
    case indicatedPainLevel >= 1 || indicatedPainLevel <= 3:
      return 'Mild Pain'
    case indicatedPainLevel >= 4 || indicatedPainLevel <= 6:
      return 'Moderate Pain'
    case indicatedPainLevel >= 7 || indicatedPainLevel <= 10:
      return 'Severe Pain'
    case indicatedPainLevel == 0:
    default:
      return 'No Pain'
  }
}

export function GetHighestPainMedication(indicatedPainLevel: number) {
  switch (true) {
    case indicatedPainLevel >= 1 || indicatedPainLevel <= 3:
      return 'Ibuprofen/Tylenol'
    case indicatedPainLevel >= 4 || indicatedPainLevel <= 6:
      return 'Tramadol'
    case indicatedPainLevel >= 7 || indicatedPainLevel <= 10:
      return 'Morphine'
    case indicatedPainLevel == 0:
    default:
      return 'No Pain'
  }
}

export const PainMedicationAdministrationOptions = [
  'Patient was given pain medication',
  'Patient declined pain medication',
  'Patient did not qualify for pain medication',
  'Pain medication not offered'
]

export const PainMedicationOptions = ['Ibuprofin', 'Tylenol', 'Tramadol', 'Morphine']
