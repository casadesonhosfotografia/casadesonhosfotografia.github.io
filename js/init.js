(function ($) {
    "use strict";

    $('.cabecalho').append(`
     <header class="header-section">
        <div class="container">

            <!--Logo Start-->
            <div class="logo">
                <a href="index"><img src="/images/logo.png" alt="logo" /></a>
            </div>
            <!--Logo End-->

            <!--Menu Open Start-->
            <div class="menu-open">
                <span>Menu</span>
                <div id="trigger-menu" class="burger-menu"><span></span></div>
            </div>
            <!--Menu Open End-->

            <!--Header Phone Start-->
            <div class="header-phone">
                (61) 98190-2599 / 99874-2818 / 98609-3936
            </div>
            <!--Header Phone Start-->

        </div>
    </header>`);

    $('.preloader-wrapper').append(`
        <div class="loader">
            <img src="images/maquina.gif">
        </div>`);

    $('.menu').append(`
        <div class="overlay overlay-hugeinc" data-image-src="">
        <div class="overlay-nav-wrapper">
            <div class="container">

                <!--Menu Close Start-->
                <div class="menu-close-wrapper">
                    <div class="container">
                        <div class="menu-close">
                            <span>Fechar</span>
                            <div class="overlay-close"></div>
                        </div>
                    </div>
                </div>
                <!--Menu Close End-->

                <!--Navigation Menu Start-->
                <nav class="main-menu">
                    <ul>
                        <li><a href="index">Home</a></li>
                        <li><a href="galerias">Galerias</a></li>
                        <li><a href="quemsomos">Quem somos</a></li>
                        <li><a href="contato">Contato</a></li>
                    </ul>
                </nav>
                <!--Navigation Menu End-->

            </div>
        </div>
        <div class="color-overlay"></div>
    </div>`);

    $('.footer-section').append(`
            <div class="footer-detail">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                                <div class="box footer-logo animate-fadeIn">
                                    <a href="#"><img src="/images/logo-footer.png" alt="logo footer" /></a>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-md-8 col-md-offset-2">
                                <div class="box footer-description animate-fadeIn">
                                    <p>Construindo momentos</p>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-md-8 col-md-offset-2">
                                <ul class="footer-social animate-fadeIn">
                                    <li class="footer-facebook"><a href="https://www.facebook.com/casadesonhosfotografia" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li class="footer-instagram"><a href="https://www.instagram.com/casadesonhosfotografia" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        Copyrights © 2016 <a href="#">Gabriel Feitosa</a>. Todos os direitos reservados.
                    </div>
                    <div class="goto-top">
                        <a href="#top">
                            <i class="fa fa-angle-up"></i>
                        </a>
                    </div>
                </div>`);

})(jQuery);

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-82191804-1', 'auto');
ga('send', 'pageview');