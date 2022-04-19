import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async (connection) => {

    console.log("Inserting a new user into the database...")
    
  }).catch(error => console.log(error))
  
  //   const user = new User()
  //   user.firstName = "Timber"
  //   user.lastName = "Saw"
  //   user.age = 25
  // const userRepository =  connection.getRepository(User);
  // const listOneUser = await userRepository.findOne({ where: {age: 25} })
  // console.log(listOneUser);

  // const [records, count] = await userRepository.findAndCount();

  // console.log({records})
  // console.log({count})