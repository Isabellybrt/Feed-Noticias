import User from "../entities/User";

export default class AuthService {
  async login(email: string, password: string): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    if (email !== "teste@gmail.com" || password !== "senha") {
      throw new Error("Credenciais inválidas");
    }
    return {
      uID: "1",
      userName: "user1",
    };
  }
}