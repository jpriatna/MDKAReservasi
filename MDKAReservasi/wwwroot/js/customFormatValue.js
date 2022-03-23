function kFormatter(num) {
    //return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(0)) + 'k' : Math.sign(num) * Math.abs(num)
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(0)) : Math.sign(num) * Math.abs(num)
}
    