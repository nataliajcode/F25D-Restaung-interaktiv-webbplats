function filterMenu(category) {
    let items = document.querySelectorAll('#menu-list li');
    
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleLunch() {
    let lunchInfo = document.getElementById('lunch-info');
    
    if (lunchInfo.style.display === 'none' || lunchInfo.style.display === '') {
        lunchInfo.style.display = 'block';
    } else {
        lunchInfo.style.display = 'none';
    }
}
