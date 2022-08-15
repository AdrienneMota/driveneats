let prato, bebida, sobremesa;

function selecionarprato(classprato){
      
    const pratoselecionadoantes = document.querySelector('.cardapio-prato .selecionado');

    if(pratoselecionadoantes !== null){
        const iconeselecionadoantes = pratoselecionadoantes.querySelector('.icone');
        pratoselecionadoantes.classList.remove('selecionado');
        iconeselecionadoantes.classList.add('escondido')
    }
    
    const seletor = '.'+classprato;
    const pratoselecionado = document.querySelector(seletor);
    pratoselecionado.classList.add('selecionado');
    const icone = pratoselecionado.querySelector(':scope > .escondido');
    icone.classList.remove('escondido')

    prato = document.querySelector('.cardapio-prato .selecionado');
    
    if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botaohabilitado = document.querySelector('.botao-confirmar');
        botaohabilitado.classList.add('botao-habilitado');
        botaohabilitado.innerHTML = 'Fechar pedido';
    }
}

function selecionarbebida(classbebida){
    const bebidaselecionadoantes = document.querySelector('.cardapio-bebida .selecionado');
    if(bebidaselecionadoantes !== null){
        const iconeselecionadoantes = bebidaselecionadoantes.querySelector('.icone');
        bebidaselecionadoantes.classList.remove('selecionado');
        iconeselecionadoantes.classList.add('escondido');
    }
    const seletor = '.'+classbebida;
    const bebidaselecionado = document.querySelector(seletor);
    bebidaselecionado.classList.add('selecionado');
    const icone = bebidaselecionado.querySelector(':scope > .escondido') //ajuda a achar a tag certa dentro da div q tem o selecionado
    icone.classList.remove('escondido');

    bebida = document.querySelector('.cardapio-bebida .selecionado');
    
    if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botaohabilitado = document.querySelector('.botao-confirmar');
        botaohabilitado.classList.add('botao-habilitado');
        botaohabilitado.innerHTML = 'Fechar pedido';
    }
}

function selecionarsobremesa(classsobremesa){
    const sobremesaselecionadoantes = document.querySelector('.cardapio-sobremesa .selecionado');
    if(sobremesaselecionadoantes !== null){
        const iconeselecionadoantes = sobremesaselecionadoantes.querySelector('.icone');
        sobremesaselecionadoantes.classList.remove('selecionado');
        iconeselecionadoantes.classList.add('escondido');
    }
    const seletor = '.'+classsobremesa;
    const sobremesaselecionado = document.querySelector(seletor);
    sobremesaselecionado.classList.add('selecionado');
    const icone = sobremesaselecionado.querySelector(':scope > .escondido');
    icone.classList.remove('escondido')

    sobremesa = document.querySelector('.cardapio-sobremesa .selecionado');
    
    if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botaohabilitado = document.querySelector('.botao-confirmar');
        botaohabilitado.classList.add('botao-habilitado');
        botaohabilitado.innerHTML = 'Fechar pedido';
    }
}

function enviarMensagem(prato = '', bebida='', sobremesa='', total='0.0'){
    const number = '5592984159776';
    const baseurl = `https://wa.me/${number}?text=`
    const texto = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: ${total}`;
    const url = encodeURI(`${baseurl}${texto}`)
    console.log(url)
    window.open(url, '_blank')
   
}

function confirmarPedido(){
    if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
            
        const selecionados = document.querySelectorAll('.selecionado')
        let prato = ''
        let bebida = ''
        let sobremesa = ''
        let total = 0

        for (const selecionado of selecionados) {
            const titulo = selecionado.querySelector('.titulo-item').childNodes[0].innerHTML;
            
            const preco = selecionado.querySelector('.preco').innerHTML.replace('R$ ', '').replace(',', '.');
            total += parseFloat(preco)
                    
            if(selecionado.parentElement.className.includes('cardapio-prato')){
                prato = titulo;    
            }
            if(selecionado.parentElement.className.includes('cardapio-bebida')){
                bebida = titulo;    
            }
            if(selecionado.parentElement.className.includes('cardapio-sobremesa')){
                sobremesa = titulo;    
            }
        }

        enviarMensagem(prato, bebida, sobremesa, total.toFixed(2))
    }
    else{
        alert('Por favor, preencha um item de cada categoria!')
    }
}
