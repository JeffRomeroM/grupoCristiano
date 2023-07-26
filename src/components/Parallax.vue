<template>
    <div class="gravity-scroll">
      <transition-group name="fade" mode="out-in">
        <div v-for="(item, index) in items" :key="index" class="card" :style="item.style">
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, title: 'Card 1', description: 'Description for Card 1', style: {} },
          { id: 2, title: 'Card 2', description: 'Description for Card 2', style: {} },
          { id: 3, title: 'Card 3', description: 'Description for Card 3', style: {} },
          // Add more cards here
        ],
      };
    },
    methods: {
      animateItems() {
        this.items.forEach((item) => {
          const rect = item.element.getBoundingClientRect();
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const offset = 100;
  
          if (rect.top + scrollTop < window.innerHeight - offset) {
            item.style = {
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 1s, transform 2s ease-in-out', // Adjust duration and animation type as needed
            };
          } else {
            item.style = {
              opacity: 0,
              transform: 'translateY(50px)',
            };
          }
        });
      },
      handleScroll() {
        this.animateItems();
      },
    },
    mounted() {
      this.items.forEach((item) => {
        item.style = {
          opacity: 0,
          transform: 'translateY(50px)',
        };
      });
  
      this.animateItems();
      window.addEventListener('scroll', this.handleScroll);
  
      // Llama a `animateItems` nuevamente cuando el componente es montado
      // para asegurarse de que la animación se aplique inicialmente.
      this.$nextTick(() => {
        this.animateItems();
      });
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style>
  .gravity-scroll {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
  }
  
  .card h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .card p {
    margin: 10px 0;
    font-size: 14px;
    color: #777;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s, transform 1s ease-in-out;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  