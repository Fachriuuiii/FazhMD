let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} PULSA ${htka}

ðââ¹, ingin melanjutkan pembayaran?

ð *Pembayaran*
ð³ Via: Pulsa Tri3
ð Nomor: 0895394988123
ð¤ A/n: Fangz
ð¦ Mitra: Fangz BOT
ð° Metode pembayaran: Online ( ~Cod~ )

ð£ *Beli*

Apk TokoBot: https://app.bukaolshop.com/toko/tokobot

Apk FangzApp:https://web.jagel.id/store/fangzapp

Toko Website:https://toko.ly/TokoBot   (Non apk)

âï¸ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


âKLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ð¸ISI PULSA', url: 'Konter Terdekat'}},
    {index: 4, quickReplyButton: {displayText: 'âï¸Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^pulsatri$/i
handler.private = true

export default handler