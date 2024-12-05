import { create } from 'zustand';

type Module = {
  name: string;
  entry: object;
};

type ModulesProps = {
  modules: Module[];
  loadModules: () => Promise<void>;
};

export const useModules = create<ModulesProps>((set) => ({
  modules: [],
  loadModules: async () => {
    const modulesImports = import.meta.glob(
      '/node_modules/@module/*/dist/index.es.js',
      { eager: true, import: 'default' }
    );

    const modules = Object.entries(modulesImports)
      .map(([path, module]) => {
        const match = path.match(/node_modules\/(.*)\/dist/);
        const moduleName = match?.[1];

        if (!moduleName || !module) {
          console.error(
            `[USE_MODULES]: Skipping module - ${
              moduleName || path
            }. Ensure the module is named correctly and has a valid entry point.`
          );
          return null;
        }

        return { name: moduleName, entry: module };
      })
      .filter(Boolean) as Module[];

    set({ modules });
  },
}));
