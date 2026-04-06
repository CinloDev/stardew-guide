import fs from 'fs';
import path from 'path';

const villagersPath = path.join(process.cwd(), 'src/data/villagers.json');

const newGifts: Record<string, string[]> = {
  kent: ["narciso", "Dwarvish Safety Manual"],
  pierre: ["catalogo de precios", "narciso", "diente de leon"],
  jas: ["ancient Doll", "Fairy Box"],
  alex: ["Jack Be Nimble", "Field Snack", "Dinosaur Egg"],
  sandy: ["Mango Sticky Rice"],
  robin: ["Woody's Secret"],
  george: ["narciso"],
  harvey: ["wine"]
};

function main() {
  const content = fs.readFileSync(villagersPath, 'utf8');
  const villagers = JSON.parse(content);
  
  for (const villager of villagers) {
    const id = villager.id.toLowerCase();
    if (newGifts[id]) {
      // Unshift to put them at the front so they definitely appear in the 4-icon widget!
      for (const gift of newGifts[id].reverse()) {
        if (!villager.lovedGifts.includes(gift)) {
          villager.lovedGifts.unshift(gift);
        }
      }
    }
  }
  
  fs.writeFileSync(villagersPath, JSON.stringify(villagers, null, 2), 'utf8');
  console.log('Villagers JSON updated successfully!');
}

main();
