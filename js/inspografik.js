function fetchLatestTumblrImages() {
    $.getJSON("https://inspografik.tumblr.com/api/read/json?type=photo&num=30&callback=?", function(data) {
        $.each(data.posts, function(i, postData) {
            if (postData.type === "photo") {
                var img = $("<img>", {
                    class: "img_post",
                    src: postData["photo-url-1280"]
                });

                var maxX = $(window).width() - 200;
                var maxY = $(window).height() - 200;
                var randomX = Math.floor(Math.random() * maxX);
                var randomY = Math.floor(Math.random() * maxY);

                img.css({ top: randomY + "px", left: randomX + "px" });

                $("#weblog").append(img);
                img.draggable({ stack: "img" });
            }
        });
    });
}

// Call it on DOM ready
$(document).ready(function() {
    fetchLatestTumblrImages();
});
