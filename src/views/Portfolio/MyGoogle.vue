<template>
	<div class="stock-box">
		<h4>
			Google
			<span class="inline-text">(price: {{price}}, quantity: {{ myQuantity }})</span>
		</h4>
		<div class="input-container">
			<el-input style="max-width: 150px" type="text" v-model="sellQuantity" placeholder="Quantity" />
			<el-button type="info" plain @click="sellStock">Sell</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				myQuantity: this.$store.state.myStocksQuantity.Google,
				sellQuantity: 0
			};
		},
		methods: {
			sellStock() {
				if (this.sellQuantity <= this.myQuantity) {
					this.$store.state.myStocksQuantity.Google -= parseInt(
						this.sellQuantity
					);
					this.myQuantity = this.$store.state.myStocksQuantity.Google;
					this.$store.state.fund += this.price * this.sellQuantity;
				} else {
                    alert("You cannot sell more than you have!")
                }
			}
		},
        computed:{
            price(){
                return this.$store.state.stockPrice.Google;
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