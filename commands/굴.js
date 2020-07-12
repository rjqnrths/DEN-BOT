const Discord = require('discord.js');
const footerCred = "거북손데스";
const field1= "화창한초원"
const field2= "스톤즈들판"
const field4= "감시탑 유적지"
const field5= "다리아래 벌판"
const field6="햇살비추는숲"
const field7="밀로틱호 남쪽"
const field8="터검니호 동쪽"
const field9="터검니호 서쪽"
const field10="역린 호수"
const field11="모래먼지구덩이"
const field12="밀로틱호 북쪽"
const field13="거인의 의자"
const field14="너클 구릉"
const field15="엔진 리버사이드"
const field16="거인의 모자"
const field17="거인의 거울 연못"
const field18="터검니호의 눈동자"
//dlc 지역
const field3="인사의 들판"  //Fields of Honor
const field19="청량한 습지초원" //Soothing Wetlands
const field20="열도 바다"   //Stepping-Stone Sea
const field21="외딴섬 해역" //Insular Sea
const field22="단련 평원"   //Training Lowlands
const field23="투지의 동굴" //Courageous Cavern
const field24="챌린지비치" //Challenge Beach
const field25="냄비바닥사막" //Potbottom Desert
const field26="집중의 숲" //Forest of Focus
const field27="허니컴 바다" //Honeycalm Sea
const field28="챌린지로드" //Challenge Road
const field29="워크아웃 바다" //Workout Sea
const field30="원환의 만" //Loop Lagoon
exports.run = (client, message, args) => {   
         if (args == 1) {
            const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n ${field1}` +`\n ${field2}` + `\n ${field7}`},
                { name: '소드', value: "\n노보청" + "\n괴력몬" + "\n카포에라", inline: true },
                { name: '실드', value: "\n노보청" + "\n괴력몬" + "\n카포에라", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 2) {
        const Embed = new Discord.MessageEmbed()
        .setColor('#EC001C')
        .setTitle(`굴 ${args}번 (일반)`)
        .addFields(
            { name: '위치', value: `\n ${field2}` + `\n ${field4}`},
            { name: '소드', value: "\n고디모아젤" + "\n가디안", inline: true },
            { name: '실드', value: "\n란쿨루스" + "\n가디안", inline: true },
        )
        .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
        .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
        .setFooter(footerCred);       
    message.channel.send(Embed).catch(console.error);
    }    if (args == 3) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n ${field1}` +`\n ${field2}`},
                { name: '소드', value: "\n기가이어스" + "\n암팰리스" + "\n단단지", inline: true },
                { name: '실드', value: "\n기가이어스" + "\n암팰리스" + "\n단단지", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 4) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n ${field5}` +`\n ${field6}` + `\n ${field1}`},
                { name: '소드', value: "\n전툴라" + "\n투구뿌논" + "\n아이앤트", inline: true },
                { name: '실드', value: "\n전툴라" + "\n투구뿌논" + "\n아이앤트", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 5) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n ${field7}` +`\n ${field5}`},
                { name: '소드', value: "\n에리본" + "\n비퀸" + "\n이올브", inline: true },
                { name: '실드', value: "\n에리본" + "\n비퀸" + "\n이올브", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 6) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n ${field4}` +`\n ${field2}`},
                { name: '소드', value: "\n대로트" + "\n펌킨인" + "\n탱탱겔", inline: true },
                { name: '실드', value: "\n대로트" + "\n펌킨인" + "\n탱탱겔", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 7) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field8}` +`\n${field9}`},
                { name: '소드', value: "\n고래왕" + "\n갸라도스", inline: true },
                { name: '실드', value: "\n고래왕" + "\n갸라도스", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 8) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field5}` +`\n${field10}`+`\n${field7}`},
                { name: '소드', value: "\n깨비물거미" + "\n트리토돈" + "\n고래왕", inline: true },
                { name: '실드', value: "\n깨비물거미" + "\n트리토돈" + "\n고래왕", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 9) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field11}` +`\n${field9}`},
                { name: '소드', value: "\n파르셀" + "\n두빅굴" + "\n가재장군", inline: true },
                { name: '실드', value: "\n파르셀" + "\n두빅굴" + "\n가재장군", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 10) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field11}` +`\n${field12}`},
                { name: '소드', value: "\n창파나이트" + "\n케오퍼스" + "\n대여르", inline: true },
                { name: '실드', value: "\n이븐곰" + "\n케오퍼스" + "\n대여르", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 11) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field11}` +`\n${field13}`},
                { name: '소드', value: "\n절각참" + "\n기기기어르" + "\n대왕끼리동", inline: true },
                { name: '실드', value: "\n절각참" + "\n기기기어르" + "\n대왕끼리동", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 12) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field14}` +`\n${field13}`+ `\n${field2}`},
                { name: '소드', value: "\n절각참" + "\n입치트" + "\n토게데마루", inline: true },
                { name: '실드', value: "\n절각참" + "\n입치트" + "\n토게데마루", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 13) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field5}`},
                { name: '소드', value: "\n심보러" + "\n이올브" + "\n브리무음", inline: true },
                { name: '실드', value: "\n심보러" + "\n이올브" + "\n브리무음", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 14) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field14}` +`\n${field15}`+ `\n${field2}`},
                { name: '소드', value: "\n마임꽁꽁" + "\n마자용", inline: true },
                { name: '실드', value: "\n마임꽁꽁" + "\n마자용", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 15) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field11}` +`\n${field13}`},
                { name: '소드', value: "\n석탄산" + "\n기가이어스" + "\n거대코뿌리", inline: true },
                { name: '실드', value: "\n기가이어스" + "\n롱스톤" + "\n거대코뿌리", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 16) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field5}` +`\n${field1}`},
                { name: '소드', value: "\n닥트리오" + "\n몰드류" + "\n만마드", inline: true },
                { name: '실드', value: "\n닥트리오" + "\n몰드류" + "\n만마드", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 17) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field11}`},
                { name: '소드', value: "\n하마돈" + "\n사다이사" , inline: true },
                { name: '실드', value: "\n하마돈" + "\n사다이사" , inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 18) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field16}` +`\n${field10}` +`\n${field2}`},
                { name: '소드', value: "\n다태우지네" + "\n앤티골" + "\n불비달마(가라르)", inline: true },
                { name: '실드', value: "\n다태우지네" + "\n앤티골" + "\n윈디", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 19) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field14}` +`\n${field2}`},
                { name: '소드', value: "\n염뉴트" + "\n샹델라", inline: true },
                { name: '실드', value: "\n코터스" + "\n샹델라" + "\n윈디", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 20) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field11}`},
                { name: '소드', value: "\n다태우지네" + "\n석탄산" + "\n불비달마(가라르)", inline: true },
                { name: '실드', value: "\n다태우지네" + "\n석탄산" + "\n윈디", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 21) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field11}`},
                { name: '소드', value: "\n파르셀" + "\n배바닐라" + "\n라프라스", inline: true },
                { name: '실드', value: "\n파르셀" + "\n배바닐라" + "\n라프라스", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 22) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field2}`},
                { name: '소드', value: "\n맘모꾸리" + "\n모스노우" + "\n포푸니라", inline: true },
                { name: '실드', value: "\n맘모꾸리" + "\n모스노우" + "\n포푸니라", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 23) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field16}` + `\n${field14}`},
                { name: '소드', value: "\n모스노우" + "\n눈여아" + "\n불비달마(가라르)", inline: true },
                { name: '실드', value: "\n모스노우" + "\n눈여아" + "\n빙큐보", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 24) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field16}` + `\n${field15}`},
                { name: '소드', value: "\n전툴라" + "\n라이츄", inline: true },
                { name: '실드', value: "\n전툴라" + "\n라이츄", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 25) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field17}` + `\n${field10}`},
                { name: '소드', value: "\n찌르성게" + "\n토게데마루", inline: true },
                { name: '실드', value: "\n찌르성게" + "\n토게데마루", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 26) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field6}`},
                { name: '소드', value: "\n달코퀸" + "\n라플레시아" + "\n아르코", inline: true },
                { name: '실드', value: "\n달코퀸" + "\n라플레시아" + "\n아르코", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 27) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field17}` + `\n${field2}`},
                { name: '소드', value: "\n백솜모카" + "\n엘풍" + "\n애프룡", inline: true },
                { name: '실드', value: "\n백솜모카" + "\n엘풍" + "\n단지래플", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 28) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field11}` + `\n${field17}`},
                { name: '소드', value: "\n펌킨인" + "\n호바귀", inline: true },
                { name: '실드', value: "\n펌킨인" + "\n호바귀", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 29) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field8}` + `\n${field12}`},
                { name: '소드', value: "\n더시마사리" + "\n더스트나" + "\n스컹탱크", inline: true },
                { name: '실드', value: "\n스컹탱크" + "\n더스트나" + "\n더시마사리", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 30) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field14}` + `\n${field16}` + `\n${field15}`},
                { name: '소드', value: "\n로젤리아" + "\n스트린더" + "\n또도가스(가라르)", inline: true },
                { name: '실드', value: "\n로젤리아" + "\n스트린더" + "\n또도가스(가라르)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 31) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field8}` + `\n${field1}`},
                { name: '소드', value: "\n네이티오" + "\n워글" + "\n심보러", inline: true },
                { name: '실드', value: "\n네이티오" + "\n버랜지나" + "\n심보러", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 32) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field16}` + `\n${field14}`},
                { name: '소드', value: "\n아머까오" + "\n루차불", inline: true },
                { name: '실드', value: "\n아머까오" + "\n루차불", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 33) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field1}` + `\n${field14}`},
                { name: '소드', value: "\n마셰이드" + "\n나루림" + "\n토게키스", inline: true },
                { name: '실드', value: "\n마셰이드" + "\n프레프티르" + "\n토게키스", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 34) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field10}`},
                { name: '소드', value: "\n마휘핑" + "\n입치트" + "\n오롱털", inline: true },
                { name: '실드', value: "\n마휘핑" + "\n날쌩마(가라르)" + "\n오롱털", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 35) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field2}` + `\n${field9}`},
                { name: '소드', value: "\n절각참" + "\n가재장군" + "\n다탱구", inline: true },
                { name: '실드', value: "\n절각참" + "\n가재장군" + "\n깜까미", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 36) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field11}` + `\n${field17}`},
                { name: '소드', value: "가로막구리", inline: true },
                { name: '실드', value: "\n버랜지나" + "\n가로막구리" + "\n마기라스", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 37) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field1}`},
                { name: '소드', value: "짜랑고우거", inline: true },
                { name: '실드', value: "\n액스라이즈" + "\n할비롱" + "\n미끄래곤", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 38) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `${field18}`},
                { name: '소드', value: "\n짜랑고우거" + "\n애프룡" + "\n드래펄트", inline: true },
                { name: '실드', value: "\n미끄래곤" + "\n단지래플" + "\n드래펄트", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 39) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field8}` + `\n${field1}`},
                { name: '소드', value: "\n일레도리자드" + "\n치라치노" + "\n이븐곰", inline: true },
                { name: '실드', value: "\n일레도리자드" + "\n치라치노" + "\n이븐곰", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 40) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field15}` + `\n${field2}`},
                { name: '소드', value: "\n파르토" + "\n워글" + "\n잠만보", inline: true },
                { name: '실드', value: "\n파르토" + "\n하랑우탄" + "\n잠만보", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 41) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field12}` + `\n${field7}`},
                { name: '소드', value: "\n두빅굴" + "\n꼬치조" + "\n더시마사리", inline: true },
                { name: '실드', value: "\n두빅굴" + "\n꼬치조", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 42) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field17}` + `\n${field9}`},
                { name: '소드', value: "\n트리토돈" + "\n탱탱겔" + "\n갈가부기", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n탱탱겔" + "\n갈가부기", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 43) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field17}` + `\n${field7}` + `\n${field2}`},
                { name: '소드', value: "\n펌킨인" + "\n야느와르몽", inline: true },
                { name: '실드', value: "\n산호르곤" + "\n야느와르몽", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 44) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field10}` + `\n${field8}`+ `\n${field9}`},
                { name: '소드', value: "\n갸라도스" + "\n라프라스"+ "\n밀로틱", inline: true },
                { name: '실드', value: "\n갸라도스" + "\n라프라스"+ "\n밀로틱", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 45) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field13}` + `\n${field14}`},
                { name: '소드', value: "\n강철톤" + "\n기기기어르"+ "\n루카리오"+"\n절각참", inline: true },
                { name: '실드', value: "\n강철톤" + "\n기기기어르"+ "\n루카리오"+"\n절각참", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 46) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field7}`+ `\n${field1}`},
                { name: '소드', value: "\n깨비물거미" + "\n슈바르고", inline: true },
                { name: '실드', value: "\n깨비물거미" + "\n어지리더", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 47) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field4}`},
                { name: '소드', value: "\n포트데스" + "\n펌킨인", inline: true },
                { name: '실드', value: "\n포트데스" + "\n산호르곤", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 48) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}` + `\n${field12}`+ `\n${field1}`},
                { name: '소드', value: "\n괴력몬" + "\n내던숭이"+ "\n루카리오"+"\n엘레이드", inline: true },
                { name: '실드', value: "\n괴력몬" + "\n루차불"+ "\n루카리오"+"\n엘레이드", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 49) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}` + `\n${field13}`},
                { name: '소드', value: "\n나이킹" + "\n절각참"+ "\n메더(가라르)"+"\n대왕끼리동"+"\n두랄루돈", inline: true },
                { name: '실드', value: "\n나이킹" + "\n절각참"+ "\n메더(가라르)"+"\n대왕끼리동"+"\n두랄루돈", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 50) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field15}` + `\n${field2}`+ `\n${field4}`},
                { name: '소드', value: "\n브리무음" + "\n마임꽁꽁"+ "\n칼라마네로"+"\n가디안", inline: true },
                { name: '실드', value: "\n브리무음" + "\n마임꽁꽁"+ "\n칼라마네로"+"\n가디안", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 51) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field1}` + `\n${field13}`+ `\n${field2}`},
                { name: '소드', value: "\n암팰리스" + "\n석탄산"+ "\n강철톤", inline: true },
                { name: '실드', value: "\n암팰리스" + "\n석탄산"+ "\n강철톤"+"\n마기라스", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 52) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}` + `\n${field5}`+ `\n${field1}`},
                { name: '소드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 53) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field14}`},
                { name: '소드', value: "\n나인테일" + "\n염뉴트"+ "\n다태우지네"+"\n리자몽", inline: true },
                { name: '실드', value: "\n윈디" + "\n염뉴트"+ "\n다태우지네"+"\n리자몽", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 54) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}` + `\n${field2}`},
                { name: '소드', value: "\n나인테일" + "\n샹델라"+ "\n석탄산"+"\n폭거북스", inline: true },
                { name: '실드', value: "\n윈디" + "\n샹델라"+ "\n석탄산"+"\n염뉴트", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 55) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field16}` + `\n${field11}`+ `\n${field2}`},
                { name: '소드', value: "\n배바닐라" + "\n마임꽁꽁"+ "\n라프라스"+"\n불비달마(가라르)", inline: true },
                { name: '실드', value: "\n배바닐라" + "\n마임꽁꽁"+ "\n라프라스"+"\n빙큐보", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 56) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field10}` + `\n${field15}`},
                { name: '소드', value: "\n찌르성게" + "\n전툴라"+ "\n토게데마루", inline: true },
                { name: '실드', value: "\n찌르성게" + "\n전툴라"+ "\n토게데마루", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 57) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field14}`},
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 58) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field6}`},
                { name: '소드', value: "\n백솜모카" + "\n너트령"+ "\n로즈레이드"+"\n애프룡", inline: true },
                { name: '실드', value: "\n백솜모카" + "\n너트령"+ "\n로즈레이드"+"\n단지래플", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 59) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field6}`+ `\n${field2}`},
                { name: '소드', value: "\n백솜모카" + "\n엘풍"+ "\n다탱구", inline: true },
                { name: '실드', value: "\n백솜모카" + "\n엘풍"+ "\n로파파", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 60) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field15}` + `\n${field16}`+ `\n${field12}`},
                { name: '소드', value: "\n스트린더" + "\n스컹탱크"+ "\n또도가스(가라르)"+"\n더시마사리", inline: true },
                { name: '실드', value: "\n스트린더" + "\n스컹탱크"+ "\n또도가스(가라르)"+"\n염뉴트", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 61) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field14}` + `\n${field8}`},
                { name: '소드', value: "\n네이티오" + "\n루차불"+ "\n아머까오"+"\n딜리버드", inline: true },
                { name: '실드', value: "\n네이티오" + "\n루차불"+ "\n아머까오"+"\n딜리버드", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 62) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field1}` + `\n${field14}`},
                { name: '소드', value: "\n가디안" + "\n토게키스"+ "\n오롱털", inline: true },
                { name: '실드', value: "\n가디안" + "\n토게키스"+ "\n오롱털", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 63) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field2}` + `\n${field5}`+ `\n${field9}`},
                { name: '소드', value: "\n포푸니라" + "\n곤율거니"+ "\n가로막구리", inline: true },
                { name: '실드', value: "\n포푸니라" + "\n버랜지나"+ "\n가로막구리"+ "\n마기라스", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 64) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field18}` + `\n${field1}`},
                { name: '소드', value: "\n짜랑고우거" + "\n드래런치"+ "\n액스라이즈"+"\n드래펄트", inline: true },
                { name: '실드', value: "\n미끄래곤" + "\n드래런치"+ "\n드래펄트", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 65) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field1}`+ `\n${field15}``\n${field8}`},
                { name: '소드', value: "\n워글" + "\n에써르(수컷)"+ "\n이브이"+"\n잠만보", inline: true },
                { name: '실드', value: "\n하랑우탄" + "\n에써르(암컷)"+ "\n이브이"+"\n잠만보", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 66) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field2}`},
                { name: '소드', value: "메타몽", inline: true },
                { name: '실드', value: "메타몽", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 67) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field17}`},
                { name: '소드', value: "\n해무기" + "\n만타인"+ "\n라프라스"+"\n샤미드", inline: true },
                { name: '실드', value: "\n해무기" + "\n만타인"+ "\n라프라스"+"\n샤미드", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 68) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field14}`},
                { name: '소드', value: "\n칼라마네로" + "\n마임꽁꽁"+ "\n브리무음"+"\n에브이", inline: true },
                { name: '실드', value: "\n칼라마네로" + "\n마임꽁꽁"+ "\n브리무음"+"\n에브이", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 69) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field17}`},
                { name: '소드', value: "\n절각참" + "\n칼라마네로"+ "\n가로막구리"+"\n블래키", inline: true },
                { name: '실드', value: "\n절각참" + "\n칼라마네로"+ "\n가로막구리"+"\n블래키", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 70) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field17}`},
                { name: '소드', value: "\n백솜모카" + "\n달코퀸"+ "\n엘풍"+"\n리피아", inline: true },
                { name: '실드', value: "\n백솜모카" + "\n달코퀸"+ "\n엘풍"+"\n리피아", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 71) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field16}`},
                { name: '소드', value: "\n윈디" + "\n나인테일"+ "\n샹델라"+"\n부스터", inline: true },
                { name: '실드', value: "\n나인테일" + "\n윈디"+ "\n샹델라"+"\n부스터", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 72) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field17}`},
                { name: '소드', value: "\n일레도리자드" + "\n피카츄"+ "\n쥬피썬더", inline: true },
                { name: '실드', value: "\n일레도리자드" + "\n피카츄"+ "\n쥬피썬더", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 73) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field14}`},
                { name: '소드', value: "\n배바닐라" + "\n마임꽁꽁"+ "\n눈여아"+"\n글레이시아", inline: true },
                { name: '실드', value: "\n배바닐라" + "\n마임꽁꽁"+ "\n눈여아"+"\n글레이시아", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 74) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field10}`},
                { name: '소드', value: "\n가디안" + "\n오롱털"+ "\n토게키스"+"\n님피아", inline: true },
                { name: '실드', value: "\n가디안" + "\n오롱털"+ "\n토게키스"+"\n님피아", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 75) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}` + `\n${field9}`},
                { name: '소드', value: "\n침바루" + "\n누오"+ "\n깨비물거미"+"\n갸라도스", inline: true },
                { name: '실드', value: "\n침바루" + "\n누오"+ "\n깨비물거미"+"\n갸라도스", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 76) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field7}` + `\n${field12}`},
                { name: '소드', value: "\n침바루" + "\n대포무노"+ "\n고래왕"+"\n만타인", inline: true },
                { name: '실드', value: "\n침바루" + "\n대포무노"+ "\n고래왕"+"\n만타인", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 77) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field10}`},
                { name: '소드', value: "\n나인테일" + "\n염뉴트"+ "\n다태우지네"+"\n리자몽(거다이맥스)", inline: true },
                { name: '실드', value: "\n윈디" + "\n염뉴트"+ "\n다태우지네"+"\n리자몽(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 78) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field16}`},
                { name: '소드', value: "\n갸라도스" + "\n트리토돈"+ "\n갈가부기(거다이맥스)", inline: true },
                { name: '실드', value: "\n갸라도스" + "\n트리토돈"+ "\n갈가부기(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 79) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field6}`},
                { name: '소드', value: "\n백솜모카" + "\n너트령"+ "\n로즈레이드"+"\n애프룡(거다이맥스)", inline: true },
                { name: '실드', value: "\n백솜모카" + "\n너트령"+ "\n로즈레이드"+"\n단지래플(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 80) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field2}`},
                { name: '소드', value: "\n나인테일" + "\n샹델라"+ "\n석탄산"+"\n다태우지네(거다이맥스)", inline: true },
                { name: '실드', value: "\n윈디" + "\n샹델라"+ "\n석탄산"+"\n다태우지네(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 81) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field2}`},
                { name: '소드', value: "\n루카리오" + "\n엘레이드"+ "\n창파나이트"+"\n괴력몬(거다이맥스)", inline: true },
                { name: '실드', value: "\n포트데스" + "\n산호르곤"+ "\n팬텀(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 82) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field5}`},
                { name: '소드', value: "\n가디안" + "\n토게키스"+ "\n오롱털"+"\n마휘핑(거다이맥스)", inline: true },
                { name: '실드', value: "\n가디안" + "\n토게키스"+ "\n오롱털"+"\n마휘핑(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 83) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field13}`},
                { name: '소드', value: "\n암팰리스" + "\n강철톤"+ "\n석탄산(거다이맥스)", inline: true },
                { name: '실드', value: "\n배바닐라" + "\n마임꽁꽁"+ "\n라프라스(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 84) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field13}`},
                { name: '소드', value: "\n절각참" + "\n강철톤"+ "\n기기기어르"+"\n두랄루돈(거다이맥스)", inline: true },
                { name: '실드', value: "\n절각참" + "\n강철톤"+ "\n기기기어르"+"\n두랄루돈(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 85) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field2}`},
                { name: '소드', value: "\n절각참" + "\n메더(가라르)"+ "\n두랄루돈"+"\n대왕끼리동(거다이맥스)", inline: true },
                { name: '실드', value: "\n절각참" + "\n메더(가라르)"+ "\n두랄루돈"+"\n대왕끼리동(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 86) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field8}`},
                { name: '소드', value: "\n스컹탱크" + "\n또도가스(가라르)"+ "\n더시마사리"+"\n더스트나(거다이맥스)", inline: true },
                { name: '실드', value: "\n스컹탱크" + "\n또도가스(가라르)"+ "\n염뉴트"+"\n더스트나(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 87) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field5}`},
                { name: '소드', value: "\n가디안" + "\n오롱털"+ "\n토게키스"+"\n브리무음(거다이맥스)", inline: true },
                { name: '실드', value: "\n가디안" + "\n오롱털"+ "\n토게키스"+"\n브리무음(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 88) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field11}`},
                { name: '소드', value: "\n부란다" + "\n곤율거니"+ "\n오롱털(거다이맥스)", inline: true },
                { name: '실드', value: "\n부란다" + "\n버랜지나"+ "\n마기라스"+"\n오롱털(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 89) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field13}` + `\n${field14}`},
                { name: '소드', value: "\n네이티오" + "\n루차불"+ "\n심보러"+"\n아머까오(거다이맥스)", inline: true },
                { name: '실드', value: "\n네이티오" + "\n루차불"+ "\n심보러"+"\n아머까오(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 90) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `${field1}`},
                { name: '소드', value: "\n깨비물거미" + "\n슈바르고"+ "\n버터플(거다이맥스)", inline: true },
                { name: '실드', value: "\n깨비물거미" + "\n어지리더"+ "\n버터플(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 91) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field7}` + `\n${field9}`},
                { name: '소드', value: "\n해무기" + "\n갸라도스"+ "\n라프라스"+"\n킹크랩(거다이맥스)", inline: true },
                { name: '실드', value: "\n해무기" + "\n갸라도스"+ "\n라프라스"+"\n킹크랩(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 92) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field5}` + `\n${field6}`},
                { name: '소드', value: "\n깨비물거미" + "\n슈바르고"+"\n이올브(거다이맥스)", inline: true },
                { name: '실드', value: "\n깨비물거미" + "\n어지리더"+"\n이올브(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }    if (args == 93) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}`},
                { name: '소드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 99) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field3}`+`\n${field19}`+`\n${field20}`+`\n${field21}`},
                { name: '소드', value: "\n이어롭" + "\n푸크린"+ "\n노고치"+"\n바랜드", inline: true },
                { name: '실드', value: "\n이어롭" + "\n푸크린"+ "\n노고치"+"\n바랜드", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 100) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field3}`+`\n${field19}`+`\n${field20}`+`\n${field21}`},
                { name: '소드', value: "모든 포켓몬", inline: true },
                { name: '실드', value: "모든 포켓몬", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 101) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field19}`+`\n${field22}`+`\n${field23}`},
                { name: '소드', value: "\n밀탱크" + "\n버프론"+ "\n켄타로스"+"\n폭음룡"+"\n내룸벨트", inline: true },
                { name: '실드', value: "\n밀탱크" + "\n버프론"+ "\n켄타로스"+"\n폭음룡"+"\n내룸벨트", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 102) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field3}`+`\n${field19}`+`\n${field20}`+`\n${field21}`},
                { name: '소드', value: "모든 포켓몬", inline: true },
                { name: '실드', value: "모든 포켓몬", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 103) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field25}`+`\n${field24}`+`\n${field20}`+`\n${field23}`},
                { name: '소드', value: "\n사다이사" + "\n고지"+ "\n텅구리"+"\n악비아르"+"\n캥카", inline: true },
                { name: '실드', value: "\n사다이사" + "\n고지"+ "\n텅구리"+"\n악비아르"+"\n캥카", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 104) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field24}`+`\n${field23}`+`\n${field20}`},
                { name: '소드', value: "모든 포켓몬", inline: true },
                { name: '실드', value: "모든 포켓몬", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 105) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field3}`+`\n${field24}`+`\n${field27}`+`\n${field26}`},
                { name: '소드', value: "\n데덴네" + "\n레어코일"+ "\n찌르성게"+"\n렌트라"+"\n자포코일", inline: true },
                { name: '실드', value: "\n데덴네" + "\n레어코일"+ "\n찌르성게"+"\n렌트라"+"\n자포코일", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 106) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field3}`+`\n${field24}`+`\n${field27}`+`\n${field26}`},
                { name: '소드', value: "모든 포켓몬", inline: true },
                { name: '실드', value: "모든 포켓몬", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 107) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field30}`+`\n${field29}`+`\n${field28}`+`\n${field20}`},
                { name: '소드', value: "\n워글" + "\n에몽가"+ "\n맘박쥐"+"\n파이어로", inline: true },
                { name: '실드', value: "\n버랜지나" + "\n에몽가"+ "\n맘박쥐"+"\n파이어로", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 108) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field30}`+`\n${field29}`+`\n${field28}`+`\n${field20}`},
                { name: '소드', value: "모든 포켓몬", inline: true },
                { name: '실드', value: "모든 포켓몬", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 109) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#EC001C')
            .setTitle(`굴 ${args}번 (일반)`)
            .addFields(
                { name: '위치', value: `\n${field3}`+`\n${field22}`+`\n${field26}`+`\n${field29}`},
                { name: '소드', value: "\n스라크" + "\n쁘사이저"+ "\n이올브"+"\n핫삼", inline: true },
                { name: '실드', value: "\n스라크" + "\n헤라크로스"+ "\n이올브"+"\n핫삼", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 110) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field3}`+`\n${field26}`+`\n${field29}`},
                { name: '소드', value: "모든 포켓몬", inline: true },
                { name: '실드', value: "모든 포켓몬", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 111) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}`},
                { name: '소드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 112) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}`},
                { name: '소드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 113) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}`},
                { name: '소드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 114) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}`},
                { name: '소드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    if (args == 115) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#C13EDD')
            .setTitle(`굴 ${args}번 (레어)`)
            .addFields(
                { name: '위치', value: `\n${field11}`},
                { name: '소드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
                { name: '실드', value: "\n트리토돈" + "\n두빅굴"+ "\n거대코뿌리"+"\n사다이사(거다이맥스)", inline: true },
            )
            .setURL(`https://www.serebii.net/swordshield/maxraidbattles/den${args}.shtml`)
            .setImage(`https://raw.githubusercontent.com/rjqnrths/DEN-BOT/master/pictures/den${args}.png`)
            .setFooter(footerCred);       
        message.channel.send(Embed).catch(console.error);
    }
    
};
