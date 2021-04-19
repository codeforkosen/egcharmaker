// for Deno

const dir2json = async (path) => {
  const dir = await Deno.readDir(path);
  const json = {};
  for await (const f of dir) {
    const d = f.name;
    if (f.isDirectory) {
      json[f.name] = await dir2json(path + "/" + f.name);
    } else {
      json[f.name] = null;
    }
  }
  return json;
};

export { dir2json };
