<template>
        
        <div class="home">
        <div class="destinations">
                <router-link 
                v-for="destination in destinations"
                :key="destination.id"
                :to="destination.slug/*{name: 'destination.show', params:{id: destination.id}}*/"
                class="destination-item"
                @mouseover="changeImage(destination.id, true)"
                @mouseout="changeImage(destination.id, false)"
                >
                <img :src="destination.hovered ? `/images/${destination.hoverImage}` : `/images/${destination.image}`" :alt="destination.name">
                    <div class="destination-text">
                        <h2>{{ destination.name }}</h2>
                        <p>{{ destination.description }}</p>
                    </div>
                </router-link>
            
        </div>
     </div>
</template>

<script>
    import sourceData from '@/data.json'
    export default {
        data() {
            return {
                destinations: sourceData.destinations
            }
        },
      methods: {
      changeImage(id, isHovered) {
      const destination = this.destinations.find(dest => dest.id === id);
      if (destination) {
        destination.hovered = isHovered;
      }
    },
  },
}
</script>

<style scoped>
/* Styles for destination names and descriptions */
.destination-title img{
  margin-top:0px;
  max-width: 30%;
  height: auto;
  top: 0;
}
.destination-text {
  text-align: center; /* Optional: Center the text */
}

.destination-text {
  font-size: 1.5rem; /* Adjust font size as needed */
  color: #c0a7a7; /* Set text color */
  font-family: Trattatello, fantasy;
}
.destination-text:hover {
  color: #999bc3;
}
</style>


  

  