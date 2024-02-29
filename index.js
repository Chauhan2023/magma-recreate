var string='The Digital Twin Token is a unique digital asset backed by property data. Magma combines your building’s components and systems essential information into a DTT®.';

var adder="";

string.split(" ").forEach((items)=>{
    adder=adder+`<span> ${items} </span>`

    document.querySelector('.page2_lower>p').innerHTML=adder;
})  


var adder2="";

document.querySelector('.page4>h2').textContent.split(" ").forEach((items)=>{
    adder2=adder2+`<span> ${items} </span>`

    document.querySelector('.page4>h2').innerHTML=adder2;
})


document.querySelector('.inner-circle>div>span').locomotive