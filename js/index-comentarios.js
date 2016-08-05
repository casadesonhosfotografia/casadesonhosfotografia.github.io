(function ($) {
    "use strict";

    var itens = [
        {
            titulo: 'Maria e João',
            texto: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada.<br>Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. '
        },
        {
            titulo: 'Fulana e Fulano',
            texto: 'Suspendise mattis condimentum ultricies cras enim facilis<br>condimentum lacinia turpis maecenas.'
        },
        {
            titulo: 'Alguém e Ninguém',
            texto: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada.<br>Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. '
        }
    ];

    itens.forEach(function (e) {
        $('.flexslider-comment ul')
            .append(
            `<li>                 
                <div class="row">
                    <!--Image Section-->
                    <div class="col-sm-12 col-md-4">
                        <div class="box post-image">
                            <img src="http://placehold.it/360x240" alt="highlight panel" />
                        </div>
                    </div>
                    <!--End-->

                    <!--Detail Section-->
                    <div class="col-sm-12 col-md-8">
                        <div class="box highlight-panel-detail">
                            <h3 class="page-heading2">${e.titulo}</h3>
                            <p>${e.texto}</p>
                        </div>
                    </div>
                    <!--End-->
                </div>
            </li>
            `);

    });





})(jQuery);