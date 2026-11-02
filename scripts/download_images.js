import fs from 'fs';
import path from 'path';

const UA = 'AinIpohCarRental/1.0 (contact@keretasewaipoh.ain)';

const items = [
  { id: 'myvi-15h', file: '2021_Perodua_Myvi_1.5_AV_(Malaysia)_front_view.png', ext: 'png' },
  { id: 'saga-blm', file: 'Proton_Saga_(second_generation)_(front),_Serdang.jpg', ext: 'jpg' },
  { id: 'axia-10-se-2017', file: '2019_Perodua_Axia_1.0_SE_(1).jpg', ext: 'jpg' },
  { id: 'bezza-13x', file: '2020_Perodua_Bezza_(front).png', ext: 'png' },
  { id: 'alza-15-se', file: '2015_Perodua_Alza_front.jpg', ext: 'jpg' },
  { id: 'saga-13-vvt-advance', file: '2019_PROTON_Saga_1.3_VVT_Standard_front_view.jpg', ext: 'jpg' },
  { id: 'x50-flagship-2026', file: '2020_Proton_X50_1.5_TGDi_Flagship_(front_view).png', ext: 'png' },
  { id: 'aruz-15-advanced', file: '2019_Perodua_Aruz_1.5_AV_(78).jpg', ext: 'jpg' },
  { id: 'axia-10-g-2023', file: '2023_Perodua_Axia_X_(Malaysia)_front_view.png', ext: 'png' },
  { id: 'yamaha-nvx-v3-2026', file: '2022_Yamaha_Aerox_155_ABS.jpg', ext: 'jpg' },
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  const dir = path.resolve('public/vehicles');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const item of items) {
    const dest = path.join(dir, `${item.id}.${item.ext}`);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
      console.log(`Already exists: ${item.id}`);
      continue;
    }

    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(item.file)}`;
    console.log(`Downloading ${item.id} from ${url}...`);

    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': UA }
      });

      if (!res.ok) {
        console.error(`Failed ${item.id}: status ${res.status}`);
      } else {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`Saved ${item.id} (${buffer.byteLength} bytes)`);
      }
    } catch (err) {
      console.error(`Error downloading ${item.id}:`, err.message);
    }

    // Friendly delay to avoid 429
    await sleep(2000);
  }
}

run();
