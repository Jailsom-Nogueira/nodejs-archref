import { UserInputDTO, LoginInputDTO } from '../model/User';
import { UserDatabase } from '../data/UserDatabase';
import { IdGenerator } from '../utils/IdGenerator';
import { HashManager } from '../utils/HashManager';
import { Authenticator } from '../utils/Authenticator';
import { InvalidParameterError } from '../error/InvalidParameterError';
import { NotFound } from '../error/NotFound';
import { Unauthorized } from '../error/Unauthorized';

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator,
  ) {}

  async createUser(user: UserInputDTO) {
    const id = this.idGenerator.generate();

    if (!user.email || !user.name || !user.password || !user.nickname) {
      throw new InvalidParameterError('One or more Parameters missing');
    }

    if (user.email.indexOf('@') === -1) {
      throw new InvalidParameterError('Invalid e-mail');
    }

    if (user.password.length < 6) {
      throw new InvalidParameterError('Password is too short');
    }

    const hashPassword = await this.hashManager.hash(user.password);

    await this.userDatabase.createUser(
      id,
      user.email,
      user.name,
      hashPassword,
      user.nickname,
    );

    const accessToken = this.authenticator.generateToken({
      id,
    });

    const userData = {
      accessToken,
      id,
    };
    return userData;
  }

  async getUserByEmail(user: LoginInputDTO) {
    if (!user.email || !user.password) {
      throw new InvalidParameterError('One or more Parameters missing');
    }

    if (user.email.indexOf('@') === -1) {
      throw new InvalidParameterError('Invalid e-mail');
    }

    if (user.password.length < 6) {
      throw new InvalidParameterError('Password is too short');
    }

    const userFromDB = await this.userDatabase.getUserByEmail(user.email);
    if (!userFromDB) {
      throw new NotFound('Email or password incorrect');
    }

    const hashCompare = await this.hashManager.compare(
      user.password,
      userFromDB.getPassword(),
    );

    if (!hashCompare) {
      throw new Unauthorized('Invalid Password!');
    }

    const accessToken = this.authenticator.generateToken({
      id: userFromDB.getId(),
    });

    const userData = {
      accessToken: accessToken,
      id: userFromDB.getId(),
    };
    return userData;
  }
}
