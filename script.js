document.getElementById("setReminderBtn").addEventListener("click", function() {
    // Get the selected values
    const selectedDay = document.getElementById("day").value;
    const selectedTime = document.getElementById("time").value;
    const selectedActivity = document.getElementById("activity").value;

    if (!selectedTime) {
        alert("Please select a valid time.");
        return;
    }

    // Show alert and set reminder
    alert("Reminder set for " + selectedDay + " at " + selectedTime + " for " + selectedActivity + ".");

    // Calculate reminder time
    const now = new Date();
    const reminderDate = new Date();
    reminderDate.setHours(selectedTime.split(":")[0]);
    reminderDate.setMinutes(selectedTime.split(":")[1]);
    reminderDate.setSeconds(0);

    if (reminderDate < now) {
        reminderDate.setDate(reminderDate.getDate() + 1);
    }

    const timeDiff = reminderDate.getTime() - now.getTime();

    // Set the timeout to trigger the reminder
    setTimeout(() => {
        document.getElementById("chimeSound").play();

        // Show Stop Alarm button
        document.getElementById("stopAlarmBtn").style.display = "block";
    }, timeDiff);
});

// Stop alarm button functionality
document.getElementById("stopAlarmBtn").addEventListener("click", function() {
    const chimeSound = document.getElementById("chimeSound");
    chimeSound.pause();
    chimeSound.currentTime = 0;
    this.style.display = "none"; // Hide the Stop Alarm button
});