window.MultiDisk = {};
MultiDisk.DiskArray = []
MultiDisk.Init = function () {
    document.getElementsByClassName("MultiDiskContainer")[0]
        .addEventListener("click", function (event) {
            if (event.target.classList.contains("MultiDiskContainer")) {
                MultiDisk.Expand()
            }
        })

    let DiskElements = 
        document.getElementsByClassName("MultiDisk")[0]
                .getElementsByClassName("Disk")
    MultiDisk.DiskNow = 
        (
            document.getElementsByClassName("MultiDisk")[0]
                .querySelector(".Disk.now") || {}
        ).innerHTML || "Single/NotAsTheme";

    try {
        document.querySelector("span#DriveName").innerHTML = MultiDisk.DiskNow
    } catch (e) {
        console.info("DiskNow can't set, seems like it is Single. \r\n\r\nTraceback:\r\n"+e)
    }

    for (let i=0; i<DiskElements.length; i++) {
        MultiDisk.DiskArray[i] = DiskElements[i].innerHTML;
    }
    console.log("MultiDisk Controller inited.")
} 
MultiDisk.Expand = function () {
    let MultiDiskElement = document.getElementsByClassName("MultiDiskContainer")[0];
    let Expanders = document.querySelectorAll("span.ExpandIcon");

    let ControllerHiddenStatus = MultiDiskElement.classList.contains("hidden");

    ControllerHiddenStatus
        ? MultiDiskElement.classList.remove("hidden") 
        : MultiDiskElement.classList.add("hidden");

    for (let i = 0; i<Expanders.length; i++) {
        Expanders[i].setAttribute("data-is-controller-hidden", ControllerHiddenStatus.toString())
    }
}

addEventListener("DOMContentLoaded", MultiDisk.Init);
