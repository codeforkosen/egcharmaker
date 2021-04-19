import { dir2json } from "./dir2json.js";
//import { dir2json } from "https://js.sabae.cc/dir2json.js";

const d = await dir2json("../res/ぴぽや32×32キャラチップ素材(キャラクターなんとかJ用)");
await Deno.writeTextFile("../res/res.json", JSON.stringify(d, null, 2));
console.log(d);
