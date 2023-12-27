fetch('https://fakestoreapi.com/products')
.then((data)=>{
    console.log(data);
    return data.json();
})
.then((objectData)=>{
    let cardData="";
    objectData.map((values)=>{
        cardData+= ` 
        <div class="col col-card mt-4">
      <div class="card card-style dcard rounded-0">
        <div class="card-body">
          <img src="${values.image}" class="cards-image"/>
          <h5 class="card-title desc">${values.title}</h5>
          <p class="card-text desc">${values.description}</p>
          <a href="product.html?productId=${values.id}">Show more</a>
          <small class="d-block"><b style="color:green">Price:</b> ${values.price}</small>
          <button id="addTocart" class="d-block btn btn-warning "><i class="fa-solid fa-cart-shopping" style="font-size: 0.9em;color: black;"></i>Add to Cart</button>
        </div>
      </div>
    </div>
        
          `;
    })
    document.getElementById("cards-body").innerHTML=cardData;
})






          
          
       