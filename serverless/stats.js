const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    try {
        const _id = event['queryStringParameters']['matchId']
        const info = await HLTV.getMatchById(_id)
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
