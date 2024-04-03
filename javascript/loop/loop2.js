let qrt = prompt('จำนวนสินค้า')
let sum = 0;
for (var i = 1; i <= qrt; i++){
    //console.log(i+1)

    let item_price = prompt('ราคาสินค้าชิ้นที่' + i);
    sum = sum + parseInt(item_price);
    document.getElementById('price-list').innerHTML += 'รายการที่' + i + ':' + item_price + 'บาท'+'<br>';

    console.log(sum);
}

document.getElementById('result').innerHTML = 'ราคารวม :' + sum + ' บาท';