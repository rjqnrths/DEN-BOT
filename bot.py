import discord
from discord.ext import commands
import asyncio
import sys


TOKEN = 'TOKEN'

client = commands.Bot(command_prefix='$')

extensions = ['DenCommands']


@client.event
async def on_ready():
    print('로그인중')
    print(client.user.name)
    print(client.user.id)
    print('------')


@client.event
async def on_message(message):
    if message.author == client.user:
        return
    channel = message.channel
    if message.guild is None:
        await message.channel.send("여기는 명령어를 할수없습니다")
    else:
        await client.process_commands(message)


@client.command()
async def load(extension):
    try:
        client.load_extension(extension)
        print('Loaded {}'.format(extension))
    except Exception as error:
        print('{} cannot be loaded. [{}]'.format(extension, error))


@client.command()
async def unload(extension):
    try:
        client.unload_extension(extension)
        print('Unloaded {}'.format(extension))
    except Exception as error:
        print('{} cannot be unloaded. [{}]'.format(extension, error))


async def test():
    while True:
        print("Hello!")
        await asyncio.sleep(1)


if __name__ == '__main__':
    for extension in extensions:
        try:
            client.load_extension(extension)
        except Exception as error:
            print('{} cannot be loaded. [{}]'.format(extension, error))

    client.run(TOKEN)