var choice = prompt ("Welcome in Perimeter Calculator. \n Please enter your choice.\n1.Perimeter of Rectangle. \n2.Perimeter of circle. \n3  perimeter of Triangle.") 
 
if (choice == '1') {
    var l = prompt('Enter the Length')
    var b = prompt('Enter the Breadth')
    var result = Number(l) * Number(b)
     alert('The Perimeter is  ,' + result)
}
if (choice == '2') {
    var c = prompt('Enter the Circumference')
    var result =  3.14 *Number(c) * Number(c)
     alert('The Perimeter is ,'   + result)
}
if (choice == '3') {
    var s = prompt('Enter the Side')
    var b = prompt('Enter the Base')
    var s = prompt('Enter the Side')
    var result = Number(s) * Number(r) *Number(s)
     alert('The Perimeter is , ' + result)
}
