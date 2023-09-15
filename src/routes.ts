import { Router } from 'express'
import authRoutes from './app/auth/routes'

const routes = Router()

routes.use(authRoutes)

export default routes
