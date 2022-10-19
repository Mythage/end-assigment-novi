//reference to from element on the calculator page.
//
// const test = document.getElementById('add');
//
// //reference to inputFields on the calculator page.
// // const product = document.getElementById('product-field');
//
// //send request to function with the data.
// test.addEventListener('submit', (e) => {
//     //prevent from to auto submit.
//     e.preventDefault();
//
//     getSelected()
// })
//
// function GetSelected() {
//     //Reference the Table.
//     var grid = document.getElementById("tbody");
//
//     //Reference the CheckBoxes in Table.
//     var checkBoxes = grid.getElementsByTagName("input");
//     var message = "Id Name                  Country\n";
//
//     //Loop through the CheckBoxes.
//     for (var i = 0; i < checkBoxes.length; i++) {
//         if (checkBoxes[i].checked) {
//             var row = checkBoxes[i].parentNode.parentNode;
//             message += row.cells[1].innerHTML;
//             message += "   " + row.cells[2].innerHTML;
//             message += "   " + row.cells[3].innerHTML;
//             message += "\n";
//         }
//     }
//     //Display selected Row data in Alert Box.
//     alert(message);
// }

//Een functie die binnen de tabel kijkt naar de rows welk een CHECKT box hebben.
// En deze toevoegt aan de nieuwe lijst en ze gevraagde data * aan de hoeveelheid servings

// function checkListOnChecked(){
//     document.getElementById('check').checked = true;
//
// }
// checkListOnChecked()