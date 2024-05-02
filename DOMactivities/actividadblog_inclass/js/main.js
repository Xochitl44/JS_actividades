//select the button by the id that it was assigned
let button = document.getElementById("save-entry-button");
let inputs = document.querySelectorAll("#post-form input");

//add listener so that when we click on the button it actions something
button.addEventListener("click", () => {
    //console.log("this button works")
    let blogEntry = {};

    inputs.forEach((input) => {
        blogEntry[input.name] = input.value;
    });

    console.log(blogEntry);
    saveNewEntry(blogEntry);
    
    printBlogList(product, "product-wrapper")

});



const saveNewEntry = async (entryObject) => {
    let response = await fetch (
        `https://kodemia-js-33g-default-rtdb.firebaseio.com/koders.json`, 
        {
            /*The method that you are going to use*/
            method: "POST",
            /*What are you going to send to the database*/
            body: JSON.stringify(entryObject),
        }
    );

    //Unpacking the response so that we can use it
    let data = await response.json();
    console.log(data);
};


/*Create Blog List*/
const createBlogCard = (entryObject) => {
    let { title, content, author } = entryObject;
  
    let card = document.createElement("div");
    card.classList.add("card", "blog-card", "mb-3");
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText);
  
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardTextContent = document.createTextNode(content);
    cardText.append(cardTextContent);

    let cardAuthor = document.createElement("p");
    cardText.classList.add("card-author");
    let cardAuthorContent = document.createTextNode(author);
    cardText.append(cardAuthorContent);
  
    let cardAuthorEntry = createAuthorElement(entryObject);
  
    cardBody.append(cardTitle, cardText, cardAuthor);
    card.append(cardBody);
  
    return card;
  };

  /*print Blog list*/
  const printBlogList = (dataArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    wrapper.innerHTML= "";
    dataArray.forEach((product) => 
        wrapper.append(createBlogCard(product)))
    };


 /*
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
  */