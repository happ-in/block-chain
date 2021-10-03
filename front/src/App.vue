<template>
  <div id="App">
    <vue-metamask userMessage="msg" @onComplete="onComplete"> </vue-metamask>
    <div>내 지갑: <input type="text" v-model="myAddress" /></div>
    <div>누군가 지갑: <input type="text" v-model="otherAddress" /></div>
    <div>전송할 BLI: <input type="number" v-model="coin" />BLI</div>
    <button @click="sendBli">전송</button>
  </div>
</template>

<script>
import VueMetamask from "vue-metamask";
// import Web3 from "web3";

export default {
  name: "App",
  components: {
    VueMetamask,
  },
  data() {
    return {
      msg: "This is demo network",
      myMetamask: "",
      otherAddress: "",
      coin: 0,
      myAddress: "",
    };
  },
  methods: {
    onComplete(data) {
      this.myMetamask = data;
    },
    sendBli() {
      this.myAddress = this.myMetamask.metaMaskAddress;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
