function estimate(){
    let name = document.getElementById("name").value;
    let drinks = parseFloat(document.getElementById("water","pepsi","coke","milk","lemonade").value);
    let sandwiches = parseFloat(document.getElementById( "blt", "pbj", "ham", "patty", "hamburger").value);
    let deserts = parseFloat(document.getElementById( "ice", "jello", "fruit", "chocolate", "cheese").value);
    let total = (drinks + sandwiches + deserts);

    var totalCost = total;
    document.getElementById("estimate").innerHTML = (name + drinks + sandwiches + deserts + ", your total is: $" + total)
}