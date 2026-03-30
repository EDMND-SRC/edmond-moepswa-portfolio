import * as migration_20260330_055107_init from './20260330_055107_init';

export const migrations = [
  {
    up: migration_20260330_055107_init.up,
    down: migration_20260330_055107_init.down,
    name: '20260330_055107_init'
  },
];
