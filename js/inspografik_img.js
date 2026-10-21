
function fetchLatestTumblrImages() {
    $.getJSON(
        "https://inspografik-feed.gabriella-14a.workers.dev/",
        function(data) {
            $.each(data.photos || [], function(i, photoUrl) {

                // Create image element
                var img = $("<img>", {
                    class: "img_post",
                    src: photoUrl
                });

                // Random position within viewport
                var maxX = Math.max(
                    0,
                    $(window).width() - 200
                );

                var maxY = Math.max(
                    0,
                    $(window).height() - 200
                );

                var randomX = Math.floor(
                    Math.random() * (maxX + 1)
                );

                var randomY = Math.floor(
                    Math.random() * (maxY + 1)
                );

                img.css({
                    top: randomY + "px",
                    left: randomX + "px"
                });

                // Append to #weblog
                $("#weblog").append(img);

                // Make draggable
                img.draggable({
                    stack: "img"
                });
            });
        }
    ).fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "Unable to load Inspografik Tumblr photos:",
            textStatus,
            errorThrown
        );
    });
}
