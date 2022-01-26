#!/usr/bin/env node

const axios = require("axios");
const cheerio = require("cheerio");

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
  query = args[0];
  const url = `https://kbbi.kemdikbud.go.id/entri/${query}`;
  async function scrapeData() {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const listItems = $(".container.body-content ol");
      console.log(`\n🔎 ${query}\n`);
      console.log("---\n");
      listItems.each((idx, el) => {
        $(el)
          .children("li")
          .each((idx, el) => {
            console.log(`${idx + 1} - ${$(el).text()}`);
          });
      });
    } catch (err) {
      console.error(err);
    }
  }

  scrapeData();
}
