#!/usr/bin/env node

const args = process.argv.slice(2);

if (args[0] === "-h" || args.length === 0) {
  console.log(`

    kbbi-cli - Kamus Besar Bahasa Indonesia CLI (https://kbbi.kemdikbud.go.id/)

    Penggunaan:

        kbbi-cli <cari_kata>

    opsi:

        -h: tampilkan bantuan
        -v: tampilkan versi
    `);
} else if (args[0] === "-v") {
  console.log(require("./package").version);
} else {
  console.log(`
    🔎 ${args[0]}

    Hasil pencarian: -
  `);
}
