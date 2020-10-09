<template>
  <div v-if="currentCustomer" class="edit-form">
    <div
      class="alert alert-warning alert-dismissible fade show"
      v-for="error in errors"
      :key="error"
      role="alert"
    >
       {{error}}
      <button
        type="button"
        class="close"
        @click="removeError(error)"
        data-dismiss="alert"
        aria-label="Close"
      >
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
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

      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          class="form-control"
          id="phone"
          minlength="9"
          maxlength="14"
          required
          v-model="currentCustomer.phone"
          name="phone"
        />
      </div>

      <div class="form-group">
        <label for="birthdate">Birthdate</label>
        <input
          class="form-control"
          id="birthdate"
          required
          v-model="currentCustomer.birthdate"
          name="birthdate"
          type="date"
        />
      </div>

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
