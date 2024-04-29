let felhasznaloPontszam = 0;
let szamitogepPontszam = 0;
let eredmeny;

function jatek(felhasznaloValasztas) {
    // A számítógép véletlenszerűen választ egyet a három közül: 'ko', 'papir', 'ollo'
    const lehetosegek = ["ko", "papir", "ollo"];
    const veletlenSzam = Math.floor(Math.random() * 3);
    const szamitogepValasztas = lehetosegek[veletlenSzam];

    if(felhasznaloValasztas === szamitogepValasztas){
        eredmeny = "Döntetlen!";
    }else if(felhasznaloValasztas === "ko" && szamitogepValasztas === "ollo"){  
        eredmeny = "Nyertél!";
        felhasznaloPontszam++;
    }else if(felhasznaloValasztas === "papir" && szamitogepValasztas === "ko"){  
        eredmeny = "Nyertél!";
        felhasznaloPontszam++;
    }else if(felhasznaloValasztas === "ollo" && szamitogepValasztas === "papir"){  
        eredmeny = "Nyertél!"
        felhasznaloPontszam++;
    }else {
        eredmeny = "Vesztettél!";
        szamitogepPontszam++;
    }

    const eredmenyDiv = document.getElementById("result");
    eredmenyDiv.innerText = `${eredmeny}`;

    const eredmenytablaDiv = document.getElementById("eredmenyek");
    eredmenytablaDiv.innerHTML = `Felhasználó pontszáma: ${felhasznaloPontszam}<br>Számítógép pontszáma: ${szamitogepPontszam}`;
}