//make an array of objects representing items,filter the items based on specific condition and transform the filtered data into a new format
const product=[
    {id:1, name:'Laptop',price:999, inStock: true},
    {id:2, name:'Smartphone',price:399, inStock: false},
    {id:3, name:'Tablet',price:199, inStock: true},
    {id:4, name:'Headphone',price:99, inStock: false},
    {id:5, name:'Camera',price:599, inStock: true},
]
const inStock=[];
for(let i=0;i<product.length;i++){
    if(product[i].inStock){
        inStock.push(product[i]);
    }
}
const final=[];
for(let i=0;i<inStock.length;i++){
    final.push({
        name: inStock[i].name,
        price: inStock[i].price
    })
}
console.log(final)
// SHORT WAY OF WRITING THIS CODE
const a=product.filter(item=>item.inStock).map(item=>({name:item.name ,price:item.price}));
console.log(a);

//Sorting a numerical array
const prices=[
    {id:1, value:20},
    {id:2, value:40},
    {id:3, value:30},
    {id:4, value:10},
    {id:5, value:60},
    {id:6, value:50}
]
const data=[...prices].sort((a,b)=>a.value-b.value)
console.log(data)


//there are two arrays one is of users and others is of cities,create an array which contain unified
const users=[
    {id:1,name:'Shagun',age:23},
    {id:2,name:'John',age:20},
    {id:3,name:'Sam',age:25},
    {id:4,name:'Peter',age:28}
];
const cities=[
    {id:1,city:"Jaipur"},
    {id:2,city:"Bhopal"},
    {id:3,city:"Indore"},
    {id:4,city:"Delhi"}
];
const ab ={...users, ...cities};
console.log(ab);