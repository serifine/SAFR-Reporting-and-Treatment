<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import * as consts from '../consts';

import type { ReportForm } from "../models/report-form";

const uiState = {
  hasAllergies: false
}
const select = [ 'Animal Attack' ]
const items = consts.StandardComplaints

@Options({})
export default class ReportsView extends Vue {
  public form: ReportForm = {
    patientIdentifier: '',
    injuries: [],

    airway: 'Clear',
    breathing: 'Normal',
    circulation: 'Normal',
    skin: 'Normal',
    pulse: 'Normal (60-100 BPM)',
    alertness: 'Patient was responsive, alert, and oriented on scene.',

    painLevel: 0,

    allergies: '',
    prescriptions: '',
    drugs: false,
    alcohol: false,

    painMedicationQualification: '',
    painMedication: '',

    safrDischarge: '',
    hospital: '',
    hospitalHandoff: '',

    leoName: '',
    hospitalStaffName: ''
  }

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
  
  public primaryAssessment() {
    return `Airway: ${this.form.airway}\r` +
    `Breathing: ${this.form.breathing}\r` +
    `Circulation: ${this.form.circulation}\r` +
    `Alertness: ${this.form.alertness}\r` +
    `Skin: ${this.form.skin}\r` +
    `Pulse: ${this.form.pulse}\r` +
    `Pain Scale: ${this.form.painLevel}`;
  }

  public secondaryAssessment() {
    const injuries = this.form.injuries.map(t => t.injuryName)
    return `Patient suffered injuries related to a/an ${injuries}`
  }

  public treatment() {
    let treatment = ``

    const injuries = this.form.injuries.map(t => t.injuryName);

    if (injuries.includes('Blunt Force Trauma')) {
      treatment += 'Patient made stable with a c-collar and a spine board. IV saline administered. Ice packs applied to bruising.'
    }
    if (injuries.includes('GSW') || injuries.includes('Multiple GSW\'s') || injuries.includes('Animal Attack') || injuries.includes('Stabbing')) {
      treatment += 'Oxygen mask applied to paitent. Patients wounds were packed with gauze to stop bleeding. IV saline and TXA administered. Wounds flushed with IV saline, packed with fresh gauze, and wrapped in bandages. Patient was made stable with a C-collar and spine board.'
    }
    if (injuries.includes('First Degree Burn')) {
      treatment += 'Patient\'s burns cooled with saline. Aloe gel applied. Patient advised to stay out of the sun and to keep burn site away from sources of elevated heat.'
    }
    if (injuries.includes('Second Degree Burn')) {
      treatment += 'Patient\'s burns cooled with saline. Aloe gel applied. Burn dressing applied to wound. Patient advised to reapply aloe and change bandage every 24 hours until wound has healed.'
    }
    if (injuries.includes('Third Degree Burn')) {
      treatment += 'Oxygen mask applied to paitent. IV saline administered. All burns covered with burn dressings. Patient hooked up to oxygen monitor. Patient was made stable with a C-collar and spine board.'
    }
    if (injuries.includes('Fall')) {
      treatment += 'C-Collar and oxygen mask applied to patient. IV saline started. Open wounds flushed with saline, covered in gauze, and wrapped in bandages. Concussion questions asked and (PASSED/FAILED). Patient secured with spine board, vaccum mattress, and head blocks.'
    }
    if (injuries.includes('MVA')) {
      treatment += 'C-Collar and oxygen mask applied to patient. IV saline started. Open wounds flushed with saline, covered in gauze, and wrapped in bandages. Patient secured with spine board, and ice packs applied to bruises.'
    }
    if (injuries.includes('Other')) {
      treatment += 'FILL IN OTHER TREATMENT'
    }


    treatment += '\r\r'
    switch (this.form.painMedicationQualification) {
      case 'Patient was given pain medication':
        treatment += `Patient was given ${this.form.painMedication} for pain management.`
        break;
      case 'Patient declined pain medication':
        treatment += 'Patient declined pain medication.'
        break;
      case 'Patient did not qualify for pain medication':
      default:
        treatment += 'Patient did not qualify for pain medication.'
        break;
    }

    treatment += '\r\r'

    if (['Patient was transported to hospital by SAFR.', 'Patient was transported to hospital by LEO.'].includes(this.form.safrDischarge)) {
      treatment += 'Patient was transported code 3 to '

      if (this.form.hospital == '') {
        treatment += 'the hospital '
      } else {
        treatment += `${this.form.hospital} `
      }


      if (this.form.safrDischarge == 'Patient was transported to hospital by LEO.') {
        if(this.form.leoName == '') {
          treatment += 'by a Law Enforcement Officer.'
        } else {
          treatment += `by Law Enforcement Officer ${this.form.leoName}.`
        }
      } else if (this.form.hospitalHandoff == 'Local Nurses') {
        treatment += 'into the care of Local Nurses.'
      } else if (this.form.hospitalHandoff == 'Specific Staff Member' && this.form.hospitalStaffName == '') {
        treatment += 'into the care of SAHA Staff.' 
      } else if (this.form.hospitalHandoff == 'Specific Staff Member' && this.form.hospitalStaffName != '') {
        treatment += `into the care of ${this.form.hospitalStaffName}.`
      }
    } else {
      treatment += this.form.safrDischarge
    }

    return treatment
  }

