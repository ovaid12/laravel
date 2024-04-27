<template>
    <div class="chart-container1">
        <Doughnut id="my-chart-idx" :options="chartOptions" :data="chartData" />
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'DoughnutChart',
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                cutout: 100,
                legend: {
                    position: 'right', // Adjust legend position if needed
                },
                maintainAspectRatio: false
            }
        }
    }
}
</script>
<style>
.chart-container1 {
    position: relative;
    height: 268px;
    margin: auto; 
}
</style>