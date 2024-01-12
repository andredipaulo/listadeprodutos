const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll  = document.querySelector('.map-all');
const buttonReduce  = document.querySelector('.sum-all');
const buttonFilter  = document.querySelector('.filter-vegan');
const list = document.querySelector('.list');


function formatReal(value){
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
}

function showAll( products ){    
    
    let newList = "";

    products.forEach( product => {
        newList += 
        `<li>
            <img src='${product.src}'?>
            <p>${product.name}</p>
            <p class="price">                
                ${formatReal(product.price)}
            </p>
        </li>`
    });
    
    list.innerHTML = newList;    
}

function mapAll(){
    
    const newPrice  = menuOptions.map( product => ( {
        ...product,
        price: (product.price * 0.9)
    }));
    
    showAll(newPrice);
}

function sumAll(){
    
    const total = menuOptions.reduce((accumulator , currentValue )=>{
        return accumulator + currentValue.price;
    }, 0 );

    list.innerHTML = 
        `<li>            
            <p>Total</p>
            <p class="price">${ total }</p>
        </li>`
    
}

function filterVegan(){
    
    const veganProducts = menuOptions.filter( product => product.vegan === true);

    showAll(veganProducts);

}

buttonShowAll.addEventListener('click', () => showAll(menuOptions) );
buttonMapAll.addEventListener('click', mapAll);
buttonReduce.addEventListener('click', sumAll);
buttonFilter.addEventListener('click', filterVegan);