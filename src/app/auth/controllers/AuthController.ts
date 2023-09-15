import { type Request, type Response } from 'express'
import AuthService from '../services/AuthService'

class AuthController {
  public async create (req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body

    try {
      const authService = new AuthService()
      const { user, token } = await authService.signIn(email, senha)

      res.status(200).json({ user, token })
    } catch (error) {
      res.status(401).json({ erro: 'Credenciais Invalidas' })
    }
  }
}

export default new AuthController()
