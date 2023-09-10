
const imageCardLinks = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694361460_OnePlus_smartphones.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694361502_High_Performance_HP_Laptops.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694361541_Best_of_Headphones.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694361573_Motorola_edge_40_28149.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694361622_Top_Selling_deal_on_Microwave_Ovens.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694361622_Top_Selling_deal_on_Microwave_Ovens.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694361772_Voltas_beko.jpg?im=Resize=(223,280)"
]
const cardElement = document.querySelector(".card-element")
function showCardSlide(imageCardLinks) {
    imageCardLinks.forEach(element => {
        let divCardElement = document.createElement("div")
        let image = document.createElement("img")
        image.src = element

        divCardElement.append(image)
        cardElement.append(divCardElement)
    });
}
showCardSlide(imageCardLinks)