import axios from "axios";

export const DadJokes = async () => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response.data.joke);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const V2Jokes = async (category) => {
  try {
    const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


