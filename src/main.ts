/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable import/first */
import { Telegraf } from 'telegraf'
import * as dotenv from 'dotenv'
dotenv.config()

import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from './config/config'
import { TelegramBot } from './telegram-bot'

if (TELEGRAM_BOT_TOKEN === undefined) throw new Error('The bot token is required')

const telegraf = new Telegraf(TELEGRAM_BOT_TOKEN)
const telegramBot = new TelegramBot(telegraf)

if (TELEGRAM_CHAT_ID !== undefined) {
	telegramBot.sendPublicURL(TELEGRAM_CHAT_ID)
}
