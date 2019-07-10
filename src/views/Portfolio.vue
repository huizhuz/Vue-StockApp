<template>
    <div class="container">
        <my-stock-apple v-if="this.$store.state.myStocksQuantity.Apple != 0" class="container-item"></my-stock-apple>        
        <my-stock-bmw v-if="this.$store.state.myStocksQuantity.BMW != 0" class="container-item"></my-stock-bmw>
        <my-stock-google v-if="this.$store.state.myStocksQuantity.Google != 0" class="container-item"></my-stock-google>
        <my-stock-twitter v-if="this.$store.state.myStocksQuantity.Twitter != 0" class="container-item"></my-stock-twitter>
    </div>
</template>

<script>
import BMW from './Portfolio/MyBMW.vue'
import Apple from './Portfolio/MyApple'
import Google from './Portfolio/MyGoogle.vue'
import Twitter from './Portfolio/MyTwitter.vue'

export default {
    data(){
        return {
        }
    },
    components: {
        'my-stock-bmw': BMW,
        'my-stock-apple': Apple,
        'my-stock-google': Google,
        'my-stock-twitter': Twitter
    }
}
</script>

<style>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
}
.container-item {
    width: 45%;
    margin-bottom: 20px;
    border: 2px solid #cacdd3;
    border-radius: 5px;
}
</style>
