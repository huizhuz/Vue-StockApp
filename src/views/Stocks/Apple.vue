<template>
	<div class="stock-box">
		<h4>
			Apple
			<span class="inline-text">(price: {{price}})</span>
		</h4>
		<div class="input-container">
			<el-input style="max-width: 150px" type="text" v-model="addQuantity" placeholder="Quantity" />
			<el-button type="info" plain @click="buyStock">Buy</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addQuantity: 0
			};
		},
		methods: {
			buyStock() {
				if (this.price * this.addQuantity <= this.$store.state.fund) {
					this.$store.state.myStocksQuantity.Apple += parseInt(
						this.addQuantity
					);
					this.$store.state.fund -= this.price * this.addQuantity;
				}
			}
		},
		computed: {
			price() {
				return this.$store.state.stockPrice.Apple;
			}
		}
	};
</script>

<style>
	h4 {
		background-color: rgb(84, 92, 100);
		color: rgb(255, 255, 255);
		margin: 0;
		height: 2.2em;
		line-height: 2.2em;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
	}
	.stock-box {
		background-color: rgb(255, 255, 255);
	}
	.input-container {
		display: flex;
		justify-content: space-between;
		padding: 15px;
	}
	.inline-text {
		font-weight: 400;
		font-size: 14px;
	}
</style>
