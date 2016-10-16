(function() {
    var video = document.getElementById("video");
    var items = document.getElementsByClassName("item");
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        var title = item.dataset.title;
        var vid = item.dataset.vid;
        var link = "https://www.youtube.com/watch?v=" + vid;

        var img = document.createElement("img");
        img.src = "https://img.youtube.com/vi/" + vid + "/0.jpg";

        var tawawa = document.createElement("a");
        tawawa.href = link;
        tawawa.appendChild(img);
        tawawa.appendChild(document.createTextNode(title));
        tawawa.addEventListener('click', clickitem, false);

        var youtube = document.createElement("a");
        youtube.innerText = "YouTubeで見る";
        youtube.href = link;
        item.appendChild(tawawa);
        item.appendChild(document.createElement('br'));
        item.appendChild(youtube);
    }

    document.getElementById("button-go").addEventListener('click', function() {
        var vid = document.getElementById("videourl").value;
        var m = vid.match(/https?:\/\/www\.youtube\.com\/watch\?v=(\w+)/);
            console.log(m);
        if (m) {
            vid = m[1];
        }
        showvideo(vid);
    }, false);

    function clickitem(e) {
        showvideo(e.target.parentNode.dataset.vid);
        e.preventDefault();
    }

    function showvideo(vid) {
        video.src = "https://www.youtube.com/embed/" + vid;
    }
})();
