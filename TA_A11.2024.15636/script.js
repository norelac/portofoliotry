// Animasi Teks Berjalan
var typed =  new Typed('#loop',{
    strings: ["Mahasiswa","will become a full stack developer","Mahasiswa"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})

// Menambahkan efek hover pada tombol
const buttons = document.querySelectorAll('.btn, .A-btn, .C-btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Menampilkan pesan saat tombol "Contact Me" ditekan
const contactButton = document.querySelector('.btn');
contactButton.addEventListener('click', () => {
    alert('Terima kasih telah menghubungi saya! Saya akan segera merespon.');
});

// Menampilkan informasi lebih lanjut saat tombol "Read More.." ditekan
const readMoreButton = document.querySelector('.A-btn');
readMoreButton.addEventListener('click', () => {
    const moreInfo = `
        Saya memiliki pengalaman dalam proyek pemrograman sederhana dan tertarik untuk belajar lebih banyak tentang pengembangan web dan aplikasi. 
        Selain itu, saya juga aktif berpartisipasi dalam berbagai kegiatan kampus.
    `;
    alert(moreInfo);
});

