const leftDiv = document.querySelector('.leftDiv');
const rightDiv = document.querySelector('.rightDiv');
const divsChild = leftDiv.children;

for (const div of divsChild) {
    div.addEventListener('click', () => {
        if (div.parentElement.id === "leftDiv") {
            rightDiv.appendChild(div);
        } else {
            leftDiv.appendChild(div);
        }
    });
};