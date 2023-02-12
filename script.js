const projectList = document.querySelector('#project-list');

const projects = [
  {
    name: 'Projeto SystemInfo',
    link: ' https://github.com/carlos-sergio/System.info',
    description: 'Sistema informativo que retorna as informações técnicas do sistema e hardwares da máquina em que está executando.'
    
   
    
    
  },
  {
    name: 'Projeto para exibir e inserir usuario',
    link: 'https://github.com/carlos-sergio/exibir_inserir_usuario',
    description: 'Projeto Spring Boot para exibir e inserir usuários criados no banco de dados H2.'

  },
  {
    name: 'Projeto Controle de Despesas',
    link:'https://github.com/carlos-sergio/Despesas_Controle1',
    description: 'Projeto voltado para consultar despesas, adicionar saldo, ve  rificar saldo e relatório de despesas.'
    
  },

    { name: '+ Projetos ',
    link:'https://github.com/carlos-sergio',
    description: 'Para acompanhar mais projetos de minha autoria, acesse o link acima para ter acesso ao meu portifólio.'
  }
];

for (const project of projects) {
  const listItem = document.createElement('li');
  listItem.innerHTML =  `<h3><a href="${project.link}" target="_blank">${project.name }</a></h3><p>${project.description}</p>`;
  
  projectList.appendChild(listItem);
}

const contactsList = document.querySelector('#contact-list');


const contacts = [
  
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/carlos-s%C3%A9rgio-7b8596143/',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/carlos-sergio',
    icon: 'fab fa-github'

    
  },
  
  {
    name: 'E-mail',
    link: 'https://www.mentimeter.com/app/presentation/al9s98db688xmkxda9bd4vo3fx69jqug',
    icon: 'fas fa-envelope'

  },

{
  name: 'Whatsapp',
  link: 'https://wa.me/99981113074',
  icon: "fab fa-whatsapp"
}
];


for (const contact of contacts) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="${contact.link}" target="_blank"> <i class="${contact.icon}"></i>${contact.name}</a>`;
  contactsList.appendChild(listItem);

}




