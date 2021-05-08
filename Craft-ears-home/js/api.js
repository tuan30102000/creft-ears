var productApi='http://localhost:3000/product'
fetch(productApi)
.then(
  function(res){
      return res.json()
  }
).then(function(data){
    console.log(data)
})