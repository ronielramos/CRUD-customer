// /* eslint-disable no-useless-constructor */
// import { injectable, inject } from 'tsyringe'

// interface IRequestDTO {
//   name: string;
//   email: string;
//   password: string;
// }

// @injectable()
// class CreateUserService {
//   constructor(
//     @inject('UsersRepository')
//     private customerRepository: ICus,

//     @inject('HashProvider')
//     private hashProvider: IHashProvider,
//   ) {}

//   public async execute({ name, email, password }: IRequestDTO): Promise<User> {
//     const checkUserExists = await this.usersRepository.findByEmail(email);

//     if (checkUserExists) {
//       throw new AppError(
//         `An user with the same email ${email} already exists.`,
//       );
//     }

//     // const hashedPassword = await hash(password, 8);
//     const hashedPassword = await this.hashProvider.generateHash(password);

//     const user = await this.usersRepository.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     return user;
//   }
// }

// export default CreateUserService;
