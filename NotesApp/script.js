let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes(notesToDisplay = notes) {
    const container = document.getElementById("notesContainer");

    container.innerHTML = "";

    if (notesToDisplay.length === 0) {
        container.innerHTML = "<p>No notes found.</p>";
        return;
    }

    notesToDisplay.forEach((note, index) => {
        const noteElement = document.createElement("div");

        noteElement.className = "note";

        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.text}</p>

            <button class="edit-btn" onclick="editNote(${index})">
                Edit
            </button>

            <button class="delete-btn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        container.appendChild(noteElement);
    });
}

function addNote() {
    const title = document.getElementById("title").value.trim();
    const text = document.getElementById("note").value.trim();

    if (title === "" || text === "") {
        alert("Please enter title and note!");
        return;
    }

    const newNote = {
        title: title,
        text: text
    };

    notes.push(newNote);

    saveNotes();

    document.getElementById("title").value = "";
    document.getElementById("note").value = "";

    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

function editNote(index) {
    const newTitle = prompt("Enter new title:", notes[index].title);
    const newText = prompt("Enter new note:", notes[index].text);

    if (newTitle !== null && newText !== null) {
        notes[index].title = newTitle;
        notes[index].text = newText;

        saveNotes();
        displayNotes();
    }
}


function searchNotes() {
    const searchText = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchText) ||
        note.text.toLowerCase().includes(searchText)
    );

    displayNotes(filteredNotes);
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

displayNotes();
