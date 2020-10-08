import CustomerDataService from '../../services/CustomerDataService';

export default {
  name: 'customer-list',

  data() {
    return {
      errors: [],
      customers: [],
      currentCustomer: null,
      currentIndex: -1,
      name: '',
      customerDataService: CustomerDataService,
    };
  },

  methods: {
    async retrieveCustomers() {
      const response = await this.customerDataService.getAll();
      this.customers = response.data;
    },

    async refreshList() {
      await this.retrieveCustomers();
      this.currentCustomer = null;
      this.currentIndex = -1;
    },

    async searchName() {
      const response = await this.customerDataService.findByName(this.name);
      this.customers = response.data;
    },

    async deleteCustomer(id) {
      await this.customerDataService.delete(id);

      this.currentCustomer = null;

      this.customers = this.customers
        .filter((customer) => customer.id !== id);
    },
  },

  mounted() {
    this.retrieveCustomers();
  },
};
