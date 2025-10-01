import js from '@eslint/js';
import angularEsl from 'angular-eslint';
import prettierConf from 'eslint-config-prettier';
import perfectionistPlug from 'eslint-plugin-perfectionist';
import prettierPlug from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angularEsl.configs.tsRecommended,
      perfectionistPlug.configs['recommended-natural'],
    ],
    files: ['**/*.ts'],
    plugins: { prettier: prettierPlug },
    processor: angularEsl.processInlineTemplates,
    rules: {
      ...prettierConf.rules,
      '@angular-eslint/component-selector': [
        'error',
        { prefix: 'app', style: 'kebab-case', type: 'element' },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { prefix: 'app', style: 'camelCase', type: 'attribute' },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'unsorted',
          useConfigurationIf: {
            callingFunctionNamePattern: [
              '^Component$',
              '^Directive$',
              '^Injectable$',
              '^Pipe$',
              '^NgModule$',
            ],
          },
        },
      ],
    },
  },
  {
    extends: [
      ...(angularEsl.configs.templateRecommended as never),
      ...(angularEsl.configs.templateAccessibility as never),
    ],
    files: ['**/*.html'],
    plugins: { prettier: prettierPlug },
    rules: { ...prettierConf.rules },
  },
]);
