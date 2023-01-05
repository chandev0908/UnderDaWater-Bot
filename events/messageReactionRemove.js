module.exports = {
	name: "messageReactionRemove",

	/**
	 * @description Execute when a message reaction was remove and handle it.
	 * @author Chandev
	 * @param {import('discord.js').Message & { client: import('../typings').Client }} message The message which was created.
	 */
    
	async execute(message) {
		const { client } = message;
		const iconRole = {
			Dota2: "1060441249833816094",
			Lol: "1060441143516594237",
			Genshin: "1060441506802044928",
			EpicGames: "1060443109244280874",
			Osu: "1060443151355084871",
			Valorant: "1060442299412254761",
			Coding: "1060445037831405648",
			Arts: "1060443894002753556",
			Gamedev: "1060445275359031306",
			Nsfw: "1060444049724678154",
			Pikachu: "1060442003797725254",
		};

		client.on("messageReactionRemove", async (reaction, user) => {
			if (reaction.message.partial) await reaction.message.fetch();
			if (reaction.partial) await reaction.fetch();
			if (!reaction.message.guild) return;

			const gameRolesEmbed = "851457842430607371";
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.Dota2
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851394672718512148");
				console.log("dotes remove");
			}
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.Lol
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851355081487810560");
			}
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.Genshin
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("826814428456157234");
			}
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.EpicGames
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851735733957165076");
			}
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.Valorant
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851399502405173248");
			}
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.Osu
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851399473543249921");
			}
			const otherRolesEmbed = "851457845592457216";
			if (
				reaction.message.id === otherRolesEmbed &&
				reaction.emoji.id === iconRole.Coding
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851634315762466866");
			}
			if (
				reaction.message.id === otherRolesEmbed &&
				reaction.emoji.id === iconRole.Arts
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851399541806465034");
			}
			if (
				reaction.message.id === otherRolesEmbed &&
				reaction.emoji.id === iconRole.Gamedev
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851395018345414667");
			}
			if (
				reaction.message.id === otherRolesEmbed &&
				reaction.emoji.id === iconRole.Nsfw
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851399596298338324");
			}
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.Pikachu
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("851394600384200724");
			}
			if (
				reaction.message.id === gameRolesEmbed &&
				reaction.emoji.id === iconRole.Axie
			) {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove("892017283814281246");
			}
		});
	},
};
