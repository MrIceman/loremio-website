export const getPush = async (pushId) => {
    const resp = await fetch(`https://spddb7biyj.execute-api.eu-central-1.amazonaws.com/production/push/${pushId}`)
    const json = await resp.json()
    return json
}