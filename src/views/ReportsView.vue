<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import * as consts from '../consts';

const uiState = {
  hasAllergies: false
}
const select = [ 'Animal Attack' ]
const items = consts.StandardComplaints

@Options({})
export default class ReportsView extends Vue {
  public form = {
    injuries: []
  }
  public select: string[] = []

  public injuryOptions = consts.StandardComplaints
  public airwayOptions = consts.AirwayOptions
  public breathingOptions = consts.BreathingTypes
  public circulationOptions = consts.CirculationDescriptions
  public pulseOptions = consts.PulseDescription
  public alertnessOptions = consts.AlernessOptions
  public painMedicationOptions = consts.PainMedicationOptions
  public painMedicationAdministrationOptions = consts.PainMedicationAdministrationOptions
  public dischargeOptions = consts.SafrTreatmentDischargeOptions
  public hospitalOptions = consts.HospitalLocations
  public hospitalStaffOptions = consts.HospitalStaffOptions
  
}
</script>

<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-card>
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="12" sm="12">
                <v-text-field label="Name/SSN"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-combobox
                  v-model="select"
                  :items="injuryOptions"
                  label="Injuries"
                  multiple
                  chips
                ></v-combobox>
              </v-col>
              
              <v-divider class="my-4" />

              <v-col cols="12" sm="12" class="pb-2">
                Leave blank for none.
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field label="Allergies"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field label="Prescription medications"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-label>Has the patient had any drugs in the last 24 hours?</v-label>
                <v-radio label="Yes" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-col>
              <v-col cols="12" sm="6">
                <v-label>Has the patient had any alcohol in the last 24 hours?</v-label>
                <v-radio label="Yes" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-col>
              
              
              <v-divider class="my-4" />

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="airwayOptions"
                  label="Airway"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="breathingOptions"
                  label="Breathing"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="circulationOptions"
                  label="Circulation"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="pulseOptions"
                  label="Pulse"
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
                ></v-slider>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="alertnessOptions"
                  label="Alertness"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="painMedicationAdministrationOptions"
                  label="Pain Medication Qualification"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="painMedicationOptions"
                  label="Pain Medication List"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="dischargeOptions"
                  label="Discharge From SAFR Options"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-text-field label="LEO Name and Title"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="hospitalOptions"
                  label="Which hospital was the patient transported to?"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-combobox
                  :items="hospitalStaffOptions"
                  label="Who was the patient handed off to?"
                ></v-combobox>
              </v-col>

              <v-col cols="12" sm="12">
                <v-text-field label="Staff Member Name and Title"></v-text-field>
              </v-col>

            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6"> </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
