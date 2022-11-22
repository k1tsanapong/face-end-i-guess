<template>
<v-data-table v-model="selected" :headers="headers" :items="desserts" :single-select="singleSelect" item-key="name" show-select class="elevation-1">
  
    <template v-slot:top>
        <v-row>
            <v-col
            class="d-flex"
        cols="1"
        sm="4"
        md="4"
        >
            <v-text-field
          v-model="search"
          label="Search"
          prepend-icon="mdi-magnify"
          class="mx-4"
        ></v-text-field>
        </v-col>

        <v-col
        class="d-flex"
        
      cols="12"
      sm="3"
      md="3"
    >
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
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>



        </v-col>

        <v-col
        class="d-flex"
        cols="12"
        sm="2"
        md="2"


        >
            <v-select
          :items="privilege"
          label="privilege"
          prepend-icon="mdi-account-group"
        ></v-select>
        </v-col>

        <v-col
        class="d-flex"
        cols="12"
        sm="2"
        md="2"


        >
            <v-select
          :items="status"
          label="status"
          prepend-icon="mdi-format-list-bulleted"
        ></v-select>
        </v-col>


        </v-row>
      </template>
  
    <template v-slot:item.name="{ item }">
    <h4 @click="ontest(item)">{{item.name}}</h4>
  </template>
  <template v-slot:footer.page-text>
        <v-btn to="submit" color="#00ADB5" dark class="ma-2 white--text" @click="buttonCallback">
            Send email
        </v-btn>
    </template>
</v-data-table>
</template>

<script>
export default {
    data() {
        return {
            singleSelect: false,
            privilege: ['บุคคลในครอบครัวของพนักงานของมหาวิทยาลัยแม่ฟ้าหลวง', 'ตรวจสุขภาพ (ชำระเงินเอง รัฐวิสาหกิจ)', 'ตรวจสุขภาพ (ชำระเงินเอง ราชการ)', 'บุคคลในครอบครัวพนักงาน มฟล.','ตรวจสุขภาพหน่วยงานเอกชน','ผู้ป่วยในความอนุเคราะห์','มหาวิทยาลัยแม่ฟ้าหลวง','โครงการทันตกรรม','พนักงาน รพ.มฟล.','ผู้ป่วยบุคคลพิเศษ','รัฐวิสาหกิจี','เงินสด','Voucher'],
            status:['Ready to send email','Email not ready to send','All emails',],

            selecte: [],
            headers: [{
                    text: "Hospital Numbers",
                    align: "start",
                    sortable: false,
                    value: "hm",
                },
                {
                    text: "Name",
                    value: "name"
                },
                {
                    text: "Status",
                    value: "status"
                },
                {
                    text: "Detail",
                    value: "detail"
                },
            ],
            desserts: [{
                    hm: "643150",
                    name: "ฐิตินันท์ อิ่นแก้ว",
                    status: "บุคคลในครอบครัวพนักงาน มฟล.",
                    detail: "-",

                },
                {
                    hm: "643151",
                    name: "ณัฐรินีย์ คงอินทร์",
                    status: "เงินสด",
                    detail: "-",
                },
                {
                    hm: "643152",
                    name: "นัสรีน ศิริตัน",
                    status: "บุคคลในครอบครัวของพนักงานของมหาวิทยาลัยแม่ฟ้าหลวง",
                    detail: "-",
                },
                {
                    hm: "643153",
                    name: "ปภาดา อติชาติธานินทร์",
                    status: "ตรวจสุขภาพ (ชำระเงินเอง รัฐวิสาหกิจ)",
                    detail: "-",
                },
                {
                    hm: "643154",
                    name: "พรทิพย์ บุญแสง",
                    status: "ตรวจสุขภาพ (ชำระเงินเอง รัฐวิสาหกิจ)",
                    detail: "-",
                },
                {
                    hm: "643155",
                    name: "พิชญ์สินี กองสุเรือง",
                    status: "บุคคลในครอบครัวพนักงาน มฟล.",
                    detail: "-",
                },
                {
                    hm: "643156",
                    name: "พิมลกรณ์ สุวรรณ์",
                    status: "ตรวจสุขภาพหน่วยงานเอกชน",
                    detail: "-",
                },
                {
                    hm: "643157",
                    name: "กุลนิดา ศตสังวัตสร์",
                    status: "พนักงาน รพ.มฟล.",
                    detail: "-",
                },
                {
                    hm: "643158",
                    name: "กิตตินรินทร์ นาใจ",
                    status: "เงินสด",
                    detail: "-",
                },
                {
                    hm: "643159",
                    name: "ณัฐธิดา รัฐไสย",
                    status: "พนักงาน รพ.มฟล.",
                    detail: "-",
                },
            ],
        };
    },
    created(){

    },
    methods:{
      ontest(item){
        alert(item.name)
        console.log(item);
      }
    }
};
</script>
