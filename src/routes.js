import VueRouter from 'vue-router'

import Home from './components/Home'
import UserList from './components/user/List'
import UserProfile from './components/user/Profile'
import EmployeeList from './components/Employee/List'
import Holder from './components/Holder/List'

export default new VueRouter({
    routes: [
        {
            path: '', // http://localhost:8080/
            component: Home
        },
        {
            path: '/users', // http://localhost:8080/users
            component: UserList
        },
        {
            path: '/employees', // http://localhost:8080/emploeyee
            component: EmployeeList
        },
        {
            path: '/holder', // http://localhost:8080/emploeyee
            component: Holder
        },
        {
            path: '/users/:id', // http://localhost:8080/users/1
            component: UserProfile
        },

    ],
    mode: 'history' // http://localhost:8080/#/users => http://localhost:8080/users
})