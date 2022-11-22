<template>
    
    <v-container>
        <v-row class="d-flex flex-column justify-center">
            <v-icon size="500">
                mdi-check-circle-outline
            </v-icon>

            <div class="text-center text-h5 font-weight-bold grey--text">
                Email sent successfully !!
            </div>
        </v-row>
        <v-row class="d-flex justify-end">
            <v-btn class="white--text" color="#00ADB5" to="/">Back</v-btn>
        </v-row>
    </v-container>
        
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
    