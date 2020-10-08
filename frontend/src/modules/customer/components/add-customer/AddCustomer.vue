<template>
  <div class="submit-form">
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

    <form v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          minlength="2"
          required
          v-model="customer.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="customer.email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          class="form-control"
          id="cpf"
          minlength="11"
          maxlength="11"
          required
          v-model="customer.CPF"
          name="cpf"
        />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          class="form-control"
          id="phone"
          required
          v-model="customer.phone"
          name="phone"
        />
      </div>

      <div class="form-group">
        <label for="birthdate">Birthdate</label>
        <input
          class="form-control"
          id="birthdate"
          required
          v-model="customer.birthdate"
          name="birthdate"
          type="date"
        />
      </div>

      <button @click="saveCustomer" class="btn btn-success">Submit</button>
    </form>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCustomer">Add</button>
    </div>

  </div>

</template>

<script src="./AddCustomer.js"></script>
<style src="./AddCustomer.css"></style>
