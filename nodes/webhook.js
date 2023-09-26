
const runwebhook = async (inp) => {
    const outp = { ...inp }
    const {url, body} = inp;
    await fetch(url,{
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body)
    })
    console.log("WEBHOOK", outp)
    return outp;
}
export default runwebhook