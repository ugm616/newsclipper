document.addEventListener('DOMContentLoaded', function() {
    const modeSwitch = document.getElementById('mode-switch');
    const generateClipping = document.getElementById('generate-clipping');
    const newsClipping = document.getElementById('news-clipping');

    modeSwitch.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            modeSwitch.textContent = 'Switch to Dark Mode';
        } else {
            modeSwitch.textContent = 'Switch to Light Mode';
        }
    });

    generateClipping.addEventListener('click', function() {
        const newspaper = document.getElementById('newspaper-select').value;
        const headline = document.getElementById('headline').value;
        const journalistName = document.getElementById('journalist-name').value;
        const articleType = document.getElementById('article-type').value;
        const articleText = document.getElementById('article-text').value;
        const articleImage = document.getElementById('article-image').files[0];

        let clippingHTML = `
            <h2>${headline}</h2>
            <p><strong>Newspaper:</strong> ${newspaper}</p>
            <p><strong>Journalist:</strong> ${journalistName}</p>
            <p><strong>Article Type:</strong> ${articleType}</p>
            <p>${articleText}</p>
        `;

        if (articleImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                clippingHTML += `<img src="${e.target.result}" alt="Article Image">`;
                newsClipping.innerHTML = clippingHTML;
            };
            reader.readAsDataURL(articleImage);
        } else {
            newsClipping.innerHTML = clippingHTML;
        }
    });
});
