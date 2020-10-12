var databarang = [
    "buku tulis",
    "pensil",
    "spidol"
];

function showbarang(){
    var listbarang = document.getElementById ("list-barang")
    // clear list barang
    listbarang.innerHTML = "";

    //cetak semua barang
    for(let i = 0; i < databarang.legth; i++){
        var btnEdit = "<a href='#' onclick='editbarang' ("+i+")> edit </a>";
        var btnHapus = "<a href='#' onclick='deletbarang("+i+")>hapus</a>";
        listbarang.innerHTML += "<li>" + databarang [i] + " ["+btnEdit + "|" + btnHapus +"]</li>";
    }

}
function addbarang(){
    var input = document.querySelector("input[name=barang]");
    databarang.push(input.value);
    showbarang();
}
function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showbarang();
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}

showbarang();
