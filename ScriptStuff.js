function CopyTextToClipboard(text) {
    try {
        const tempElement = document.createElement('textarea');
        tempElement.value = text;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    } catch {
        document.writeln("Failed to copy to clipboard! Reloading Page....")
        location.reload()
    }
}
function DownloadFile(contents, types) {
    const file = new Blob([contents], { type: types })
    const url = URL.createObjectURL(file)
    
    const link = document.createElement("a")
    link.href = url
    link.download = "autoexec.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    URL.revokeObjectURL(url)
}
