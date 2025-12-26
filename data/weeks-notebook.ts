export type WeekNotebookData = {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  contentText: string;
  exercisesText: string;
  bibliography: { title: string; url: string }[];
  reflectionText: string;
};
