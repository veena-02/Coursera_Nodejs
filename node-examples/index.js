var rect =require('./rectangle');

function solveRect(x,y){
    console.log("Solving for rectangle with l = "+ x + "and b = " + y);
    rect(x,y,(err,rectangle)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("For l = " + x + " b = " + y);
            console.log("Area: "+rectangle.area);
            console.log("Perimeter: "+rectangle.perimeter);
        }
    });
    console.log("I am after callback function");
}
solveRect(2,4);
solveRect(3,5);
solveRect(2,0);
solveRect(2,-7);
