import request from "request-promise";

/**
 * Emit a message to Slack
 *
 * @param {object} config
 * @param {string} msg
 * @param {object} obj
 */
export function emitToSlack(config, msg, obj) {
	request({
		method: "POST",
		uri: "https://slack.com/api/chat.postMessage",
		body: {
			attachments: [
				{
					pretext: `*_An error occurred in ${config.app}_*:`,
					title: msg,
					text: obj ? `\`\`\`${JSON.stringify(obj, null, 4)}\`\`\`` : "",
				},
			],
			channel: config.channel,
		},
		headers: {
			"Authorization": `Bearer ${config.token}`,
		},
		json: true,
	}).then(() => {}).catch(() => {});
}
