<template>
    <div class="concept-text">
        <p class="concept-paragraph"> concept art based on the books written by Sarah J. Mass</p>
      </div>
    <figure class='full-width'>
        <img src="/images/Feyre.png?url">
        <img src="/images/sunset1.jpg?url" alt="a cat">
    </figure>
    <div class="container">
</div>
</template>

<script>
</script>

<style>
.container img {
  scroll-margin-top:120px;
  height:auto;
  width: 100%;
  object-fit:cover;
}
.full-width img { 
  max-width: 100%; 
}

main {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

p, figure {
  margin: 15px 0;
}
.concept-text {
    margin-top: 20px;
    max-width: 100%; /* Adjust the width based on your design */
  }
  .concept-header {
    top: 55px;
    color: #c5c2d6; /* Change this to your desired color for the header */
    font-size: 20px; /* Adjust the font size if needed */
  }
  .concept-paragraph {
    color: #b5aae3; /* Change this to your desired color for the header */
    font-size: 15px; /* Adjust the font size if needed */
  }
</style>