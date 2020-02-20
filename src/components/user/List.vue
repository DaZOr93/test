<template>
    <div id="users-list">
        <h1>User Lists</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link tag="a" :to="`/users/${user.id}`">{{ user.name }}</router-link>
            </li>
        </ul>
         {{counter}}
    </div>
</template>

<script>
    export default {
        name: "List",
        created(){
            this.getUsers()

        },
        computed:{
            counter(){
                return this.$store.state.counter
            },
            users(){
                return this.$store.getters.users
            }
            
        },
        methods:{
            getUsers(){
                this.$store.dispatch('getUsers')
            }

        }
    }
</script>

<style scoped>
</style>