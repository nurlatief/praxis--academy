// var jeneng = {
//     namawal: "latief",
//     akhiran: "style",
//     showName: function(){
//         alert(`Nama: ${this.namawal} ${this.akhiran}`);
//     }
// };

// jeneng.showName()

var car = {
    // properti
    type: "Fiat", 
    model: "500", 
    color: "white",

    // method
    start: function(){
        console.log("ini method start");
    },
    drive: function(){
        console.log("ini method drive");
    },
    brake: function(){
        console.log("ini method brake");
    },
    stop: function(){
        console.log("ini method stop");
    }
    
};
car.showstart()