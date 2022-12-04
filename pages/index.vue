<template>
  <div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="all_patient.response"
      :single-select="singleSelect"
      :items-per-page="5"
      item-key="hos_num"
      show-select
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-row>
          <v-col class="d-flex" cols="1" sm="5" md="5">
            <v-text-field
              v-model="search"
              label="Search"
              prepend-icon="mdi-magnify"
              class="mx-4"
            ></v-text-field>
          </v-col>

          <v-col class="d-flex" cols="12" sm="3" md="3">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="calendar"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col class="d-flex" cols="12" sm="3" md="3">
            <v-select
              :items="status"
              label="status"
              prepend-icon="mdi-format-list-bulleted"
            ></v-select>
          </v-col>
        </v-row>
      </template>

      <!-- <template v-slot:item.name="{ item }">
      <h4 @click="ontest(item)">{{ item.hos_num }}</h4>
    </template> -->

      <template v-slot:footer.prepend>
        <v-btn to="download" color="#00ADB5" dark class="ma-2 white--text">
          DOWNLOAD
        </v-btn>
      </template>

      <template v-slot:footer.page-text>
        <v-btn to="success" color="#00ADB5" dark class="ma-2 white--text">
          Send email
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "@nuxtjs/axios";

export default {
  data() {
    return {
      all_patient: [],
      search: "",

      singleSelect: false,
      status: [
        "Ready to send email",
        "Email not ready to send",
        "Email already sent",
        "All emails",
      ],

      selected: [],
      headers: [
        {
          text: "Hospital Numbers",
          align: "start",
          sortable: false,
          value: "hos_num",
        },
        {
          text: "Name",
          value: "whole_name",
        },
        {
          text: "Date",
          value: "date_input",
        },
      ],
    };
  },
  created() {
    this.get_all_patient();
  },
  methods: {
    ontest(item) {
      alert(item.name);
      console.log(item);
    },

    async get_all_patient() {
      const ip = await this.$axios.$get("/patient");
      console.log("get_all_patient -", ip.status);

      // let keys = Object.keys(ip.response);

      // keys.map( (x) => {
      //   obj[x] = newObj[x];
      // });

      Object.keys(ip.response).forEach(
        (key) =>
          (ip.response[key].date_input = ip.response[key].date_input.substr(
            0,
            10
          ))
      );

      this.all_patient = ip;
    },
  },
};
</script>
