<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
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
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
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

    <template v-slot:item.name="{ item }">
      <h4 @click="ontest(item)">{{ item.name }}</h4>
    </template>

    <template v-slot:footer.prepend>
      <v-btn
        to="download"
        color="#00ADB5"
        dark
        class="ma-2 white--text"
        @click="buttonCallback"
      >
        DOWNLOAD
      </v-btn>
    </template>

    <template v-slot:footer.page-text>
      <v-btn
        to=""
        color="#00ADB5"
        dark
        class="ma-2 white--text"
        @click="buttonCallback"
      >
        Send email
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      

      singleSelect: false,
      status: [
        "Ready to send email",
        "Email not ready to send",
        "Email already sent",
        "All emails",
      ],

      selecte: [],
      headers: [
        {
          text: "Hospital Numbers",
          align: "start",
          sortable: false,
          value: "hm",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Date",
          value: "date",
        },
      ],
      desserts: [
        {
          hm: "643151",
          name: "Lori Durrad",
          date: "12-01-2022",
        },
        {
          hm: "643152",
          name: "Clint Emery",
          date: "20-09-2022",
        },
        {
          hm: "643153",
          name: "Lynna Trasler",
          date: "09-07-2022",
        },
        {
          hm: "643154",
          name: "Carlina Hammerman",
          date: "29-12-2021",
        },
        {
          hm: "643155",
          name: "Verile Deeney",
          date: "22-01-2022",
        },

        {
          hm: "643153",
          name: "Lynna Trasler",
          date: "04-01-2022",
        },
        {
          hm: "643153",
          name: "Lynna Trasler",
          date: "15-11-2022",
        },
      ],
    };
  },
  created() {},
  methods: {
    ontest(item) {
      alert(item.name);
      console.log(item);
    },
  },
};
</script>
