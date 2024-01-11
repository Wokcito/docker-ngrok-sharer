# Ngrok sharer

<p>
    <img src="https://img.shields.io/docker/pulls/wokcito/ngrok-sharer" />
    <img src="https://img.shields.io/docker/stars/wokcito/ngrok-sharer" />
    <img src="https://img.shields.io/docker/image-size/wokcito/ngrok-sharer" />
    <a href="https://github.com/Wokcito/docker-ngrok-sharer" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/github/stars/wokcito/docker-ngrok-sharer" />
    </a>
</p>

Uses the API key of Ngrok, obtains the public url from active [Ngrok's agent sessions](https://dashboard.ngrok.com/tunnels/agents) and sends it through Telegram

> [!IMPORTANT]  
> This program was tought for users that are limited to one simultaneous ngrok agen session

## Usage

### Environment variables

- `NGROK_API_KEY` - Ngrok's API key to get the public url. You can create a new one [here](https://dashboard.ngrok.com/api).
- `TELEGRAM_BOT_TOKEN` - Token given by [BotFather](https://t.me/botfather) after creating a new bot.
- `TELEGRAM_CHAT_ID` - If a chat id is given, the bot will send the public url as soon as it launchs.

### Commands

#### `/id`

You can use the command `/id` to get the current chat id. In the case you want the chat id from a group chat, add the bot as a member and use `/id`

![image](https://github.com/Wokcito/docker-ngrok-sharer/assets/99556533/1cee074d-4ddc-49df-9c0f-759e21984b52)

#### `/url`

Whether you have set the variable `TELEGRAM_CHAT_ID` or not, you can use the command `/url` to retrieve the current public URL.

![image](https://github.com/Wokcito/docker-ngrok-sharer/assets/99556533/5a0d7e6c-60e2-453f-bab0-725f45d5fa23)

### Docker Compose

```yml
# docker-compose.yml
version: '3.8'

services:
    ngrok:
        image: ngrok/ngrok:alpine
        container_name: ngrok
        environment:
            - NGROK_AUTHTOKEN
        command: 'tcp 25565'
        ports:
            - 4040:4040

    ngrok-sharer:
        container_name: ngrok_sharer
        image: wokcito/ngrok-sharer
        restart: unless-stopped
        environment:
            - NGROK_API_KEY
            - TELEGRAM_BOT_TOKEN
            - TELEGRAM_CHAT_ID
        depends_on:
            - ngrok
```

```bash
docker compose up
```
