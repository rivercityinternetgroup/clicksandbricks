jQuery(document).ready(function($) {
    // Define your dev WP install URL
    var devUrl = "https://dev.clicksandbricks.tv";

    // Find iframe with the placeholder and replace it
    $("#contactFormIframe").each(function() {
        var src = $(this).attr("src");
        // Replace placeholder with real dev URL
        src = src.replace("%%DEV_URL%%", devUrl);
        $(this).attr("src", src);
    });
});