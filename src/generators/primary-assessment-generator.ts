export function GeneratePrimaryAssessment(form: any) {
  let callsign = localStorage.getItem('callsign') || ''
  let primaryAssessment = ''

  if (form.callType !== '') {
    primaryAssessment += `Responded to a ${form.callType}`
  } else if (form.location != '') {
    primaryAssessment += 'Responded to a call for help'
  }

  if (form.location != '') {
    primaryAssessment += ` at ${form.location}. `
  } else if (form.callType !== '') {
    primaryAssessment += `. `
  }

  primaryAssessment += `${callsign} arrived on scene to \r\r`

  if(form.alertness == 'Patient was non-responsive/unconscious on scene.'){
    primaryAssessment += 'Patient unconscious. Unable to ascertain allergies, prescription medication or drug/alcohol use within the last 24 hours.'
  }else if(form.dora == null) {
    primaryAssessment += 'Unable to ascertain drug/alcohol use. '
  } else if (form.dora == false) {
    primaryAssessment += 'Patient reported they were not under the influence of drugs or alcohol.'
  } else if (form.dora == true && form.dora_type == '') {
    primaryAssessment += 'Patient reported they were under the influence of drugs or alcohol but did not specify.'
  } else if (form.dora == true) {
    primaryAssessment += `Patient reported they were under the influence of ${form.dora_type} within the last 24 hours.`
  }

  primaryAssessment += '\r'

  if(form.alertness == 'Patient was non-responsive/unconscious on scene.'){
  }
  else if (form.allergies == '') {
    primaryAssessment += 'Patient did not report any allergies.'
  } else {
    primaryAssessment += `Patient reported the following allergies: ${form.allergies}`
  }

  primaryAssessment += '\r'

  if(form.alertness == 'Patient was non-responsive/unconscious on scene.'){
  }
  else if (form.prescriptions == '') {
    primaryAssessment += 'Patient stated they are not on any perscription medications.'
  } else {
    primaryAssessment += `Patient reported taking the following perscriptions: ${form.prescriptions}`
  }

  return primaryAssessment
}
