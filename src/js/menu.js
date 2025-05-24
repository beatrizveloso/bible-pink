 const booksData = {
            "genesis": 50,
            "exodo": 40,
            "levitico": 27,
            "numeros": 36,
            "deuteronomio": 34,
            "josue": 24,
            "juizes": 21,
            "rute": 4,
            "1samuel": 31,
            "2samuel": 24,
            "1reis": 22,
            "2reis": 25,
            "1cronicas": 29,
            "2cronicas": 36,
            "esdras": 10,
            "neemias": 13,
            "ester": 10,
            "jo": 42,
            "salmos": 150,
            "proverbios": 31,
            "eclesiastes": 12,
            "canticos": 8,
            "isaias": 66,
            "jeremias": 52,
            "lamentacoes": 5,
            "ezequiel": 48,
            "daniel": 12,
            "oseias": 14,
            "joel": 3,
            "amos": 9,
            "obadias": 1,
            "jonas": 4,
            "miqueias": 7,
            "naum": 3,
            "habacuque": 3,
            "sofonias": 3,
            "ageu": 2,
            "zacarias": 14,
            "malaquias": 4,
            
            "mateus": 28,
            "marcos": 16,
            "lucas": 24,
            "joao": 21,
            "atos": 28,
            "romanos": 16,
            "1corintios": 16,
            "2corintios": 13,
            "galatas": 6,
            "efesios": 6,
            "filipenses": 4,
            "colossenses": 4,
            "1tessalonicenses": 5,
            "2tessalonicenses": 3,
            "1timoteo": 6,
            "2timoteo": 4,
            "tito": 3,
            "filemon": 1,
            "hebreus": 13,
            "tiago": 5,
            "1pedro": 5,
            "2pedro": 3,
            "1joao": 5,
            "2joao": 1,
            "3joao": 1,
            "judas": 1,
            "apocalipse": 22
        };

        function generateChaptersAndVerses() {
            for (const [bookId, chapterCount] of Object.entries(booksData)) {
                const chaptersContainer = document.getElementById(`${bookId}-chapters`);
                
                for (let chapter = 1; chapter <= chapterCount; chapter++) {
                    const chapterDiv = document.createElement('div');
                    chapterDiv.className = 'chapter';
                    chapterDiv.setAttribute('data-chapter', chapter);
                    
                    const chapterTitle = document.createElement('div');
                    chapterTitle.className = 'chapter-title';
                    chapterTitle.innerHTML = `Capítulo ${chapter} <span class="toggle-chapters">▼</span>`;
                    chapterTitle.onclick = function() { toggleVerses(bookId, chapter); };
                    
                    const versesContainer = document.createElement('div');
                    versesContainer.className = 'verses-container';
                    versesContainer.id = `${bookId}-${chapter}-verses`;
                    
                     for (let verse = 1; verse <= 30; verse++) {
                        const verseDiv = document.createElement('div');
                        verseDiv.className = 'verse';
                        verseDiv.textContent = verse;
                        verseDiv.onclick = function() { goToVerse(bookId, chapter, verse); };
                        versesContainer.appendChild(verseDiv);
                    }
                    
                    chapterDiv.appendChild(chapterTitle);
                    chapterDiv.appendChild(versesContainer);
                    chaptersContainer.appendChild(chapterDiv);
                }
            }
        }

        window.onload = generateChaptersAndVerses;
        
        function toggleChapters(bookId) {
            const container = document.getElementById(`${bookId}-chapters`);
            const toggle = event.target;
            
            if (container.style.display === 'block') {
                container.style.display = 'none';
                toggle.textContent = '▼ Mostrar capítulos';
            } else {
                container.style.display = 'block';
                toggle.textContent = '▲ Esconder capítulos';
            }
        }
        
        function toggleVerses(bookId, chapter) {
            const container = document.getElementById(`${bookId}-${chapter}-verses`);
            const toggle = event.currentTarget.querySelector('.toggle-chapters');
            
            if (container.style.display === 'flex') {
                container.style.display = 'none';
                toggle.textContent = '▼';
            } else {
                container.style.display = 'flex';
                toggle.textContent = '▲';
            }
        }
        
function goToVerse(bookId, chapter, verse) {
    localStorage.setItem('currentBook', bookId);
    localStorage.setItem('currentChapter', chapter);
    localStorage.setItem('currentVerse', verse);
    
    window.location.href = 'leitura.html';
}
   