<template>
    <div id="user-profile"> <!--Обязательный корневой элемент-->
        <h1>User Profile {{ id }}</h1>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="back">Back</button>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                id: this.$route.params.id
            }
        },
        methods: {
            back() {
                this.$router.push('/users')
            }
        },
        filters: {
            readMore(text, length, suffix) {
                return text.substring(0, length) + suffix;
            }
        },
        watch: {
            $route(to) {
                this.id = to.params['id']
            }
        }
    }
</script>

<style scoped>
</style>