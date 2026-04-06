import fs from 'fs';
import path from 'path';

const villagersPath = path.join(process.cwd(), 'src/data/villagers.json');

function main() {
  const content = fs.readFileSync(villagersPath, 'utf8');
  let villagers = JSON.parse(content);
  
  for (const villager of villagers) {
    if (Array.isArray(villager.lovedGifts)) {
      villager.lovedGifts = villager.lovedGifts.map((gift: string) => {
        if (gift === "narciso") return "Daffodil";
        if (gift === "diente de leon") return "Dandelion";
        if (gift === "catalogo de precios") return "Price Catalogue";
        return gift;
      });
    }
  }
  
  fs.writeFileSync(villagersPath, JSON.stringify(villagers, null, 2), 'utf8');
  console.log('Gift names fixed in JSON!');
}

main();
