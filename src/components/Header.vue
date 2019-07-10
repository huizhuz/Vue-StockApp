<template>
	<div>
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
		>
			<el-menu-item index="1" @click="navigateTo('/')">Stock Trader</el-menu-item>
			<el-menu-item index="2" @click="navigateTo('/portfolio')">Portfolio</el-menu-item>
			<el-menu-item index="3" @click="navigateTo('/stocks')">Stocks</el-menu-item>
            <el-menu-item index="4" @click="endDay">End day</el-menu-item>
			<el-submenu index="5">
				<template slot="title">Save & Load</template>
				<el-menu-item index="5-1" @click="saveToServer">Save</el-menu-item>
				<el-menu-item index="5-2" @click="loadFromServer">Load</el-menu-item>
			</el-submenu>
            <el-menu-item>Your Funds: {{ $store.state.fund }}</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
    import axios from 'axios';
	export default {
		data() {
			return {
				activeIndex: "1"
			};
		},
		methods: {
			navigateTo(path) {
				this.$router.push(path);
            },
            endDay(){
                this.$store.commit('dayEnded');
            },
            saveToServer(){
                axios.post('https://stockapp-56a38.firebaseio.com/price.json', this.$store.state.stockPrice)
                .then(res => console.log(res))
                .catch(error => console.log(error));
                axios.post('https://stockapp-56a38.firebaseio.com/quantity.json', this.$store.state.myStocksQuantity)
                .then(res => console.log(res))
                .catch(error => console.log(error));
            },
            loadFromServer(){
                this.$store.commit('loadData');
            }
		}
	};
</script>
