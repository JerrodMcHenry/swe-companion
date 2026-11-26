import type { Topic } from "./types";
import pythonVariablesDataTypes from "./topics/python-variables-data-types";
import pythonOperatorsExpressions from "./topics/python-operators-expressions";
import pythonStrings from "./topics/python-strings";
import pythonConditionals from "./topics/python-conditionals";
import pythonLoops from "./topics/python-loops";
import pythonFunctionsArguments from "./topics/python-functions-arguments";
import pythonScope from "./topics/python-scope";
import pythonLists from "./topics/python-lists";
import pythonSets from "./topics/python-sets";
import pythonDictionaries from "./topics/python-dictionaries";
import pythonMutabilityReferencesCopying from "./topics/python-mutability-references-copying";
import pythonSortingCustomKeys from "./topics/python-sorting-custom-keys";
import pythonDebugging from "./topics/python-debugging";
import problemSolvingProcess from "./topics/problem-solving-process";
import complexityAnalysis from "./topics/complexity-analysis";
import arraysStringsPatterns from "./topics/arrays-strings-patterns";
import hashMapSetPatterns from "./topics/hash-map-set-patterns";
import stacksQueues from "./topics/stacks-queues";
import linkedLists from "./topics/linked-lists";
import binarySearch from "./topics/binary-search";
import recursionBacktracking from "./topics/recursion-backtracking";
import treesBinarySearchTrees from "./topics/trees-binary-search-trees";
import heapsPriorityQueues from "./topics/heaps-priority-queues";
import graphsBfsDfs from "./topics/graphs-bfs-dfs";
import sortingAlgorithmsIntervals from "./topics/sorting-algorithms-intervals";
import dynamicProgrammingBasics from "./topics/dynamic-programming-basics";
import unionFindShortestPaths from "./topics/union-find-shortest-paths";
import classesObjects from "./topics/classes-objects";
import compositionInheritanceInterfaces from "./topics/composition-inheritance-interfaces";
import designingSmallSystems from "./topics/designing-small-systems";
import solidDesignPatterns from "./topics/solid-design-patterns";
import gitPullRequests from "./topics/git-pull-requests";
import commandLineEnvironment from "./topics/command-line-environment";
import automatedTesting from "./topics/automated-testing";
import internetHttp from "./topics/internet-http";
import databasesSqlConcepts from "./topics/databases-sql-concepts";
import computerScienceEssentials from "./topics/computer-science-essentials";
import securityFundamentals from "./topics/security-fundamentals";
import readingDebuggingUnfamiliarCode from "./topics/reading-debugging-unfamiliar-code";
import codeReview from "./topics/code-review";
import aiAssistedEngineering from "./topics/ai-assisted-engineering";
import existingCodebaseDrills from "./topics/existing-codebase-drills";
import buildDeployProject from "./topics/build-deploy-project";
import exceptionsErrorHandling from "./topics/exceptions-error-handling";
import modulesPackagesProjectStructure from "./topics/modules-packages-project-structure";
import deploymentCiCd from "./topics/deployment-ci-cd";
import explainingProjectArchitecture from "./topics/explaining-project-architecture";
import takeHomeSimulation from "./topics/take-home-simulation";

// Every published topic. To publish a new topic, add its file in content/topics/ and list it here.
export const topics: Topic[] = [
  pythonVariablesDataTypes,
  pythonOperatorsExpressions,
  pythonStrings,
  pythonConditionals,
  pythonLoops,
  pythonFunctionsArguments,
  pythonScope,
  pythonLists,
  pythonSets,
  pythonDictionaries,
  pythonMutabilityReferencesCopying,
  pythonSortingCustomKeys,
  pythonDebugging,
  problemSolvingProcess,
  complexityAnalysis,
  arraysStringsPatterns,
  hashMapSetPatterns,
  stacksQueues,
  linkedLists,
  binarySearch,
  recursionBacktracking,
  treesBinarySearchTrees,
  heapsPriorityQueues,
  graphsBfsDfs,
  sortingAlgorithmsIntervals,
  dynamicProgrammingBasics,
  unionFindShortestPaths,
  classesObjects,
  compositionInheritanceInterfaces,
  designingSmallSystems,
  solidDesignPatterns,
  gitPullRequests,
  commandLineEnvironment,
  automatedTesting,
  internetHttp,
  databasesSqlConcepts,
  computerScienceEssentials,
  securityFundamentals,
  readingDebuggingUnfamiliarCode,
  codeReview,
  aiAssistedEngineering,
  existingCodebaseDrills,
  buildDeployProject,
  exceptionsErrorHandling,
  modulesPackagesProjectStructure,
  deploymentCiCd,
  explainingProjectArchitecture,
  takeHomeSimulation,
];

const seen = new Set<string>();
for (const topic of topics) {
  if (seen.has(topic.slug)) throw new Error(`Duplicate topic slug: ${topic.slug}`);
  seen.add(topic.slug);
}

// Interview answer sources must be absolute links.
for (const topic of topics) {
  for (const item of topic.interviewQuestions) {
    if (typeof item !== "string" && item.source && !/^https:\/\//.test(item.source.url)) {
      throw new Error(`Topic "${topic.slug}" has an interview source that is not an https link: ${item.source.url}`);
    }
  }
}

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
