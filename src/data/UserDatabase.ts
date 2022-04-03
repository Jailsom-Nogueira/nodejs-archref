import { BaseDatabase } from './BaseDatabase';
import { User } from '../model/User';

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = '_users';

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    nickname: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          nickname,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw (error);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }
}
