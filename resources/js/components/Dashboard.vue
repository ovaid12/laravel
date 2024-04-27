<template>
    <v-container class="mlcontainer">
        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>Featured</v-card-title>
                    <v-card-text>
                        <BarChart />
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>Doughnut</v-card-title>
                    <v-card-text>
                        <DoughnutChart />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>DataTable</v-card-title>
                    <v-card-text>
                        <Datatable />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import BarChart from './charts/BarCharts.vue'
import DoughnutChart from './charts/DoughnutChart.vue'
import Datatable from './Datatable.vue'

export default {
    name: 'Dashboard',
    components: { BarChart, DoughnutChart, Datatable }
} 
</script>
<style>
.content-wrapper {
    background-color: #343a40;
}

.content-header {
    color: white
}

/* .mlcontainer {
    margin-left: -17px;
} */
</style>
