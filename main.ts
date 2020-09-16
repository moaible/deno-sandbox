const {
  args,
  env,
  readDirSync,
  mkdirSync,
  writeFileSync,
  exit,
  stdin,
  run,
} = Deno;

async function main() {
    console.log(env.toObject());
}

try {
  main();
} catch (e) {
  const err = e as Error;
  if (err.message) {
    console.log(err.message);
    exit(1);
  }
  console.log(e);
  exit(1);
}
