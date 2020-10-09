import ErrorHandlerService from '../../../../shared/services/ErrorHandlerService';
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
      errorHandlerService: ErrorHandlerService,
    };
  },

  methods: {
    async retrieveCustomers() {
      try {
        const response = await this.customerDataService.getAll();
        this.customers = response.data;
      } catch (error) {
        this.errorHandlerService.handleHttpErrorMessage(error, this.errors);
      }
    },

    async refreshList() {
      await this.retrieveCustomers();
      this.currentCustomer = null;
      this.currentIndex = -1;
    },

    async searchName() {
      try {
        const response = await this.customerDataService.findByName(this.name);
        this.customers = response.data;
      } catch (error) {
        this.errorHandlerService.handleHttpErrorMessage(error, this.errors);
      }
    },

    async deleteCustomer(id) {
      await this.customerDataService.delete(id);

      this.currentCustomer = null;

      this.customers = this.customers
        .filter((customer) => customer.id !== id);
    },

    removeError(errorToRemove) {
      this.errors = this.errors.filter((error) => error !== errorToRemove);
    },
  },

  mounted() {
    this.retrieveCustomers();
  },
};
