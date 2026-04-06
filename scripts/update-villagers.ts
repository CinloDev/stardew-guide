import fs from "fs";
import path from "path";

const villagersPath = path.join(process.cwd(), "src/data/villagers.json");

const additionalData: Record<string, { marriageable: boolean; address: string; family: string[] }> = {
  alex: { marriageable: true, address: "Calle del Sauce, 1", family: ["Evelyn", "George"] },
  elliott: { marriageable: true, address: "Cabaña de Elliott", family: [] },
  harvey: { marriageable: true, address: "Clínica médica", family: [] },
  sam: { marriageable: true, address: "Calle del Sauce, 1", family: ["Jodi", "Kent", "Vincent"] },
  sebastian: { marriageable: true, address: "Carpintería", family: ["Robin", "Demetrius", "Maru"] },
  shane: { marriageable: true, address: "Rancho de Marnie", family: ["Marnie", "Jas"] },
  abigail: { marriageable: true, address: "Tienda local Pierre's", family: ["Pierre", "Caroline"] },
  emily: { marriageable: true, address: "Calle del Sauce, 2", family: ["Haley"] },
  haley: { marriageable: true, address: "Calle del Sauce, 2", family: ["Emily"] },
  leah: { marriageable: true, address: "Cabaña de Leah", family: [] },
  maru: { marriageable: true, address: "Carpintería", family: ["Robin", "Demetrius", "Sebastian"] },
  penny: { marriageable: true, address: "Tráiler", family: ["Pam"] },
  caroline: { marriageable: false, address: "Tienda local Pierre's", family: ["Pierre", "Abigail"] },
  clint: { marriageable: false, address: "Herrería", family: [] },
  demetrius: { marriageable: false, address: "Carpintería", family: ["Robin", "Maru", "Sebastian"] },
  dwarf: { marriageable: false, address: "Las minas", family: [] },
  evelyn: { marriageable: false, address: "Calle del Sauce, 1", family: ["George", "Alex"] },
  george: { marriageable: false, address: "Calle del Sauce, 1", family: ["Evelyn", "Alex"] },
  gus: { marriageable: false, address: "El Salón Fruta Estelar", family: [] },
  jas: { marriageable: false, address: "Rancho de Marnie", family: ["Marnie", "Shane"] },
  jodi: { marriageable: false, address: "Calle del Sauce, 1", family: ["Kent", "Sam", "Vincent"] },
  kent: { marriageable: false, address: "Calle del Sauce, 1", family: ["Jodi", "Sam", "Vincent"] },
  krobus: { marriageable: false, address: "Las cloacas", family: [] },
  leo: { marriageable: false, address: "Isla Jengibre", family: [] },
  lewis: { marriageable: false, address: "Mansión del alcalde", family: [] },
  linus: { marriageable: false, address: "Tienda de campaña", family: [] },
  marnie: { marriageable: false, address: "Rancho de Marnie", family: ["Jas", "Shane"] },
  morris: { marriageable: false, address: "MercaJoja", family: [] },
  pam: { marriageable: false, address: "Tráiler", family: ["Penny"] },
  pierre: { marriageable: false, address: "Tienda local Pierre's", family: ["Caroline", "Abigail"] },
  robin: { marriageable: false, address: "Carpintería", family: ["Demetrius", "Maru", "Sebastian"] },
  sandy: { marriageable: false, address: "El Oasis", family: [] },
  vincent: { marriageable: false, address: "Calle del Sauce, 1", family: ["Kent", "Jodi", "Sam"] },
  willy: { marriageable: false, address: "Tienda de pesca", family: [] },
  wizard: { marriageable: false, address: "Torre del mago", family: [] }
};

async function main() {
  const content = fs.readFileSync(villagersPath, "utf-8");
  const villagers = JSON.parse(content);

  const updatedVillagers = villagers.map((v: any) => {
    const data = additionalData[v.id.toLowerCase()];
    if (!data) {
      console.warn(`No additional data found for ${v.id}`);
      return { ...v, marriageable: false, address: "Desconocido", family: [] };
    }
    return {
      ...v,
      ...data
    };
  });

  fs.writeFileSync(villagersPath, JSON.stringify(updatedVillagers, null, 2));
  console.log("Villagers data updated successfully.");
}

main();
