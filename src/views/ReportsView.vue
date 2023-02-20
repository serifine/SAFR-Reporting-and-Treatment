<script lang="ts">
import { Component, Vue, Watch } from 'vue-facing-decorator'
import * as consts from '../consts'
import { useReportsStore } from '../stores/reports-store'

import type { ReportForm } from '../models/report-form'

const uiState = {
  hasAllergies: false
}
const select = ['Animal Attack']
const items = consts.StandardComplaints

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

const reportsStore = useReportsStore()

@Component
export default class ReportsView extends Vue {
  
  public callsign: string = localStorage.getItem('callsign') || ''
  public form: ReportForm = getDefaultForm()

  public injuryOptions = consts.StandardComplaints
  public airwayOptions = consts.AirwayOptions
  public breathingOptions = consts.BreathingTypes
  public circulationOptions = consts.CirculationDescriptions
  public pulseOptions = consts.PulseDescription
  public alertnessOptions = consts.AlernessOptions
  public skinOptions = consts.SkinConditions
  public painMedicationOptions = consts.PainMedicationOptions
  public painMedicationAdministrationOptions = consts.PainMedicationAdministrationOptions
  public dischargeOptions = consts.SafrTreatmentDischargeOptions
  public hospitalOptions = consts.HospitalLocations
  public hospitalStaffOptions = consts.HospitalStaffOptions

  @Watch('form.dora')
  public drugsOrAlcoholChanged(value: any) {
    if (value == true) {
      this.form.painMedicationQualification = 'Patient did not qualify for pain medication'
    }
  }

  public primaryAssessment() {
    let primaryAssessment = ''
      
    if (this.form.location != '') {
      primaryAssessment += `Location: ${this.form.location}`
    }
    return primaryAssessment
  }

  public copyPrimaryAssessment() {
    navigator.clipboard.writeText(this.primaryAssessment())
  }

  public secondaryAssessment() {
    const injuries = this.form.injuries.map(t => t.injuryName)
    return `Patient suffered injuries related to a/an ${injuries}`
  }

  public copySecondaryAssessment() {
    navigator.clipboard.writeText(this.secondaryAssessment())
  }

  public transportation() {
    let transportation = ''

    if (['Patient was transported to hospital by SAFR.', 'Patient was transported to hospital by LEO.'].includes(this.form.safrDischarge)) {
      transportation += 'Patient was transported code 3 to '

      if (this.form.hospital == '') {
        transportation += 'the hospital '
      } else {
        transportation += `${this.form.hospital} `
      }

      if (this.form.safrDischarge == 'Patient was transported to hospital by LEO.') {
        if (this.form.leoName == '') {
          transportation += 'by a Law Enforcement Officer.'
        } else {
          transportation += `by Law Enforcement Officer ${this.form.leoName}.`
        }
      } else if (this.form.hospitalHandoff == 'Local Nurses') {
        transportation += 'into the care of Local Nurses.'
      } else if (this.form.hospitalHandoff == 'Specific Staff Member' && this.form.hospitalStaffName == '') {
        transportation += 'into the care of SAHA Staff.'
      } else if (this.form.hospitalHandoff == 'Specific Staff Member' && this.form.hospitalStaffName != '') {
        transportation += `into the care of ${this.form.hospitalStaffName}.`
      }
    } else {
      transportation += this.form.safrDischarge
    }

    return transportation
  }

  public treatment() {
    let treatment = ``

    const injuries = this.form.injuries.map(t => t.injuryName)

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
    switch (this.form.painMedicationQualification) {
      case 'Patient was given pain medication':
        treatment += `Patient was given ${this.form.painMedication} for pain management.`
        break
      case 'Patient declined pain medication':
        treatment += 'Patient declined pain medication.'
        break
      case 'Patient did not qualify for pain medication':
      default:
        treatment += 'Patient did not qualify for pain medication.'
        break
    }

    treatment += `\r\r${this.transportation()}`

    return treatment
  }

  public copyTreatment() {
    navigator.clipboard.writeText(this.treatment())
  }

  public vitalsAndSymptoms() {
    return `Airway: ${this.form.airway}\r` +
      `Breathing: ${this.form.breathing}\r` +
      `Circulation: ${this.form.circulation}\r` +
      `Alertness: ${this.form.alertness}\r` +
      `Skin: ${this.form.skin}\r` +
      `Pulse: ${this.form.pulse}\r` +
      `Pain Scale: ${this.form.painLevel}`
  }

