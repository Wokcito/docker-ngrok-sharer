import { NGROK_API_KEY } from '../config/config'
import { type Agent } from '../interfaces/agent'

export async function getPublicURL(): Promise<string> {
	const response = await fetch('https://api.ngrok.com/tunnels', {
		headers: {
			Authorization: `Bearer ${NGROK_API_KEY}`,
			'Ngrok-Version': '2'
		}
	})

	if (response.status >= 500) throw new Error('Ngrok server error')

	const { tunnels } = await response.json() as Agent

	const WITHOUT_TUNNEL = 0

	if (tunnels.length === WITHOUT_TUNNEL) throw new Error('No tunnel found')
	if (tunnels[0].public_url === undefined) throw new Error('Tunnel without public_url')

	return tunnels[0].public_url
}
