from discord.ext import commands
import discord
import json

with open('dens.json', encoding='utf-8') as denpoke:
    data = json.load(denpoke)

class DenCommands(commands.Cog):

    def __init__(self, bot):
        self.bot = bot
    

    @commands.command(name='굴')
    async def command(self, ctx,*,args):
        print(args)
        if args.isdigit():
            a = int(args)
            if a <= 157:
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
                if a<43 or 93 < a < 144 and a%2==1 or a == 152 or a == 154 or a == 155 or a == 156:
                    color = 0xff0a0a
                else:
                    color = 0xfb0fff
                if swordpoke.find("없음")!=-1:
                     await ctx.channel.send("```94,95,96,97,98,141,142번 굴은 소드실드에 없는굴입니다```")
                else:
                    embed = discord.Embed(title="굴 {}번".format(args), url="https://www.serebii.net/swordshield/maxraidbattles/den" + args + ".shtml", color=color)
                    embed.add_field(name="소드", value="{}".format(swordpoke), inline=True)
                    embed.add_field(name="실드", value="{}".format(shieldpoke), inline=True)
                    embed.set_footer(text="Made by 거북손데스")
                    embed.set_image(url='https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/denImages/den{}.png'.format(args))
                    await ctx.channel.send(embed=embed)
            else:
                if a>157 :
                    await ctx.channel.send("\n```94,95,96,97,98,141,142번 굴은 없고" +
                    "\n157번까지 존재합니다```")
 
        else:
            swname1 = []
            shname1 = []
            swordden = []
            shieldden = []
            i3 = 0
            i4 = 0
            i5 = 0
            datalength = len(data)
            while i3 < datalength:
                searchdata1 = data[i3]
                sword1 = searchdata1['소드']
                shield1 = searchdata1['실드']
                swordlength1 = len(sword1)
                shieldlength1 = len(shield1)
                while i4 < swordlength1:
                    swordinfo1 = sword1[i4]
                    swordname1 = swordinfo1['이름']
                    if swordname1 == args:
                        swname1.append(swordname1)
                        swordden.append(i3 + 1)
                    if swordname1 == args + "(거다이맥스)" or swordname1 == args + "(수컷)" or swordname1 == args + "(한낮의모습)" or swordname1 == args + "(황혼)" or swordname1 == args + "(가라르)":
                        swname1.append(swordname1)
                        swordden.append(i3 + 1)
                    i4 += 1
                while i5 < shieldlength1:
                    shieldinfo1 = shield1[i5]
                    shieldname1 = shieldinfo1['이름']
                    if shieldname1 == args:
                        shname1.append(shieldname1)
                        shieldden.append(i3 + 1)
                    if shieldname1 == args + "(거다이맥스)" or shieldname1 == args + "(암컷)" or shieldname1 == args + "(한밤중의모습)" or shieldname1 == args + "(황혼)" or shieldname1 == args + "(가라르)":
                        shname1.append(shieldname1)
                        shieldden.append(i3 + 1)
                    i5 += 1
                i4 = 0
                i5 = 0
                i3 += 1
            shnew1 = set(shieldden)
            shieldend1 = list(shnew1)
            shieldend1.sort()
            ShieldDen = ','.join(str(Dennumber) for Dennumber in shieldend1)
            swnew1 = set(swordden)
            swordend1 = list(swnew1)
            swordend1.sort()
            SwordDen = ','.join(str(Dennumber) for Dennumber in swordend1)
            embed = discord.Embed(title="{} 굴".format(args), color=0xff0a0a)
            embed.set_thumbnail(url="https://github.com/rjqnrths/DEN-BOT/blob/master/pokemon/barbaracle.gif?raw=true")
            embed.add_field(name="소드", value="굴번호: {}".replace('{}',SwordDen), inline=True)
            embed.add_field(name="실드", value="굴번호: {}".replace('{}',ShieldDen), inline=False)
            embed.set_footer(text="Made by 거북손데스")
            if SwordDen=='' and ShieldDen=='' or args=='없음':
                await ctx.channel.send("포켓몬이름을 정확하게 입력해주세요")
            else:
                await ctx.channel.send(embed=embed)
            
def setup(bot):
    bot.add_cog(DenCommands(bot))
