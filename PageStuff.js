function Redirect(url) {
    try {
        location.replace(url)
    } catch {
        location.href = url
    }
}
function RedirectFile(name) {
    location.replace(`./${name}.html`)
}
async function AttemptRedirect(url, name) {
    try {
        const result = await fetch(url, {
            mode: "no-cors"
        })
        Redirect(url)
    } catch {
        RedirectFile(name)
    }
}
