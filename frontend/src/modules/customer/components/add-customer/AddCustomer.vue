<template>
  <div class="submit-form">
    <form v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
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

      <button type="submit" @click="saveCustomer" class="btn btn-success">Submit</button>
    </form>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCustomer">Add</button>
    </div>

  </div>

</template>

<script src="./AddCustomer.js"></script>
<style src="./AddCustomer.css"></style>
