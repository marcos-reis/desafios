const fs = require("fs");
const api = require("../services/api");
const sha1 = require("sha1")
const request = require("request")

module.exports = {
  async index(req, res) {
    const response = await api.get(
      "http://localhost:3333/codenation"
    );
const JsonData=(data)=>{
  let obj = []
  for (const key in data) {
    obj.push(`\n "${key}": "${data[key]}"`)
  
  }
  return obj
}
      fs.writeFile("answer.json", `{${JsonData(response.data)} \n}`, ()=>{});    
      
        const submit = await api.put(
          "http://localhost:3333/message"     ,{
            data:response.data
          }     
        );
res.send(submit.data)
  },
  async update(req, res) {
    const decodeSentence = ( data) =>{
      
    const originalSentence = data["cifrado"]
    const numberOfHouses = data["numero_casas"]
    const arraySenteceEncrypted = originalSentence.split('')
    const arraySenteceDecrypted = []

arraySenteceEncrypted.map( (item,count) =>{
  if(item == "," ||item == " " || item == "."){
      arraySenteceDecrypted.push(item)
  }else if(  item == "0" 
          || item == '1' 
          || item == '2' 
          || item == '3' 
          || item == '4' 
          || item == '5' 
          || item == '6' 
          || item == '7' 
          || item == '8' 
          || item == '9' ){
    arraySenteceDecrypted.push(item)
}else{
   const letterCode = item.charCodeAt() - parseInt(numberOfHouses)
   const letterFromCode = String.fromCharCode(letterCode)
   arraySenteceDecrypted.push(letterFromCode)
  }
  
})
const decodedSentence = arraySenteceDecrypted.join("")

return decodedSentence

    }
    const UpdateJSON = (data)=>{
      let array = []
      for (const key in data) {
        if(key=="numero_casas"){
          array.push(`\n "${key}":${data[key]}`)
        }else if(key=="cifrado"){
          array.push(`\n "${key}":"${data[key]}"`)
        }else if(key=="decifrado"){
          array.push(`\n "${key}":"${decodeSentence(data)}"`)
        }else if(key=="resumo_criptografico"){
          array.push(`\n "${key}":"${sha1(decodeSentence(data))}"`)
        }else{
          array.push(`\n "${key}":"${data[key]}"`)
        }
   
      }
      return array
    }
      const arquivo = fs.writeFile("answer.json",
          `{${UpdateJSON(req.body.data)}}`,
           function(err) {});



 
 const formData = {

  // Pass data via Streams
  my_file: arquivo,
 
};

 await request.post({url:'http://localhost:3333/codenation-submit', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  res.send(body)
  console.log('Upload successful!  Server responded with:', body);
});




  }
};
