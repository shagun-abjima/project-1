$(document).ready(function(){//Will execute the code when the document is ready we can also write $(function(){})
    //element selector
    //$("p").hide();//Will select and hide an element
    $("button").click(function(){//will select and execute a function when button will be clicked
    console.log("Button is clicked")
    });
    $("#btn2").click(function(){//will select and execute a function when button with id btn2 will be clicked
    console.log("Button 2 is clicked")
    })
    $("#btn3").click(function(){//will select and execute a function when button with class btn3 will be clicked
        console.log("Button 3 is clicked")
        })
    //to click zll selectors on a page
    $('*').click()

    //------------EVENTS
    //dblClick
    $("p").dblclick(function(){
        console.log("you double clicked on paragraph",this)
    })

    //mouseEnter
    $("p").mouseenter(function(){
        console.log('you entered ',this)
    })
    //hover(mouseenter+mouseleave)
    $("p").hover(function(){
        console.log('you hovered on ',this)

    },function(){
        console.log('mouseleave',this)
    })

})
