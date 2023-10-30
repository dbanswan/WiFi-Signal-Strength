const wifi = require("node-wifi");

// Initialize wifi module
wifi.init({
  iface: null, // network interface, use default
});

function displayNetworks(error, networks) {
  if (error) {
    console.error(error);
    return;
  }
  //sort by signal strength

  networks.sort((a, b) => b.signal_level - a.signal_level);

  console.log("WiFi Networks:\n");
  networks.forEach((network, index) => {
    console.log(`[${index + 1}]`);
    console.log(`SSID: ${network.ssid}`);
    console.log(`Encryption: ${network.security}`);
    console.log(`Signal Strength: ${network.signal_level} dBm`);
    console.log("-----------------------------------");
  });

  // also display the data in table format

  console.table(networks);
}

// Scan for networks
wifi.scan(displayNetworks);
