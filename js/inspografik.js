function fetchLatestTumblrImages() {
    $.getJSON("https://inspografik.tumblr.com/api/read/json?type=photo&num=30&callback=?", function(data) {
        $.each(data.posts, function(i, postData) {
            if (postData.type === "photo") {
                // Create image element
                var img = $("<img>", {
                    class: "img_post",
                    src: postData["photo-url-1280"]
                });

                // Random position within viewport
                var maxX = $(window).width() - 200;   // adjust 200 for image width buffer
                var maxY = $(window).height() - 200;
                var randomX = Math.floor(Math.random() * maxX);
                var randomY = Math.floor(Math.random() * maxY);

                img.css({ top: randomY + "px", left: randomX + "px" });

                // Append to #weblog
                $("#weblog").append(img);

                // Make draggable
                img.draggable({ stack: "img" });
            }
        });
    });
}