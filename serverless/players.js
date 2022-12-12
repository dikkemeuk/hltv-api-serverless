const HLTV = require('hltv-api').default

exports.handler = async function (event, context) {
    try {
        const results = await HLTV.getTopPlayers()
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(results)
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