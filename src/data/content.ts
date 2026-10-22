// All the site content lives here: edit this file to add or change entries.
// Every entry has an `id` (used as page anchor and graph node) and a list of `topics`
// that connects it to the topic nodes in the knowledge graph shown at the top of the page.

import type { SvgComponent } from 'astro/types';
import intentImage from '../assets/projects/intent.svg';
import influencerImage from '../assets/projects/influencer.svg';
import thesisImage from '../assets/projects/thesis.svg';
import antsImage from '../assets/projects/ants.png';
import raytracerImage from '../assets/projects/raytracer.png';
import minesweeperImage from '../assets/projects/minesweeper.svg';
import sqlImage from '../assets/projects/sql.svg';
import lmcImage from '../assets/projects/lmc.svg';

export const profile = {
  name: 'Margherita Necchi',
  tagline: 'AI · LLMs · NLP — MSc Data & AI, Institut Polytechnique de Paris',
  status: '', // set to a short text (e.g. 'Open to internships') to show a badge
  email: 'margherita.necchi@polytechnique.edu',
  github: 'https://github.com/margheritanecchi',
  linkedin: 'https://www.linkedin.com/', // TODO: replace with your LinkedIn profile URL
  cv: '/files/cv-margherita-necchi.pdf',
};

export interface Topic {
  id: string;
  label: string;
}

export const topics: Topic[] = [
  { id: 'nlp', label: 'LLMs & NLP' },
  { id: 'ml', label: 'Deep Learning' },
  { id: 'kg', label: 'Knowledge Graphs' },
  { id: 'systems', label: 'Systems & Code' },
  { id: 'complex', label: 'Complex Systems' },
];

export interface Publication {
  id: string;
  graphLabel: string;
  title: string;
  authors?: string;
  venue: string;
  year: number;
  summary?: string;
  pdf?: string;
  topics: string[];
}

export const publications: Publication[] = [
  {
    id: 'punning-intended',
    graphLabel: 'Punning Intended',
    title: 'A Formal Analysis of Classes that Act as Individuals in Wikidata: Punning Intended',
    authors: 'M. Necchi, T. Bonald, F. M. Suchanek',
    venue: 'ISWC 2026 Wikidata Workshop, Bari, Italy',
    year: 2026,
    summary:
      'An empirical analysis showing that punning — entities acting both as classes and as individuals — affects thousands of Wikidata classes, a formalization of the requirements for representing it, and a comparison of knowledge representation formalisms.',
    pdf: '/files/punning-iswc-2026.pdf',
    topics: ['kg'],
  },
  {
    id: 'yago-4-6',
    graphLabel: 'YAGO 4.6',
    title: 'YAGO 4.6: A Logically Consistent Subset of Wikidata',
    authors: 'F. M. Suchanek, T. Bonald, N. Dobričić, M. Jeanmougin, M. Necchi',
    venue: 'ISWC 2026 Demo Track, Bari, Italy',
    year: 2026,
    summary:
      'A new version of YAGO that, for the first time, quantifies and shows not only the Wikidata statements kept in the knowledge base but also those filtered out — shedding light on the inconsistencies of large collaborative knowledge bases and the trade-offs of enforcing a schema.',
    pdf: '/files/yago-4-6-iswc-2026.pdf',
    topics: ['kg'],
  },
];

export interface Experience {
  id: string;
  org: string;
  role: string;
  period: string;
  place?: string;
  description: string;
  topics: string[];
}

export const experience: Experience[] = [
  {
    id: 'yago',
    org: 'YAGO Knowledge Base',
    role: 'Research, Knowledge Representation',
    period: '2025 – 2026',
    place: 'Institut Polytechnique de Paris · Palaiseau, France',
    description:
      'Research on keeping a knowledge base built from Wikidata logically consistent, leading to two ISWC 2026 papers.',
    topics: ['kg'],
  },
  {
    id: 'studio-ingegneria-web',
    org: 'Studio Ingegneria Web',
    role: 'Web & Database Developer',
    period: '2024 – 2026',
    description: 'Built management software and databases, leading small projects from requirements to delivery.',
    topics: ['systems'],
  },
];

export interface Project {
  id: string;
  kicker: string;
  title: string;
  description: string;
  stack: string;
  image?: ImageMetadata | SvgComponent; // card thumbnail: SVG drawings follow the site theme
  imageAlt?: string; // needed for raster images only, SVG drawings are decorative
  links?: { label: string; href: string }[];
  page?: string; // URL of the case study page, if the project has one
  featured?: boolean; // shown as a wide, highlighted card
  topics: string[];
}

