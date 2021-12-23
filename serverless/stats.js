const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    try {
        const stats = await HLTV.getMatchById(event.queryStringParameters['matchId'])
        return {
            statusCode: 200,
            body: JSON.stringify(stats)
        }
    }
    catch(err) {
        return {
            statusCode: 403,
            body: JSON.stringify({'detail': `${err}`})
        }
    }
}