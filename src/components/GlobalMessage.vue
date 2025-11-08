<template>
  <div v-if="showMessage" class="global-message">
    <div class="message-content">
      <span class="message-text">{{ message }}</span>
      <div class="message-controls">
        <!-- <button @click="pauseCycle" class="control-btn" title="Pause">
          ⏸
        </button> -->
        <button @click="hideMessage" class="close-btn" title="Close">
          ×
        </button>
        <router-link to="/jokes" class="control-btn btn btn-primary">See Jokes</router-link>
      </div>
    </div>
    <!-- <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressWidth + '%' }"></div>
    </div> -->
  </div>
</template>

<script>
import { useMessageStore } from '@/messageInterval'
import { storeToRefs } from 'pinia'

export default {
  name: 'GlobalMessage',

  data() {
    return {
      progressWidth: 100,
      progressInterval: null
    }
  },

  setup() {
    const messageStore = useMessageStore()
    const { showMessage, message } = storeToRefs(messageStore)

    return {
      messageStore,
      showMessage,
      message
    }
  },

  methods: {
    pauseCycle() {
      this.messageStore.hideMessage()
    },

    hideMessage() {
      this.messageStore.hideAndRestart()
    },

    updateProgressBar() {
      if (!this.showMessage) {
        this.progressWidth = 100
        return
      }

      this.progressWidth -= 0.1
      if (this.progressWidth <= 0) {
        this.progressWidth = 100
      }
    }
  },

  mounted() {
    this.progressInterval = setInterval(() => {
      this.updateProgressBar()
    }, 100)
  },

  beforeUnmount() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval)
    }
  }
}
</script>

<style scoped>
.global-message {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  min-width: 300px;
  max-width: 400px;
}

.message-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.message-text {
  flex: 1;
  font-weight: 500;
}

.message-controls {
  display: flex;
  gap: 5px;
}

.control-btn,
.close-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.control-btn:hover,
.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.close-btn {
  font-size: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-bar {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin-top: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: white;
  transition: width 0.1s linear;
}
</style>