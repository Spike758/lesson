const information = [
    {
    url: './pages/components/header.html',
    include: '.wrapper'
    },
    {
        url: './pages/components/main.html',
        include: '.include-main'
    },
    {
        url: './pages/components/category.html',
        include: '.include-category'
    },
    {
        url: './pages/components/cards.html',
        include: '.include-cards'
    },
    {
        url: './pages/components/footer.html',
        include: '.include-footer'
    },
    {
        url: './pages/cart.html',
        include: '.basket-include'
    },
    {
        url: './pages/order.html',
        include: '.order-include'
    },
    {
        url: './pages/product.html',
        include: '.product-include'
    },
]

information.forEach(item =>{
    fetch(item.url)
    .then(response =>{
        return response.text()
    })
    .then(data =>{
        document.querySelector(item.include).innerHTML = data
        if(item.include === '.include-cards'){
            setCards()
        }
        if(item.include === '.basket-include'){
            cardBasket()
        }
    })
})



   