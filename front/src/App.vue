<template>
  <div id="App">
    <div>내 지갑: <input type="text" v-model="myAddress" /></div>
    <div>누군가 지갑: <input type="text" v-model="otherAddress" /></div>
    <div>전송할 BLI: <input type="number" v-model="coin" />BLI</div>
    <button @click="sendBli">전송</button>
  </div>
</template>

<script>
import Web3 from "web3";

export default {
  name: "App",
  data() {
    return {
      myAddress: "0xF61bFD60cdC06b7995E224F295C399aA704B6f0b",
      password: "qls34048977",
      otherAddress: "",
      coin: 0,
    };
  },
  methods: {
    sendBli() {
      let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
      web3.eth.personal.unlockAccount(this.myAddress, this.password).then(async (unlocked) => {
        if (unlocked) {
          console.log("sending Transaction...");
          let receipt = await web3.eth.sendTransaction({
            from: this.myAddress,
            to: this.otherAddress,
            value: this.coin,
          });
          console.log(JSON.stringify(receipt));
        }
      });
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
