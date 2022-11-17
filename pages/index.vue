<template>
<v-data-table v-model="selected" :headers="headers" :items="desserts" :single-select="singleSelect" item-key="name" show-select class="elevation-1">
  <template v-slot:item.name="{ item }">
    <h4 @click="ontest(item)">{{item.name}}</h4>
  </template>
  <template v-slot:footer.page-text>
        <v-btn color="#00ADB5" dark class="ma-2 white--text" @click="buttonCallback">
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
            selected: [],
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
                    name: "Frozen Yogurt",
                    status: "-",
                    detail: "-",

                },
                {
                    hm: "643151",
                    name: "Ice cream sandwich",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643152",
                    name: "Eclair",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643153",
                    name: "Cupcake",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643154",
                    name: "Gingerbread",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643155",
                    name: "Jelly bean",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643156",
                    name: "Lollipop",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643157",
                    name: "Honeycomb",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643158",
                    name: "Donut",
                    status: "-",
                    detail: "-",
                },
                {
                    hm: "643159",
                    name: "KitKat",
                    status: "-",
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
