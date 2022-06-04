const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = (data, nama) => {
    let urutan = nama(data);
    let ambil = [];
    for (i = 0; i < data.length; i++) {
        ambil.push(`${i+1}. ${urutan[i]}`)
        ambil[i].toString();
    }
    return ambil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan

const sortAscending = (names) => {
    return names.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan

const sortDescending = (names) => {
    let sortDesc = names;
    sortDesc.sort();
    return sortDesc.reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};