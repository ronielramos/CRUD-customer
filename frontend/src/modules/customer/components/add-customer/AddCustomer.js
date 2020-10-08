import CustomerDataService from '../../services/CustomerDataService';

export default {
  name: 'add-customer',

  data() {
    return {
      errors: [],
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

    async saveCustomer($event) {
      const data = {
        CPF: this.customer.CPF,
        birthdate: this.customer.birthdate,
        email: this.customer.email,
        name: this.customer.name,
        phone: this.customer.phone,
      };

      if (!this.formIsValid(data)) return;

      try {
        $event.preventDefault();
        const response = await this.customerDataService.create(data);

        this.customer.id = response.data.id;

        this.submitted = true;

        this.errors = [];
      } catch (error) {
        const { message } = error.response.data;
        if (this.errors.find((errorMessage) => errorMessage === message)) return;
        this.errors.push(message);
      }
    },

    newCustomer() {
      this.submitted = false;
      this.customer = {};
    },

    removeError(errorToRemove) {
      this.errors = this.errors.filter((error) => error !== errorToRemove);
    },
  },
};
