import { NextResponse } from "next/server";

export async function GET() {
    const data = [
        {
            id: 773071238,
            name: "moovie",
            html_url: "https://github.com/mikael-espinola/moovie-v1",
            homepage: "https://mikael-espinola.github.io/moovie-v1/",
            description_EN:
              "Built with Typescript and React, Its main purpose is to help users find movies by providing features such as viewing trailers, accessing reviews, and other pertinent information. With this tool, movie enthusiasts can conveniently explore and discover films.",
            description_PT:
              "Construído com Typescript e React, seu principal objetivo é ajudar os usuários a encontrar filmes, fornecendo recursos como visualização de trailers, acesso a críticas e outras informações pertinentes. Com essa ferramenta, os entusiastas de filmes podem explorar e descobrir filmes de forma conveniente.",
            techs: ["React", "TypeScript", "Styled-Components"],
            image: "/assets/images/dataImages/Moovie_layout.png",
          },
          {
            id: 765111842,
            name: "gitHunt",
            html_url: "https://github.com/mikael-espinola/githunt-app/",
            description_PT:
              "Este aplicativo foi útil para entender conceitos sobre useState, consumir uma API com princípios RESTful, construí-lo com a técnica Mobile First, implementar Debounce para melhorar a experiência de busca do cliente e aplicar lógica de modo escuro para maior conforto do usuário.",
            techs: ["React", "Styled-Components"],
            homepage: "https://mikael-espinola.github.io/githunt-app/",
            image: "/assets/images/dataImages/githunt_layout.png",
            description_EN:
              "This app was useful for understanding concepts about useState, consuming an API with RESTFul principles, building it with the Mobile First technique, implementing Debounce to improve the customer's search experience and applying dark mode logic for greater user comfort.",
          },
          {
            id: 612029466,
            name: "weather",
            html_url: "https://github.com/mikael-espinola/weather",
            description_PT:
              "Weather foi desenvolvido para aumentar a habilidade na integração de React, Typescript e Bootstrap. Sua função é de apresentar para o usuário informações organizadas sobre o cliente na cidade digitada",
            techs: ["React", "TypeScript", "Bootstrap"],
            homepage: "https://mikael-espinola.github.io/clima_App/",
            image: "/assets/images/dataImages/weather_app_layout.png",
            description_EN:
              "Weather was developed to increase proficiency in React, Typescript, and Bootstrap integration. Its function is to present organized information to the user about the weather in the entered city.",
          },
          {
            id: 796012684,
            name: "BMI Calculator",
            html_url: "https://github.com/mikael-espinola/bmi-calculator",
            description_PT:
              "Esta é uma solução para o Índice de Massa Corporal desenvolvida com a mentoria do canal One Bit Code YT, que me ajudou a melhorar minhas habilidades de codificação em React Native.",
            techs: ["React Native", "Bootstrap"],
            homepage: "https://mikael-espinola.github.io/githunt-app/",
            image: "/assets/images/dataImages/bmi_layout.jpg",
            description_EN:
              "This is a solution to the Body Mass Index developed with One Bit Code YT channel mentorship, which help me improve my coding skills in React Native.",
          },
          {
            id: 784991749,
            name: "to do list",
            html_url: "https://github.com/mikael-espinola/todo-list",
            homepage: "https://mikael-espinola.github.io/todo-list/",
            description_EN:
              "A short todo list built to increase my skills with state management with Redux.",
            description_PT:
              "Uma lista de afazeres curta construída para aumentar minhas habilidades no gerenciamento de estado com Redux.",
            techs: ["TypeScript", "Styled-Components", "Redux"],
            image: "/assets/images/dataImages/todo_layout.png",
          },
          {
            id: 784424986,
            name: "counter",
            html_url: "https://github.com/mikael-espinola/counter",
            homepage: "https://mikael-espinola.github.io/counter/",
            description_EN:
              "Developed a number Counter using the Redux lib to manage the counter's state and share the value state in other parts of the project.",
            description_PT:
              "Desenvolvi um Contador de números usando a biblioteca Redux para gerenciar o estado do contador e compartilhar o valor do estado em outras partes do projeto.",
            techs: ["TypeScript", "Styled-Components", "Redux"],
            image: "/assets/images/dataImages/counter_layout.png",
          },
          {
            id: 607954116,
            name: "flappy bird",
            html_url: "https://github.com/mikael-espinola/flappy_bird",
            description_PT:
              "Jogo Flappy Bird construído através da integração de JavaScript, HTML e CSS, resultando em manipulação do DOM.",
            techs: ["JavaScript", "CSS", "HTML"],
            homepage: "https://mikael-espinola.github.io/flappy_bird/",
            image: "/assets/images/dataImages/flappybird_layout.png",
            description_EN:
              "Flappy Bird Game built through the integration of JavaScript, HTML and CSS resulting in DOM manipulation. ",
          },
        
          {
            id: 591188654,
            name: "projeto mario",
            html_url: "https://github.com/mikael-espinola/Projeto_Mario",
            description_PT:
              "Landing Page para o novo filme do Super Mario Bros. O projeto foi desenvolvido durante o Intensivo de Desenvolvimento Full Stack sob a orientação dos professores @devemdobro.",
            techs: ["JavaScript", "CSS", "HTML"],
            homepage: "https://mikael-espinola.github.io/Projeto_Mario/",
            image: "/assets/images/dataImages/mario_layout.png",
            description_EN:
              "Landing Page for the new Super Mario Bros. movie. Project was developed during the Dev Full Stack Intensive under the orientation of the @devemdobro teachers",
          },
    ]

    return NextResponse.json(data)
}