<template>
  <div class="contact">
    <p class="intro-text">this feature is still in progress...</p>
    <form @submit.prevent="submitForm">
      <div class="label-container">
        <div>
          <label for="firstName">First Name:</label>
          <input v-model="firstName" type="text" id="firstName" required>
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input v-model="lastName" type="text" id="lastName" required>
        </div>
      </div>
      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" required>

      <label for="message">Message:</label>
      <textarea v-model="message" id="message" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        message: this.message,
      };

      axios.post('http://localhost:3000/api/contact', formData)
        .then(response => {
          console.log(response.data);
          // Handle success, e.g., show a success message to the user
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          // Handle error, e.g., show an error message to the user
        });
    },
  },
};
</script>

<style scoped>
.contact {
  max-width: 450px; /* Set a maximum width for better readability */
  margin: auto; /* Center the form on the page */
  
}

form {
  display: flex;
  flex-direction: column;
}

.label-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.label-container > div {
  margin-right: 8px; /* Adjust the margin as needed */
}

label {
  margin-bottom: 8px; /* Add some space between labels and inputs */
  color: #eceaea;
}

input,
textarea {
  margin-bottom: 16px; /* Add some space between inputs and the next label */
  padding: 8px;
  width: 100%; /* Make the inputs take up the full width of the container */
  box-sizing: border-box; /* Include padding and border in the width */
}

button {
  padding: 10px;
  background-color: #323131;
  color: white;
  border: none;
  cursor: pointer;
}
.intro-text{
  color:rgb(160, 121, 82);
  font-size:14px;
  margin-top:0px;
}
button:hover {
  background-color: #868585;
}

/* Add more styles as needed */
</style>