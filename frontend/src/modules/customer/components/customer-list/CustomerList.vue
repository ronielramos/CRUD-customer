<template>

  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
          v-model="name" @keypress.enter="searchName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Customers List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(customer, index) in customers"
          :key="index"
          @click="currentCustomer = customer"
        >
          {{ customer.name }}
        </li>

      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentCustomer">
        <h4>Customer</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentCustomer.name }}
        </div>
        <div>
          <label><strong>E-mail:</strong></label> {{ currentCustomer.email }}
        </div>

        <a class="badge badge-warning"
          :href="'/customer/' + currentCustomer.id"
        >
          Edit
        </a>
        <button class="badge badge-danger mr-2" @click="deleteCustomer(currentCustomer.id)">
          Delete
        </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Customer...</p>
      </div>
    </div>
  </div>

</template>

<script src="./CustomerList.js"></script>
<style src="./CustomerList.css"></style>
