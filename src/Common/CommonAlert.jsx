import { confirmAlert } from "react-confirm-alert";
import Books1 from '../Component/Assets/Img/Books/Books1.jpg'
import Books2 from '../Component/Assets/Img/Books/Books2.jpg'
import Books3 from '../Component/Assets/Img/Books/Books3.jpg'
import Books4 from '../Component/Assets/Img/Books/Books4.jpg'


import Fashion1 from '../Component/Assets/Img/Fashion/Fashion1.jpeg'
import Fashion2 from '../Component/Assets/Img/Fashion/Fashion2.jpeg'
import Fashion3 from '../Component/Assets/Img/Fashion/Fashion3.jpeg'
import Fashion4 from '../Component/Assets/Img/Fashion/Fashion4.jpg'


import Food1 from '../Component/Assets/Img/Food/Food1.jpg'
import Food2 from '../Component/Assets/Img/Food/Food2.jpg'
import Food3 from '../Component/Assets/Img/Food/Food3.jpg'
import Food4 from '../Component/Assets/Img/Food/Food4.jpg'

import Health1 from '../Component/Assets/Img/Health/Health1.jpg'
import Health2 from '../Component/Assets/Img/Health/Health2.jpg'
import Health3 from '../Component/Assets/Img/Health/Health3.jpg'
import Health4 from '../Component/Assets/Img/Health/Health4.jpg'



export function isNullEmpty(e) {

    if (e === null || e === ''|| e===undefined) {
        return true;
    }
    return false;
   }

   export function showAlert(msg){

    confirmAlert({
        title: "Alert!",
        message: msg,
        buttons: [
          {
            label: 'Ok',
            onClick: () => { return false }
          },

        ]
      })
}



export function showSuccess(msg){

  confirmAlert({
      message: msg,
      buttons: [
        {
          label: 'Ok',
          onClick: () => { return false }
        },

      ]
    })
}


export function validUsername(name){
var  regex = /^[a-zA-Z0-9]*$/
var response=regex.test(name)
return response
}


export function validPassword(password){
  var re =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-z]).{0,}$/;
  var response = re.test(password)
  return response
} 



export function cookies(name,value,days){
  let date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
const expires ="expires=" + date.toUTCString();
document.cookie = name +  "=" + value + ";" + expires + ";path=/"
}




  const imageArray = [
    {
      "id": "1",
      "name": "BK",
      "imageName": "Books",
      "imageArray": [

        { "Image": Books1,"name":"Ulysses",price:"50",productDesc:{"Wear":"Paper","Quality":"Good","Company":"James"} },
        { "Image": Books2,"name":"The Great Gats" ,price:"10",productDesc:{"Wear":"Paper","Quality":"Good","Company":"Scott"}},
        { "Image": Books3,"name":"Moby Dick" ,price:"30",productDesc:{"Wear":"Paper","Quality":"Good","Company":"CB"}},
        { "Image": Books4,"name":"Hamlet" ,price:"60",productDesc:{"Wear":"Paper","Quality":"Good","Company":"Leo Tolstoy"}}

      ]

    },
    
    {
      "id": "2",
      "name": "FH",
      "imageName": "Fashion",
      "imageArray": [

        { "Image": Fashion1,"name":"Men",price:"100",productDesc:{"Wear":"Cotton","Quality":"Good","Company":"Raymond"} },
        { "Image": Fashion2,"name":"Men",price:"150",productDesc:{"Wear":"Silk","Quality":"Excellent","Company":"Raymond"} },
        { "Image": Fashion3,"name":"Women",price:"200",productDesc:{"Wear":"Fabric","Quality":"Good","Company":"Flex"} },
        { "Image": Fashion4 ,"name":"Women",price:"250",productDesc:{"Wear":"Cotton","Quality":"Worst","Company":"Nike"}}

      ]

    },

    
    
    {
      "id": "3",
      "name": "FD",
      "imageName": "Food",
      "imageArray": [
        { "Image": Food1,"name":"Bananas",price:"15",productDesc:{"Wear":"Eatable","Quality":"Good","Company":"NA"}  },
        { "Image": Food2 ,"name":"Apple",price:"20",productDesc:{"Wear":"Eatable","Quality":"Worst","Company":"NA"} },
        { "Image": Food3 ,"name":"Tomato",price:"10",productDesc:{"Wear":"Eatable","Quality":"Good","Company":"NA"} },
        { "Image": Food4 ,"name":"Mix veg",price:"35",productDesc:{"Wear":"Eatable","Quality":"Average","Company":"NA"} },

      ]

    },
    

    



    {
      "id": "4",
      "name": "HT",
      "imageName": "Health",
      "imageArray": [

        { "Image": Health1 ,"name":"Giloy",price:"105",productDesc:{"Wear":"Eatable","Quality":"Good","Company":"Patanjali"} },
        { "Image": Health2 ,"name":"Honey",price:"200",productDesc:{"Wear":"Eatable","Quality":"Good","Company":"Dabur"} },
        { "Image": Health3 ,"name":"Energy",price:"300",productDesc:{"Wear":"Eatable","Quality":"Good","Company":"Dabur"} },
        { "Image": Health4 ,"name":"Ganvati",price:"400",productDesc:{"Wear":"Eatable","Quality":"Good","Company":"Patanjali"} }

      ]

    },




  ]


  export default imageArray