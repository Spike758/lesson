let cards = [
    {
        img: "./assets/img/clothes.jpg",
        title: "T-shirt winter collection",
        price: 45
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker",
        price: 50
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 30
    }
]


const setCards = () => {
    let cards_container = document.querySelector('.cards .container')
    cards.forEach(card =>{
    let html_card = `
    <div class="card">
                        <div class="cover">
                            <img src=${card.img} alt="">
                            <div class="circle"></div>
                        </div>
                        <div class="card-content">
                            <h4>${card.title}</h4>
                            <p class="price">${card.price}</p>
                        </div>
                    </div>
    `
    cards_container.innerHTML += html_card
})
}
const sortCards = () => {
    cards.sort((a,b) => {
        return b.price - a.price
    })
}

sortCards()

const navigation = (page_name) =>{
    const pages = document.querySelectorAll('.fullpage');

    pages.forEach(page =>{
        page.classList.remove('open')

        page.classList.forEach(class_name =>{
            if(class_name === page_name){
                page.classList.add('open')
            }
        })

    })
}

const changeCount = (action,element) =>{
    let basket_item = element.closest('.product')
    let count_html = basket_item.querySelector('.quantity')
    let count = parseInt(count_html.innerHTML)
    console.log(basket_item)
   if(action === 'minus'){
    if( count > 1){
        count -=1
    }
   }
    else{
        count +=1
    }
    
    count_html.innerHTML = count
}