(function() {
    var items = document.getElementsByClassName("item");
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        var title = item.dataset.title;
        var vid = item.dataset.video;
        item.innerHTML = '<img src="https://img.youtube.com/vi/' + vid + '/0.jpg">' +
            title +
            '<a href="https://www.youtube.com/watch?v=' + vid +'">YouTubeで見る</a>';
    }
})();
