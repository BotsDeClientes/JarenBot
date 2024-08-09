const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let emot = `${pickRandom(['+51 926 933 818 𝘠𝘢𝘭𝘭𝘪𝘤𝘰', '+51 992 848 113 𝘒𝘢𝘵𝘪𝘤𝘴𝘢', '+54 9 11 2246-1521 𝘛𝘶𝘴𝘴𝘪', '+54 9 3751 36-6296 𝘋𝘪𝘢𝘯𝘢', '+591 75178096 𝘠𝘶𝘭𝘪'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
  let teks = `╭─────────\n│❏ 𝘑𝘢𝘳𝘦𝘯 𝘛𝘦 𝘐𝘯𝘷𝘰𝘤𝘢 💸\n│❏ 𝘑𝘢𝘳𝘦𝘯𝘓𝘰𝘷𝘦𝘳𝘴: *${participants.length}* ${oi}\n│❏ 𝘝𝘦𝘯𝘥𝘦𝘥𝘰𝘳𝘦𝘴: ${emot}\n│\n`;
  for (const mem of participants) {
    teks += `│🔱 @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰@𝚈𝚊𝚕𝚕𝚒𝚌𝚘`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