  public copyVitalsAndSymptoms() {
    navigator.clipboard.writeText(this.vitalsAndSymptoms())
  }

  public additionalInfo() {
    let additionalInformation = ``

    if (this.form.dora == null) {
      additionalInformation += 'Unable to ascertain drug/alcohol use. '
    } else if (this.form.dora == false) {
      additionalInformation += 'Patient reported they were not under the influence of drugs or alcohol.'
    } else if (this.form.dora == true && this.form.dora_type == '') {
      additionalInformation += 'Patient reported they were under the influence of drugs or alcohol but did not specify.'
    } else if (this.form.dora == true) {
      additionalInformation += `Patient reported they were under the influence of ${this.form.dora_type}.`
    }

    additionalInformation += '\r'

    if (this.form.allergies == '') {
      additionalInformation += 'Patient did not report any allergies.'
    } else {
      additionalInformation += `Patient reported the following allergies: ${this.form.allergies}`
    }

    additionalInformation += '\r'

    if (this.form.prescriptions == '') {
      additionalInformation += 'Patient stated they are not on any perscription medications.'
    } else {
      additionalInformation += `Patient reported taking the following perscriptions: ${this.form.prescriptions}`
    }

    additionalInformation += `\r\r${this.transportation()}`

    return additionalInformation
  }

  public copyAdditionalInfo() {
    navigator.clipboard.writeText(this.additionalInfo())
  }

  public getExportText() {
    return (
      `${this.form.patientIdentifier}\n\n\n` +
      `Location: ${this.form.location}\n\n\n` +
      `Notes\n${this.form.notes}\n\n\n` +
      `***Primary Assessment***\n${this.primaryAssessment()}\n\n\n` +
      `***Secondary Assessment***\n${this.secondaryAssessment()}\n\n\n` +
      `***Treatment***\n${this.treatment()}\n\n\n` +
      `***Vitals/Symptoms***\n${this.vitalsAndSymptoms()}\n\n\n` +
      `***Diagnosis***\n(COPY AND PASTE DIAGNOSIS HERE)\n\n\n` +
      `***Additional Information***\n${this.additionalInfo()}\n\n\n`
    )
  }

