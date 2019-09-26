'use strict'
function colorBot(color) {
    color = prompt("So what is Your favorite Color?");
    document.body.style.background = color;
}


var loops = prompt("type in Loops are for Loopies"); 
    while(loops !== "Loops are for Loopies") {
        var loops = prompt("type in Loops are for Loopies")
    }
    alert("Yay! You did what i said!")

    console.log("we printed some numbers with a for loop!");
for(var forLoop = 1; forLoop <= 10; forLoop ++ ) {
    console.log(forLoop);
}





// var hello = prompt("Hello! I am the Buffet Bot! how are you?"); {
//     if(hello ==="good") {
//       alert("Great to hear!")
//       colorBot();
//     }
    
//     if(hello ==="great") {
//         colorBot();  
//       }
//     else if(hello === "bad") {
//         alert("Awe thats too bad! Maybe Some delicious Cuisine will help or changing the color?")
//         confirm("would you like to change the color?"); {
//             if(confirm === true); {
//                 colorBot();
//             }
//         }
//     }
// }



// var favColor = prompt("So what is Your favorite color?"); {
//     if(favColor === "Blue") {
//         alert(favColor + " sounds good, Your favorite Color is" + favColor); {
//             console.log("Maybe I am real...is this a dream?")
//         }
//     }
// }


// console.log("---------Skynet Online---------");

// function chBackcolor(color) {
//     document.body.style.background = color;
//  }
 


    function createAmerican(name, description) {
        var hamburger = '<article>' + '<img src="https://images.unsplash.com/photo-1550949987-33f716ccc232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">' + 
        '<h3>' + name + '</h3>' + '<p>' + description + '</p>' + '</article>';
        return hamburger;

        }

        function createItalian(name, description) {
            var spaghetti = '<article>' + '<img src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=234&q=80">' + 
            '<h3>' + name + '</h3>' + '<p>' + description + '</p>' + '</article>';
            return spaghetti;
        
        }

        function createMexican(name, description) {
            var enchilada = '<article>' + '<img src="https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60">' + 
            '<h3>' + name + '</h3>' + '<p>' + description + '</p>' + '</article>';
            return enchilada;
        
        }

    var makeFood = prompt("Whats your Favorite style of cuisine out of Italian, American or Mexican?");
    
    if (makeFood === "American") {
        var burger = ("American Cheesburger");
        var burgDescription = ("The American CheeseBurger can have a variety of condiments!?");
        var americanBurger = createAmerican(burger, burgDescription);
        console.log(americanBurger);
        document.write(americanBurger);
        
    }

    if (makeFood === 'Italian') {
        var noodles = ("Italian Spaghetti");
        var noodDescription = ("Can be made with different flavors of saucesand meats!?");
        var italianFood = createItalian(noodles, noodDescription);
        console.log(italianFood);
        document.write(italianFood);
    }

    if (makeFood === 'Mexican') {
        var cheeseEnchilada = ("Enchiladas");
        var enchiladaDescription = ("Chicken Enchiladas are the best, dont worry about the other variations!?");
        var mexicanFood = createMexican(cheeseEnchilada, enchiladaDescription);
        console.log(mexicanFood);
        document.write(mexicanFood);
        
    }

    // var num = -10; 
    // while(num <= 10) {
    //     console.log(num);
    //     num++;
    // }

    // var num = -10;
    // while(num <= 19) {
    //     console.log (num);
    //     num++;
    // } 
   
  


// function constructCatHTML(name, description) {
//     var newCat = '<article>' +
//       '<img src="http://placekitten.com/200/300">' +
//       '<h3>' +
//       name +
//       '</h3>' +
//       '<p>' +
//       description +
//       '</p>' +
//       '</article>';
//     return newCat;
//   }


