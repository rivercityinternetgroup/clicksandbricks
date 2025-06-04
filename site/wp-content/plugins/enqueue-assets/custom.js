// custom-ajax-url.js
if (typeof window.ajaxurl !== 'undefined') {
    window.ajaxurl = 'https://dev.clicksandbricks.tv/wp-admin/admin-ajax.php';
}

if (typeof elementorFrontend !== 'undefined' && elementorFrontend.config) {
    elementorFrontend.config.ajaxurl = 'https://dev.clicksandbricks.tv/wp-admin/admin-ajax.php';
}