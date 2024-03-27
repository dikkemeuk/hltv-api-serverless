const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    try {
        const matches = await HLTV.getMatches()
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(matches)
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