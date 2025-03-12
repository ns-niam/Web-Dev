`Arrays`

let styles = ["Jazz", "Blues"];

styles.push("Rock");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
styles.shift();
styles.unshift("Rap","Reggae");

console.log(styles);
