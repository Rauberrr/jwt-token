import { type Request, type Response } from 'express'

class UserController {
  public async listagem (req: Request, res: Response): Promise<Response> {
    const users = [

      {
        id: 321321,
        email: 'coco@gmail.com',
        senha: 'coco'
      }
    ]

    return res.status(200).json(users)
  }
}

export default new UserController()
