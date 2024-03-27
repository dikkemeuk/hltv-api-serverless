const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    try {
        const _id = event['queryStringParameters']['playerId']
        const info = await HLTV.getPlayerById(_id)
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        }
    }
    catch (err) {
        return {
            statusCode: 403,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(err)
        }
    }
}
