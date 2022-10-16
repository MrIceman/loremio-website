export const getPush = async (pushId) => {
    const resp = await fetch(`https://k42pcx1qi8.execute-api.eu-central-1.amazonaws.com/production/push/${pushId}`)
    const json = await resp.json()
    return json
}