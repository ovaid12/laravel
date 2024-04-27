import Hello from "./components/Hello.vue"
import DashBoard from './components/DashBoard.vue'
import MyBooking from './components/MyBooking.vue'

const route =  [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard
    },
    {
        path: '/hello',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/my-booking',
        name: 'my-booking',
        component: MyBooking
    }

]

export default route