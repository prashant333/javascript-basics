let s ='statement'
let t ='nte'
let j =0
for (let i = 0; i < s.length; i++) {
    for (j; j < t.length; j++) {
        if (t[j]==s[i]) {
            j=j+1
        }
        break
    }
}
if (j==t.length) {
    console.log('match')
}
else console.log('not found')