<template>
    <div id="home">
        <h1>{{title}}</h1>
    </div>
</template>


<script>
	import {mapState} from 'vuex'
    export default {
        name: "Home",
        computed: mapState({
			title: state => state.title
		})
	}
</script>

<style scoped>
</style>