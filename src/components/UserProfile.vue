<template>
    <div class="container my-5 relative">
        <!-- Loader -->
        <!-- <div v-if="loading" class="flex justify-center items-center min-h-screen">
            <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
        </div> -->

        <!-- Your page content -->
        <div v-if="loading" class="loading-overlay">
            <div class="spinner-container">
                <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#ff1d5e" />
            </div>
        </div>

        <!-- E-Commerce-0.0.1-SNAPSHOT.jar -->
        <!-- Profile Card -->
        <div :class="{ 'opacity-70': loading }">
            <div class="card shadow-sm">
                <div class="row g-0 flex flex-col md:flex-row">
                    <!-- Back Link -->
                    <router-link to="/home"
                        class="text-decoration-none text-dark mb-3 ms-3 mt-3 d-inline-flex align-items-center my-3">
                        <i class="fas fa-arrow-left me-2 sm:my-4"></i> Back to Home
                    </router-link>

                    <!-- Profile Section -->
                    <div class="col-md-4 text-center bg-light p-4 flex flex-col items-center justify-center">
                        <!-- Profile Picture -->
                        <div class="position-relative mb-3">
                            <img :src="user.avatar || defaultAvatar" alt="User Avatar"
                                class="rounded-circle object-cover" width="120" height="120" />
                            <button class="btn btn-sm btn-primary position-absolute bottom-0 end-0 rounded-circle"
                                style="width: 35px; height: 35px;" title="Edit Profile" data-bs-toggle="modal"
                                data-bs-target="#ImageUploadModal">
                                <i class="fa fa-camera"></i>
                            </button>
                        </div>

                        <h4 class="fw-bold text-lg sm:text-xl">{{ user.name }}</h4>
                        <p class="text-muted text-sm">{{ user.email }}</p>
                        <p class="text-muted text-sm">{{ user.phone }}</p>

                        <button class="btn btn-primary btn-sm mt-2" data-bs-toggle="modal" data-bs-target="#userModal">
                            <i class="fas fa-edit me-1"></i>Edit Profile
                        </button>
                    </div>

                    <!-- Account Details -->
                    <div class="col-md-8 p-4">
                        <h5 class="mb-3 text-lg sm:text-xl">Account Details</h5>

                        <div class="row mb-3 text-sm sm:text-base">
                            <div class="col-sm-6 mb-2">
                                <strong>Address:</strong> {{ user.address }}
                            </div>
                            <div class="col-sm-6 mb-2">
                                <strong>City:</strong> {{ user.city }}
                            </div>
                        </div>

                        <div class="row mb-4 text-sm sm:text-base">
                            <div class="col-sm-6 mb-2">
                                <strong>Country:</strong> {{ user.country }}
                            </div>
                            <div class="col-sm-6 mb-2">
                                <strong>Postal Code:</strong> {{ user.postalCode }}
                            </div>
                        </div>

                        <!-- Orders Section -->
                        <h5 class="mb-3 text-lg sm:text-xl">Your Orders</h5>

                        <div class="row text-center mb-3">
                            <div class="col-6 col-sm-3 mb-3">
                                <div class="border rounded p-3">
                                    <h4 class="mb-0">{{ orderStats.totalOrders }}</h4>
                                    <small class="text-muted">Total</small>
                                </div>
                            </div>
                            <!-- <div class="col-6 col-sm-3 mb-3">
                            <div class="border rounded p-3">
                                <h4 class="mb-0">{{ user.orders?.pending || 0 }}</h4>
                                <small class="text-muted">Pending</small>
                            </div>
                        </div>
                        <div class="col-6 col-sm-3 mb-3">
                            <div class="border rounded p-3">
                                <h4 class="mb-0">{{ user.orders?.delivered || 0 }}</h4>
                                <small class="text-muted">Delivered</small>
                            </div>
                        </div>
                        <div class="col-6 col-sm-3 mb-3">
                            <div class="border rounded p-3">
                                <h4 class="mb-0">{{ user.orders?.cancelled || 0 }}</h4>
                                <small class="text-muted">Cancelled</small>
                            </div>
                        </div> -->
                            <div class="col-6 col-sm-3 mb-3">
                                <div class="border rounded p-3">
                                    <h4 class="mb-0">{{ orderStats.pending }}</h4>
                                    <small class="text-muted">Pending</small>
                                </div>
                            </div>
                            <div class="col-6 col-sm-3 mb-3">
                                <div class="border rounded p-3">
                                    <h4 class="mb-0">{{ orderStats.delivered }}</h4>
                                    <small class="text-muted">Delivered</small>
                                </div>
                            </div>
                            <div class="col-6 col-sm-3 mb-3">
                                <div class="border rounded p-3">
                                    <h4 class="mb-0">{{ orderStats.cancelled }}</h4>
                                    <small class="text-muted">Cancelled</small>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                            <router-link to="/history" class="btn btn-outline-primary flex items-center">
                                <i class="fas fa-shopping-bag me-1"></i>View Orders
                            </router-link>
                            <button class="btn btn-outline-success flex items-center">
                                <i class="fas fa-heart me-1"></i>Wishlist
                            </button>
                            <button class="btn btn-outline-warning flex items-center">
                                <i class="fas fa-address-book me-1"></i>Addresses
                            </button>
                            <button class="btn btn-outline-danger flex items-center">
                                <i class="fas fa-sign-out-alt me-1"></i>Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Profile Modal -->
        <div class="modal fade" id="userModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-user-edit me-2"></i>Edit Profile
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <!-- Form Fields -->
                            <div class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Name</label>
                                    <input v-model="user.name" type="text" class="form-control"
                                        @input="validateTextWithSpaces" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Email</label>
                                    <input v-model="user.email" type="email" @input="validateEmailInput"
                                        class="form-control" />
                                    <p v-if="emailerror" class="text-red-500 text-sm mt-1">{{ emailerror }}</p>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Phone</label>
                                    <vue-tel-input v-model="user.phone" class="form-control" mode="international" />
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Address</label>
                                    <input v-model="user.address" type="text" class="form-control"
                                        @input="validateAddressStrict" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">City</label>
                                    <input v-model="user.city" type="text" class="form-control" @input="validateCity" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Country</label>
                                    <select v-model="user.country" class="form-select">
                                        <option disabled value="">Select</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Postal Code</label>
                                    <input v-model="user.postalCode" type="text" class="form-control"
                                        @input="validatePostalCode" />
                                </div>
                                <p v-if="!validatePostalCode" class="text-red-500 text-sm mt-1">{{
                                    validatePostalCode }}
                                </p>
                            </div>
                            <button type="button" class="btn btn-success w-100 mt-3" data-bs-dismiss="modal"
                                @click="submitForm">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Upload Modal -->
        <div class="modal fade" id="ImageUploadModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-user-edit me-2"></i> Upload New Profile Image
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <label
                            class="d-inline-flex align-items-center justify-content-center border border-2 border-dashed rounded-circle cursor-pointer p-3"
                            style="width: 130px; height: 130px;">
                            <input type="file" class="d-none" @change="onFileChange" accept="image/*" />
                            <span v-if="!preview" class="fs-1 text-muted">+</span>
                            <img v-else :src="preview" alt="Preview" class="rounded-circle object-cover" width="120"
                                height="120" />
                        </label>
                    </div>
                    <div class="modal-footer">
                        <button @click="uploadImage" :disabled="!selectedFile" data-bs-dismiss="modal"
                            class="btn btn-primary">
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { LoopingRhombusesSpinner } from 'epic-spinners';
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Swal from 'sweetalert2';
import { useUserData } from '@/localstorage';

