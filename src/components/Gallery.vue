<!-- Gallery.vue -->
<template>
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" @click="openLightbox(index)">
        <img :src="image.thumbnail" :alt="image.alt" />
      </div>
      <Lightbox v-if="lightboxOpen" :images="images" :currentIndex="lightboxIndex" @close="closeLightbox" />
    </div>
  </template>
  
  <script>
  import Lightbox from '@/components/Lightbox.vue';
  
  export default {
    components: {
      Lightbox,
    },
    data() {
      return {
        images: [
          { thumbnail: 'panama.jpg', alt: 'Image 1', large: 'panama.jpg' },
          { thumbnail: 'panama.jpg', alt: 'Image 2', large: 'panama.jpg' },
          // Add more images as needed
        ],
        lightboxOpen: false,
        lightboxIndex: 0,
      };
    },
    methods: {
      openLightbox(index) {
        this.lightboxIndex = index;
        this.lightboxOpen = true;
      },
      closeLightbox() {
        this.lightboxOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your masonry layout styles here */
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .gallery img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  </style>