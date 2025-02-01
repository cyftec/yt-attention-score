import { APP_NAME } from "./dev/@libs/constants.ts";
import type { KarmaConfig, ProjectFileNames } from "./karma-types.ts";

// DO NOT CHANGE exported variable name
export const projectFileNames: ProjectFileNames = {
  systemGenerated: {
    dsStoreDir: ".DS_Store",
  },
  static: {
    sourceDir: "dev",
    karmaTypesFile: "karma-types.ts",
  },
  generated: {
    stagingDir: "stage",
    publishDir: APP_NAME.replaceAll(" ", "_"),
    bunLockFile: "bun.lock",
    bunLockBFile: "bun.lockb",
    gitIgnoreFile: ".gitignore",
    dotVscodeDir: ".vscode",
    nodeModulesDir: "node_modules",
    packageJsonFile: "package.json",
  },
  buildable: {
    pageFile: "page.ts",
    manifestFile: "manifest.ts",
  },
};

// DO NOT CHANGE exported variable name
export const config: KarmaConfig = {
  brahma: {
    build: {
      stagingDirName: projectFileNames.generated.stagingDir,
      publishDirName: projectFileNames.generated.publishDir,
      buildablePageFileName: projectFileNames.buildable.pageFile,
      buildableManifestFileName: projectFileNames.buildable.manifestFile,
      ignoreDelimiter: "@",
      skipErrorAndBuildNext: false,
    },
    localServer: {
      port: 3000,
      redirectOnStart: false,
      reloadPageOnFocus: true,
      serveDirectory: `${projectFileNames.generated.stagingDir}`,
      otherWatchDirs: [],
    },
  },
  maya: {
    mode: "ext",
    sourceDirName: projectFileNames.static.sourceDir,
    packageJson: {
      dependencies: {
        "@mufw/maya": "0.1.13",
        "@cyftech/immutjs": "0.1.0",
        "@cyftech/signal": "0.1.4",
        "@types/chrome": "0.0.297",
      },
    },
  },
  vscode: {
    settings: {
      "deno.enable": false,
      "files.exclude": {
        [projectFileNames.static.karmaTypesFile]: true,
        [projectFileNames.generated.stagingDir]: false,
        [projectFileNames.generated.publishDir]: false,
        [projectFileNames.generated.bunLockFile]: true,
        [projectFileNames.generated.bunLockBFile]: true,
        [projectFileNames.generated.gitIgnoreFile]: true,
        [projectFileNames.generated.dotVscodeDir]: true,
        [projectFileNames.generated.nodeModulesDir]: true,
        [projectFileNames.generated.packageJsonFile]: true,
      },
    },
  },
  git: {
    ignore: [
      projectFileNames.systemGenerated.dsStoreDir,
      projectFileNames.static.karmaTypesFile,
      projectFileNames.generated.bunLockFile,
      projectFileNames.generated.bunLockBFile,
      projectFileNames.generated.dotVscodeDir,
      projectFileNames.generated.nodeModulesDir,
      projectFileNames.generated.packageJsonFile,
      `/${projectFileNames.generated.stagingDir}`,
      `/${projectFileNames.generated.publishDir}`,
    ],
  },
};
