<template>
  <div>
    <!-- {{ selected }} -->

    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="all_patient.response"
      :items-per-page="5"
      item-key="hos_num"
      show-select
      class="elevation-1 row-pointer"
      :search="search"
      @click:row="handleClick"
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
                  clearable
                  v-model="date"
                  label="calendar"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                >
                </v-text-field>
              </template>

              <v-date-picker
                @change="date_range_select"
                v-model="date"
                no-title
                scrollable
                range
              >
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

      <template v-slot:[`footer.prepend`]>
        <v-btn to="download" color="#00ADB5" dark class="ma-2 white--text">
          DOWNLOAD
        </v-btn>
      </template>

      <template v-slot:[`footer.page-text`]>
        <v-btn
          @click="send_email"
          color="#00ADB5"
          class="ma-2 white--text"
          :disabled="selected == ''"
        >
          Send email
        </v-btn>
      </template>

      <!-- <template v-slot:[`item.hos_num`]="{ item }">
        <div @click="on_test(item)">{{ item.hos_num }}</div>
      </template> -->
    </v-data-table>

    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" fullscreen>
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              {{ row_selected.whole_name }}
            </v-card-title>

            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-img
                    max-height="80vh"
                    :src="`https://picsum.photos/id/${Math.floor(
                      Math.random() * 100
                    )}/1280/720`"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange" text @click="dialog = false"> Close </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>



  </div>
</template>

<script>
export default {
  data() {
    return {
      row_selected: {},

      dialog: false,

      all_patient: [],
      search: "",
      date: "",
      date_start: "",
      date_end: "",
      menu: "",

      singleSelect: false,
      status: [
        "Ready to send email",
        "Email not ready to send",
        "Email already sent",
        "All emails",
      ],

      selected: [],
    };
  },

  computed: {
    headers() {
      return [
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

          filter: (value) => {
            if (!this.date) return true;

            let value_date = new Date(value);

            if (value_date >= this.date_start && value_date <= this.date_end) {
              return value;
            }
          },
        },
      ];
    },
  },

  created() {
    this.get_all_patient();
  },

  methods: {
    async get_all_patient() {
      const ip = await this.$axios.$get("/patient");
      console.log("get_all_patient -", ip.status);

      Object.keys(ip.response).forEach(
        (key) =>
          (ip.response[key].date_input = ip.response[key].date_input.substr(
            0,
            10
          ))
      );

      this.all_patient = ip;
    },

    send_email() {
      let send_to_patient = [];

      const formData = new FormData();

      Object.keys(this.selected).forEach((key) =>
        send_to_patient.push(this.selected[key].hos_num)
      );

      console.log(send_to_patient);

      formData.append("send_to_patient", send_to_patient);

      this.$axios.$post("/email/send-to-patient", formData).then((res) => {
        this.$router.push("/success");
        console.log(res);
        // this.$router.go(0);
      });
    },

    date_range_select(e) {
      this.selected = [];

      const e_date_first = new Date(e[0]);
      const e_date_second = new Date(e[1]);

      if (e_date_first.getTime() <= e_date_second.getTime()) {
        this.date_start = new Date(e[0]);
        this.date_end = new Date(e[1]);
      } else {
        this.date_start = new Date(e[1]);
        this.date_end = new Date(e[0]);
      }
    },

    handleClick(item) {
      this.row_selected = item;
      console.log(JSON.stringify(item));
      this.dialog = true;
    },
  },

  watch: {
    search(new_search, old_search) {
      this.selected = [];
    },
  },
};
</script>

<style lang="css" scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>