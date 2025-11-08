<template>
  <div class="jokes-container min-vh-100 d-flex align-items-center justify-content-center">
    <!-- Background Overlay -->
    <div class="background-overlay"></div>

    <!-- Main Content -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <!-- Header -->
          <div class="text-center m-3">
            <p class="lead text-light opacity-75">Take a breath and enjoy some laughs!</p>
          </div>

          <!-- Joke Card -->
          <div class="card joke-card shadow-lg border-0">
            <div class="card-body text-center p-5">
              <!-- Joke Emoji -->
              <!-- <div class="joke-emoji mb-4">
                <span class="display-1">{{ currentEmoji }}</span>
              </div> -->

              <!-- Joke Text -->
              <div class="joke-text mb-4">
                <p class="display-6 fw-semibold text-dark">{{ setup ? setup : joke }}</p>
                <div></div>
                <p class="display-6 fw-semibold text-dark">{{ delivery ? delivery : '' }}</p>
              </div>


              <!-- Controls -->
              <div class="controls row g-3 d-flex justify-content-center align-items-center">
                <!-- <div class="col-4">
                  <button @click="previousJoke" :disabled="currentIndex === 0"
                    class="btn btn-outline-primary w-100 py-3" :class="{ disabled: currentIndex === 0 }">
                    <i class="bi bi-arrow-left-circle fs-4"></i>
                    <span class="d-none d-md-inline ms-2">Previous</span>
                  </button>
                </div> -->

                <div class="col-4 ">
                  <button @click="getJokes" class="btn btn-warning w-100 py-3">
                    <i class="bi bi-shuffle fs-4"></i>
                    <span class="d-none d-md-inline ms-2">Joke</span>
                  </button>
                </div>
              </div>

              <!-- Auto-advance Toggle -->
              <div class="form-check form-switch mt-4">
                <select name="category" id="category" class="form-select mt-3" v-model="selectedCategory">
                  <option value="">--select category--</option>
                  <option value="programming">Programming</option>
                  <option value="dark">Dark</option>
                  <option value="pun">Pun</option>
                  <option value="spooky">Spooky</option>
                  <option value="misc">Misc</option>
                  <option value="christmas">Christmas</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Footer Actions -->
          <!-- Footer Actions -->
          <div class="text-center mt-4 mb-5">
            <router-link to="/category" class="btn btn-primary btn-lg px-5 py-3 text-decoration-none">
              <i class="bi bi-arrow-left me-2"></i>
              Back to Categories
            </router-link>
          </div>

        </div>
      </div>
    </div>

    <!-- Confetti Effect -->
    <div v-if="showConfetti" class="confetti-container"></div>
  </div>
</template>

<script>
import { DadJokes, V2Jokes } from '@/jokesApi'

export default {

  data() {
    return {
      joke: '',
      showJokes: true,
      currentIndex: 0,
      autoAdvance: true,
      progressWidth: 100,
      progressInterval: null,
      autoAdvanceInterval: null,
      showConfetti: false,
      selectedCategory:'',
      delivery:'',
      setup:''
    }
  },
  computed: {
    currentJoke() {
      return this.jokes[this.currentIndex]
    },

    currentEmoji() {
      return this.emojis[this.currentIndex]
    }
  },

  methods: {
    async getJokes() {
      const response = await DadJokes();
      this.joke = response.joke
      const category = 'programming'
     const responsev2 =  await V2Jokes(this.selectedCategory);
     this.setup = responsev2.setup || ''
     this.delivery = responsev2.delivery || ''
     this.joke = responsev2.joke || ''
    },
  },

  mounted() {
    this.getJokes();
    this.selectedCategory = 'dark'
  },
}
</script>

<style scoped>
.jokes-container {
  background: linear-gradient(135deg, #b7e9e9 0%, #cfb9e6 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow-y: auto;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}

.joke-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.joke-card:hover {
  transform: translateY(-5px);
}

.joke-emoji {
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

.progress-bar {
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  transition: width 0.1s linear;
}

.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
}

.confetti-container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='50' font-size='8' fill='%23ff4757'%3E🎉%3C/text%3E%3Ctext x='20' y='30' font-size='6' fill='%23ffa502'%3E🎊%3C/text%3E%3Ctext x='80' y='70' font-size='7' fill='%232ed573'%3E😄%3C/text%3E%3C/svg%3E") repeat;
  animation: confettiFall 2s ease-out;
}

@keyframes confettiFall {
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }

  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .joke-card {
    margin: 1rem;
  }

  .display-6 {
    font-size: 1.5rem;
  }

  .display-3 {
    font-size: 2.5rem;
  }
}

/* Body class for full-page mode */
body.jokes-page-active {
  overflow: hidden;
}
</style>