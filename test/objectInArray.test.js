import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import yaml from 'js-yaml';
import { exec } from 'child_process';
import util from 'util';

const asyncExec = util.promisify(exec);

describe( 'generate flow types', () => {
  describe( 'parse objct in array', () => {
    it( 'should generate expected flow types', async () => {
      const { stdout } = await asyncExec(`node ./dist/index.js --stdout test/__mocks__/objectInArray.openapi.yaml`);
      const expected = prettier.format( fs.readFileSync( 'test/__mocks__/objectInArray.flow.js', 'utf8' ), {
        parser: 'babel',
      } );
      expect( stdout.trim() ).toEqual( expected.trim() );
    } );
  } );
} );
