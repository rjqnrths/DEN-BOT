from discord.ext import commands
import discord

class help1(commands.Cog):

    def __init__(self, bot):
        self.bot = bot
        

    @commands.command(name='도움말')
    async def command(self, ctx , *args):
        if not args:
            embed = discord.Embed(title="도움말", color=0x23c1f6)
            embed.add_field(name="굴", value="굴번호를 가르쳐줍니다", inline=True)
            embed.add_field(name="폼",value="\n루가루암(황혼 or 한밤중의모습 or 한낮의모습)"+"\n에써르,냐오닉스(암컷 or 수컷)"+"\n포켓몬(거다이맥스)"+"\n포켓몬(가라르)",inline=False)
            embed.add_field(name="이벤트", value="지금 하고있는 이벤트굴을 보여줌", inline=True)
            embed.add_field(name="예시", value="\n$굴 냐오닉스(수컷)" + "\n$굴 팬텀" + "\n$굴 1\n$이벤트",inline=False)
            await ctx.channel.send(embed=embed)
        else:
            await ctx.channel.send("```명령어는 $도움말입니다\n다시 입력해주세요```")  

def setup(bot):

    bot.add_cog(help1(bot))