function mostrarProduto() {
    let pdtInteli = document.getElementById("pdtInteli").value;
    let descricao = document.getElementById("descricao");

    switch (pdtInteli) {
        case "alexa":
            document.getElementById("imagem").src = "img/Alexa.jpg";
            descricao.textContent = "Apresentamos o Amazon Echo Dot Max (Geração mais recente), smart speaker com Alexa, som envolvente e hub de casa inteligente integrado, ideal para sua sala de estar, Cor Grafite";

            break;

        case "camSeg":
            document.getElementById("imagem").src = "img/CamSeg.jpg";
            descricao.textContent = "Câmera De Segurança Sem Fio Wi-fi Externa Interna HD 3MP Lente Dupla Giratória Smart IP66 Prova D'água Visão Noturna Infravermelho Chamada de Voz Bidirecional Premium";
            break;

        case "wapPo":
            document.getElementById("imagem").src = "img/Robo aspirador.jpg";
            descricao.textContent = "WAP Aspirador de Pó Robô ROBOT W90 3 em 1, Automático, 250ml, Sistema Antiqueda e Rodas Emborrachadas, 30W 3,6VDC Bivol";
            break;

        case "panelInt":
            document.getElementById("imagem").src = "img/Painel Central inteligente.jpg";
            descricao.textContent = "Painel Central Inteligente Wi-Fi e Hub Zigbee NovaDigital PCI01-Z C Tuya e Smart Life Comando de Voz Compatível com Alexa e Google Assistente";
            break;

        case "fecDig":
            document.getElementById("imagem").src = "img/Fechadura inteligente.jpg";
            descricao.textContent = "Fechadura Digital Biométrica Wifi Inteligente AMG-F01 Alumínio Preto Mortise 50x50 Teclado Touch Senha Cartão Tag Biometria App Tuya PandaPlus Alexa Google Assistente ";
            break;

        default:
            document.getElementById("imagem").src = "img/PICHAU.jpg";
            descricao.textContent = "Selecione um produto para ver a descrição.";
    }
}
