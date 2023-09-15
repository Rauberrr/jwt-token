import e, { type Application } from 'express'
import cors from 'cors'
import routes from './routes'

export default class App {
  app: Application

  constructor () {
    this.app = e()

    this.middleware()
    this.router()
  }

  public listen (port: number): void {
    this.app.listen(port, () => {
      console.log('listening server')
    })
  }

  private middleware (): void {
    this.app.use(e.json())
    this.app.use(e.urlencoded({ extended: true }))
    this.app.use(cors())
  }

  private router (): void {
    this.app.use(routes)
  }
}
