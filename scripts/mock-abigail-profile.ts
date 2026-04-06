import fs from 'fs';
import path from 'path';

const villagersPath = path.join(process.cwd(), 'src/data/villagers.json');

function main() {
  const content = fs.readFileSync(villagersPath, 'utf8');
  let villagers = JSON.parse(content);
  
  for (const v of villagers) {
    if (v.id === 'abigail') {
      v.clinicDay = "Primavera 4";
      v.hatedGifts = ["Clay", "Holly", "Blackberry"];
      v.movies = {
        loved: ["Mysterium", "It Howls In The Rain"],
        lovedConcessions: ["Rock Candy", "Star Cookie"]
      };
      v.heartEvents = [
        { hearts: 2, trigger: "Entra a la Tienda de Pierre cualquier día excepto Sábado." },
        { hearts: 4, trigger: "Visita la Montaña en un día lluvioso entre las 12 PM y 7 PM." },
        { hearts: 6, trigger: "Entra a Pueblo Pelícano de noche (9 PM - 12 AM) despues de que no haya llovido." },
        { hearts: 8, trigger: "Después de recibir su carta, entra a la Tienda de Pierre entre 8 PM y 10 PM." }
      ];
    }
  }
  
  fs.writeFileSync(villagersPath, JSON.stringify(villagers, null, 2), 'utf8');
  console.log('Se inyectó data de perfil para Abigail!');
}

main();
