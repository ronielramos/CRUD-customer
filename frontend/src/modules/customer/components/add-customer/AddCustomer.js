import CustomerDataService from '../../services/CustomerDataService';

export default {
  name: 'add-customer',

  data() {
    return {
      customer: {
        id: '',
        CPF: '',
        birthdate: null,
        email: '',
        name: '',
        phone: '',
      },
      submitted: false,
      customerDataService: CustomerDataService,
    };
  },

  methods: {
    formIsValid(data) {
      return !Object
        .values(data)
        .some((field) => field == null || field === '');
    },

    async saveCustomer() {
      const data = {
        CPF: this.customer.CPF,
        birthdate: this.customer.birthdate,
        email: this.customer.email,
        name: this.customer.name,
        phone: this.customer.phone,
      };

      console.log(this.formIsValid(data));
      if (!this.formIsValid(data)) return;

      const response = await this.customerDataService.create(data);

      this.customer.id = response.data.id;

      this.submitted = true;
    },

    newCustomer() {
      this.submitted = false;
      this.customer = {};
    },
  },
};
