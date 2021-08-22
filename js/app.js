// memory section
document.getElementById('memory-second-btn').addEventListener('click', function(){
    productCost('memory-cost', '16GB');
});

document.getElementById('memory-first-btn').addEventListener('click', function(){
   freeCost('memory-cost');
});

// storage section
document.getElementById('storage-first-btn').addEventListener('click', function(){
    freeCost('storage-cost');
});

document.getElementById('storage-second-btn').addEventListener('click', function(){
    productCost('storage-cost', '512GB');
});

document.getElementById('storage-third-btn').addEventListener('click', function(){
    productCost('storage-cost', '1TB');
});

// delivery section
document.getElementById('delivery-first-btn').addEventListener('click', function(){
    freeCost('delivery-cost');
});

document.getElementById('delivery-second-btn').addEventListener('click', function(){
    productCost('delivery-cost');
});


const totalPrice = document.getElementById('total-price');
const totalPriceValue = parseInt(totalPrice.innerText);
const mainTotalPrice = document.getElementById('main-total-price');
const mainTotalPriceValue = parseInt(mainTotalPrice.innerText);

function freeCost(itemType){
    const cost = document.getElementById(itemType);
    cost.innerText = 0;
    updateTotal();
};


function productCost(productType, storageType){
    const productCost = document.getElementById(productType);

    if(storageType == '512GB'){
        productCost.innerText = 100;
    }
    else if(storageType == '1TB' || storageType == '16GB'){
        productCost.innerText = 180;
    }
    else{
        productCost.innerText = 20;
    }
    updateTotal();
};


 document.getElementById('pomo-btn').addEventListener('click', function(){
    const pomoCode = document.getElementById('pomo-code').value
    usePomoCode(pomoCode);
 });   
    
function updateTotal(){
    const memoryPrice = document.getElementById('memory-cost');
    const memoryPriceValue = parseInt(memoryPrice.innerText);
    const storagePriceValue = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCostValue = parseInt(document.getElementById('delivery-cost').innerText);
    
    totalPrice.innerText = totalPriceValue + memoryPriceValue + storagePriceValue + deliveryCostValue;

    mainTotalPrice.innerText = totalPriceValue + memoryPriceValue + storagePriceValue + deliveryCostValue;
};


function usePomoCode(pomoCode){
    const memoryPrice = document.getElementById('memory-cost');
    const memoryPriceValue = parseInt(memoryPrice.innerText);
    const storagePriceValue = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCostValue = parseInt(document.getElementById('delivery-cost').innerText);

    if(pomoCode == 'stevekaku' ){
    const mainPrice = totalPriceValue + memoryPriceValue + storagePriceValue + deliveryCostValue;

        mainTotalPrice.innerText = mainPrice - (25 / 100) * mainPrice;
    }
    else{
        alert('you enter a wrong pomo code');
    }
};

// END