  public vitalsAndSymptoms() {
    return 'Vitals: \n\nSymptoms:'
  }

  public getExportText() {
    return  `Patient: ${this.form.patientIdentifier}\n\n\n`+
    `***Primary Assessment***\n${this.primaryAssessment()}\n\n\n` +
    `***Secondary Assessment***\n${this.secondaryAssessment()}\n\n\n` +
    `***Treatment***\n${this.treatment()}\n\n\n` +
    `***Vitals/Symptoms***\n${this.vitalsAndSymptoms()}\n\n\n` +
    `***Diagnosis***\n(COPY AND PASTE DIAGNOSIS HERE)\n\n\n`
  }

  public exportTextFile() {
    const link = document.createElement("a");
    const content = this.getExportText();
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${this.form.patientIdentifier}-${new Date().toLocaleString()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="12" sm="12">
                <v-text-field label="Name/SSN" v-model="form.patientIdentifier"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.injuries"
                  :items="injuryOptions"
                  item-title="injuryName"
                  label="Injuries"
                  multiple
                  chips
                ></v-combobox>
              </v-col>
              
              <v-divider class="my-4" />

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.airway"
                  :items="airwayOptions"
                  label="Airway"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.breathing"
                  :items="breathingOptions"
                  label="Breathing"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.circulation"
                  :items="circulationOptions"
                  label="Circulation"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.skin"
                  :items="skinOptions"
                  label="Skin"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.pulse"
                  :items="pulseOptions"
                  label="Pulse"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.alertness"
                  :items="alertnessOptions"
                  label="Alertness"
                ></v-combobox>
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

              <v-col cols="12" sm="12">
                <v-text-field label="Allergies" v-model="form.allergies"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field label="Prescription medications" v-model="form.prescriptions"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-label>Has the patient had any drugs in the last 24 hours?</v-label>
                <v-radio-group v-model="form.drugs">
                  <v-radio label="Yes" :value="true"></v-radio>
                  <v-radio label="No" :value="false"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" sm="6">
                <v-label>Has the patient had any alcohol in the last 24 hours?</v-label>
                <v-radio-group v-model="form.alcohol">
                  <v-radio label="Yes" :value="true"></v-radio>
                  <v-radio label="No" :value="false"></v-radio>
                </v-radio-group>
              </v-col>

              <v-divider class="my-4" />

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.painMedicationQualification"
                  :items="painMedicationAdministrationOptions"
                  label="Pain Medication Qualification"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="form.painMedication"
                  :items="painMedicationOptions"
                  label="Pain Medication List"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox 
                  v-model="form.safrDischarge"
                  :items="dischargeOptions"
                  label="Discharge From SAFR Options"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12" v-if="form.safrDischarge == 'Patient was transported to hospital by LEO.'">
                <v-text-field label="LEO Name and Title" v-model="form.leoName"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" v-if="form.safrDischarge == 'Patient was transported to hospital by SAFR.' || form.safrDischarge == 'Patient was transported to hospital by LEO.'">
                <v-combobox
                  v-model="form.hospital"
                  :items="hospitalOptions"
                  label="Which hospital was the patient transported to?"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12" v-if="form.safrDischarge == 'Patient was transported to hospital by SAFR.'">
                <v-combobox
                  v-model="form.hospitalHandoff"
                  :items="hospitalStaffOptions"
                  label="Who was the patient handed off to?"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12" v-if="form.safrDischarge == 'Patient was transported to hospital by SAFR.' && form.hospitalHandoff == 'Specific Staff Member'">
                <v-text-field label="Staff Member Name and Title" v-model="form.hospitalStaffName"></v-text-field>
              </v-col>

            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-4 py-4">
          <v-textarea label="Primary Assessment" :model-value="primaryAssessment()" readonly rows="7"></v-textarea>
          <v-textarea label="Secondary Assessment" :model-value="secondaryAssessment()" readonly rows="4"></v-textarea>
          <v-textarea label="Treatment" :model-value="treatment()" readonly rows="12"></v-textarea>
          <v-textarea label="Vitals and Symptoms" :model-value="vitalsAndSymptoms()" readonly rows="4"></v-textarea>

          <v-textarea label="export" :model-value="getExportText()" readonly></v-textarea>
          <v-divider/>

          
          <v-btn color="primary" @click="exportTextFile">Save and Export</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
