
//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

let lagu = [
    ['Mangu', 'Fourtwnty', 4000, 8000, 'mangku.jfif'],
    ['Slalu Ada di Nadi', 'B.C.L', 1500, 2300, 'jumbho.jfif'],
    ['Lesung Pipi', 'Raim LaOde', 2440, 5400, 'lesungpipi.jpeg'],
    ['Sakura no Uta', 'Hana', 5727, 6342, '01.png'],
    ['Uta', 'ICDD', 5382, 7632, 'uta.jfif'],
    ['Kira Kira Days', 'Houkagou Tea Time', 4203, 5397, 'kirakira.jfif'],
    ['Embraced by the Flame', 'Undead Corporation', 2341, 6783, 'embracedflame.jpg'],
    ['Root_A Evenescence', 'Syrup Comfiture', 8173, 10928, 'roota.JPG']
]
let element = ''
for (let i = 0; i < lagu.length; i++) {
    element +=`
        <div class="lagu">
            <h2>${lagu[i][0]}</h2>
            <small>
                <i>Oleh ${lagu[i][1]}</i>
            </small>
            <img src="img/${lagu[i][4]}" alt="${lagu[i][0]}">
            <div class="bawah">
                <div class="kanan">${lagu[i][2]}</div>
                <div class="kiri">${lagu[i][3]}</div>
            </div>
        </div>
    `
}
let konten = document.getElementById("container")
konten.innerHTML = element
