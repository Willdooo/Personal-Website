export default function setCZ() {
  return {
    home: {
      nav: {
        home: "DOMŮ",
        about: "O MNĚ",
        skills: "DOVEDNOSTI",
        projects: "PROJEKTY",
        contact: "KONTAKT",
      },
      home: {
        name: "Daniel",
        surname: "Wollmann",
        greetings: "Hello, World!",
        greetings2: "Já jsem",
        frontend: "front-end developer",
      },
    },
    about: {
      about: "Kdo jsem?",
      text: `V tuto chvíli jsem studentem magisterského
       oboru na Právnické fakultě MUNI ve 4. ročníku. 
       Možná Vás tedy zaráží proč níže v části 'Dovednosti'
        namísto právních odvětví uvádím programovací jazyky,
         frameworky a další technologické dovednosti,
          které nemají nic společného s právem...
          `,
      text1: ` Musím přiznat, že mně trvalo 3 roky,
       abych zjistil, že po škole a vlastně ani během
        školy nechci praktikovat právo. `,
      text2: `Kdo tedy doopravdy
        jsem? Jsem začínající self-taught front-end
         developer
         a plánuji se stát full-stack developerem.`,
    },
    skills: {
      skills: "Dovednosti",
      front: "Front-end",
      back: "Back-end",
      others: "Ostatní",
      soon: "Pracuji na tom!",
    },
    projects: {
      title1: "Projekty",
      title2: "Další projekty",
      website: {
        title: "Osobní web",
        text: "Můj osobní web s portfóliem projektů. Líbí se Vám? Je mobile-friendly",
        tools: "React, CSS, Material-UI",
      },
      cv: {
        title: "Aplikace k vytváření životopisů",
        text: "V této aplikaci můžete vytvořit svůj životopis s Vaší fotkou a následně Váš životopis stáhnout jako PDF.",
        tools: "React, Material-UI, JS",
        live: `https://willdooo.github.io/odinProject_CV-Application/`,
        repo: `https://github.com/Willdooo/odinProject_CV-Application`,
      },
      eshop: {
        title: "E-shop",
        text: "E-shop, v kterém můžete přidávat položky do košíku.",
        tools: "React, React-router, Material-UI",
      },
      weather: {
        title: "Aplikace na předpověď počasí",
        text: "Aplikace na předpověď počasí pro města po celém světě. ",
        tools: "JS, CSS",
      },
      memory: {
        title: "Paměťová hra",
        text: "Jednoduchá hra, která otestuje limity vaší paměti s ikonkami.",
        tools: "React, Material-UI",
      },
      todo: {
        title: "TO-DO aplikace",
        text: "TO-DO aplikace v které můžete vytvořit projekty a v těchto projektech můžete nadále vytvořit jednotlivé TO-DOs.",
        tools: "JS, CSS",
      },
      calculator: {
        title: "Kalkulačka",
        text: "Kalkulačka inspirována kalkulačkou Windows10.",
        tools: "HTML, JS, CSS",
      },
      sketch: {
        title: "Grafo",
        text: "Jednoduchá aplikace na kreslení",
        tools: "HTML, JS, CSS",
      },
      restaurant: {
        title: "Stránka pro restauraci",
        text: "Stránka pro restauraci s třemi záložkami, které změní obsah stránky.",
        tools: "JS, HTML, CSS",
      },
    },
  };
}
