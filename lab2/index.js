'use strict';

window.onload = () => {
    const input = document.getElementById("input"); // Poprawiona metoda pobierania elementu
};


let LastRemovedListElement;
let indexOfRemovedElement;

const listTitleContainer = [];
const listContainer = [];

const writeAndDisplay = () => {
    const value = input.value;
    if (value.trim() !== '') { // Sprawdzamy, czy wartość nie jest pusta ani nie zawiera samych białych znaków
        const listElement = document.createElement("li");
        const paragraph = document.createElement("p"); // Tworzymy element <p> dla tekstu zadania
        const button = document.createElement("button");

        const selectElement = document.getElementById("select"); 
        const indexOfSelectedOption = selectElement.selectedIndex;
        const list = listContainer[indexOfSelectedOption];
        
        button.innerText = "X"; // Ustawiamy tekst na przycisku
        button.classList.add("removeButton");
        
        button.addEventListener('click', () => {
            LastRemovedListElement = listElement;
            indexOfRemovedElement = indexOfSelectedOption;
            listElement.remove();
        });
        
        paragraph.innerText = value; 
        
        listElement.appendChild(paragraph); 
        listElement.appendChild(button);

        list.appendChild(listElement); 
        input.value = ''; 
    }
};

// zadanie 2
const check = (event) => {
    const clickedElement = event.target.closest('p');
    
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

// zadanie 3
const addLastRemovedElement = () =>{

    if(LastRemovedListElement != null){
        listContainer[indexOfRemovedElement].appendChild(LastRemovedListElement);
        LastRemovedListElement = null;
    }
    
};


const addNewList = () => {
    // Tworzymy nowe elementy
    var list = document.createElement('div');
    list.classList.add('list');

    var inputWithButton = document.createElement('div');
    inputWithButton.classList.add('input-with-button');

    var input = document.createElement('input');
    input.classList.add('ListName');
    input.placeholder = 'Name your list';

    var button = document.createElement('button');
    button.classList.add('buttonList');
    button.type = 'button';
    button.innerText = 'Hide';
    button.onclick = function() {
        hideList(button);
    };

    var ol = document.createElement('ol');
    ol.classList.add('listContent');
    ol.onclick = check;

    // Dodajemy elementy do odpowiednich kontenerów
    inputWithButton.appendChild(input);
    inputWithButton.appendChild(button);
    list.appendChild(inputWithButton); // Poprawione: dodanie inputWithButton zamiast niezdefiniowanej zmiennej div
    list.appendChild(ol);

    // Dodajemy nowy artykuł do dokumentu
    var container = document.querySelector('.container');
    container.appendChild(list);
    
    let listTitleBeforeEdit; 

    input.addEventListener('focus', (event) => {
        listTitleBeforeEdit = event.target.value;
    });


    input.addEventListener('blur', (event) => {
        const listTitleAfterEdit = event.target.value; 

        if (listTitleBeforeEdit === ""){
            listTitleContainer.push(listTitleAfterEdit);
            listContainer.push(ol);
        }else if (listTitleAfterEdit !== listTitleBeforeEdit) {
            const index = listTitleContainer.indexOf(listTitleBeforeEdit);
            listTitleContainer.splice(index, 1, listTitleAfterEdit);
        }

    
        listTitleBeforeEdit = null;
    });

};

const hideList = (button) => {
    const listDiv = button.closest('.list');
    const list = listDiv.querySelector('.listContent'); 
    console.log(list); // Zmieniłem list na listContent
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
        button.innerText = "Hide";
    } else {
        list.classList.add("hidden");
        button.innerText = "Show";
    }
};

const downloadAllLists = (select) =>{
    select.innerHTML = "";
    listTitleContainer.forEach( listName => {
        const option = document.createElement("option");
        option.innerText = listName;
        select.appendChild(option);
    });
}



