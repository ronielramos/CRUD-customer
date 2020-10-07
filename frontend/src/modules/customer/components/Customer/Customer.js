import CustomerDataService from '../../services/CustomerDataService';

export default {
  name: 'customer',

  data() {
    return {
      currentCustomer: {},
      message: '',
      customerDataService: CustomerDataService,
    };
  },

  methods: {
    async getTutorial(id) {
      const response = await this.customerDataService.get(id);
      this.currentCustomer = response.data;
    },

    async updateCustomer() {
      await this.customerDataService.update(this.currentCustomer.id, this.currentCustomer);
      this.message = 'The Customer was updated successfully!';
    },

    async deleteCustomer() {
      await this.customerDataService.delete(this.currentCustomer.id);
      this.$router.push({ name: 'customer' });
    },
  },

  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  },
};
