(function ($) {
    "use strict";


    for (var index = 1; index <= 5; index++) {
        $('.flexslider-capa ul')
            .append(
            `<li>
                <div class="home-slide-overlay" data-bg-color="#1e1e1e" data-opacity="0.3"></div>
                <img src="/images/galerias/capa_site/imagem_${index}" alt="slide image" />
            </li>`
            );
    }

})(jQuery);