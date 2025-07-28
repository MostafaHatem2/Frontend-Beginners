let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words
    .find(Array.isArray)
    .find((w) => w.includes("El"))
    .slice(
      words
        .find(Array.isArray)
        .find((w) => w.includes("El"))
        .indexOf("z"),
      words
        .find(Array.isArray)
        .find((w) => w.includes("El"))
        .indexOf("o") + "o".length
    )
    .toUpperCase()
);
