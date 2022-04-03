import * as jwt from 'jsonwebtoken';

export class Authenticator {
  public generateToken(
    input: AuthenticationData,
    expiresIn: string = process.env.JWT_EXPIRES_IN!,
  ): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      },
    );
    return token;
  }

  public verify(token: string): AuthenticationData {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string,
    ) as AuthenticationData;
    const result = {
      id: payload.id,
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
}
