import * as fs from 'fs'

const themeBuiltDir = "built";

(async () => {
  const startTime = Date.now();
  const finalThemes:Array<any> = []
  console.log(`Starting process!`);

  fs.mkdirSync(`./${themeBuiltDir}`);

  const files = fs
    .readdirSync("./data")
    .filter((file) => !file.startsWith("."));
  for (const file of files) {
    const startFileTime = Date.now();
    const Presetfile = await import(`../data/${file}/Preset.ts`).then((data) => data?.themeData);
    console.log(`Successfully Imported theme ${file}`);
    if (!Presetfile) return;
    const presetData = JSON.stringify(Presetfile);
    fs.writeFileSync(`./built/theme_${file}.json`, presetData);
    finalThemes.push(Presetfile);
    console.log(
      `Successfully Written theme ${file} - Took ${
        Date.now() - startFileTime
      }ms`
    );
  }

  const manifestData = {
    generated: new Date().toISOString(),
    themes: finalThemes.map((themeData) => themeData?.metadata),
  };

  fs.writeFileSync(
    `./built/all.json`,
    `[${finalThemes.map((themeData) => JSON.stringify(themeData)).toString()}]`
  );
  fs.writeFileSync(`./built/manifest.json`, JSON.stringify(manifestData));

  console.log(
    `End of process, leaving yaa! - Took ${Date.now() - startTime}ms in total`
  );
  return process.exit(0);
})();