  public exportTextFile() {
    const link = document.createElement('a')
    const content = this.getExportText()
    const file = new Blob([content], { type: 'text/plain' })
    link.href = URL.createObjectURL(file)
    link.download = `${this.form.patientIdentifier}-${new Date().toLocaleString()}.txt`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  public resetForm() {
    if (confirm('Are you sure? This will clear all information and start fresh.')) {
      this.form = getDefaultForm()
    }
  }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Name/SSN" v-model="form.patientIdentifier" hide-details></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Location" v-model="form.location" hide-details></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-textarea label="Notes" v-model="form.notes" rows="2" hide-details></v-textarea>
              </v-col>
              <v-divider class="my-4" />
              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.injuries"
                  :items="injuryOptions"
                  item-title="injuryName"
                  label="Injuries"
                  multiple
                  chips
                  hide-details
                ></v-combobox>
              </v-col>

              <v-divider class="my-4" />

              <v-col cols="12" sm="4">
                <v-combobox v-model="form.airway" :items="airwayOptions" label="Airway" hide-details></v-combobox>
              </v-col>

              <v-col cols="12" sm="4">
                <v-combobox v-model="form.breathing" :items="breathingOptions" label="Breathing" hide-details></v-combobox>
              </v-col>

              <v-col cols="12" sm="4">
                <v-combobox v-model="form.circulation" :items="circulationOptions" label="Circulation" hide-details></v-combobox>
              </v-col>

              <v-col cols="12" sm="4">
                <v-combobox v-model="form.skin" :items="skinOptions" label="Skin" hide-details></v-combobox>
              </v-col>

              <v-col cols="12" sm="4">
                <v-combobox v-model="form.pulse" :items="pulseOptions" label="Pulse" hide-details></v-combobox>
              </v-col>

              <v-col cols="12" sm="4">
                <v-combobox v-model="form.alertness" :items="alertnessOptions" label="Alertness"></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-slider
                  :ticks="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  :max="10"
                  :min="0"
                  step="1"
                  show-ticks="always"
                  tick-size="4"
                  label="Pain Level"
                  v-model="form.painLevel"
                ></v-slider>
              </v-col>

              <v-divider class="my-4" />

              <v-col cols="12" sm="6">
                <v-text-field label="Allergies" v-model="form.allergies"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Prescription medications" v-model="form.prescriptions"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-label>Has the patient had any drugs or alcohol in the last 24 hours?</v-label>
                <v-radio-group v-model="form.dora" inline hide-details>
                  <v-radio label="Yes" :value="true"></v-radio>
                  <v-radio label="No" :value="false"></v-radio>
                  <v-radio label="Unknown" :value="null"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" sm="12" v-if="form.dora == true">
                <v-text-field label="What drugs or alcohol did the patient report using?" v-model="form.dora_type"></v-text-field>
              </v-col>

              <v-divider class="my-4" />

              <v-col cols="12" sm="6">
                <v-combobox
                  v-model="form.painMedicationQualification"
                  :items="painMedicationAdministrationOptions"
                  label="Pain Medication Qualification"
                  hide-details
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="6">
                <v-combobox
                  v-model="form.painMedication"
                  :items="painMedicationOptions"
                  :disabled="form.painMedicationQualification != 'Patient was given pain medication'"
                  label="Pain Medication Given"
                  hide-details
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.safrDischarge"
                  :items="dischargeOptions"
                  label="Discharge From SAFR Options"
                  hide-details
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12" v-if="form.safrDischarge == 'Patient was transported to hospital by LEO.'">
                <v-text-field label="LEO Name and Title" v-model="form.leoName" hide-details></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="12"
                v-if="
                  form.safrDischarge == 'Patient was transported to hospital by SAFR.' ||
                  form.safrDischarge == 'Patient was transported to hospital by LEO.'
                "
              >
                <v-combobox
                  v-model="form.hospital"
                  :items="hospitalOptions"
                  label="Which hospital was the patient transported to?"
                  hide-details
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12" v-if="form.safrDischarge == 'Patient was transported to hospital by SAFR.'">
                <v-combobox
                  v-model="form.hospitalHandoff"
                  :items="hospitalStaffOptions"
                  label="Who was the patient handed off to?"
                  hide-details
                ></v-combobox>
              </v-col>

              <v-col
                cols="12"
                sm="12"
                v-if="
                  form.safrDischarge == 'Patient was transported to hospital by SAFR.' && form.hospitalHandoff == 'Specific Staff Member'
                "
              >
                <v-text-field label="Staff Member Name and Title" v-model="form.hospitalStaffName" hide-details></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-4 py-4">
          <v-card-title>{{ form.patientIdentifier }}</v-card-title>
          <v-card-subtitle>{{ form.location }}</v-card-subtitle>

          <v-textarea label="Notes" :model-value="form.notes" readonly rows="2"></v-textarea>

          <v-divider />

          <v-textarea
            label="Primary Assessment"
            :model-value="primaryAssessment()"
            readonly
            rows="3"
            append-icon="file_copy"
            @click:append="copyPrimaryAssessment"
          ></v-textarea>
          <v-textarea
            label="Secondary Assessment"
            :model-value="secondaryAssessment()"
            readonly
            rows="3"
            append-icon="file_copy"
            @click:append="copySecondaryAssessment"
          ></v-textarea>
          <v-textarea
            label="Treatment"
            :model-value="treatment()"
            readonly
            rows="7"
            append-icon="file_copy"
            @click:append="copyTreatment"
          ></v-textarea>
          <v-textarea
            label="Vitals and Symptoms"
            :model-value="vitalsAndSymptoms()"
            readonly
            rows="7"
            append-icon="file_copy"
            @click:append="copyVitalsAndSymptoms"
          ></v-textarea>
          <v-textarea
            label="Additional Information"
            :model-value="additionalInfo()"
            readonly
            rows="4"
            append-icon="file_copy"
            @click:append="copyAdditionalInfo"
          ></v-textarea>
          <v-divider class="pt-4" />
          <v-btn color="primary" @click="exportTextFile">Save and Export</v-btn>
          <v-btn color="red" class="ml-4" @click="resetForm">Reset Form</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
