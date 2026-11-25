import type { Topic } from "./types";
import pythonDictionaries from "./topics/python-dictionaries";

// Every published topic. To publish a new topic, add its file in content/topics/ and list it here.
export const topics: Topic[] = [pythonDictionaries];

const seen = new Set<string>();
for (const topic of topics) {
  if (seen.has(topic.slug)) throw new Error(`Duplicate topic slug: ${topic.slug}`);
  seen.add(topic.slug);
}

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
