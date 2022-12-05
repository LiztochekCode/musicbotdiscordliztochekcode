const maxVol = client.config.opt.maxVol;
module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `В данный момент музыка не воспроизводится... повторите попытку ? ❌`, ephemeral: true });

    const vol = Math.floor(queue.volume + 5)

    if (vol > maxVol ) return inter.reply({ content: `Больше не могу увеличить громкость ${inter.member}... повторите попытку? ❌`, ephemeral: true })

    if (queue.volume === vol) return inter.reply({ content: `Громкость, которую вы хотите изменить, уже является текущей. ${inter.member}... повторите попытку ? ❌`, ephemeral: true });

    const success = queue.setVolume(vol);

    return inter.reply({ content:success ? `Звук был изменен на **${vol}**/**${maxVol}**% 🔊` : `Что-то пошло не так ${inter.member}... повторите попытку ? ❌`, ephemeral: true});
}