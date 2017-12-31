let str = "PAYPALISHIRING"
let ZigZag = ([...str],count)=>{
    let upDown = true
    let obj = {}
    for (let i = 0; i < count; i++) {
        obj[i] = new Array(str.length).fill('')
    }
    let temp = 0
    for (let i = 0; i <str.length; i++) {
            console.log(temp)
            obj[temp][i]=str[i]
            if(Object.keys(obj)[Object.keys(obj).length-1] == temp){
                upDown = false
            }else if(temp==0){
                console.log(temp)
                upDown = true
            }

            switch (upDown) {
                case true:
                    temp++
                console.log(temp)            
                    break;
                case false:
                    temp--
                default:
                    break;
        }
    }
    return Object.keys(obj).reduce((a,b)=>{
        a+=obj[b].join('')
        return a
    },'')
}
console.log(ZigZag('AB',5))