import axios from "axios";

export const getCartItems = async (userObj) => {
  try {
    const response = await axios.get(
      `https://ecommerce-hjlr.onrender.com/cart/getAll/${userObj.id}`,
      {
        headers: {
          Authorization: "Bearer " + userObj.token,
        },
      }
    );
    console.log(response);
    console.log(response.data);
    // cartItems.value = response.data
    // this.localCartItems = [...cartItems.value]
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get(
      `https://ecommerce-hjlr.onrender.com/user/getUserProfile/${this.userObj.id}`,
      {
        headers: {
          Authorization: "Bearer " + this.userObj.token,
        },
      }
    );
    console.log(response);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    this.isLoading = false;
  }
};
