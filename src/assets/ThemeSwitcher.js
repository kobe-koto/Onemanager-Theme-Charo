window.ThemeSwitcher = {};
ThemeSwitcher.Init = function () {
    ThemeSwitcher.SwitcherElement = document.getElementsByClassName("ThemeSwitcher")[0];
    ThemeSwitcher.IconNight = ThemeSwitcher.SwitcherElement.getElementsByTagName("span")[0];
    ThemeSwitcher.IconLight = ThemeSwitcher.SwitcherElement.getElementsByTagName("span")[1];
    if (
        (
            localStorage.getItem("Theme") === null &&
            matchMedia('(prefers-color-scheme: dark)').matches
            // doesnt have Theme & prefer dark => Dark Theme
        ) ||
        localStorage.getItem("Theme") === "Night"
    ) {
    
        // => night

        ThemeSwitcher.IconLight.style.display = "none";
        ThemeSwitcher.IconNight.style.display = "inline-block";
        document.body.setAttribute("theme", "Night");
    }
    console.log("ThemeSwitcher Inited.")
}
ThemeSwitcher.Switch = function () {
    let ThemeName = ThemeSwitcher.IconNight.style.display === "none" ? "Night" : "Light";

    ThemeSwitcher.IconNight.style.display = ThemeName === "Night" ? "inline-block" : "none";
    ThemeSwitcher.IconLight.style.display = ThemeName === "Night" ? "none" : "inline-block";

    document.body.setAttribute("theme", ThemeName);
    localStorage.setItem("Theme", ThemeName)
}
addEventListener("DOMContentLoaded", function () {
    ThemeSwitcher.Init()
})
