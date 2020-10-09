import http from '../../../shared/infra/http';

class CustomerDataService {
  constructor(httpClient) {
    this.http = httpClient;
  }

  getAll() {
    return this.http.get('/v1/customer');
  }

  get(id) {
    return this.http.get(`/v1/customer/${id}`);
  }

  create(customer) {
    return this.http.post('/v1/customer', customer);
  }

  update(id, customer) {
    return this.http.patch(`/v1/customer/${id}`, customer);
  }

  delete(id) {
    return this.http.delete(`/v1/customer/${id}`);
  }

  findByName(name) {
    return this.http.get(`/v1/customer?name=${name}`);
  }
}

export default new CustomerDataService(http);
