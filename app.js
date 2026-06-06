// 1. TEZKOR REJALAR TAHLILI
function tekshirRejalar() {
    const t1 = document.getElementById("todo1").value.trim();
    const t2 = document.getElementById("todo2").value.trim();
    const t3 = document.getElementById("todo3").value.trim();
    const natija = document.getElementById("todoNatija");

    // Kiritilgan vazifalarni massivga (ro'yxatga) yig'amiz
    const vazifalar = [t1, t2, t3];
    // Bo'sh bo'lmagan real vazifalarni ajratib olamiz
    const faolVazifalar = vazifalar.filter(v => v !== "");

    if (faolVazifalar.length === 0) {
        ko'rsatStatus(natija, "error", "Kamida bitta vazifa kiritishingiz shart! 📝");
        return;
    }

    if (faolVazifalar.length === 3) {
        ko'rsatStatus(natija, "normal", "Ajoyib! Bugun rejangiz to'la. Fokusni yo'qotmang va hammasini bajaring! 🔥");
    } else {
        ko'rsatStatus(natija, "alert", `Kunlik reja qisman to'ldirildi (${faolVazifalar.length}/3). Yana unumli ishlar qo'shishingiz mumkin.`);
    }
}

// 2. KUNLIK ENERGIYA DOSKASI
function kunlikMaslahat() {
    const kun = document.getElementById("haftaKuni").value;
    const natija = document.getElementById("motivatsiyaNatija");

    if (!kun) {
        ko'rsatStatus(natija, "error", "Iltimos, kunni tanlang!");
        return;
    }

    if (kun === "dushanba") {
        ko'rsatStatus(natija, "normal", "Hafta boshi! Yangi maqsadlar sari olg'a. Bugun og'irroq vazifalarni bitirib oling 🚀");
    } else if (kun === "chorshanba") {
        ko'rsatStatus(natija, "alert", "Haftaning o'rtasi (Mediana). Quvvat kamaygan bo'lsa, qisqa tanaffus qiling va motivatsiyani tiklang ⚡️");
    } else if (kun === "juma") {
        ko'rsatStatus(natija, "normal", "Juma — chiroyli yakun! Oxirgi muhim ishlarni tugatib, hafta uchun hisobot qiling 🎯");
    } else if (kun === "shanba") {
        ko'rsatStatus(natija, "alert", "Dam olish kunlari! Miqyosni kengaytiring: kitob o'qing, sayr qiling va miyaga dam bering 🌳");
    }
}

// 3. MATN ANALIZATORI
function analizMatn() {
    const matn = document.getElementById("matnInput").value.trim();
    const natija = document.getElementById("matnNatija");

    if (matn === "") {
        ko'rsatStatus(natija, "error", "Analiz qilish uchun biror matn kiriting!");
        return;
    }

    const belgilarSoni = matn.length;
    // Taqiqlangan yomon so'zlarni yoki dangasalik belgilarini tekshirish
    const taqiqlanganSozlar = ["zerikarli", "dangasa", "yomon", "ertaga qilaman"];
    let xavfsiz = true;

    for (let soz of taqiqlanganSozlar) {
        if (matn.toLowerCase().includes(soz)) {
            xavfsiz = false;
            break;
        }
    }

    let tahlilXulosasi = `Matn uzunligi: ${belgilarSoni} ta belgi.\n`;

    if (!xavfsiz) {
        tahlilXulosasi += "Ogohlantirish: Matnda passiv yoki salbiy energiyali so'zlar aniqlandi! Uni ijobiy tomonga o'zgartiring ⚠️";
        ko'rsatStatus(natija, "alert", tahlilXulosasi);
    } else {
        tahlilXulosasi += "Ajoyib! Matn juda ijobiy va unumdorlik ruhida yozilgan ✨";
        ko'rsatStatus(natija, "normal", tahlilXulosasi);
    }
}

// Yordamchi funksiya
function ko'rsatStatus(element, status, tekst) {
    element.style.display = "block";
    element.className = "result " + status;
    element.innerText = tekst;
}
