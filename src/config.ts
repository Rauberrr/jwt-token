import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT,
  auth: {
    secret: process.env.SECRET,
    expiresIn: process.env.EXPIRESIN
  }
}
