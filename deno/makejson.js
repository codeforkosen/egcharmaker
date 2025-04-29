import { dir2json } from "./dir2json.js";
//import { dir2json } from "https://js.sabae.cc/dir2json.js";

const path = "../res/ぴぽや32×32キャラチップ素材(キャラクターなんとかJ用)";
const d = await dir2json(path);

await Deno.mkdir("../data", { recursive: true });

let idx = 1;
const writeData = async (path, d) => {
  for (const name in d) {
    const o = d[name];
    if (o) {
      await writeData(path + "/" + name, o);
    } else {
      if (!name.endsWith(".png")) {
        delete d[name];
      } else {
        const fn = idx++ + ".png";
        d[name] = fn;
        const bin = await Deno.readFile(path + "/" + name);
        await Deno.writeFile("../data/" + fn, bin);
        console.log(fn + " <- " + name);
      }
    }
  }
};
await writeData(path, d);

await Deno.writeTextFile("../data.json", JSON.stringify(d, null, 2));
console.log(d);
