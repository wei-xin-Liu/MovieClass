window.onload = function() {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
    }

    function closeMenu() {
        mobileMenu.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);



    // 電影數據
    const movies = [
        { title: "加菲貓：農場大冒險", category: "comedy", image: "../images/606127cd59d1cb68a63fd70dbbb88e8d.jpg" },
        { title: "神偷奶爸 4", category: "comedy", image: "../images/721e6840dd77a8f6e093d357854b0734.jpg" },
        { title: "金孫爆富攻略", category: "comedy", image: "../images/8076b981228e5e034f654dfbe801e5be.jpg" },
        { title: "腦筋急轉彎2", category: "comedy", image: "../images/ae4651d2f94b0d87e9964e65aa7c1e6f.jpg" },
        { title: "死侍與金鋼狼", category: "action", image: "../images/eb25b0964b1d654ffe0395191ffbc7bd.jpg" },
        // 可以添加更多電影
    ];

    const movieGrid = document.getElementById('movie-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // 創建電影卡片
    function createMovieCard(movie) {
        return `
            <div class="bg-white rounded shadow-md overflow-hidden">
                <img src="${movie.image}" alt="${movie.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${movie.title}</h3>
                    <p class="text-gray-600">${movie.category}</p>
                </div>
            </div>
        `;
    }

    




    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0');
            backToTopBtn.classList.add('opacity-100');
        } else {
            backToTopBtn.classList.remove('opacity-100');
            backToTopBtn.classList.add('opacity-0');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
        