export const projects: Project[] = [
  {
    id: 'intent-classification',
    kicker: 'LLMs · 2026',
    title: 'Dialogue Intent Classification',
    description:
      'LLM prompting (zero-shot, few-shot, chain-of-thought) vs. fine-tuned BERT vs. TF-IDF on CLINC150. Best LLM strategy: 0.839 macro-F1 — but BERT matches its accuracy at a fraction of the inference cost.',
    stack: 'Mistral API · BERT · prompt engineering',
    image: intentImage,
    links: [{ label: 'Report', href: '/files/dialogue-intent-classification.pdf' }],
    page: '/projects/intent-classification/',
    featured: true,
    topics: ['nlp', 'ml'],
  },
  {
    id: 'influencer-classification',
    kicker: 'Deep learning · 2025',
    title: 'Influencer Classification',
    description:
      'Is a tweet written by an influencer or an observer? A multitask network with cross-attention between 23 engineered user features and CamemBERT tweet embeddings: 0.83 F1 and 0.92 ROC-AUC in 5-fold cross-validation.',
    stack: 'PyTorch · CamemBERT · Optuna',
    image: influencerImage,
    page: '/projects/influencer-classification/',
    topics: ['ml', 'nlp'],
  },
  {
    id: 'when-words-hurt',
    kicker: 'Bachelor thesis · 2025',
    title: 'When Words Hurt',
    description:
      'Detecting misogyny in Italian tweets (AMI EVALITA 2020): five tuned classical models against a CNN on GloVe embeddings. The CNN wins with 0.83 macro-F1 — but a well-tuned random forest is only 0.001 behind.',
    stack: 'Python · scikit-learn · Keras · GloVe',
    image: thesisImage,
    links: [
      { label: 'Thesis (EN)', href: '/files/bachelor-thesis-en.pdf' },
      { label: 'Thesis (IT)', href: '/files/bachelor-thesis.pdf' },
    ],
    page: '/projects/when-words-hurt/',
    topics: ['nlp', 'ml'],
  },
  {
    id: 'decentralizing-navigation',
    kicker: 'Complex systems · 2025',
    title: 'Decentralizing Navigation',
    description:
      'Ant foraging simulation where homing emerges from a diffusive "colony pheromone" instead of global coordinates.',
    stack: 'Agent-based modelling · Python',
    image: antsImage,
    imageAlt: 'Simulation snapshot: pheromone trails spreading from the nest towards yellow food sources',
    links: [{ label: 'Report', href: '/files/decentralizing-navigation.pdf' }],
    page: '/projects/decentralizing-navigation/',
    topics: ['complex'],
  },
  {
    id: 'ray-tracer',
    kicker: 'Parallel programming · 2025',
    title: 'Ray Tracer in C',
    description:
      'Renders scenes of coloured spheres, parallelized with OpenMP and writing PPM images through mmap.',
    stack: 'C · OpenMP',
    image: raytracerImage,
    imageAlt: 'Coloured spheres rendered by the ray tracer, nearer spheres hiding the ones behind',
    page: '/projects/ray-tracer/',
    topics: ['systems'],
  },
  {
    id: 'minesweeper',
    kicker: 'Software engineering · 2025',
    title: 'Minesweeper',
    description:
      'The game was the excuse: the goal was learning how a team ships software. Test-driven development with 70 JUnit and Mockito tests, continuous integration on GitHub Actions building and testing every push, and steady refactoring.',
    stack: 'Java · Gradle · JUnit · GitHub Actions',
    image: minesweeperImage,
    links: [
      { label: 'Code', href: 'https://github.com/MatteoVicenzino/Minesweeper2025' },
      { label: 'Slides', href: '/files/minesweeper-presentation.pdf' },
    ],
    page: '/projects/minesweeper/',
    topics: ['systems'],
  },
  {
    id: 'milan-transport-db',
    kicker: 'Databases · 2024',
    title: 'Milan Public Transport Database',
    description:
      'A relational database for optimising Milan’s transport network, designed end to end: requirements, E-R schema, restructuring and normalisation, then SQL tables, operations and triggers, queried from Python.',
    stack: 'SQL · E-R modelling · Python',
    image: sqlImage,
    links: [{ label: 'Report', href: '/files/milan-transport-database.pdf' }],
    page: '/projects/milan-transport-db/',
    topics: ['systems'],
  },
  {
    id: 'lmc-simulator',
    kicker: 'Programming · 2025',
    title: 'LMC Simulator',
    description:
      'Assembler and interpreter for the Little Man Computer, with step-by-step execution and error handling.',
    stack: 'Python',
    image: lmcImage,
    page: '/projects/lmc-simulator/',
    topics: ['systems'],
  },
];

export const memberships: { id: string; name: string; org: string; href: string; period: string }[] = [
  {
    id: 'iaseai',
    name: 'Member, IASEAI',
    org: 'International Association for Safe & Ethical AI',
    href: 'https://www.iaseai.org',
    period: '2026 – present',
  },
];

export const education:{ id: string; degree: string; school: string; period: string; coursework?: string }[] = [
  {
    id: 'ip-paris',
    degree: 'MSc in Data and Artificial Intelligence',
    school: 'Institut Polytechnique de Paris · Palaiseau, France',
    period: '2025 – present',
    coursework:
      'Large-scale Generative Models for NLP & Speech, Advanced Deep Learning, Text Mining & NLP, Reinforcement Learning, Graph Learning, Verification of Neural Networks, Optimisation & Responsible AI',
  },
  {
    id: 'units',
    degree: 'BSc in Artificial Intelligence and Data Analytics',
    school: 'Università degli Studi di Trieste · Trieste, Italy',
    period: '2022 – 2025',
  },
];
