// device-detector.js içeriği

// Telefon Tespiti Fonksiyonu
function isPhoneDevice() {
    const userAgent = navigator.userAgent;
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;

    // Genel olarak bilinen telefon User Agent ifadeleri
    const isMobileUA = /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    // Yaygın telefon genişliği eşiği (örneğin 768px'den küçük)
    // Bu değeri kendi testlerinize göre ayarlayabilirsiniz.
    const phoneWidthThreshold = 768; 

    // iPad'leri hariç tutmak için (iPadOS 13+ MacIntel UA kullanabilir)
    const isIPad = (/iPad/i.test(userAgent)) || (/MacIntel/.test(userAgent) && navigator.maxTouchPoints > 1);

    // Android tabletleri hariç tutmak için yaklaşık bir mantık:
    // Android ise VE "Mobi" içermiyorsa (telefonlarda bulunur) VE genişlik büyükse tablet olabilir.
    const isAndroidTabletLike = /Android/i.test(userAgent) && !/Mobi/i.test(userAgent) && screenWidth >= phoneWidthThreshold;

    // Eğer mobil bir UA'ya sahipse VE genişlik bir telefon aralığındaysa (ve tablet değilse)
    return isMobileUA && screenWidth < phoneWidthThreshold && !isIPad && !isAndroidTabletLike;
}

// DOM yüklendiğinde çalışacak ana işlem
document.addEventListener('DOMContentLoaded', (event) => {
    const myElement = document.getElementById('navbar');

    if (myElement) {
        if (isPhoneDevice()) {
            myElement.classList.remove('left');
            myElement.classList.remove('medium-space');
            myElement.classList.add('bottom');
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const myElement = document.getElementById('navbar');

    if (myElement) {
        if (isPhoneDevice()) {
            myElement.classList.remove('left');
            myElement.classList.remove('medium-space');
            myElement.classList.add('bottom');
        }
    }
});