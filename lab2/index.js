window.onload = () => {
    const list = document.getElementById("list"); // Poprawiona metoda pobierania elementu
    const input = document.getElementById("input"); // Poprawiona metoda pobierania elementu
}



let LastRemovedListElement;

const writeAndDisplay = () => {
    const value = input.value;
    if (value.trim() !== '') { // Sprawdzamy, czy wartość nie jest pusta ani nie zawiera samych białych znaków
        const listElement = document.createElement("li");
        const paragraph = document.createElement("p"); // Tworzymy element <p> dla tekstu zadania
        const button = document.createElement("button");
        
        button.innerText = "X"; // Ustawiamy tekst na przycisku
        
        button.addEventListener('click', () => {
            LastRemovedListElement = listElement;
            listElement.remove();
        });
        
        paragraph.innerText = value; 
        
        listElement.appendChild(paragraph); // Dodajemy element <p> do elementu listy
        listElement.appendChild(button); // Dodajemy przycisk do elementu listy
        list.appendChild(listElement); // Dodajemy nowy element li do kontenera listy
        input.value = ''; // Czyścimy pole input po dodaniu zadania
    }
}
// zadanie 2
const check = (event) => {
    const clickedElement = event.target.closest('p')
    
    // Pobieramy bieżącą datę i czas w formacie: "RRRR-MM-DD HH:MM:SS"
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const currentText = ' ' + dateString;

    // Jeśli kliknięty element nie ma jeszcze klasy "completed", dodajemy ją
    if (!clickedElement.classList.contains("completed")) {
        clickedElement.classList.add("completed");
        clickedElement.innerText += currentText;
    } else {
        // Jeśli kliknięty element ma już klasę "completed", przełączamy ją
        clickedElement.classList.toggle("completed");
        const text = clickedElement.textContent.slice(0,-10);
        clickedElement.textContent = text;
        
    }
};
//zdanie 3
const addLastRemovedElement = () =>{

    if(LastRemovedListElement != null){
        list.appendChild(LastRemovedListElement);
        LastRemovedListElement = null;
    }
    
}
