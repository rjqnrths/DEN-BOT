import discord
from discord.ext import commands
import asyncio
import sys
import os


client = commands.Bot(command_prefix='$')
client.remove_command('help')

TOKEN = '토큰'

extensions = ['DenCommands','help']

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

@client.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.MissingRequiredArgument):
        await ctx.send("굴번호나 포켓몬이름을 넣어주세요")
        print(error)
    if isinstance(error, commands.CommandNotFound):
        await ctx.send("없는명령어입니다 명령어를 모르시겠다면 $도움말을 쳐보세요")
        print(error)

@client.command()
async def load(ctx, extension):
    try:
        client.load_extension(f'cogs.{extension}')
        print('Loaded {}'.format(extension))
    except Exception as error:
        print('{} cannot be loaded. [{}]'.format(extension, error))

@client.command()
async def reload(ctx, extension):
    try:
        client.unload_extension(f'cogs.{extension}')
        client.load_extension(f'cogs.{extension}')
        print('Reloaded {}'.format(extension))
    except Exception as error:
        print('{} cannot be Reloaded. [{}]'.format(extension, error))



@client.command()
async def unload(ctx, extension):
    try:
        client.unload_extension(f'cogs.{extension}')
        print('Unloaded {}'.format(extension))
    except Exception as error:
        print('{} cannot be unloaded. [{}]'.format(extension, error))

for filename in os.listdir('./cogs'):
    if filename.endswith('.py'):
        client.load_extension(f'cogs.{filename[:-3]}')

client.run(TOKEN)