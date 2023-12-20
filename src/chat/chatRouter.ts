import express from 'express'
import { gpt } from './gpt'

const router = express.Router()

router.post('/gpt', gpt)


export default router