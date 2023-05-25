
// Menu Mobile

//open menu
document.getElementById("hamburguer-icon").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = '0px';
}

//close menu
document.getElementById("sliding-header-menu-close-button").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = '-320px';
}
// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");

for (var i = 0; i < about_tags.length; i++) {
  about_tags[i].onclick = function () {

    for (var a = 0; a < about_tags.length; a++) {
      about_tags[a].style['background-color'] = unseletected_color;
      about_tags[a].style['font-weight'] = "normal";
    }
    this.style['background-color'] = selected_color;
    this.style['font-weight'] = "bold";

    var selected = this.innerHTML;
    document.getElementById("box-text").innerHTML=aboutUs[selected];
  }
};


// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }

];

var current_service = 0;

document.getElementById("service-next").onclick = function(){
    if(current_service === 0 || current_service === 1){
      current_service++;
      document.getElementById("service-title").innerHTML = our_services[current_service].title;
      document.getElementById("service-text").innerHTML = our_services[current_service].text;   
    }else if(current_service === 2){
      current_service = 0;
      document.getElementById("service-title").innerHTML = our_services[current_service].title;
      document.getElementById("service-text").innerHTML = our_services[current_service].text;
    }
}

document.getElementById("service-previous").onclick = function(){
  if(current_service === 0 ){
    current_service = 2;
    document.getElementById("service-title").innerHTML = our_services[current_service].title;
    document.getElementById("service-text").innerHTML = our_services[current_service].text;   
  }else if(current_service === 2){
    current_service = 1;
    document.getElementById("service-title").innerHTML = our_services[current_service].title;
    document.getElementById("service-text").innerHTML = our_services[current_service].text;
  }else{
    current_service = 0;
    document.getElementById("service-title").innerHTML = our_services[current_service].title;
    document.getElementById("service-text").innerHTML = our_services[current_service].text;
  }
}

//Contact Us

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function () {
        submitButton.value = "Enviando...";
        submitButton.disabled = true;
    }, 1);
});

// Data Footer
var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();

document.getElementById("current_year").innerHTML = ano_atual





