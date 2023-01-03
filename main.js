let food=[
    {
        name:"Sulthan Veedu",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kquvmgyw4bfolksc2b0q",
        cuisine:"Arabian, Indian",
        value:"4.2",
        time:"39 Mins",
        amount:"₹ 400 for two",
        offer:" 50% off | Use code",
    },
    {
        name:"KFC",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
        cuisine:"American, Snacks",
        value:"4.6",
        time:"40 Mins",
        amount:"₹ 400 for two",
        offer:" 50% off | Use code ",
    },
    {
        name:"Thaal",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nqhxedfld6me1rj1r8pu",
        cuisine:"South Indian, Arabian",
        value:"4.1",
        time:"44 Mins",
        amount:"₹ 400 for two",
        offer:" 50% off | Use code ",
    },
    {
        name:"Palaaram",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zchpuqit7k4pdndgse4t",
        cuisine:"Kerala, Biryani",
        value:"4.4",
        time:"43 Mins",
        amount:"₹ 400 for two",
        offer:" 50% off | Use code ",
    },

    {
        name:"Pizza Hut",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jyzuh5ius4qegeoc8ff0",
        cuisine:"Kalamserry, Ernakulam | Change Outlet",
        value:"4.0",
        time:"43 Mins",
        amount:"₹ 350 for two",
        offer:" 50% off | Use code",
    },
    {
        name:"Drunken Panda",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/10ce2f34ad93c4e5e94969409735cec0",
        cuisine:"Italian, Fast Food",
        value:"3.3",
        time:"39 Mins",
        amount:"₹ 200 for two",
        offer:" 50% off | Use code ",
    },
    {
        name:"Hotel Abhirami",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aa0jukrjlbzivisimu6l",
        cuisine:"South Indian, Chinese",
        value:"4.2",
        time:"40 Mins",
        amount:"₹ 300 for two",
        offer:" 50% off | Use code ",
    },
    {
        name:"Mandhi King",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wydpzezlbyahq1ao78cj",
        cuisine:"Arabian",
        value:"3.9",
        time:"34 Mins",
        amount:"₹ 200 for two",
        offer:" 50% off | Use code ",
    },
];


let cont=document.querySelector(".container");

let cards=document.createElement("div");
cards.classList.add("row");
cont.appendChild(cards);

food.forEach(e=>{
    let div=document.createElement("div");
    div.classList.add("col");
    cards.appendChild(div);

    let div2=document.createElement("div");
    div2.classList.add("col-cards");
    div.appendChild(div2);

    let img=document.createElement("img");
    img.src=e.imageurl
    div2.appendChild(img);

    let head=document.createElement("h2");
    head.innerHTML=e.name;
    div2.appendChild(head);

    let para=document.createElement("p");
    para.innerHTML=e.cuisine;
    div2.appendChild(para);

    let div3=document.createElement("div");
    div3.classList.add("col-1");
    div2.appendChild(div3);

    let div4=document.createElement("div");
    div4.classList.add("icon");
    div3.appendChild(div4);

    let icons=document.createElement("i");
    icons.setAttribute("class","bi bi-star-fill")
    div4.appendChild(icons);

    let ratings=document.createElement("span");
    ratings.innerHTML=e.value;
    div4.appendChild(ratings);

    let div5=document.createElement("div");
    div5.classList.add("time");
    div3.appendChild(div5);

    let para1=document.createElement("p");
    para1.innerHTML=e.time;
    div5.appendChild(para1);
  
    let div6=document.createElement("div");
    div6.classList.add("ruba");
    div3.appendChild(div6);

    let amounts=document.createElement("p");
    amounts.innerHTML=e.amount;
    div6.appendChild(amounts);

    let div7=document.createElement("div");
    div7.classList.add("col-2");
    div2.appendChild(div7);

    let para3=document.createElement("span");
    para3.setAttribute("class", "fa fa-percent");
    div7.appendChild(para3);

    let para2=document.createElement("p");
    para2.innerHTML=e.offer;
    div7.appendChild(para2);

    let div8=document.createElement("div");
    div8.classList.add("add");
    div2.appendChild(div8);

    let neg=document.createElement("button");
    neg.innerHTML="-";
    div8.appendChild(neg);

    neg.addEventListener("click",function(){
        if(type.value>0){
            --type.value;
        }
    })

    let type=document.createElement("input");
    type.value="0";
    div8.appendChild(type);

    let plus=document.createElement("button");
    plus.innerHTML="+";
    div8.appendChild(plus)

    plus.addEventListener("click",function(){
        ++type.value;
    })
    
})