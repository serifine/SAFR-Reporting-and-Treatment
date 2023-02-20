import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ReportForm } from '@/models/report-form'

function getDefaultForm() {
  return {
    patientIdentifier: '',
    injuries: [],

    location: '',
    notes: '',

    airway: 'Clear',
    breathing: 'Normal',
    circulation: 'Normal',
    skin: 'Normal',
    pulse: 'Normal (60-100 BPM)',
    alertness: 'Patient was responsive, alert, and oriented on scene.',

    painLevel: 0,

    allergies: '',
    prescriptions: '',
    dora: null,
    dora_type: '',

    painMedicationQualification: '',
    painMedication: '',

    safrDischarge: '',
    hospital: '',
    hospitalHandoff: '',

    leoName: '',
    hospitalStaffName: ''
  }
}

export const useReportsStore = defineStore('counter', () => {
  let report: ReportForm = getDefaultForm()
  const reports: ReportForm[] = []

  async function getReports() {
  }

  function saveReport(report: ReportForm) {

  }

  function resetCurrentReport() {
    report = getDefaultForm()
  }



  return { reports, getReports }
})
