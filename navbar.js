document.addEventListener('DOMContentLoaded', function() {
    console.log("navbar.js loaded"); // Confirm the script is loaded

    const navbarHTML = `
        <nav class="bg-white dark:bg-gray-800 shadow">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <a href="index.html" class="flex items-center">
                        <img src="images/logo.png" alt="EmotionAI Trainer Logo" class="h-10 mr-3">
                        <span class="text-2xl font-bold text-gray-800 dark:text-gray-200">EmotionAI Trainer</span>
                    </a>
                    <div class="space-x-4">
                        <a href="index.html" class="text-gray-800 dark:text-gray-200 hover:text-gray-600">Home</a>
                        <a href="signin.html" class="text-gray-800 dark:text-gray-200 hover:text-gray-600">Sign In</a>
                        <a href="register.html" class="text-gray-800 dark:text-gray-200 hover:text-gray-600">Register</a>
                        <a href="contactus.html" class="text-gray-800 dark:text-gray-200 hover:text-gray-600">Contact Us</a>
                        <a href="exam.html" class="text-gray-800 dark:text-gray-200 hover:text-gray-600">Exam</a>
                        <a href="training.html" class="text-gray-800 dark:text-gray-200 hover:text-gray-600">Training for Exam</a>
                        <button id="theme-toggle" class="text-gray-800 dark:text-gray-200 focus:outline-none">
                            <span id="theme-toggle-dark-icon" class="hidden">🌙</span>
                            <span id="theme-toggle-light-icon">☀️</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML); // Insert navbar HTML

    console.log("Navbar inserted"); // Confirm navbar is inserted

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    const updateThemeIcons = () => {
        if (document.documentElement.classList.contains('dark')) {
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        } else {
            themeToggleDarkIcon.classList.add('hidden');
            themeToggleLightIcon.classList.remove('hidden');
        }
    };

    // Update the initial theme state
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();

    themeToggleBtn.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        updateThemeIcons();

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                localStorage.setItem('color-theme', 'dark');
            } else {
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('color-theme', 'dark');
            } else {
                localStorage.setItem('color-theme', 'light');
            }
        }
    });
});
