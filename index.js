fetch("./data.json")
.then(response => response.json())
.then(data => {
    // console.log(data.products)
    showProducts(data.products)
})
.catch(error => error);


showProducts = products => {
  
    const rowDiv = document.querySelector(".row")

    products.slice(0,6).map(product => {
    
        const divElement = document.createElement("div")
        divElement.classList.add("col-sm-4", "text-center", "my-3")
        rowDiv.append(divElement)

        const containerElement = document.createElement("div")
        containerElement.classList.add("border", "image-div")
        containerElement.style.height = "500px"
        divElement.append(containerElement)

        const imgElement = document.createElement("img")
        imgElement.src = `${product.image}`
        imgElement.classList.add("border", "image")
        containerElement.append(imgElement)

        const textElement = document.createElement("p");
        textElement.innerHTML = `${product.name}`;
        textElement.style.fontWeight = "500"
        containerElement.append(textElement);

        const kindElement = document.createElement("p");
        kindElement.innerHTML = `${product.params.land} ${product.params.region} ${product.params.art}`;
        kindElement.style.color = "gray"
        containerElement.append(kindElement);

        const priceDivElement = document.createElement("div")
        priceDivElement.classList.add("price-div")
        containerElement.append(priceDivElement)

        const priceElement = document.createElement("p");
        priceElement.innerHTML = `${product.priceText}*`;
        priceElement.style.fontWeight = "500"
        priceDivElement.append(priceElement);

        const oldPriceElement = document.createElement("p");
        oldPriceElement.innerHTML = `${product.oldPriceText}`;
        oldPriceElement.classList.add("old-price")
        priceDivElement.append(oldPriceElement);

        const basePriceElement = document.createElement("p");
        basePriceElement.innerHTML = `${product.params.basePrice}`;
        basePriceElement.classList.add("base-price")
        containerElement.append(basePriceElement);

        const percentageElement = document.createElement("div")
        percentageElement.classList.add("border", "percentage-div")
        percentageElement.innerHTML = "15%";
        containerElement.append(percentageElement)

        const neuElement = document.createElement("div")
        neuElement.classList.add("border", "neu-div")
        neuElement.innerHTML = "NEU";
        containerElement.append(neuElement)
        
    });
  }


