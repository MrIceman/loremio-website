export const resetPw = async (password, oobCode) => {
    const resp = await fetch(
        `https://spddb7biyj.execute-api.eu-central-1.amazonaws.com/production/profile/reset`,
        {
            method: "POST",
            body: {
                "newPassword": password,
                "oobCode": oobCode
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
    return await resp.json()
}