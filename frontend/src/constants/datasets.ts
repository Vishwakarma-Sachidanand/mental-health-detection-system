import type { DatasetInfo } from "@/types";

export const DATASETS: DatasetInfo[] = [
  {
    id: "daic-woz",
    name: "DAIC-WOZ",
    description:
      "The Distress Analysis Interview Corpus - Wizard of Oz (DAIC-WOZ) dataset contains clinical interviews designed to support the diagnosis of psychological distress conditions such as depression and PTSD. It includes audio, video, and transcript data from participants.",
    size: "189 Sessions",
    purpose:
      "Depression detection and severity assessment through multimodal clinical interview analysis.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    reference: "https://dcapswoz.ict.usc.edu/",
  },
  {
    id: "ravdess",
    name: "RAVDESS",
    description:
      "The Ryerson Audio-Visual Database of Emotional Speech and Song (RAVDESS) contains 7,356 files with professional actors expressing various emotions including calm, happy, sad, angry, fearful, disgust, and surprised in both speech and song.",
    size: "7,356 Files",
    purpose:
      "Speech emotion recognition and vocal feature extraction for stress and mood analysis.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
    reference: "https://zenodo.org/record/1188976",
  },
  {
    id: "mental-health-text",
    name: "Mental Health Text Dataset",
    description:
      "A curated collection of text data from mental health forums, clinical notes, and social media posts annotated for depression, anxiety, stress levels, and emotional sentiment by mental health professionals.",
    size: "50,000+ Samples",
    purpose:
      "Natural language processing for text-based mental health sentiment analysis and depression classification.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    reference: "https://www.kaggle.com/datasets",
  },
];
