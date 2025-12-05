const navbar = document.querySelector(".navbar");
const toggler = document.querySelector(".navbar-toggler");
const mapFrame = document.getElementById("mapFrame");
const input = document.getElementById("searchInput");
const section = document.querySelector("section");
const searchBtn = document.querySelector(".btn-search");

const places = [
    {
        name: "كلية حاسبات",
        keywords: ["حاسبات", "كلية حاسبات", "fcai", "computer", "cs"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.037010019478!2d31.315710724616462!3d29.86320647501535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458368becfaa68d%3A0xb8a6f7d9576f81f8!2z2YPZhNmK2Kkg2KfZhNit2KfYs9io2KfYqiDZiNin2YTYsNmD2KfYoSDYp9mE2KfYtdi32YbYp9i52YrYjCDYrNin2YXYudipINit2YTZiNin2YY!5e0!3m2!1sar!2seg!4v1764609443731!5m2!1sar!2seg`
    },
    {
        name: "مدرج 17",
        keywords: ["مدرج 17", "17", "١٧"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022.8765726185834!2d31.314921960656903!3d29.863751378170825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458368c74a9809f%3A0x4fbdc3066735a646!2z2YXYr9ix2KwgMTcg2KzYp9mF2LnYqSDYrdmE2YjYp9mG!5e0!3m2!1sar!2seg!4v1764609473153!5m2!1sar!2seg`
    },
    {
        name: "مدرج 6",
        keywords: ["مدرج 6", "6", "٦"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.6748356630715!2d31.316540111177215!3d29.865654869684604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458374c26acd06f%3A0x593283f4d3a79526!2z2YXYr9ix2Kwg2aY!5e0!3m2!1sar!2seg!4v1764609519136!5m2!1sar!2seg`
    },
    {
        name: "حمام",
        keywords: ["حمام", "دورة مياه", "wc"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.6870379842917!2d31.317236634384503!3d29.864944795818097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458379354a4b801%3A0xd4440e90fcd94fb4!2z2K_ZiNix2Kkg2YXZitin2Kk!5e0!3m2!1sar!2seg!4v1764609621698!5m2!1sar!2seg`
    },
    {
        name: "مدرج 18",
        keywords: ["مدرج 18", "18", "١٨"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.5053115773208!2d31.31876171332091!3d29.864333660343565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837f2b8ce86d5%3A0x1b24bb5c71092e6f!2z2YXYr9ix2Kwg2aHZqA!5e0!3m2!1sar!2seg!4v1764609667606!5m2!1sar!2seg`
    },
    {
        name: "بيكاسو",
        keywords: ["بيكاسو", "picaso", "picasoo"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.5048596389811!2d31.319917791591564!3d29.864405871438002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458374fbfb222d3%3A0x474356e187371f3c!2z2YXYt9i52YUg2KjZitmD2KfYs9mI!5e0!3m2!1sar!2seg!4v1764609709422!5m2!1sar!2seg`
    },
    {
        name: "مكتبة",
        keywords: ["مكتبة", "المكتبة", "library"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.4999198045078!2d31.316679997841927!3d29.86519515208093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837500223a695%3A0x317140f9f93bba04!2z2YXZg9iq2KjZhyDYsdiz2KfZhNmHINin2YTZiNmB2KfYoQ!5e0!3m2!1sar!2seg!4v1764609740533!5m2!1sar!2seg`
    },
    {
        name: "مدرج 10",
        keywords: ["مدرج 10", "10", "١٠"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.6516899282611!2d31.31445774603666!3d29.86389183815368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837dffa278aa3%3A0x776c0e3d5101e038!2z2YXYr9ix2Kwg2aHZoCDYoyDYrNin2YXYudipINit2YTZiNin2YY!5e0!3m2!1sar!2seg!4v1764609821292!5m2!1sar!2seg`
    },
    {
        name: "المروة",
        keywords: ["المروة", "مروة", "elmarwa"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.6516899282611!2d31.31445774603666!3d29.86389183815368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583742be7000af%3A0x1da2dd5a83a342a0!2sELMARWA!5e0!3m2!1sar!2seg!4v1764609910080!5m2!1sar!2seg`
    },
    {
        name: "أفريكانو",
        keywords: ["افريكانو", "أفريكانو", "africano"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.2721927751253!2d31.317888633122543!3d29.866970421304774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458377d721b48cd%3A0x7a9fe2ed09d9a415!2z2YXYt9i52YUg2KfZgdix2YrZg9in2YbZiNin!5e0!3m2!1sar!2seg!4v1764610049863!5m2!1sar!2seg`
    },
    {
        name: "ويتش",
        keywords: ["ويتش", "witch", "witch cafe"],
        url: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.8413381074832!2d31.318720878923187!3d29.864481404232503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583794a5528915%3A0x68d948048796e7e3!2z2YXYt9i52YUg2YjZitiq2LQ!5e0!3m2!1sar!2seg!4v1764610169311!5m2!1sar!2seg`
    }
];


mapFrame.src = places[0].url;

function normalize(str) {
    return str.toString().trim().toLowerCase();
}

searchBtn.addEventListener('click',searchLocation);

function searchLocation() {
    input.classList.remove("is-invalid");
    const inputRawData = input.value;
    let query = normalize(inputRawData);

    if (!query) {
        input.classList.add("is-invalid");
        return;
    }

    const result = places.find(place =>
        place.keywords.some(k => normalize(k).includes(query) || query.includes(normalize(k)))
    );

    if (!result) {
        input.classList.add("is-invalid");
        input.addEventListener('input',() => {
        input.classList.remove("is-invalid")
    })
        return;
    }

    mapFrame.src = result.url;
}