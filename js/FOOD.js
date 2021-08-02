class food {
constructor(){
    this.foodStock = 0;
    this.image=loadImg("images/Milk.png");

}
updateFoodstock(foodstock){
    this.foodstock = foodstock;
}

deductFood(){
    if(this.foodStock > 0){
        this.foodStock=this.foodstock-1;
    }
}

getfoodStock() {
    return this.foodStock;
}


display(){
    var x=80,y=100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            x=80
            y=y+50;
        }
        this.image(this.image,x,y,50,50);
        x=x+30;
    }
}








}