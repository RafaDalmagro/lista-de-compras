const form = document.querySelector("form");
const input = document.querySelector("#itemInput");
const a = document.querySelector("a.delete");
const ul = document.querySelector("ul");

form.onsubmit = (event) => {
    event.preventDefault();
    addItem(input.value);
};

function addItem(itemName) {
    const list = document.querySelector("ul");

    const totalItens = list.querySelectorAll("li").length;
    const novoId = `item${totalItens + 1}`;

    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const a = document.createElement("a");
    const img = document.createElement("img");

    input.type = "checkbox";
    input.id = novoId;

    label.setAttribute("for", novoId);
    label.textContent = itemName;

    a.classList.add("delete");
    img.src = "assets/icons/trash.svg";
    img.alt = "Icone de lixeira";

    a.appendChild(img);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(a);

    list.appendChild(li);
}

ul.addEventListener("click", (event) => {
	const botao = event.target.closest(".delete")
	if (botao) {
		const li = botao.closest("li");
		li.remove();
	}
});