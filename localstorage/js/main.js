let products = []

document.getElementById("guardar-producto").addEventListener("click", () => {
    let productName = document.getElementById("product-name").ariaValueMax;
    products = [...products, productName];
    print



    
});

const printProducts = (productArray) => {
    let list = document.getElementById("products-list")
    list.innerHTML = "";

    productArray.forEach((product) => {
        let currentContent = list.innerHTML;
        list.innerHTML = currentContent + `<li>${product}</li>`;
    });
};