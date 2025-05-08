// Current theme settings
let currentTheme = {
    primaryColor: '#2563EB',
    headerGradient: 'blue-purple',
    fontFamily: "'Inter', sans-serif",
    layout: 'standard'
};

// Apply theme settings
function applyTheme() {
    document.documentElement.style.setProperty('--primary', currentTheme.primaryColor);
    document.querySelector('#resumePreview .resume-header').style.background = getGradientStyle(currentTheme.headerGradient);
    document.getElementById('resumePreview').style.fontFamily = currentTheme.fontFamily;
}

// Get gradient style based on name
function getGradientStyle(gradientName) {
    switch(gradientName) {
        case 'blue-purple': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        case 'pink-red': return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        case 'teal-purple': return 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)';
        case 'orange': return 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)';
        case 'gray': return 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)';
        case 'green-teal': return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        default: return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
}

// Initialize theme controls
document.addEventListener("DOMContentLoaded", function() {
    // Color picker functionality
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(opt => {
                opt.querySelector('.color-box').classList.remove('active');
            });
            this.querySelector('.color-box').classList.add('active');
            currentTheme.primaryColor = this.dataset.color;
            applyTheme();
        });
    });

    // Gradient picker functionality
    document.querySelectorAll('.gradient-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.gradient-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            currentTheme.headerGradient = this.dataset.gradient;
            applyTheme();
        });
    });

    // Font family selector
    document.getElementById('fontFamily').addEventListener('change', function() {
        currentTheme.fontFamily = this.value;
        applyTheme();
    });

    // Layout selector
    document.getElementById('resumeLayout').addEventListener('change', function() {
        currentTheme.layout = this.value;
        // You could add layout-specific styling here
    });

    // Initialize first color and gradient as active
    document.querySelector('.color-option:first-child .color-box').classList.add('active');
    document.querySelector('.gradient-option:first-child').classList.add('active');
});