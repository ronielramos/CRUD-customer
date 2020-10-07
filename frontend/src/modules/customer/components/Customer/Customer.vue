<template>
  <div v-if="currentCustomer" class="edit-form">
    <h4>Customer</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentCustomer.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email"
          v-model="currentCustomer.email"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteCustomer"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateCustomer"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script src="./Customer.js"></script>
<style src="./Customer.css"></style>