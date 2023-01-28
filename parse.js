(function () {
    function downloadString(text, fileType, fileName) {
        var blob = new Blob([text], { type: fileType });
        var a = document.createElement('a');
        a.download = fileName;
        a.href = URL.createObjectURL(blob);
        a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    downloadString(Array.from(document.querySelectorAll('.audio_row')).map(el => {
        const title = el.querySelector('.audio_row__title_inner');
        const artist = el.querySelector('.audio_row__performers');
        return `${artist.innerText} - ${title.innerText}`
    }).join('\n'), 'text', 'audio.txt');
})();