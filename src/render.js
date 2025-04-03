const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", async () => {
    const markdownText = editor.value;
    const html = await window.electronAPI.convertMarkdown(markdownText);

    preview.innerHTML = html;
})