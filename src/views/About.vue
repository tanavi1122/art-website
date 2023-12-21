<template>
 
    <div class="about">
        <div class="about-content">
      <div class="about-image">
        <!-- Add your image source here -->
        <img src="/images/aboutme.png" alt="About Image">
      </div>
      <div class="about-text">
        <h1 class="about-header">about the artist...</h1>
        <p class="about-paragraph">Hi! My name is a Tanavi Patel and I am a self-taught illustrator and artist. As a university student, I split my time with learning art and pursuing a degree in the tech industry. So far, my art journey has led me to try out a variety of different mediums. For instance, I’ve dabbled with graphite, acrylic and oil paints. Although as of recently, I’ve taken an interest in digital art and having been applying my traditional skills to create digital pieces. In my art process, I take inspiration from books, movies, and sometimes even my own original stories and characters. Thank you for taking the time for a learn a little about me. Over the years, I’ve learned a lot about art and my creative process. I know just as a continue to learn new skills, my art will continue to evolve and I’m exciting to see where it takes me and my art.    </p>
      </div>
    </div>
    </div>
  
</template>

<style scoped>

/* Add specific styles for the about page */
  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: 20px auto 0 auto; /* Adjust the top margin to move the container up */
    padding: 20px;
  }

  .about-image {
    width: 45%; /* Set the width to 50% to take up half of the available space */
    max-width: 400px;
  }

  .about-image img {
    max-width: 100%; /* Ensure the image doesn't exceed the width of its container */
    height: auto; /* Maintain the aspect ratio of the image */
  }

  .about-text {
    width: 45%; /* Adjust the width based on your design */
    max-width: 400px;
  }
  .about-header {
    color: #becbd7; /* Change this to your desired color for the header */
    font-size: 30px; /* Adjust the font size if needed */
  }

  .about-paragraph {
    color: #b8c3d2; /* Change this to your desired color for the text */
    font-size: 16px; /* Adjust the font size if needed */
    line-height: 1.5; /* Adjust the line height for better readability */
  }
</style>

