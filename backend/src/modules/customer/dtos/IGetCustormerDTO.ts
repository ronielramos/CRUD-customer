export default interface IGetCustomerDTO {
  id: string;

  CPF: string;

  active: boolean;
  birthdate: Date;
  createdAt: Date;
  email: string;
  name: string;
  phone: string;
}
