<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column" cols="1" sm="5" md="3">
        <v-card class="px-5 py-8"> Total Registered Users : 2 </v-card>
        <v-card class="px-3 py-3" to="manage_users"> View Details</v-card>
      </v-col>
      
      <v-col class="d-flex flex-column" cols="1" sm="5" md="3">
        <v-card class="px-5 py-8"> Yesterday Registered Users :  0 </v-card>
        <v-card class="px-3 py-3" to="manage_users"> View Details</v-card>
      </v-col>
    

    <v-col class="d-flex flex-column" cols="1" sm="5" md="3">
        <v-card class="px-5 py-5">  Registered User since last week :  2 </v-card>
        <v-card class="px-3 py-3" to="manage_users"> View Details</v-card>
      </v-col>
    

    <v-col class="d-flex flex-column" cols="1" sm="5" md="3">
        <v-card class="px-3 py-5">  Registered User since last month :  2 </v-card>
        <v-card class="px-3 py-3" to="manage_users"> View Details</v-card>
      </v-col>
    </v-row>

    
  </v-container>
</template>
