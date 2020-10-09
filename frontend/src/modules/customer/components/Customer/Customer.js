import CustomerDataService from '../../services/CustomerDataService';
import ErrorHandlerService from '../../../../shared/services/ErrorHandlerService';

export default {
  name: 'customer',

  data() {
    return {
      errors: [],
      currentCustomer: {},
      message: '',
      customerDataService: CustomerDataService,
      errorHandlerService: ErrorHandlerService,
    };
  },

  methods: {
    async getTutorial(id) {
      const response = await this.customerDataService.get(id);
      this.currentCustomer = response.data;
    },

    async updateCustomer() {
      try {
        await this.customerDataService.update(this.currentCustomer.id, this.currentCustomer);

        this.message = 'The Customer was updated successfully!';
      } catch (error) {
        this.errorHandlerService.handleHttpErrorMessage(error, this.errors);
      }
    },

    async deleteCustomer() {
      try {
        await this.customerDataService.delete(this.currentCustomer.id);

        this.$router.push({ name: 'customer' });
      } catch (error) {
        this.errorHandlerService.handleHttpErrorMessage(error, this.errors);
      }
    },
  },

  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  },
};
