<template>
  <div id="app">
    <section :class="$style.welcome">
      <h1 :class="$style.title"><img src="https://vuejs.org/images/logo.png" width="80" alt=""></h1>
    </section>
    <section :class="$style.tip">
      <h2>Server message</h2>

      <div>Message from server: <b>{{message}}</b></div>

      <br/>

      <h2>Items list</h2>

      <list-component></list-component>
    </section>
  </div>
</template>

<style>
  html, body, #app {
    height: 100%;
  }
  body {
    background-color: #f9f9f9;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>

<!-- you can use css modules but it's not necessary -->
<style module>
  .welcome {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
  }
  .welcome:after {
    content: '';
    height: 3px;
    background-color: #fff;
    display: block;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .title {
    margin: 0;
    font-size: 60px;
    color: #4fc08d;
    text-shadow: 0 0 1px #ccc;
    display: flex;
    align-items: center;
  }
  .title img {
    margin: 0 20px;
  }
  .tip {
    margin-left: 100px;
    font-size: 20px;
  }
</style>

<script src="./App.vue.js"></script>