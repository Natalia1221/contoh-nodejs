//1. pnpm init
//2. pnpm add dotenv

//.env
//1. buat sebuah environment variables dengan isi nama
//2. import dan lakukan konfigurasi dontenv menggunakan ES6
    // import * as dotenv from "dotenv";
    // dotenv.config();
//3.panggil environment variables nama
    //process.env.nama_environment_variables

//getter.js
//1. eksport dan import fungsi dataUsers & jumlahUsers
    //import default : import dataUsers from "./getter.js"
    //import named : import { jumlahUsers } from "./getter.js"

    //Cara Mengecek Fungsi Berhasil diimport
    //1. Buat sebuah object dengan key yang berisi hasil pemanggilan tiap fungsi
    //2. Lalu tampilkan hasil dengan console.log()

//2. buat fungsi dataUsers mengembalikan array isi array users
//3. buat fungsi jumlahUsers mengembalikan jumlah data yang ada array users

//main.js
//1. buat fungsi gabungData mengembalikan object dengan key :
//2. nama : environment variables dengan isi nama
//3. data : hasil fungsi dataUsers
//4. jumlah : hasil fungsi jumlahUsers



function gabungData(usersData) {
    
   //return {}; // TODO: replace this
  }


  const users = [
    {
      "name": "Budi",
      "age": 17,
      "genre": "action"
    },
    {
        "name": "Siti",
        "age": 17,
        "genre": "romance"
    }
  ]

  
  console.log(gabungData(users));

