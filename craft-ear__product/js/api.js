var productApi = 'http://localhost:3000/product'
function getIfoProduct(callback) {
  fetch(productApi)
    .then(
      function (res) {
        return res.json()
      }
    ).then(callback)
    .catch(()=>{alert(('ngu'))})
}
function renderProduct(data) {
  var productWraper = document.querySelector('.container__product')
  var productRender = data.map(function (a) {
    return `
  <div class="product-wraper">
                        <img class="product-work__img" src=${a.imglink}>
                        <div class="product-work__info">
                            <h4 class="product-work__des">${a.des3}</h4>
                            <div class="product-work__details">
                                <div class="product-work__faceplate">
                                    <p class="product-work__cap">Facpelate:</p>
                                    <p class="product-work__bold">${a.facpelate}</p>
                                </div>
                                <div class="product-work__faceplate">
                                    <p class="product-work__cap">Color:</p>
                                    <p class="product-work__bold">${a.color}</p>
                                </div>
                            </div>
                        </div>

                    </div>
  `
  })
  productWraper.innerHTML = productRender.join()
}

getIfoProduct(renderProduct)