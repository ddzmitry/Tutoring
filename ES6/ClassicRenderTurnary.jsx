let media_video = [
{src:'https://foobar.video1' , media:'video1.vm'},
]

let media_img = [
    {src:'https://foobar.img1' , media:'img1.gif'},
    {src:'https://foobar.img2' , media:'img2.gif'}]
    

// this._type.includes('img') ? 'img' : 'video';
class media_any {
    constructor(src, type) {
      this.src = src
      this._type = type
    }
    define(){
       return  this._type.includes('img') ? 'img': 'video'
    }
    GoBig(){
        return  `${this.define()} Goes Big`
     }

    render () {
        return this.define() == 'img' ? '<img> I AM IMAGE <img>': '<video> I AM VIDEO </>'
     }
  
    }

    let total = [...media_img,...media_video]
    total_class = total.map(a => new media_any(a.src,a.media))
    render_all_map = total_class.map(b => b.render())
    console.log(render_all_map)

    console.log(total_class)
    all_src = total_class.map(b => b.define())
    all_src
    all_bigg = total_class.map(b => b.GoBig())


// let test = {src:'https://foobar.img1' , media:'img1.gif'}
// let class_ = new media_any(test.src,test.media)
// console.log(class_.define())
// console.log(class_.GoBig())


// let test2 = {src:'https://foobar.video' , media:'video'}
// let class_2 = new media_any(test2.src,test2.media)
// console.log(class_2.define())
// console.log(class_2.GoBig())