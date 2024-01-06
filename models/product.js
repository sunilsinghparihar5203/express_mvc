const fs = require('fs')
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFormFile=(cb)=>{
 
   fs.readFile(p,'utf8',(err,fileContent)=>{
    if (err) {
      return cb([]);
    }else{
      cb(JSON.parse(fileContent))
    }
   
  })
}
module.exports = class Product{
  constructor(t){
    this.title = t;
  }

  save(){
    getProductsFormFile(products =>{
      products.push(this);
      fs.writeFile(p,JSON.stringify(products),err=>{
        console.log(err)
      });
    });
  }

  static fetchAll(cb){
    getProductsFormFile(cb)
  }

}