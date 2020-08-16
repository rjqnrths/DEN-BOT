import discord
from discord.ext import commands
import asyncio
import os

TOKEN = '토큰'

client = commands.Bot(command_prefix='$')
client.remove_command('help')

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
    await client.process_commands(message)
    print(message.author)
    print(message.content)
    
@client.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.MissingRequiredArgument):
        await ctx.send("```굴번호나 포켓몬이름을 넣어주세요```")
        print(error)
    if isinstance(error, commands.CommandNotFound):
        if ctx.message.content.startswith('$시드체크') or ctx.message.content.startswith('$자세히체크') or ctx.message.content.startswith('$정보체크') or ctx.message.content.startswith('$대기열') or ctx.message.content.startswith('$리스트') or ctx.message.content.startswith('$추출'):
            await ctx.channel.send("시드체크 관련 커맨드는 <#725370278015926305> 로 가주세요")
        else:
            await ctx.send("```없는명령어입니다\n" + "$도움말을 쳐보세요```")
    
        
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