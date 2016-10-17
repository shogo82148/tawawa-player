(function() {
    var items = document.getElementsByClassName("item");
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        var site = item.dataset.site;
        var title = item.dataset.title;
        var vid = item.dataset.vid;
        var imgsrc;
        var link;
        if (site==="youtube") {
            imgsrc = "https://img.youtube.com/vi/" + vid + "/0.jpg";
            link = "https://www.youtube.com/watch?v=" + vid;
        }
        if (site==="nicovideo") {
            imgsrc = item.dataset.imgsrc;
            link = "http://www.nicovideo.jp/watch/" + vid;
        }

        var img = document.createElement("img");
        img.src = imgsrc;

        var tawawa = document.createElement("a");
        tawawa.href = '#';
        tawawa.appendChild(img);
        tawawa.appendChild(document.createTextNode(title));
        tawawa.addEventListener('click', clickitem, false);

        var youtube = document.createElement("a");
        youtube.innerText = site + "で見る";
        youtube.href = link;
        item.appendChild(tawawa);
        item.appendChild(document.createElement('br'));
        item.appendChild(youtube);
    }

    document.getElementById("button-go").addEventListener('click', function() {
        var site = 'youtube';
        var vid = document.getElementById("videourl").value;
        var m;
        m = vid.match(/https?:\/\/www\.youtube\.com\/watch\?v=(\w+)/);
        if (m) {
            vid = m[1];
        }
        m = vid.match(/http:\/\/www\.nicovideo\.jp\/watch\/(\w+)/);
        if (m) {
            site = "nicovideo";
            vid = m[1];
        }
        showvideo(site, vid);
    }, false);

    function clickitem(e) {
        var site = e.target.parentNode.dataset.site;
        var vid = e.target.parentNode.dataset.vid;
        showvideo(site, vid);
        e.preventDefault();
    }

    var video = document.getElementById("video");
    function showvideo(site, vid) {
        if (site==="youtube") {
            video.innerHTML = '<iframe width="854" height="480" src="https://www.youtube.com/embed/' + vid + '" frameborder="0" allowfullscreen></iframe>';
        }
        if (site==="nicovideo") {
            video.innerHTML = '';
            var iframe = document.createElement("iframe");
            iframe.frameborder = "0";
            video.appendChild(iframe);
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write('<style type="text/css">embed {width: 100%;height:100%;}</style>');
            iframe.contentWindow.document.write('<script src = "http://ext.nicovideo.jp/thumb_watch/' + vid + '?w=490&h=307"></script>');
            iframe.contentWindow.document.close();
        }
    }
})();
