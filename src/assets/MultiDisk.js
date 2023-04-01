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
        document.getElementsByClassName("MultiDisk")[0]
                .querySelector(".Disk.now")
                .innerHTML;

    document.querySelector("a.CurrentDriveName.NoUnderline")
            .querySelector("span#DriveName")
            .innerHTML = MultiDisk.DiskNow

    for (let i=0; i<DiskElements.length; i++) {
        MultiDisk.DiskArray[i] = DiskElements[i].innerHTML;
    }
    console.log("MultiDisk Controller inited.")
} 
MultiDisk.Expand = function () {
    let MultiDiskElement = document.getElementsByClassName("MultiDiskContainer")[0];
    let Expanders = [];
    Expanders[0] = document.querySelector("a.CurrentDriveName.NoUnderline");
    Expanders[1] = document.querySelector("a.MultiDiskExpander");
    if (MultiDiskElement.classList.contains("hidden")) {
        MultiDiskElement.classList.remove("hidden")
        try {
            Expanders[0].classList.add("TurnOn")
            Expanders[1].classList.add("TurnOn")
        } catch (err) {
            console.warn(err)
        }
    } else {
        MultiDiskElement.classList.add("hidden")
        try {
            Expanders[0].classList.remove("TurnOn")
            Expanders[1].classList.remove("TurnOn")
        } catch (err) {
            console.warn(err)
        }
    }
}

addEventListener("DOMContentLoaded", MultiDisk.Init);
