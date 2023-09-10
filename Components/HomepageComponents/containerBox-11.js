const imageCardLinks11 = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694083561_1.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694083583_2.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694083631_3.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694083649_4.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694083676_5.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694083701_6.jpg?im=Resize=(223,280)"
]
const cardElement11 = document.querySelector(".card-element-11")
function showCardSlide11(imageCardLinks) {
    imageCardLinks.forEach(element => {
        let divCardElement = document.createElement("div")
        let image = document.createElement("img")
        image.src = element

        divCardElement.append(image)
        cardElement11.append(divCardElement)
    });
}
showCardSlide11(imageCardLinks11)