function CopyTextToClipboard(text) {
    try {
        navigator.clipboard.writeText(text);
    } catch {
        console.log("Failed to copy to clipboard! Retrying..")
        CopyTextToClipboard(text)
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
