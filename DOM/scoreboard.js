
let table=document.createElement("table")
table.border=1
table.cellPadding=10
table.style="border-collapse:collapse"
table.style.textAlign="center"
table.style.backgroundColor="#0f172a"
table.style.color="white"



let tr=document.createElement("tr")
let td1=document.createElement("th")
td1.innerHTML="India";
td1.colSpan=3

let td2=document.createElement("th")
td2.innerHTML="New Zealand"
td2.colSpan=3
tr.append(td1,td2)

// -----------row2------------
let tr2=document.createElement("tr")
let td21=document.createElement("td")
td21.innerHTML="Nadendra Modi Sadium,Ahmedabad"
tr2.style.backgroundColor="#1e40af"
tr2.append(td21)
td21.colSpan=6

//--------------row3-----------
let tr3=document.createElement("tr")
tr3.style.backgroundColor="#1f2937"

let td31=document.createElement("td")
td31.innerText="🏏255-5"
td31.colSpan=3

let td32=document.createElement("td")
td32.innerText="🏏159"
td32.colSpan=3

tr3.append(td31,td32)


//--------------row4------------
let tr4=document.createElement("tr")
let row4=["Samson",89,46,"seifert",46,46]
row4.forEach((data)=>{
  let td4=document.createElement("td")
  td4.innerText=data
  tr4.append(td4)

})

//--------------row5------------
let tr5=document.createElement("tr")
let row5=["Kishan",54,25,"Santner",43,35]
row5.forEach((data)=>{
  let td5=document.createElement("td")
  td5.innerText=data
  tr5.append(td5)

})

//--------------row6------------
let tr6=document.createElement("tr")
let row6=["Abhishek",52,22,"mitchell",17,7]
row6.forEach((data)=>{
  let td6=document.createElement("td")
  td6.innerText=data
  tr6.append(td6)

})

//--------------row7------------
let tr7=document.createElement("tr")
let row7=["Dube","26*",8,"Allen",9,7]
row7.forEach((data)=>{
  let td7=document.createElement("td")
  td7.innerText=data
  tr7.append(td7)

})

//--------------row8-----------
let tr8=document.createElement("tr")
tr8.style.backgroundColor="#1f2937"

let td81=document.createElement("td")
td81.innerText="⚾ 20overs"
td81.colSpan=3

let td82=document.createElement("td")
td82.innerText="⚾ 19overs"
td82.colSpan=3

tr8.append(td81,td82)

//--------------row9------------
let tr9=document.createElement("tr")
let row9=["Neesham","2-46",4,"bumrah","4-15",4]
row9.forEach((data)=>{
  let td9=document.createElement("td")
  td9.innerText=data
  tr9.append(td9)

})

//--------------row10------------
let tr10=document.createElement("tr")
let row10=["Ravindra","1-32",2,"Axar","3-27",3]
row10.forEach((data)=>{
  let td10=document.createElement("td")
  td10.innerText=data
  tr10.append(td10)

})

//--------------row11------------
let tr11=document.createElement("tr")
let row11=["Henry","1-49",4,"Abhishek","1-15",1]
row11.forEach((data)=>{
  let td11=document.createElement("td")
  td11.innerText=data
  tr11.append(td11)

})

//--------------row12------------
let tr12=document.createElement("tr")
let row12=["--","--","--","Hardik","1-36",4]
row12.forEach((data)=>{
  let td12=document.createElement("td")
  td12.innerText=data
  tr12.append(td12)

})

// -----------row13------------
let tr13=document.createElement("tr")
let td13=document.createElement("td")
td13.innerHTML="Nadendra Modi Sadium,Ahmedabad"
tr13.style.backgroundColor="#1e40af"
tr13.append(td13)
td13.colSpan=6



table.append(tr,tr2,tr3,tr4,tr5,tr6,tr7,tr8,tr9,tr10,tr11,tr12,tr13)
document.body.appendChild(table)
document.body.style.display="flex"
document.body.style.justifyContent="center"
console.log(table)