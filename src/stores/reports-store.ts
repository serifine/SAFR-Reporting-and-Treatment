import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ReportForm } from '@/models/report-form'

function getDefaultForm(): ReportForm {
  return {
    patientIdentifier: '',
    injuries: [],

    location: '',
    notes: '',
    callType: '10-52',

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

export const useReportsStore = defineStore('reports-store', {
  state: () => ({
    currentIndex: 0,
    reports: [{
      ...getDefaultForm()
    }]
  }),
  getters: {
    currentReport: (state) => state.reports[state.currentIndex],
  },
  actions: {
    updateCurrentIndex(newIndex: number) {
      this.currentIndex = newIndex
    },
    updateCurrentReport(form: ReportForm) {
      this.reports[this.currentIndex] = {...form}
    },
    resetCurrentReport() {
      this.reports[this.currentIndex] = {...getDefaultForm()}
    },
    addNewReport() {
      this.reports.push(getDefaultForm())
    },
    copyCurrentReport() {
      this.reports.push({...this.currentReport})
    }
  },
})
