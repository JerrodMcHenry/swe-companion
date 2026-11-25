import type { Topic } from "./types";
import pythonVariablesDataTypes from "./topics/python-variables-data-types";
import pythonOperatorsExpressions from "./topics/python-operators-expressions";
import pythonStrings from "./topics/python-strings";
import pythonConditionals from "./topics/python-conditionals";
import pythonLoops from "./topics/python-loops";
import pythonFunctionsArguments from "./topics/python-functions-arguments";
import pythonScope from "./topics/python-scope";
import pythonDictionaries from "./topics/python-dictionaries";

// Every published topic. To publish a new topic, add its file in content/topics/ and list it here.
export const topics: Topic[] = [
  pythonVariablesDataTypes,
  pythonOperatorsExpressions,
  pythonStrings,
  pythonConditionals,
  pythonLoops,
  pythonFunctionsArguments,
  pythonScope,
  pythonDictionaries,
];

const seen = new Set<string>();
for (const topic of topics) {
  if (seen.has(topic.slug)) throw new Error(`Duplicate topic slug: ${topic.slug}`);
  seen.add(topic.slug);
}

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
