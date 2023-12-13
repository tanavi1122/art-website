<template>
  <div class="animation">
      <div class="animation-content">
    <div class="animation-image">
      <!-- Add your image source here -->
      <img src='/images/ballerinapics.PNG?url' onmouseover="this.src='images/ballerina1.GIF';" onmouseout="this.src='/images/ballerinapics.PNG?url';" />
    </div>
    <div class="animation-text">
      <h1 class="animation-header"></h1>
      <p class="animation-paragraph">This is a animation of a ballerina that I created using procreate. I'm new to animation but I plan on learning much more! At first you see the individual frames for each shot, but if you hover over it, you can see the full animation!   </p>
    </div>
  </div>
  </div>
</template>

<style scoped>

/* Add specific styles for the about page */
.animation-content {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 20px auto 0 auto; /* Adjust the top margin to move the container up */
  padding: 120px;
}

.animation-image {
  width: 50%; /* Set the width to 50% to take up half of the available space */
}

.animation-image img {
  max-width: 100%; /* Ensure the image doesn't exceed the width of its container */
  height: auto; /* Maintain the aspect ratio of the image */
}

.animation-text {
  max-width: 45%; /* Adjust the width based on your design */
}
.animation-header {
  color: #becbd7; /* Change this to your desired color for the header */
  font-size: 30px; /* Adjust the font size if needed */
}

.animation-paragraph {
  color: #b8c3d2; /* Change this to your desired color for the text */
  font-size: 16px; /* Adjust the font size if needed */
  line-height: 1.5; /* Adjust the line height for better readability */
}
</style>







