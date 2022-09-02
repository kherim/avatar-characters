const menuData = [
    {
        id: 1,
        title: "aang",
        category: "air",
        age: 112,
        img: "images/aang.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 2,
        title: "appa",
        category: "air",
        age: "-",
        img: "images/appa.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 3,
        title: "momo",
        category: "air",
        age: "-",
        img: "images/momo.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 4,
        title: "katara",
        category: "water",
        age: 15,
        img: "images/katara.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 5,
        title: "sokka",
        category: "water",
        age: 15,
        img: "images/sokka.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 6,
        title: "toph",
        category: "earth",
        age: 12,
        img: "images/toph.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 7,
        title: "bumi",
        category: "earth",
        age: 65,
        img: "images/bumi.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 8,
        title: "suki",
        category: "earth",
        age: 15,
        img: "images/suki.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 9,
        title: "zuko",
        category: "fire",
        age: 16,
        img: "images/zuko.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 10,
        title: "azula",
        category: "fire",
        age: 14,
        img: "images/azula.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 11,
        title: "iroh",
        category: "fire",
        age: 55,
        img: "images/iroh.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 12,
        title: "ozai",
        category: "fire",
        age: 42,
        img: "images/ozai.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 13,
        title: "mai",
        category: "fire",
        age: 15,
        img: "images/mai.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    },
    {
        id: 14,
        title: "tylee",
        category: "fire",
        age: 14,
        img: "images/tylee.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laboriosam?"
    }
];

let menu = menuData;
let row = document.getElementsByClassName("row");
const filterBtns = document.querySelectorAll(".btn-item");

menu.forEach((item) => {
    addItem(item);
});


filterBtns.forEach((btn)=>{
    btn.addEventListener("click", function(ev) {
        console.log(ev.target.id);
        switch(ev.target.id){
            case "all":
                menu = menuData;
                break;
            case "air":
                menu = menuData.filter((item) => item.category == "air");
                break;
            case "water":
                menu = menuData.filter((item) => item.category == "water");
                break;
            case "earth":
                menu = menuData.filter((item) => item.category == "earth");
                break;
            case "fire":
                menu = menuData.filter((item) => item.category == "fire");
                break;
        }
        while(row[0].hasChildNodes()){
            row[0].removeChild(row[0].firstChild);
        }
        menu.forEach((item) => {
            addItem(item);
        });
    }, false);
})

function addItem(item){
    let col = document.createElement("div");
        let menuInfo = document.createElement("div");
        let menuContent = document.createElement("div");
        let menuTitle = document.createElement("div");
        let menuText = document.createElement("div");
        let title = document.createElement("h4");
        let age = document.createElement("h4");
        let image = document.createElement("img");
        image.src = item.img;
        title.innerHTML = item.title;
        age.innerHTML = item.age;
        col.classList.add("menu-items", "col-lg-6", "col-sm-12");
        menuContent.classList.add("menu-contents", "col-lg-12", "col-sm-12");
        menuInfo.classList.add("menu-info");
        menuTitle.classList.add("menu-title");
        menuText.classList.add("menu-text");
        image.classList.add("photo");
        menuTitle.appendChild(title);
        menuTitle.appendChild(age);
        menuText.innerHTML = item.desc;
        menuInfo.appendChild(menuTitle);
        menuInfo.appendChild(menuText);
    
        menuContent.appendChild(image);
        menuContent.appendChild(menuInfo);
        col.appendChild(menuContent);
        row[0].appendChild(col);
    }