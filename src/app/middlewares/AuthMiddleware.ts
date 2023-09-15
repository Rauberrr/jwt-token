import { type NextFunction, type Request, type Response } from 'express'
import AuthService from '../auth/services/AuthService'

export default async (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ msg: 'voce nao esta logado' })

  const [, token] = auth.split(' ')

  try {
    const authService = new AuthService()
    const validate = await authService.tokenValidate(token)

    req.user = { validate, token }
  } catch (error) {
    return res.status(401).json({ msg: 'o token nao é válido' })
  }

  next()
}
