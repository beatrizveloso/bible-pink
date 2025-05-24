 const livroMap = {
      "genesis": "gn",
      "exodo": "ex",
      "levitico": "lv",
      "numeros": "nm",
      "deuteronomio": "dt",
      "josue": "js",
      "juizes": "jz",
      "rute": "rt",
      "1 samuel": "1sm",
      "2 samuel": "2sm",
      "1 reis": "1rs",
      "2 reis": "2rs",
      "1 cronicas": "1cr",
      "2 cronicas": "2cr",
      "esdras": "ed",
      "neemias": "ne",
      "ester": "et",
      "jo": "job",
      "salmos": "sl",
      "proverbios": "pv",
      "eclesiastes": "ec",
      "cantares": "ct",
      "isaias": "is",
      "jeremias": "jr",
      "lamentacoes": "lm",
      "ezequiel": "ez",
      "daniel": "dn",
      "oseias": "os",
      "joel": "jl",
      "amos": "am",
      "obadias": "ob",
      "jonas": "jn",
      "miqueias": "mq",
      "naum": "na",
      "habacuque": "hc",
      "sofonias": "sf",
      "ageu": "ag",
      "zacarias": "zc",
      "malaquias": "ml",
      "mateus": "mt",
      "marcos": "mc",
      "lucas": "lc",
      "joao": "jo",
      "atos": "at",
      "romanos": "rm",
      "1 corintios": "1co",
      "2 corintios": "2co",
      "galatas": "gl",
      "efesios": "ef",
      "filipenses": "fp",
      "colossenses": "cl",
      "1 tessalonicenses": "1ts",
      "2 tessalonicenses": "2ts",
      "1 timoteo": "1tm",
      "2 timoteo": "2tm",
      "tito": "tt",
      "filemom": "fm",
      "hebreus": "hb",
      "tiago": "tg",
      "1 pedro": "1pe",
      "2 pedro": "2pe",
      "1 joao": "1jo",
      "2 joao": "2jo",
      "3 joao": "3jo",
      "judas": "jd",
      "apocalipse": "ap"
    };

    function removerAcentos(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    async function buscarVersiculo() {
      const ref = document.getElementById("referencia").value.trim();
      const resultado = document.getElementById("resultado");

      if (!ref) {
        resultado.innerHTML = '<div class="error">Por favor, digite uma referência bíblica.</div>';
        return;
      }

      const partes = ref.split(/[\s:]+/);
      if (partes.length < 3) {
        resultado.innerHTML = '<div class="error">Formato inválido. Use: NomeDoLivro capítulo:versículo<br>Exemplo: João 3:16</div>';
        return;
      }

      const nomeLivroOriginal = partes.slice(0, partes.length - 2).join(" ");
      const nomeLivro = removerAcentos(nomeLivroOriginal.toLowerCase());
      const capitulo = partes[partes.length - 2];
      const versiculo = partes[partes.length - 1];

      const sigla = livroMap[nomeLivro];

      if (!sigla) {
        resultado.innerHTML = '<div class="error">Livro não encontrado. Verifique se o nome está correto.</div>';
        return;
      }

      try {
        resultado.innerHTML = '<p style="text-align:center;color:var(--rosa-escuro)">Buscando versículo...</p>';

        const response = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${sigla}/${capitulo}/${versiculo}`, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJTYXQgTWF5IDI0IDIwMjUgMDQ6MDQ6MDggR01UKzAwMDAuYmVhdHJpem9zbG92NkBnbWFpbC5jb20iLCJpYXQiOjE3NDgwNTk0NDh9.a0YhoRAU-eS3i0oTazXavOHT7r8Xj5dgAq1j6dWdbXk"
          }
        });

        if (!response.ok) {
          throw new Error("Versículo não encontrado. Verifique a referência.");
        }

        const data = await response.json();

        resultado.innerHTML = `
          <h3>${data.book.name} ${data.chapter}:${data.number}</h3>
          <p>"${data.text}"</p>
          <div style="margin-top:1.5rem;text-align:right;color:var(--rosa-escuro);font-style:italic;">${data.book.name} ${data.chapter}:${data.number} (NVI)</div>
        `;
      } catch (err) {
        resultado.innerHTML = `<div class="error">${err.message}</div>`;
      }
    }

    document.getElementById("referencia").addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        buscarVersiculo();
      }
    });