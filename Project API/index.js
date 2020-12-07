const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const api = express();

api.use(bodyParser.urlencoded({extended: false}));
api.use(cors());

api.get("/products", (req, res) =>{
    let products = [
        {
            brand: "Acer",
            description: "Acer Swift SF514-53T-77PT, 8 GB DDR4, Memory 256 GB, 1920 x 1080 Full HD, AMD Radeon RX 540 (2 GB GDDR5 / 128 bit)",
            price: 750.00,
            rate: 5,
            image: "img/acer1.jpg"
        },
        {
            brand: "Asus",
            description: "Asus ZenBook Flip 14 UX461UA-IB74T,  Intel® Core™ i7-8550U, 16 GB DDR3, Memory 512 GB, 1920 x 1080 Full HD, Intel® UHD Graphics 620",
            price: 1100.00,
            rate: 6,
            image: "img/asus1.jpg"
        },
        {
            brand: "Lenovo",
            description: "Lenovo IdeaPad Flex-15IWL,  Intel® Core™ i5-8265U, 8 GB DDR4, Memory 256 GB, 1920 x 1080 Full HD, ia GnVideForce MX250 (2 ГБ GDDR5 / 64 bit)",
            price: 790.00,
            rate: 6,
            image: "img/lenovo1.jpg"
        },
        {
            brand: "HP",
            description: "HP Pavilion 15-cs3034ur, Intel® Core™ i5-1035G1, 8 GB DDR4, Memory 1 TB, 1920 x 1080 Full HD, nVidia GeForce MX250 (2 ГБ GDDR5 / 64 bit)",
            price: 700.00,
            rate: 7,
            image: "img/HP1.jpg"
        },
        {
            brand: "Acer",
            description: "Acer ASPIRE C22-865, 4 GB DDR4, Memory 1 TB, 1920 x 1080 Full HD, Intel® UHD Graphics 620",
            price: 650.00,
            rate: 1,
            image: "img/acer2.jpg"
        },
        {
            brand: "Apple",
            description: "Apple SF514-53T-77PT, 8 GB DDR4, Memory 512 GB, 1920 x 1080 Full HD, AMD Radeon RX 540 (2 GB GDDR5 / 128 bit)",
            price: 1050.00,
            rate: 8,
            image: "img/mac1.jpg"
        },
        {
            brand: "Asus",
            description: "Asus VivoBook TP412UA-DB71T,  Intel® Core™ i7-8550U, 8 GB DDR3, Memory 256 GB, 1920 x 1080 Full HD, Intel® UHD Graphics 620",
            price: 850.00,
            rate: 7,
            image: "img/asus2.jpg"
        },
        {
            brand: "HP",
            description: "HP ZBook 17 G5, Intel® Core™ i7-8850H, 16 GB DDR4, Memory 512 GB, 1920 x 1080 Full HD, nVidia Quadro P3200 (6 ГБ GDDR6 / 192 бит)",
            price: 2600.00,
            rate: 10,
            image: "img/HP2.jpg"
        },
        {
            brand: "Lenovo",
            description: "Lenovo IdeacentreA340-24ICK, Core™ i5-9400T, 8 GB DDR4, Memory 1 TB, 1920 x 1080 Full HD, UHD Graphics 630",
            price: 750.00,
            rate: 8,
            image: "img/lenovo2.jpg"
        },
        {
            brand: "Apple",
            description: "Macbook Swift SF514-53T-77PT, 6 GB DDR4, Memory 1 TB, 1920 x 1080 Full HD, AMD Radeon RX 540 (2 GB GDDR5 / 128 bit)",
            price: 1500.00,
            rate: 9,
            image: "img/mac2.jpg"
        },
        {
            brand: "Acer",
            description: "Acer Spin 7 SP714-51-M5CD, 8 GB DDR3, Memory 256 GB, 1920 x 1080 Full HD, Intel® HD Graphics 615",
            price: 900.00,
            rate: 4,
            image: "img/acer3.png"
        },
        {
            brand: "Lenovo",
            description: "Lenovo IdeaPad 730S-13IWL, Intel Core™ i7-8565U, 16 GB DDR4, Memory 512 GB, 1920 x 1080 Full HD, UHD Graphics 620",
            price: 1100.00,
            rate: 9,
            image: "img/lenovo3.jpg"
        },
        {
            brand: "HP",
            description: "HP ProBook 450 G6, Intel® Core™ i3-8145U, 4 GB DDR4, Memory 500 GB, 1366 x 768 HD, Intel® UHD Graphics 620",
            price: 500.00,
            rate: 3,
            image: "img/HP3.jpg"
        },
        {
            brand: "Apple",
            description: "Mac SF514-53T-77PT, 16 GB DDR4, Memory 512 GB, 1920 x 1080 Full HD, AMD Radeon RX 540 (2 GB GDDR5 / 128 bit)",
            price: 1000.00,
            rate: 8,
            image: "img/mac3.jpg"
        },
        {
            brand: "Acer",
            description: "Acer Nitro 5,Intel® Core™ i5-8300H, 6 GB DDR4, Memory 1128 GB, 1920 x 1080 Full HD, nVidia GeForce GTX 1050 (4 ГБ GDDR5 / 128 бит)",
            price: 1000.00,
            rate: 5,
            image: "img/acer4.jpg"
        },
        {
            brand: "HP",
            description: "HP EliteBook x360 830 G6, Intel® Core™ i5-8365U, 16 GB DDR4, Memory 256 GB, 1920 x 1080 Full HD, UHD Graphics 620",
            price: 750.00,
            rate: 5,
            image: "img/HP4.jpg"
        },
        {
            brand: "Lenovo",
            description: "Lenovo Legion Y530-15ICH,Intel® Core™ i5-8300H, 16 GB DDR4, Memory 1 TB, 1920 x 1080 Full HD, nVidia GeForce GTX 1050 Ti (4 ГБ GDDR5 / 128 бит)",
            price: 900.00,
            rate: 19,
            image: "img/lenovo4.jpg"
        },
        {
            brand: "Apple",
            description: "Apple Mac Pro, 8 GB DDR4, Memory 2TB, 1920 x 1080 Full HD, AMD Radeon RX 540 (2 GB GDDR5 / 128 bit)",
            price: 2550.00,
            rate: 10,
            image: "img/mac4.jpg"
        }
    ];
    return res.json(products);
});
api.listen(4000, () =>{
    console.log("sever started on port 4000");
});