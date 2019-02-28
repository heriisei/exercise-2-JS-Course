function kalkulator() {
  let angka = document.querySelectorAll('input');
  let i1 = angka[0].value;
  let i2 = angka[1].value;
  let o = document.getElementById("operator");
  let operator = o.options[o.selectedIndex].value;
    if (operator === 'tambah') {
      angka[2].value = parseInt(i1) + parseInt(i2);
    } else if (operator === 'kurang') {
      angka[2].value = parseInt(i1) - parseInt(i2);
    } else if (operator === 'kali') {
      angka[2].value = parseInt(i1) * parseInt(i2);
    } else {
      angka[2].value = parseInt(i1) / parseInt(i2);
    }
}
let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);
