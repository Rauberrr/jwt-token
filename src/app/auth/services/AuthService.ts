import jwt from 'jsonwebtoken'
import config from '../../../config'

export default class AuthService {
  public async signIn (email: string, senha: string): Promise<{ user, token }> {
    const users = {
      id: 1,
      email: 'email',
      senha: '123'
    }

    if (email !== users.email || senha !== users.senha) {
      throw new Error('Credenciais Invalidas')
    }

    try {
      const { id } = users.id

      const token = jwt.sign({ id }, config.auth.secret, {
        expiresIn: config.auth.expiresIn
      })

      return {
        user: {
          email,
          senha
        },
        token
      }
    } catch (error) {
      throw new Error('Erro ao gerar o token')
    }
  }

  public async tokenValidate (token: string): Promise<void> {
    try {
      const equals = jwt.verify(token, config.auth.secret)

      return equals
    } catch (erro) {
      throw new Error('Token Invalido')
    }
  }
}
