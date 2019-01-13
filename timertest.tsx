const dddd = () => {
    const aaaa = ["","","",""]
    const bbbb = Math.floor(Math.random() * Math.floor(aaaa.length))
    const cccc: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const ccccl: number = cccc.length
    aaaa[bbbb] = cccc[Math.floor(Math.random() * ccccl)]
    // console.log(aaaa)
    return aaaa
}
const eeee = setInterval(dddd,1000)
const ffff = () => {
    clearInterval(eeee)
}
setTimeout(ffff,3500)

export default dddd