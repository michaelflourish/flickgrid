<template>
  <div class="profile-container">
    <div class="profile-details">
      <div class="profile-image-container">
        <img :src="$auth.user.picture" alt="Profile image" class="profile-image" />
      </div>
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>
  
    <div class="raw-details">
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<style>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px; /* Adds some space at the top */
  background-color: #f7f7f7; /* Light background for the profile page */
  min-height: 100vh;
}

.profile-image-container {
  width: 200px; /* Adjust the size as needed */
  height: 200px; /* Adjust the size as needed */
  border-radius: 50%; /* Makes the container round */
  overflow: hidden; /* Ensures the image does not bleed outside the container */
  margin-bottom: 20px; /* Space below the image container */
}

.profile-image {
  width: 100%;
  height: auto;
  border-radius: 50%; /* Makes the image round */
  display: block; /* Removes bottom space under the image */
}

.profile-details h2 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 0.5em;
}

.profile-details p {
  color: #666;
  font-size: 1em;
}

.raw-details {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  width: 80%;
  max-width: 500px; /* Ensures the pre element is not too wide */
  word-wrap: break-word; /* Ensures long strings do not overflow */
  overflow: auto; /* Adds scrollbars if content overflows */
}

@media (max-width: 600px) {
  .profile-image-container {
    width: 150px; /* Smaller size on small screens */
    height: 150px; /* Smaller size on small screens */
  }
}
</style>
