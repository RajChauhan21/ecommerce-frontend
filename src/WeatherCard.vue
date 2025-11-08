<template>
    <div class="weather-container" :class="positionClass">
        <div class="weather-card">
            <div class="weather-header">
                <h2 class="location">{{ location }}</h2>
                <p class="date">{{ currentDate }}</p>
            </div>

            <div class="weather-body">
                <div class="temperature-section">
                    <img :src="image" :alt="image" class="weather-icon">
                    <div class="temperature">
                        <span class="current-temp">{{ temperature }}°</span>
                        <span class="feels-like">Feels like {{ feelsLike }}°</span>
                    </div>
                </div>

                <div class="weather-details">
                    <p class="description">{{ description }}</p>
                    <div class="additional-info">
                        <span class="humidity"><i class="bi bi-droplet"></i> {{ humidity }}%</span>
                        <span class="wind"><i class="bi bi-wind"></i> {{ windSpeed }} km/h</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'WeatherCard',
    props: {
        location: {
            type: String,
            default: 'New York'
        },
        temperature: {
            type: Number,
            default: 22
        },
        feelsLike: {
            type: Number,
            default: 24
        },
        image: {
            type: String,
            default: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png'
        },
        description: {
            type: String,
            default: 'Partly Cloudy'
        },
        humidity: {
            type: Number,
            default: 65
        },
        windSpeed: {
            type: Number,
            default: 12
        },
        position: {
            type: String,
            default: 'top-right',
            validator: function (value) {
                return ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'].includes(value);
            }
        }
    },

    data() {
        return {
            currentDate: '',
            weatherData: [],
        };
    },
    computed: {
        positionClass() {
            return 'position-' + this.position;
        }
    },
    mounted() {
        this.updateDate();
        // this.getWeather();
    },
    methods: {
        updateDate() {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            this.currentDate = new Date().toLocaleDateString('en-US', options);
        },
        async getWeather() {
            try {
                const response = await axios.get(`http://localhost:8085/user-service/data/get/${this.location}`)
                this.weatherData = response.data
                console.log(response.data);
                console.log(this.weatherData);
            } catch (error) {
                console.log(error)
            }
        }
    }
};
</script>

<style scoped>
.weather-container {
    position: fixed;
    z-index: 1000;
    max-width: 320px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.position-top-right {
    top: 20px;
    right: 20px;
}

.position-top-left {
    position: fixed;
    top: 100px;
    left: 20px;
}

.position-bottom-right {
    bottom: 20px;
    right: 20px;
}

.position-bottom-left {
    bottom: 20px;
    left: 20px;
}

.position-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.weather-card {
    background: linear-gradient(135deg, #9dd0eb 10%, #fafafa 100%);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    color: white;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.weather-card:hover {
    transform: translateY(-5px);
}

.weather-header {
    padding: 20px 20px 10px;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.location {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.date {
    margin: 5px 0 0;
    font-size: 0.9rem;
    opacity: 0.8;
}

.weather-body {
    padding: 15px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.temperature-section {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.weather-icon {
    width: 70px;
    height: 70px;
    margin-right: 15px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
}

.temperature {
    display: flex;
    flex-direction: column;
}

.current-temp {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
}

.feels-like {
    font-size: 0.9rem;
    opacity: 0.9;
}

.weather-details {
    text-align: center;
}

.description {
    margin: 0 0 10px;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
}

.additional-info {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.humidity,
.wind {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
}

.humidity i,
.wind i {
    margin-right: 5px;
}

/* Responsive design */
@media (max-width: 576px) {
    .weather-container {
        max-width: 280px;
    }

    .position-top-right,
    .position-top-left,
    .position-bottom-right,
    .position-bottom-left {
        margin: 10px;
    }

    .weather-header {
        padding: 15px 15px 8px;
    }

    .location {
        font-size: 1.3rem;
    }

    .weather-body {
        padding: 12px 15px 15px;
    }

    .weather-icon {
        width: 60px;
        height: 60px;
    }

    .current-temp {
        font-size: 2rem;
    }
}
</style>