import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 982374120,
      name: "comandApp",
      html_url: "https://www.comandapp.com.br/",
      homepage: "",
      description_EN:
        "ComandApp is a responsive web system designed to streamline service order management. It enables businesses to create, track, and export service records, making it especially useful for operations like laundries. The system is currently being used by two real-world laundry businesses.",
      description_PT:
        "ComandApp é um sistema web responsivo desenvolvido para facilitar a gestão de comandas de serviço. A aplicação permite a criação, acompanhamento e exportação de registros de atendimentos, sendo ideal para negócios como lavanderias. Atualmente, o sistema está em uso real por duas lavanderias.",
      techs: [
        "Next.js",
        "TypeScript",
        "Styled-Components",
        "Prisma",
        "MongoDB",
      ],
      image: "/assets/images/dataImages/comandapp_layout.png",
      type: "professional",
    },
    {
      id: 893748559,
      name: "lacrei saúde",
      html_url: "https://lacreisaude.com.br/",
      homepage: "",
      description_EN:
        "As a volunteer contributor on the front-end team at Lacrei Saúde, I helped build a custom Design System to ensure accessible and inclusive interfaces across all platforms, supporting health and social rights for the LGBTQIAPN+ community.",
      description_PT:
        "Como colaborador voluntário no time de front-end na Lacrei Saúde, contribuí na construção de um Design System próprio para garantir interfaces acessíveis e inclusivas em todas as plataformas, promovendo saúde e direitos sociais para a comunidade LGBTQIAPN+.",
      techs: ["React", "TypeScript", "Storybook", "Styled-Components"],
      image: "/assets/images/dataImages/lacreiSaude_layout.png",
      type: "professional",
    },
    {
      id: 773071238,
      name: "moovie",
      html_url: "https://github.com/mikael-espinola/moovie-v1",
      homepage: "https://mikael-espinola.github.io/moovie-v1/",
      description_EN:
        "Built with TypeScript, Styled-Components, and React, Moovie is a platform designed to simplify movie discovery. The application allows users to explore titles, watch trailers, access reviews, and get detailed information about each film.",
      description_PT:
        "Desenvolvido com TypeScript, Styled-Components e React, o Moovie é uma plataforma projetada para facilitar a descoberta de filmes. A aplicação permite aos usuários explorar títulos, assistir a trailers, acessar críticas e obter informações detalhadas sobre cada filme.",
      techs: ["React", "TypeScript", "Styled-Components"],
      image: "/assets/images/dataImages/Moovie_layout.png",
      type: "personal",
    },
    {
      id: 765111842,
      name: "gitHunt",
      html_url: "https://github.com/mikael-espinola/githunt-app/",
      description_PT:
        "Desenvolvido com foco em React e boas práticas de UX, o GitHunt é um aplicativo que aprimora a experiência de busca de repositórios no GitHub. Durante o desenvolvimento, foram aplicados conceitos como useState, consumo de APIs RESTful, abordagem Mobile First e implementação de Debounce para otimizar a pesquisa. Além disso, a lógica de modo escuro foi incorporada para proporcionar maior conforto visual aos usuários.",
      techs: ["React", "Styled-Components"],
      homepage: "https://mikael-espinola.github.io/githunt-app/",
      image: "/assets/images/dataImages/githunt_layout.png",
      description_EN:
        "Built with a focus on React and UX best practices, GitHunt is an application that enhances the experience of searching for GitHub repositories. Throughout its development, concepts such as useState, RESTful API consumption, Mobile First approach, and Debounce implementation were applied to optimize the search process. Additionally, a dark mode logic was incorporated to ensure greater visual comfort for users.",
      type: "personal",
    },
    {
      id: 612029466,
      name: "weather",
      html_url: "https://github.com/mikael-espinola/weather",
      description_PT:
        "Desenvolvido com React, TypeScript e Bootstrap, o Weather é uma aplicação que exibe informações meteorológicas organizadas com base na cidade digitada pelo usuário.",
      techs: ["React", "TypeScript", "Bootstrap"],
      homepage: "https://mikael-espinola.github.io/clima_App/",
      image: "/assets/images/dataImages/weather_app_layout.png",
      description_EN:
        "Built with React, TypeScript, and Bootstrap, Weather is an application that displays well-organized weather information based on the city entered by the user.",
      type: "personal",
    },
    {
      id: 796012684,
      name: "BMI Calculator",
      html_url: "https://github.com/mikael-espinola/bmi-calculator",
      description_PT:
        "Este é um aplicativo para cálculo do Índice de Massa Corporal (IMC), desenvolvido com React Native sob a mentoria do canal One Bit Code YT. Durante o processo, aprimorei minhas habilidades em React Native, reforçando conceitos fundamentais para o desenvolvimento mobile.",
      techs: ["React Native", "Bootstrap"],
      homepage: "https://mikael-espinola.github.io/githunt-app/",
      image: "/assets/images/dataImages/bmi_layout.jpg",
      description_EN:
        "This is a Body Mass Index (BMI) calculation app, developed with React Native under the mentorship of the One Bit Code YT channel. Throughout the process, I enhanced my React Native skills, strengthening fundamental concepts for mobile development. ",
      type: "personal",
    },
    {
      id: 784991749,
      name: "to do list",
      html_url: "https://github.com/mikael-espinola/todo-list",
      homepage: "https://mikael-espinola.github.io/todo-list/",
      description_EN:
        "A simple to-do list built to improve my state management skills with Redux. This project focuses on delivering a smooth experience for adding, removing, and marking tasks as completed, reinforcing key concepts of Redux and React. ",
      description_PT:
        "Uma lista de afazeres simples, desenvolvida para aprimorar minhas habilidades no gerenciamento de estado com Redux. O projeto foca em proporcionar uma experiência fluida para adicionar, remover e marcar tarefas como concluídas, reforçando conceitos essenciais de Redux e React. ",
      techs: ["TypeScript", "Styled-Components", "Redux"],
      image: "/assets/images/dataImages/todo_layout.png",
      type: "personal",
    },
    {
      id: 607954116,
      name: "flappy bird",
      html_url: "https://github.com/mikael-espinola/flappy_bird",
      description_PT:
        "Uma recriação do clássico Flappy Bird, desenvolvida com JavaScript, HTML e CSS. O projeto explora a manipulação do DOM para criar a lógica do jogo, movimentação dos elementos e detecção de colisões. Essa implementação reforçou conceitos fundamentais de JavaScript, como eventos, loops e controle de animações no navegador.",
      techs: ["JavaScript", "CSS", "HTML"],
      homepage: "https://mikael-espinola.github.io/flappy_bird/",
      image: "/assets/images/dataImages/flappybird_layout.png",
      description_EN:
        "A recreation of the classic Flappy Bird, built using JavaScript, HTML, and CSS. The project focuses on DOM manipulation to handle game logic, element movement, and collision detection. This implementation strengthened key JavaScript concepts, such as event handling, loops, and animation control in the browser. ",
      type: "personal",
    },

    {
      id: 591188654,
      name: "projeto mario",
      html_url: "https://github.com/mikael-espinola/Projeto_Mario",
      description_PT:
        "Uma Landing Page interativa desenvolvida para promover o novo filme do Super Mario Bros. O projeto foi criado durante o Intensivo de Desenvolvimento Full Stack, sob a orientação dos professores @devemdobro, reforçando conceitos de HTML, CSS e JavaScript para construção de interfaces dinâmicas e responsivas.",
      techs: ["JavaScript", "CSS", "HTML"],
      homepage: "https://mikael-espinola.github.io/Projeto_Mario/",
      image: "/assets/images/dataImages/mario_layout.png",
      description_EN:
        "An interactive Landing Page built to promote the new Super Mario Bros movie. This project was developed during the Full Stack Development Intensive, under the guidance of professors @devemdobro, strengthening HTML, CSS, and JavaScript skills for creating dynamic and responsive interfaces.",
      type: "personal",
    },
  ];

  return NextResponse.json(data);
}
