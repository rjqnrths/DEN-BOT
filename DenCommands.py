from discord.ext import commands
import discord
import json

with open('dens.json', encoding='utf-8') as denpoke:
    data = json.load(denpoke)

class DenCommands(commands.Cog):

    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='굴', description='The embed command')
    async def command(self, ctx, args):
        if args.isdigit():
            a = int(args)
            if a <= 93:
                swname = []
                shname = []
                i = 0
                i1 = 0
                i2 = 0
                searchdata = data[a - 1]
                sword = searchdata['소드']
                shield = searchdata['실드']
                shieldlength = len(shield)
                swordlength = len(sword)
                while swordlength > i:
                    swordinfo = sword[i]
                    swordname = swordinfo['이름']
                    swordability = swordinfo['특성']
                    if swordability == '드특':
                        swname.append(swordname)
                    i += 1
                while shieldlength > i1:
                    shieldinfo = shield[i1]
                    shieldname = shieldinfo['이름']
                    shieldability = shieldinfo['특성']
                    if shieldability == '드특':
                        shname.append(shieldname)
                    i1 += 1
                shnew= set(shname)
                shieldend = list(shnew)
                shieldpoke = "\n".join(shieldend)
                swnew = set(swname)
                swordend = list(swnew)
                swordpoke = "\n".join(swordend)
                if a<43:
                    color = 0xff0a0a
                else:
                    color = 0xfb0fff

                embed = discord.Embed(title="굴 {}번".format(args), url="https://www.serebii.net/swordshield/maxraidbattles/den" + args + ".shtml", color=color)
                embed.add_field(name="소드", value="{}".format(swordpoke), inline=True)
                embed.add_field(name="실드", value="{}".format(shieldpoke), inline=True)
                embed.set_footer(text="Made by 거북손데스")
                embed.set_image(url='https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/image/den{}.png'.format(args))
                await ctx.channel.send(embed=embed)
            else:
                await ctx.send("추가중입니다")
def setup(bot):
    bot.add_cog(DenCommands(bot))
