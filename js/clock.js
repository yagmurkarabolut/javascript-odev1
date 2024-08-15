let firstName = prompt("Lütfen Adınızı Giriniz: ");
var userName = document.querySelector('#myName').innerHTML = firstName

let dayTime = document.querySelector('#myClock')
dayTime.classList.add("text-warning")


function tarihSaat() {
    var date = new Date();
    var time = date.toLocaleTimeString('tr-TR');
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    var day = days[date.getDay()];
    
    document.getElementById('myClock').innerHTML = time + ' ' + day;
}



setInterval(tarihSaat, 1000)