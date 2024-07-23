window.onload = function() {
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

    // 顯示電影
    function displayMovies(category = 'all') {
        movieGrid.innerHTML = '';
        movies.forEach(movie => {
            if (category === 'all' || movie.category === category) {
                movieGrid.innerHTML += createMovieCard(movie);
            }
        });
    }

    // 初始顯示所有電影
    displayMovies();

    // 添加篩選功能
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            displayMovies(category);

            // 更新按鈕樣式
            filterButtons.forEach(btn => btn.classList.replace('bg-blue-500', 'bg-gray-300'));
            filterButtons.forEach(btn => btn.classList.replace('text-white', 'text-gray-700'));
            button.classList.replace('bg-gray-300', 'bg-blue-500');
            button.classList.replace('text-gray-700', 'text-white');
        });
    });
}
        