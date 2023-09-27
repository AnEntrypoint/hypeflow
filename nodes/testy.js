const testy = inp => {
    console.log({ inp });
    const outp = { ...inp, hello: 'world' };
    console.log("OUTPUT", outp);
    return outp;
}
export default testy;