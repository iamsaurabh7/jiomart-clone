const imageCardLinks9 = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694075185_Home_Funishing.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694075210_Cooking_Essentials.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694075233_Furniture.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694075291_Oils_and_Masala.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694075314_Atta__Dals_and_Rice.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694075338_Dry_fruits_and_nuts.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694075362_Home_Cleaning_and_Organisation.jpg?im=Resize=(223,280)",

    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1693571618_Home_essentials.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694078590_1693994036_Artisanal_bedsheets.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694078636_men_fashion.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694078691_Women_fashion.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694078719_kids_fashion.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694078739_Food_and_Beverage.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694078764_Cleaning_essentials.jpg?im=Resize=(223,280)",

    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694004433_Mom_and_baby_care.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694079154_1690872701_Smartphones.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1694079179_1690872761_Washing_machines.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1693386410_1690872811_Headphones_and_soundbar.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1693386439_1690872853_Laptops_and_Tablets.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1693386471_1690872893_Kitchen_appliances.jpg?im=Resize=(223,280)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1693386506_1690872942_Smart_Televisions.jpg?im=Resize=(223,280)"
]
const cardElement9 = document.querySelector(".card-element-9")
function showCardSlide9(imageCardLinks) {
    imageCardLinks.forEach(element => {
        let divCardElement = document.createElement("div")
        let image = document.createElement("img")
        image.src = element

        divCardElement.append(image)
        cardElement9.append(divCardElement)
    });
}
showCardSlide9(imageCardLinks9)