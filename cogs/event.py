from discord.ext import commands
import discord

class event(commands.Cog):

    def __init__(self, bot):
        self.bot = bot
        

    @commands.command(name='이벤트')
    async def command(self, ctx, *args):
        if not args:
            await ctx.channel.send("https://www.serebii.net/swordshield/maxraidbattles/eventden-august2020.shtml")
        else:
            await ctx.channel.send("```명령어는 $이벤트입니다\n다시 입력해주세요```")  
            
def setup(bot):
    
    bot.add_cog(event(bot))