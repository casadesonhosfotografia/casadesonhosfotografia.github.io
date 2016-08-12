(function ($) {
    "use strict";

    var itens = {}
    function inserirImagem(categoria, texto, tamanho) {
        itens[categoria] = [];
        var item = {
            'categoria': categoria,
            'imgs': []
        };

        for (var index = 1; index <= tamanho; index++) {
            item.imgs.push('/images/galerias/' + categoria + '/' + categoria + '_' + index + '.jpg');
        }
        itens[categoria] = item;
    }

    inserirImagem('aniversario', 'Aniversários', 41);
    inserirImagem('casamento', 'Casamentos', 41);
    inserirImagem('ensaio', 'Ensaios', 19);
    inserirImagem('eventos', 'Eventos', 12);
    inserirImagem('fotojornalismo', 'Fotojornalismo', 14);

    var item = itens[$.url('?categoria')];
    
    // $('.category a').append('Categoria: '+ item.categoria);
    // $('.photo a').append(item.imgs.length);
    $('.page-heading1').append(item.categoria);


    for (var index in item.imgs) {

        $('.megafolio-container')
            .append(
                `<div class="mega-entry" data-src="${item.imgs[index]}" data-width="800" data-height="600">
                    <a class="fancybox" data-fancybox-group="gallery-single" href="${item.imgs[index]}">
                        <div class="overlay-hover">
                            <div class="overlay-icon">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                    </a>

                </div>
                 `
                );

    }

})(jQuery);