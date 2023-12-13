<!-- Lightbox.vue -->
<template>
    <div class="lightbox">
      <div class="lightbox-content">
        <img :src="currentImage.large" :alt="currentImage.alt" />
        <button @click="closeLightbox">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: Array,
      currentIndex: Number,
    },
    data() {
      return {
        currentImage: this.images[this.currentIndex],
      };
    },
    watch: {
      currentIndex(newIndex) {
        this.currentImage = this.images[newIndex];
      },
    },
    methods: {
      closeLightbox() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your lightbox styles here */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .lightbox-content {
    max-width: 80%;
    max-height: 80%;
    overflow: hidden;
    position: relative;
  }
  
  .lightbox img {
    width: 100%;
    height: auto;
  }
  
  .lightbox button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  