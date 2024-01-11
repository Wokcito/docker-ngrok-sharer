/* eslint-disable @typescript-eslint/no-floating-promises */
import { type Context, type Telegraf } from 'telegraf'
import { getPublicURL } from './utils/getPublicURL'

export class TelegramBot {
	constructor(
        private readonly telegraf: Telegraf
	) {
		this.telegraf.command('url', (ctx) => {
			const chatId = this.getChatId(ctx)
			this.sendPublicURL(chatId)
		})

		this.telegraf.command('id', (ctx) => {
			const chatId = this.getChatId(ctx)
			this.sendChatId(chatId)
		})

		this.telegraf.launch()
	}

	public async sendMessage(chatId: string, message: string): Promise<void> {
		await this.telegraf.telegram.sendMessage(chatId, message)
	}

	public async sendPublicURL(chatId: string): Promise<void> {
		try {
			const publicURL = await getPublicURL()
			await this.sendMessage(chatId, publicURL)
		} catch (error) {
			const errorMessage = (error as Error).message
			await this.sendMessage(chatId, errorMessage)
		}
	}

	private async sendChatId(chatId: string): Promise<void> {
		await this.sendMessage(chatId, chatId)
	}

	private getChatId(ctx: Context): string {
		const chatId = ctx.chat?.id.toString()
		if (chatId === undefined) throw new Error('Chat id not found in Context')
		return chatId
	}
}
