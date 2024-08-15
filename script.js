document.getElementById('renkSecici').addEventListener('change', function() {
    const secilenRenk = this.value;
    const renkGosterici = document.getElementById('renkGosterici');
    renkGosterici.style.backgroundColor = secilenRenk;
});