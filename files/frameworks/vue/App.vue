<template>
	<Home msg="Web3Auth Vue.js Ethereum Example" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './Home.vue';

export default defineComponent({
	name: 'App',
	components: {
		Home,
	},
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
