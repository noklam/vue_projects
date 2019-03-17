<template>
  <div class="button">
    <h1 class="display-2">This is a page of a Fake Data Scientist</h1>
    <v-btn class="pink white--text">Click me la</v-btn>
    <v-btn depressed color="pink">Click me</v-btn>
    <v-btn flat color="pink">Click me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Email Me</span>
      <!-- material design icon lookup automatically -->
    </v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>Email Me</span>
      <!-- material design icon lookup automatically -->
    </v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon right large>email</v-icon>
      <span>Email Me</span>
      <!-- material design icon lookup automatically -->
    </v-btn>

    <v-btn fab depressed small class="pink white--text">
      <v-icon>favorite</v-icon>
      
      <!-- fab to make the button become a circle -->
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
