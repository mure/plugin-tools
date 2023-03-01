import path from 'path';
import minimist from 'minimist';
import { Plop, run } from 'plop';

export const generate = async (argv: minimist.ParsedArgs) => {
  Plop.prepare(
    {
      cwd: argv.cwd,
      configPath: path.join(__dirname, 'generate.plopfile.js'),
      preload: argv.preload || [],
      completion: argv.completion,
    },
    (env) =>
      Plop.execute(env, (env) => {
        return run(env, undefined, true);
      })
  );
};
