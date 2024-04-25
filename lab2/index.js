'use strict';

window.onload = () => {
    const input = document.getElementById("input"); // Poprawiona metoda pobierania elementu
};


let LastRemovedListElement;
let indexOfRemovedElement;

const listTitleContainer = [];
const listContainer = [];

const  openModal = (listElment, task, indexOfSelectedOption) => {
    const openModalButton = document.getElementById('open-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    const confirmDeleteButton = document.getElementById('confirm-delete');
    const cancelDeleteButton = document.getElementById('cancel-delete');
    const modalText = document.getElementById("modal-text");

    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
    
    modalText.innerText = "Czy na pewno chcesz usunąć element: " + task + "?";

    confirmDeleteButton.addEventListener('click', function() {
        console.log(listElment);
        LastRemovedListElement = listElment;
        indexOfRemovedElement = indexOfSelectedOption;
        listElment.remove();
        closeModal();
    });
  
    cancelDeleteButton.addEventListener('click', function() {
      closeModal();
    });
  
    function closeModal() {
      modalOverlay.style.display = 'none';
      modal.style.display = 'none';
    }
}

const writeAndDisplay = () => {
    const value = input.value;
    if (value.trim() !== '') { // Sprawdzamy, czy wartość nie jest pusta ani nie zawiera samych białych znaków

        const modalOverlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal');

        const listElement = document.createElement("li");
        listElement.classList.add("listPosition");

        const paragraph = document.createElement("p"); // Tworzymy element <p> dla tekstu zadania
        paragraph.classList.add("task");

        const button = document.createElement("button");

        const selectElement = document.getElementById("select"); 
        const indexOfSelectedOption = selectElement.selectedIndex;
        const list = listContainer[indexOfSelectedOption];
        
        button.innerText = "X"; // Ustawiamy tekst na przycisku
        button.classList.add("removeButton");
        
        button.addEventListener('click', () => {
            openModal(listElement,paragraph.textContent, indexOfSelectedOption);
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
    
    if (clickedElement !== null) {
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
    const list = document.createElement('div');
    list.classList.add('list');

    const inputWithButton = document.createElement('div');
    inputWithButton.classList.add('input-with-button');

    const input = document.createElement('input');
    input.classList.add('ListName');
    input.placeholder = 'Name your list';

    const button = document.createElement('button');
    button.classList.add('buttonList');
    button.type = 'button';
    button.innerText = 'Hide';
    button.onclick = function() {
        hideList(button);
    };

    const ol = document.createElement('ol');
    ol.classList.add('listContent');
    ol.onclick = check;
    const browser = document.createElement('input');
    browser.classList.add("browser");
    browser.placeholder = " < serach specific task.. > ";
    

    ol.appendChild(browser);
    

    // Dodajemy elementy do odpowiednich kontenerów
    inputWithButton.appendChild(input);
    inputWithButton.appendChild(button);
    list.appendChild(inputWithButton); // Poprawione: dodanie inputWithButton zamiast niezdefiniowanej zmiennej div
    list.appendChild(ol);

    browser.addEventListener("input", () => {
        const browserText = browser.value.toLowerCase();
        
        ol.querySelectorAll('li').forEach(li => {
            const p = li.querySelector('p');
            
            if (p.textContent.toLowerCase().includes(browserText)) {
                li.classList.remove("hidden");  
            } else {
                console.log(li);
                li.classList.add("hidden");
            }
        });

    });
    
    

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
        if(listName !== ""){
            const option = document.createElement("option");
            option.innerText = listName;
            select.appendChild(option);
        }
    });
}



