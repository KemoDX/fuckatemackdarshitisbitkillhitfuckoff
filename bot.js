const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready',  () => {
  console.log('By : Kemo_DX ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});


client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "-help") {
   message.react("😜")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("『! Ezio's Community』 『اسم البوت』", true)
      
      
      .addField("『^help^』😘『اذا تبي جميع الاوامر مع اوامر اضافية』😵", true)
      
	    .addField("『^help-』👻『اذا تبي الاوامر العامة』😳", true)
	    
      .addField("『^help-^』😮『اذا تبي  الاوامر الادارية』🤒", true)
      
      .addField("『🤑』『قريبا سوف نضيف المزيد و المزيد من الاوامر 』『😉』", true)
      
  message.channel.sendMessage({embed});

 }
});




client.on('message', message => {
   if (message.content === "-roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});
 
client.on('message', message => {
   if (message.content === "-roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});
 
client.on('message', message => {
   if (message.content === "-roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});
 
client.on('message', message => {
   if (message.content === "-roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});



 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("-كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("-خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



client.on("message", message => {
 if (message.content === "^help^") {
        message.react("😘")
           message.react("😵")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 البوت عربي و سيتم اضافه اللغه النكليزية

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                        
💎-server 『معلومات عن السيرفر』                      

💎-servers 『علشان تشوف البوت بكم سيرفر اون لاين 』  

💎-bot 『لمعرف البوت بكم سيرفر』

💎-date 『لمعرفه التاريخ』

💎-ping 『لمعرفه سرعه البوت』

💎-members 『معلومات عن الاعضاء』

💎-embed 『خاصيه غرد لكن بغير طريقه』

💎-say 『لي يكرر الكلام الذي تقوله』

💎-animal  『كود لي اضهار صور  للحيوانات』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

👑『اوامر ادارية』👑

👑-rooms 『لمعرفه عدد رومات السيرفر』

👑-ban 『لتعطي شخص باند』

👑-kick 『لتعطي شخص كيك』

👑-clear 『لمسح الشات برقم』

👑-edit  『لتعديل رساله 』

👑-ct  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』

👑-cv  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』

👑-delet  『كـود يحذف الـروم سواء صوتي او كتابي』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎲『القرعة』🎲

🎲-roll 1   『القرعة من 1 الى 25』

🎲-roll 2   『القرعة من 1 الى 50』

🎲-roll 3   『القرعة من 1 الى 75』

🎲-roll 4   『القرعة من 1 الى 100』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎮『العاب』🎮

🎮-كت تويت

🎮-مريم 

🎮-خواطر 

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎴『اوامر الصور』🎴

🎴-avatar 『لي عرض صورتك او صوره اي شخص』

🎴-image 『لي عرض صوره السيرفر』

🎴قريبا

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

🎎『انواع الترحيب』🎎

🎎 ترحيب 1 / ترحيب 2 

🎎 ترحيب 3 / ترحيب 4

🎎 ترحيب 5 / ترحيب 6 

🎎 ترحيب 7 / ترحيب 8

🎎 ترحيب 9 / ترحيب 10

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『الدعم الفني والمساعدة』💎

-invite | القسم الاول لي اضافه البوت 

-support| القسم الثاني  الدعم الفني و المساعدة


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 




`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "^help-^") {
        message.react("😮")
                message.react("🤒")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑

👑-ban 『لتعطي شخص باند』

👑-mute 『لتعطي شخص ميوت』

👑-unmute 『لتفك ميوت شخص』

👑-kick 『لتعطي شخص كيك』

👑-clear 『لمسح الشات برقم』

👑-edit  『لتعديل رساله 』

👑-ct  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』

👑-cv  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』

👑-delet  『كـود يحذف الـروم سواء صوتي او كتابي』

👑-bc  『خيارات البرودكاست』 

👑-rooms 『لمعرفه عدد رومات السيرفر』


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

	  

💎『الدعم الفني والمساعدة』💎

-invite | القسم الاول لي اضافه البوت 

-support| القسم الثاني  الدعم الفني و المساعدة







`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "^help-") {
        message.react("😳")
                message.react("👻")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                        
💎-server 『معلومات عن السيرفر』                      

💎-servers 『علشان تشوف البوت بكم سيرفر اون لاين 』  

💎-bot 『لمعرف البوت بكم سيرفر』

💎-date 『لمعرفه التاريخ』

💎-ping 『لمعرفه سرعه البوت』

💎-members 『معلومات عن الاعضاء』

💎-embed 『خاصيه غرد لكن بغير طريقه』

💎-say 『لي يكرر الكلام الذي تقوله』

💎-animal  『كود لي اضهار صور  للحيوانات』


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
	  

💎『الدعم الفني والمساعدة』💎

-invite | القسم الاول لي اضافه البوت 

-support| القسم الثاني  الدعم الفني و المساعدة



`)


message.author.sendEmbed(embed)

}
}); 

client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "-mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});



   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "-unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});

const arraySort = require('array-sort'),
table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "topinvite")) {
	   
	if (command === "-topinvites") {    

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['الدعوات', 'الاشخاص']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("دعوات السيرفر")
    .addField(' المتصدرين' , `${table.table(possibleInvites)}`)

    message.channel.send(embed)
    }
});

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "! Ezio's Community")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})

codes.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '502540263936491521') return;

  let types = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'mp4',
    'avi',
    'mkv',
    'mpeg'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for pics and vids only!`)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for pics and vids only!`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

})

client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', '『invited-by』');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "! Ezio's Community")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` ♥ **تم دعوته من قبل ${Invite.inviter} ♥ `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });

client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});






var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


   client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  client.on('message', (message) => {
    if (message.content.startsWith('-kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 


client.on('message', (message) => {
    if (message.content.startsWith('-ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
  
  client.on("message", (message) => {
    if (message.content.startsWith('-delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
  
  
client.on('message', message => {
     if (message.content === "-servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**| السيرفرات |**" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

  var prefix = "-";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

	 var prefix = "-";
var cats = ["data:image/jpeg;base64,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
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'fuck')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('message', message => {
    if (message.content === "-server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


  client.on('message', message => {
    if (message.content === "-rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

  var prefix = "-";
  const HeRo = new Discord.Client();
  client.on('message', message => {
      if (message.content === prefix + "date") {
          if (!message.channel.guild) return message.reply('** This command only for servers **');  
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();

              var Date15= new Discord.RichEmbed()
              .setTitle("**『  Date - التاريخ 』 **")
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "『"+ Day + "-" + Month + "-" + Year + "』")
              .setFooter(`*help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
               message.channel.sendEmbed(Date15);
      }
  });




    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



var prefix = "-"

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});

client.on('message', message => {
     if (message.content === "-bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if (message.content === "-roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('الرتب:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on("guildCreate", guild => {
  console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
});




  
  
client.on('ready', () => {
   client.user.setGame(" -help | -invite ");
}); 

client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا حياك الله***, ${member}`);
  
});

client.on('message', message => {
  if (true) {
if (message.content === '-support') {
      message.author.send(' |https://discord.gg/T4Q7vXP| لـ أي استفسار').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (true) {
if (message.content === '-invite') {
      message.author.send(' رابط البوت |  https://discordapp.com/api/oauth2/authorize?client_id=498423544380653568&permissions=0&scope=bot ').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "-invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-users')){
 if(!message.author.id === 'اي دي صاحب البوت') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message=>{
    if (message.content ==='-add-colors'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }
    if (message.content === '-de-colors'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.roles.find('name', x)
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }

})
  
  
  
  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

 
 
client.on('message', message => {
 if (message.content.startsWith("ترحيب 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.login('NDk4NDIzNTQ0MzgwNjUzNTY4.DqmqAg.G6KlPpPQte7YSGsbYNgeXKnwFNE');
