    const bookCodes = {
            "genesis": "gn", "exodo": "ex", "levitico": "lv", "numeros": "nm", "deuteronomio": "dt",
            "josue": "js", "juizes": "jz", "rute": "rt", "1samuel": "1sm", "2samuel": "2sm",
            "1reis": "1rs", "2reis": "2rs", "1cronicas": "1cr", "2cronicas": "2cr", "esdras": "ed",
            "neemias": "ne", "ester": "et", "jo": "job", "salmos": "sl", "proverbios": "pv",
            "eclesiastes": "ec", "canticos": "ct", "isaias": "is", "jeremias": "jr", "lamentacoes": "lm",
            "ezequiel": "ez", "daniel": "dn", "oseias": "os", "joel": "jl", "amos": "am",
            "obadias": "ob", "jonas": "jn", "miqueias": "mq", "naum": "na", "habacuque": "hc",
            "sofonias": "sf", "ageu": "ag", "zacarias": "zc", "malaquias": "ml", "mateus": "mt",
            "marcos": "mc", "lucas": "lc", "joao": "jo", "atos": "at", "romanos": "rm",
            "1corintios": "1co", "2corintios": "2co", "galatas": "gl", "efesios": "ef", "filipenses": "fp",
            "colossenses": "cl", "1tessalonicenses": "1ts", "2tessalonicenses": "2ts", "1timoteo": "1tm",
            "2timoteo": "2tm", "tito": "tt", "filemon": "fm", "hebreus": "hb", "tiago": "tg",
            "1pedro": "1pe", "2pedro": "2pe", "1joao": "1jo", "2joao": "2jo", "3joao": "3jo",
            "judas": "jd", "apocalipse": "ap"
        };

        const bookNames = {
            "genesis": "Gênesis", "exodo": "Êxodo", "levitico": "Levítico", "numeros": "Números",
            "deuteronomio": "Deuteronômio", "josue": "Josué", "juizes": "Juízes", "rute": "Rute",
            "1samuel": "1 Samuel", "2samuel": "2 Samuel", "1reis": "1 Reis", "2reis": "2 Reis",
            "1cronicas": "1 Crônicas", "2cronicas": "2 Crônicas", "esdras": "Esdras", "neemias": "Neemias",
            "ester": "Ester", "jo": "Jó", "salmos": "Salmos", "proverbios": "Provérbios",
            "eclesiastes": "Eclesiastes", "canticos": "Cânticos", "isaias": "Isaías", "jeremias": "Jeremias",
            "lamentacoes": "Lamentações", "ezequiel": "Ezequiel", "daniel": "Daniel", "oseias": "Oséias",
            "joel": "Joel", "amos": "Amós", "obadias": "Obadias", "jonas": "Jonas", "miqueias": "Miqueias",
            "naum": "Naum", "habacuque": "Habacuque", "sofonias": "Sofonias", "ageu": "Ageu",
            "zacarias": "Zacarias", "malaquias": "Malaquias", "mateus": "Mateus", "marcos": "Marcos",
            "lucas": "Lucas", "joao": "João", "atos": "Atos", "romanos": "Romanos", "1corintios": "1 Coríntios",
            "2corintios": "2 Coríntios", "galatas": "Gálatas", "efesios": "Efésios", "filipenses": "Filipenses",
            "colossenses": "Colossenses", "1tessalonicenses": "1 Tessalonicenses", "2tessalonicenses": "2 Tessalonicenses",
            "1timoteo": "1 Timóteo", "2timoteo": "2 Timóteo", "tito": "Tito", "filemon": "Filemom",
            "hebreus": "Hebreus", "tiago": "Tiago", "1pedro": "1 Pedro", "2pedro": "2 Pedro",
            "1joao": "1 João", "2joao": "2 João", "3joao": "3 João", "judas": "Judas", "apocalipse": "Apocalipse"
        };

        const booksData = {
            "genesis": 50, "exodo": 40, "levitico": 27, "numeros": 36, "deuteronomio": 34,
            "josue": 24, "juizes": 21, "rute": 4, "1samuel": 31, "2samuel": 24,
            "1reis": 22, "2reis": 25, "1cronicas": 29, "2cronicas": 36, "esdras": 10,
            "neemias": 13, "ester": 10, "jo": 42, "salmos": 150, "proverbios": 31,
            "eclesiastes": 12, "canticos": 8, "isaias": 66, "jeremias": 52, "lamentacoes": 5,
            "ezequiel": 48, "daniel": 12, "oseias": 14, "joel": 3, "amos": 9,
            "obadias": 1, "jonas": 4, "miqueias": 7, "naum": 3, "habacuque": 3,
            "sofonias": 3, "ageu": 2, "zacarias": 14, "malaquias": 4, "mateus": 28,
            "marcos": 16, "lucas": 24, "joao": 21, "atos": 28, "romanos": 16,
            "1corintios": 16, "2corintios": 13, "galatas": 6, "efesios": 6, "filipenses": 4,
            "colossenses": 4, "1tessalonicenses": 5, "2tessalonicenses": 3, "1timoteo": 6,
            "2timoteo": 4, "tito": 3, "filemon": 1, "hebreus": 13, "tiago": 5,
            "1pedro": 5, "2pedro": 3, "1joao": 5, "2joao": 1, "3joao": 1,
            "judas": 1, "apocalipse": 22
        };

        let currentVerses = []; 

        function populateSelectors() {
            const bookSelect = document.getElementById('book-select');
            const chapterSelect = document.getElementById('chapter-select');
            const verseSelect = document.getElementById('verse-select');

            bookSelect.innerHTML = '<option value="">Selecione um livro</option>';
            chapterSelect.innerHTML = '<option value="">Capítulo</option>';
            verseSelect.innerHTML = '<option value="">Selecione um versículo</option>';

            Object.keys(bookNames).forEach(bookId => {
                const option = document.createElement('option');
                option.value = bookId;
                option.textContent = bookNames[bookId];
                bookSelect.appendChild(option);
            });

            const currentBook = localStorage.getItem('currentBook') || 'genesis';
            if (currentBook) {
                bookSelect.value = currentBook;
                updateChapterSelector(currentBook);
            }

            const currentChapter = localStorage.getItem('currentChapter') || 1;
            if (currentChapter) {
                chapterSelect.value = currentChapter;
            }

            const currentVerse = localStorage.getItem('currentVerse') || 1;
            if (currentVerse) {
                verseSelect.value = currentVerse;
            }

            bookSelect.addEventListener('change', function() {
                const selectedBook = this.value;
                if (selectedBook) {
                    updateChapterSelector(selectedBook);
                }
            });

            chapterSelect.addEventListener('change', function() {
                const selectedChapter = this.value;
                if (selectedChapter) {
                    updateVerseSelector(selectedChapter);
                }
            });
        }

        function updateChapterSelector(bookId) {
            const chapterSelect = document.getElementById('chapter-select');
            chapterSelect.innerHTML = '<option value="">Capítulo</option>';

            const totalChapters = booksData[bookId] || 1;

            for (let i = 1; i <= totalChapters; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                chapterSelect.appendChild(option);
            }
        }

        function updateVerseSelector(chapterNumber) {
            const verseSelect = document.getElementById('verse-select');
            verseSelect.innerHTML = '<option value="">Selecione um versículo</option>';

            if (currentVerses && currentVerses.length > 0) {
                currentVerses.forEach(verse => {
                    const option = document.createElement('option');
                    option.value = verse.number;
                    option.textContent = verse.number;
                    verseSelect.appendChild(option);
                });
            }
        }

        function goToSelectedChapter() {
            const bookSelect = document.getElementById('book-select');
            const chapterSelect = document.getElementById('chapter-select');

            const selectedBook = bookSelect.value;
            const selectedChapter = chapterSelect.value;

            if (selectedBook && selectedChapter) {
                localStorage.setItem('currentBook', selectedBook);
                localStorage.setItem('currentChapter', selectedChapter);
                localStorage.removeItem('currentVerse');
                loadChapter();
            }
        }

        function goToSelectedVerse() {
            const verseSelect = document.getElementById('verse-select');
            const selectedVerse = verseSelect.value;

            if (selectedVerse) {
                highlightVerse(selectedVerse);
                localStorage.setItem('currentVerse', selectedVerse);
            }
        }

        async function loadChapter() {
            const bookId = localStorage.getItem('currentBook') || 'genesis';
            const chapter = localStorage.getItem('currentChapter') || 1;
            const verseToHighlight = localStorage.getItem('currentVerse') || 1;

            const bookCode = bookCodes[bookId];
            const bookName = bookNames[bookId];

            document.getElementById('chapter-title').textContent = `${bookName} ${chapter}`;

            try {
                const response = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${bookCode}/${chapter}`, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJTYXQgTWF5IDI0IDIwMjUgMDQ6MDQ6MDggR01UKzAwMDAuYmVhdHJpem9zbG92NkBnbWFpbC5jb20iLCJpYXQiOjE3NDgwNTk0NDh9.a0YhoRAU-eS3i0oTazXavOHT7r8Xj5dgAq1j6dWdbXk"
                    }
                });

                if (!response.ok) throw new Error("Capítulo não encontrado");

                const data = await response.json();
                const versesContainer = document.getElementById('verses-container');
                versesContainer.innerHTML = '';

                currentVerses = data.verses.sort((a, b) => a.number - b.number);

                currentVerses.forEach(verse => {
                    const verseDiv = document.createElement('div');
                    verseDiv.className = 'verse';
                    verseDiv.id = `v${verse.number}`;

                    const verseNumberSpan = document.createElement('span');
                    verseNumberSpan.className = 'verse-number';
                    verseNumberSpan.textContent = verse.number;

                    verseDiv.appendChild(verseNumberSpan);
                    verseDiv.appendChild(document.createTextNode(verse.text));

                    versesContainer.appendChild(verseDiv);

                    verseDiv.onclick = function() {
                        highlightVerse(verse.number);
                        document.getElementById('verse-select').value = verse.number;
                    };
                });

                updateVerseSelector(chapter);
                
                highlightVerse(verseToHighlight);
                document.getElementById('verse-select').value = verseToHighlight;

            } catch (error) {
                console.error('Erro ao carregar o capítulo:', error);
                document.getElementById('verses-container').innerHTML = 
                    '<p>Ocorreu um erro ao carregar o capítulo. Por favor, tente novamente.</p>';
            }
        }

        function highlightVerse(verseNumber) {
            document.querySelectorAll('.verse').forEach(v => {
                v.classList.remove('highlighted');
            });

            const verseElement = document.getElementById('v' + verseNumber);
            if (verseElement) {
                verseElement.classList.add('highlighted');
                verseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                localStorage.setItem('currentVerse', verseNumber);
            }
        }

        async function prevChapter() {
            const bookId = localStorage.getItem('currentBook') || 'genesis';
            const currentChapter = parseInt(localStorage.getItem('currentChapter')) || 1;

            if (currentChapter > 1) {
                localStorage.setItem('currentChapter', currentChapter - 1);
                localStorage.removeItem('currentVerse');
                await loadChapter();

                document.getElementById('chapter-select').value = currentChapter - 1;
            }
        }

        async function nextChapter() {
            const bookId = localStorage.getItem('currentBook') || 'genesis';
            const currentChapter = parseInt(localStorage.getItem('currentChapter')) || 1;
            const totalChapters = booksData[bookId] || 50;

            if (currentChapter < totalChapters) {
                localStorage.setItem('currentChapter', currentChapter + 1);
                localStorage.removeItem('currentVerse');
                await loadChapter();

                document.getElementById('chapter-select').value = currentChapter + 1;
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            populateSelectors();
            loadChapter();
        });