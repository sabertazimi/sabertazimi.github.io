import eslintConfig from '@dg-scripts/eslint-config'

export default eslintConfig.append({
  files: ['src/components/ui/*.tsx'],
  rules: {
    'react/no-array-index-key': 'off',
    'react/no-children-map': 'off',
    'react/no-clone-element': 'off',
    'react-dom/no-flush-sync': 'off',
    'react-hooks/purity': 'off',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
    'react-refresh/only-export-components': 'off',
  },
},
)
