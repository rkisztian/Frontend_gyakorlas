async function adatMegjelenites(embereklista){

    let lista = document.getElementById('emberek');
    lista.textContent = '';
    for (let e of embereklista){
        let li = document.createElement('li');
        li.textContent = e.lastName + ", " + e.firstName;
        lista.appendChild(li);
    }

}

async function elerhetosegMegjelenites(felhasznalok) {
    let tablazat = document.getElementById('tabla');
    tablazat.innerHTML = "";
    for (let p of felhasznalok) {
        let sor = document.createElement('tr')
        let fhnev = document.createElement('td')
        let email = document.createElement('td')
        let teloszam = document.createElement('td')
        fhnev.textContent = p.username;
        email.textContent = p.email;
        teloszam.textContent = p.phone;
        tablazat.appendChild(sor)
        tablazat.appendChild(fhnev)
        tablazat.appendChild(email)
        tablazat.appendChild(teloszam)
    }

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('osszes').addEventListener('click', async() => {
        let response = await fetch('/users.json');
        let eredmeny = await response.json();
        let felhasznalok = eredmeny.users;
        felhasznalok = felhasznalok.sort((a, b) => {
            if (a.lastName < b.lastName) {
              return -1;
            }
          });
        adatMegjelenites(felhasznalok);
        
    });

    document.getElementById('elerhetoseg').addEventListener('click', async() => {
        let response = await fetch('/users.json');
        let eredmeny = await response.json();
        let felhasznalok = eredmeny.users;
        elerhetosegMegjelenites(felhasznalok);
        
    });
})