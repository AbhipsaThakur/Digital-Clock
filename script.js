
  function updateClock() {
    const now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    // Add leading zeros if less than 10
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    // Update the HTML
    document.getElementById("hrs").textContent = hrs;
    document.getElementById("min").textContent = mins;
    document.getElementById("sec").textContent = secs;
  }

  // Call the function every 1 second
  setInterval(updateClock, 1000);

  // Call once immediately to avoid delay
  updateClock();
