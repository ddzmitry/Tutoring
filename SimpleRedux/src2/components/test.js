const cloudinary = require('cloudinary');


    cloudinary.config({ 
      cloud_name: 'ddzmitry', 
      api_key: '431231154698784', 
      api_secret: 'KQ3L0TLHndfE-AB7W7V9V59XYQc' 
    });
async function imgfunc() {
        

    await cloudinary.uploader.upload("test.jpg", function(result) { 
        console.log('Worked')
        console.log(result) 
      });
      
}

export default imgfunc

