// src/eventBus.js
import { ref } from "vue";

// Shared cart data
export const cartItems = ref([]);

// Event bus functions
export const EventBus = {
  events: {},

  // Listen for events
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },

  // Emit events
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  },
};

// Cart functions
export const addToCart = (product) => {
  const existingItem = cartItems.value.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({
      ...product,
      quantity: 1,
    });
  }

  // Notify all components about cart update
  EventBus.emit("cart-updated", cartItems.value);
};

export const removeFromCart = (productId) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== productId);
  EventBus.emit("cart-updated", cartItems.value);
};

export const updateQuantity = (productId, newQuantity) => {
  const item = cartItems.value.find((item) => item.id === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      EventBus.emit("cart-updated", cartItems.value);
    }
  }
};

export const updatePrice = (productId, totalPrice) => {
  const item = cartItems.value.find((item) => item.id === productId);
  if (item) {
    item.totalPrice = totalPrice;
    EventBus.emit("cart-updated", cartItems.value);
  }
};
