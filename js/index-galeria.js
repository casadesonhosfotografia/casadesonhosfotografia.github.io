(function ($) {
    "use strict";

    var colors = ['1E90FF/A52A2A', 'A52A2A/bebebe', ''];

    var galeria = {}
    function inserirImagem(categoria,texto, tamanho) {
        galeria[categoria] = [];
        for (var index = 1; index <= tamanho; index++) {
            galeria[categoria].push({
                img:'/images/galerias/capa_galeria/capa_galeria_'+categoria+'_'+index+'.jpg',
                texto: texto 
            }); 
        }
    }

    inserirImagem('aniversario', 'Aniversário', 2);
    inserirImagem('casamento', 'Casamento', 6);
    inserirImagem('ensaio', 'Ensaio', 3);
    inserirImagem('eventos', 'Evento', 2);
    inserirImagem('fotojornalismo', 'Fotojornalismo', 1);

    var elementos = []
    for (var index in galeria) {
        galeria[index].forEach(function (element) {
            elementos.push(
                `
                    <div class="mega-entry cat-all ${index}" data-src="${element.img}"
                    data-width="600" data-height="400">
                        <a href="album?categoria=${index}">
                            <div class="overlay-hover image-hover">
                                <h3 class="text-hover">
                                    <i class="fa fa-camera fa-2x" aria-hidden="true"></i><br>
                                     ${element.texto}
                                </h3>
                            </div>
                        </a>
                    </div>`
                );

        });
    }
    $('#galleries').append(elementos);

})(jQuery);