let globalVariable="someValue"
if (true) {
    let localVariable="someMoreValue"
    var moreLocalVariable="otherValues"
    globalVariable="batman"
    console.log(localVariable)
}
console.log(globalVariable)
console.log(moreLocalVariable)
