export function GeneratePrimaryAssessment(form: any) {
  return `Airway: ${form.airway}
  Breathing: ${form.breathing}
  Circulation: ${form.circulation}
  Skin: ${form.skin}
  Pulse: ${form.pulse}
  Pain Scale: ${form.painScale}
  Alertness: ${form.alertness}`
}
