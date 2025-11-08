import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => ({
    showMessage: false,
    message: "",
    intervalId: null,
    displayDuration: 10000, // 10 seconds default
    isPaused: false,
  }),
  actions: {
    startAutoMessage(message, duration = 10000) {
      // Clear any existing cycle
      this.stopMessageCycle();

      this.message = message;
      this.displayDuration = duration;
      this.isPaused = false;

      this.showMessageCycle();
    },
    stopMessageCycle() {
      this.showMessage = false;
      this.isPaused = true;

      if (this.intervalId) {
        clearTimeout(this.intervalId);
        this.intervalId = null;
      }
    },
    showMessageCycle() {
      if (this.isPaused) return;

      // Show the message
      this.showMessage = true;

      // Clear previous timeout
      if (this.intervalId) {
        clearTimeout(this.intervalId);
      }

      // Set timeout to hide and restart
      this.intervalId = setTimeout(() => {
        this.hideAndRestart();
      }, this.displayDuration);
    },
    hideAndRestart() {
      this.showMessage = false;

      // Brief pause before restarting (makes it less jarring)
      setTimeout(() => {
        if (!this.isPaused) {
          this.showMessageCycle();
        }
      }, 100000);
    },
    hideMessage() {
      this.showMessage = false;
      this.isPaused = true;

      if (this.intervalId) {
        clearTimeout(this.intervalId);
        this.intervalId = null;
      }
    },
  },
});
