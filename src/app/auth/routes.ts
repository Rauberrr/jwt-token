import { Router } from 'express'
import authController from './controllers/AuthController'
import authMiddleware from '../middlewares/AuthMiddleware'
import userController from '../users/controllers/UserController'

const routes = Router()

routes.post('/sign-in', authController.create)
routes.get('/users', authMiddleware, userController.listagem)

export default routes
