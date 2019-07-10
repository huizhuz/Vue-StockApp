import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');
export default new Vuex.Store({
  state: {
    fund:10000,
    stockPrice: {
      BMW: Math.floor(200*Math.random() + 1),
      Apple: Math.floor(200*Math.random() + 1),
      Google: Math.floor(200*Math.random() + 1),
      Twitter: Math.floor(200*Math.random() + 1)
    },
    myStocksQuantity: {
      BMW: 0,
      Apple: 0,
      Google: 0,
      Twitter: 0
    },
  },
  mutations: {
    dayEnded: state=>{
      let min = Math.round(state.stockPrice.BMW*0.9);
      let max = Math.round(state.stockPrice.BMW*1.1);
      state.stockPrice.BMW = Math.floor(Math.random()*(max-min) + min);
      min = Math.round(state.stockPrice.Apple*0.9);
      max = Math.round(state.stockPrice.Apple*1.1);
      state.stockPrice.Apple = Math.floor(Math.random()*(max-min) + min);
      min = Math.round(state.stockPrice.Google*0.9);
      max = Math.round(state.stockPrice.Google*1.1);
      state.stockPrice.Google = Math.floor(Math.random()*(max-min) + min);
      min = Math.round(state.stockPrice.Twitter*0.9);
      max = Math.round(state.stockPrice.Twitter*1.1);
      state.stockPrice.Twitter = Math.floor(Math.random()*(max-min) + min);
    },
    loadData: state => {
      axios.get('https://stockapp-56a38.firebaseio.com/price.json')
      .then(res => {
        const savedArray=[];
        for(let i in res.data){ 
          savedArray.push(res.data[i]); 
        }
        const lastKey=savedArray.length -1;
        state.stockPrice.Apple = savedArray[lastKey].Apple;
        state.stockPrice.BMW = savedArray[lastKey].BMW;
        state.stockPrice.Google = savedArray[lastKey].Google;
        state.stockPrice.Twitter = savedArray[lastKey].Twitter;
      })
      .catch(error => console.log(error));

      axios.get('https://stockapp-56a38.firebaseio.com/quantity.json')
      .then (res => {
          const savedArray =[];
          for (let i in res.data){
            savedArray.push(res.data[i]);
          }
          const lastKey=savedArray.length -1;
          state.myStocksQuantity.Apple=savedArray[lastKey].Apple;
          state.myStocksQuantity.BMW=savedArray[lastKey].BMW;
          state.myStocksQuantity.Google=savedArray[lastKey].Google;
          state.myStocksQuantity.Twitter=savedArray[lastKey].Twitter;
        })
      .catch(error => console.log(error))
    }
  },
  actions: {

  }
})
