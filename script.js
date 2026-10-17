function pindah(nomor) {
    document.querySelectorAll(".layar").forEach(function(layar) {
        layar.style.display = "none";
    });

    document.getElementById("layar" + nomor).style.display = "block";
}