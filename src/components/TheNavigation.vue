<template>
  <div>
    <div class="header-container">
    <figure class='title'>
        <img src="/images/header-text2.png?url">
    </figure>
    <div id="nav">
        
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/illustrations">Illustrations</router-link>
    <router-link to="/concept">Concept</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</div>
</div>

</template>

<style>
.header-container {
  display: flex;
  align-items: vertically;
  justify-content: center;
  padding: 20px; /* Adjust padding as needed */
}
.title img{
  margin-top:0px;
  max-width: 250px;
  height: auto;
  top: 0;
}

</style>