export default {
    name: "UserProfile",
    components: {
        LoopingRhombusesSpinner, VueTelInput, FontAwesomeIcon
    },
    data() {
        return {
            isLoading: false,
            userObj: '',
            orderHistory: [],
            defaultAvatar: "https://i.pravatar.cc/150?img=3",
            loading: false,
            uploadProgress: 0,
            uploadError: '',
            preview: '',
            emailerror: '',
            selectedFile: null,
            formData: {
                name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                country: '',
                postalCode: '',
                username: '',
                avatar: ''
            },
            errors: {},
            user: {
                id: '',
                name: 'Raj Chauhan',
                email: "raj@example.com",
                phone: "+91 9876543210",
                address: "123 Main Street",
                city: "Mumbai",
                country: "India",
                postalCode: "400001",
                avatar: "", // URL if user uploaded a picture
            },
            useUser: useUserData(),
        };
    },
    mounted() {
        // this.userObj = JSON.parse(localStorage.getItem('user'))
        this.userObj = this.useUser.getUser();
        console.log(this.userObj)
        this.user.name = this.userObj.name
        this.user.email = this.userObj.email
        this.user.id = this.userObj.id
        this.getUserProfile();
        this.initializeFormData();
        this.getOrderHistory();
    },
    filters: {
        formatDate(value) {
            if (!value) return "";
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(value).toLocaleDateString(undefined, options);
        },
    },
    methods: {
        async getOrderHistory() {
            try {
                const response = await axios.get(`https://ecommerce-hjlr.onrender.com/history/get/${this.userObj.id}`, {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                })
                this.orderHistory = response.data;
                console.log(response)
                console.log(this.orderHistory)
            } catch (error) {
                console.log(error)
            }

        },
        validatePostalCode(event) {
            // Remove any non-digit characters and limit to 6 digits
            let value = event.target.value.replace(/\D/g, '').slice(0, 6);
            event.target.value = value;
            this.user.postalCode = value;

            return value.length >= 4 && value.length <= 6;
        },
        validateAddressStrict(event) {
            // Only allows letters, numbers, spaces, and hyphens
            let value = event.target.value.replace(/[^a-zA-Z0-9\s\-]/g, '');
            event.target.value = value;
            this.user.address = value;

            return value.length >= 5 && value.length <= 100;
        },
        validateCity(event) {
            let value = event.target.value.replace(/[^a-zA-Z]/g, '');
            event.target.value = value;
            this.user.city = value;
            return value;
        },
        validateTextWithSpaces(event) {
            let value = event.target.value.replace(/[^a-zA-Z\s]/g, '');

            // Update both the input value and your data model
            event.target.value = value;
            this.user.name = value;
            return value;
        },
        validateEmailInput() {
            // Simple validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!this.user.email) {
                this.emailerror = 'Email is required';
            } else if (!emailRegex.test(this.user.email)) {
                this.emailerror = 'Please enter a valid email address';
            } else {
                this.emailerror = '';
            }
        },
        async getOrderHistory() {
            try {
                const response = await axios.get(`https://ecommerce-hjlr.onrender.com/history/get/${this.userObj.id}`, {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                })
                this.orderHistory = response.data;
                console.log(response)
                console.log(this.orderHistory)
            } catch (error) {
                console.log(error)
            }
        },
        onFileChange(e) {
            this.selectedFile = e.target.files[0];
            this.preview = URL.createObjectURL(this.selectedFile);
        },
        async uploadImage() {
            try {
                this.loading = true
                const formData = new FormData();
                formData.append('file', this.selectedFile);

                const response = await axios.post(`https://ecommerce-hjlr.onrender.com/user/upload/image/${this.userObj.id}`, formData, {
                    headers: {
                        'Authorization': 'Bearer ' + this.userObj.token,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                // this.profileImageUrl = response.data;
                console.log(response)
                console.log(response.data)
                this.user.avatar = response.data
                this.useUser.updateUser(this.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Image uploaded successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            } catch (error) {
                console.log(error)
                this.loading = false
            }
            this.loading = false
        },
        async getUserProfile() {
            this.isLoading = true

            try {
                const response = await axios.get(`https://ecommerce-hjlr.onrender.com/user/getUserProfile/${this.userObj.id}`, {
                    headers: {
                        Authorization: 'Bearer ' + this.userObj.token
                    }
                })
                console.log(response)
                console.log(response.data)
                this.user = response.data

                // localStorage.setItem('user', JSON.stringify(response.data.body))
            } catch (error) {
                console.log(error)
            }
            finally {
                this.isLoading = false
            }
        },
        initializeFormData() {
            this.formData = {
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email,
                phone: this.user.phone,
                address: this.user.address,
                city: this.user.city,
                country: this.user.country,
                postalCode: this.user.postalCode,
                username: this.user.username,
                avatar: this.user.avatar
            };
        },

        handleFileSelect(event) {
            const file = event.target.files[0];
            if (!file) return;

            // Validate file type
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                this.uploadError = 'Please select a valid image file (JPEG, PNG, GIF)';
                return;
            }

            // Validate file size (2MB max)
            const maxSize = 2 * 1024 * 1024; // 2MB in bytes
            if (file.size > maxSize) {
                this.uploadError = 'File size must be less than 2MB';
                return;
            }

            this.uploadError = '';
            this.selectedFile = file;
            this.user.avatar = file.name;
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                this.tempAvatar = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        removeProfilePicture() {
            this.tempAvatar = '';
            this.selectedFile = null;
            this.formData.avatar = '';
            this.user.avatar = '';
            if (this.$refs.fileInput) {
                this.$refs.fileInput.value = '';
            }
        },

        async uploadProfilePicture() {
            // if (!this.selectedFile) {
            //     return this.user.avatar; // Return existing avatar if no new file
            // }

            try {
                // Simulate upload progress
                for (let i = 0; i <= 100; i += 20) {
                    this.uploadProgress = i;
                    await new Promise(resolve => setTimeout(resolve, 200));
                }

                // In real application, upload to your server/cloud storage
                // For demo, we'll create a mock URL and store in localStorage
                const mockImageUrl = URL.createObjectURL(this.selectedFile);
                console.log(mockImageUrl)
                // // Store in localStorage for persistence (replace with actual API call)
                // const userData = JSON.parse(localStorage.getItem('userProfile') || '{}');
                // userData.avatar = mockImageUrl;
                // localStorage.setItem('userProfile', JSON.stringify(userData));

                this.uploadProgress = 0;
                return mockImageUrl;

            } catch (error) {
                console.error('Upload failed:', error);
                this.uploadError = 'Failed to upload image. Please try again.';
                this.uploadProgress = 0;
                return null;
            }
        },

        validateForm() {
            this.errors = {};
            let isValid = true;

            // Required fields validation
            const requiredFields = ['name', 'email', 'phone'];
            requiredFields.forEach(field => {
                if (!this.user[field]?.trim()) {
                    this.errors[field] = `${this.formatFieldName(field)} is required`;
                    isValid = false;
                }
            });

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.formData.email && !emailRegex.test(this.formData.email)) {
                this.errors.email = 'Please enter a valid email address';
                isValid = false;
            }

            return isValid;
        },

        formatFieldName(field) {
            return field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
        },

        async submitForm() {
            // if (!this.validateForm()) {
            //     console.log('validation error')
            //     return;
            // }



            this.loading = true;

            try {
                // Upload profile picture first if selected
                if (this.selectedFile) {
                    const uploadedUrl = await this.uploadImage();
                    console.log('Uploaded URL:', uploadedUrl);
                    if (uploadedUrl) {
                        this.formData.avatar = uploadedUrl;
                        // Also update user object if needed
                        this.user.avatar = uploadedUrl;
                    }
                }

                // Remove the simulated API call since you're making a real one
                // await new Promise(resolve => setTimeout(resolve, 1000));

                // Make the actual API call
                const response = await axios.post(
                    'https://ecommerce-hjlr.onrender.com/user/update/user',
                    this.user,
                    {
                        headers: {
                            Authorization: 'Bearer ' + this.userObj.token
                        }
                    }
                );

                console.log('API Response:', response);
                console.log('Response Data:', response.data);

                // UPDATE THE COMPOSABLE FIRST with the API response
                this.useUser.updateUser(response.data);

                // THEN update local component state from composable
                // Use the correct method based on your composable:
                this.userObj = this.useUser.getCurrentUser ? this.useUser.getCurrentUser() : this.useUser.user;

                console.log('Updated userObj:', this.userObj);

                // Also update this.user if needed
                this.user = { ...response.data };

                // Show success message
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Data saved successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                // Only call getUserProfile if you need to refresh additional data
                // If the API already returns complete user data, you don't need this
                // this.getUserProfile();

            } catch (error) {
                console.error('Error updating profile:', error);
                this.uploadError = 'Failed to update profile. Please try again.';

                // Show error message to user
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Update failed",
                    text: error.response?.data?.message || 'Please try again',
                    showConfirmButton: true,
                });
            } finally {
                this.loading = false;
            }
        }
    },
    computed: {
        // isFormValid() {
        //     // Check postal code (4-6 digits)
        //     const isPostalValid = this.postalCode.length >= 4 && this.postalCode.length <= 6;

        //     // Check address (5-100 characters)
        //     const isAddressValid = this.user.address.length >= 5 && this.user.address.length <= 100;

        //     // Check city (at least 1 character)
        //     const isCityValid = this.user.city.length > 0;

        //     // Check name (at least 1 character)
        //     const isNameValid = this.user.name.length > 0;

        //     // Check email (no error message means valid)
        //     const isEmailValid = !this.emailerror && this.user.email.length > 0;

        //     // Return true only if ALL validations pass
        //     return isPostalValid && isAddressValid && isCityValid && isNameValid && isEmailValid;
        // }
        orderStats() {
            // Get unique orders with their status
            const uniqueOrders = [...new Map(
                this.orderHistory.map(order => [order.orderId, order.status])
            ).values()];

            // Count statuses from unique orders
            const statusCount = {};
            uniqueOrders.forEach(status => {
                statusCount[status] = (statusCount[status] || 0) + 1;
            });

            return {
                totalOrders: uniqueOrders.length,
                pending: statusCount.PENDING || 0,
                delivered: statusCount.SUCCESS || 0,
                cancelled: statusCount.FAILED || 0
            };
        }
    }
};
</script>

<style scoped>
.card {
    border-radius: 15px;
}

.border {
    border-width: 2px !important;
}

.avatar-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.avatar-preview {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border: 3px solid #dee2e6;
    transition: all 0.3s ease;
}

.avatar-placeholder {
    background-color: #f8f9fa;
    border: 3px dashed #dee2e6;
}

.avatar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.avatar-container:hover .avatar-overlay {
    opacity: 1;
}

.avatar-upload-label {
    color: white;
    text-align: center;
    cursor: pointer;
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    /* Semi-transparent white */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner-container {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.avatar-upload-label i {
    font-size: 1.5rem;
}

.btn {
    border-radius: 8px;
}

.modal-header {
    border-radius: 10px 10px 0 0;
}

.modal-content {
    border-radius: 10px;
}
</style>