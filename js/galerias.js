(function ($) {
    "use strict";

    var galeria = {}
    function inserirImagem(categoria, texto) {
        galeria[categoria] = [{
                img: '/images/galerias/' + categoria + '/' + categoria + '_1.jpg',
                texto: texto
        }];
    }

    inserirImagem('aniversario', 'Aniversários');
    inserirImagem('casamento', 'Casamentos');
    inserirImagem('ensaio', 'Ensaios');
    inserirImagem('eventos', 'Eventos');
    inserirImagem('fotojornalismo', 'Fotojornalismo');

    function getElement(categoria, elemento) {
        return `<div class="masonry-item col-xs-12 col-sm-6 col-md-4 ${categoria}">
                    <div class="box">
                        <div class="masonry-list-img">
                            <a href="album?categoria=${categoria}">
                                <div class="overlay-hover image-hover">
                                    <div class="text-hover">Ver fotos</div>
                                </div>
                                <figure class="post-image">
                                    <img src="${elemento.img}" alt="gallery item" />
                                </figure>
                            </a>
                        </div>
                        <div class="masonry-list-detail">
                            <h4>${elemento.texto}</h4>
                        </div>
                        <a href="album?categoria=${categoria}">
                            <div class="masonry-link"></div>
                        </a>
                    </div>
                </div>
                `;
    }

    var elems = [];
    for (var index in galeria) {
        galeria[index].forEach(function (element) {
            elems.push(getElement(index, element));
        });
    }

    $('.gallery-list-masonry').append(elems);

})(jQuery);