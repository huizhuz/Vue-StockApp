<template>
    <div class="container">
        <stock-apple class="container-item"></stock-apple>        
        <stock-bmw class="container-item"></stock-bmw>
        <stock-google class="container-item"></stock-google>
        <stock-twitter class="container-item"></stock-twitter>
    </div>
</template>

<script>
import BMW from './Stocks/BMW'
import Apple from './Stocks/Apple'
import Google from './Stocks/Google'
import Twitter from './Stocks/Twitter'

export default {
    data(){
        return {
        }
    },
    components: {
        'stock-bmw': BMW,
        'stock-apple': Apple,
        'stock-google': Google,
        'stock-twitter': Twitter
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
