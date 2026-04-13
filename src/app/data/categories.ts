/**
 * Help service categories and sub-categories.
 * Maps the 5 main categories to their sub-category tags.
 */

export interface SubCategory {
  slug: string;
  label: string;
  /** Tags used to filter services for this sub-category */
  tags: string[];
}

export interface CategoryGroup {
  slug: string;
  label: string;
  subCategories: SubCategory[];
}

export interface MainCategory {
  slug: string;
  label: string;
  description: string;
  categories: CategoryGroup[];
}

export const CATEGORIES: MainCategory[] = [
  {
    slug: "kropp-helse-sex",
    label: "Kropp, helse og sex",
    description: "Om kroppen din, helsa di og seksuell helse – fysisk og psykisk.",
    categories: [
      {
        slug: "helsa-di",
        label: "Helsa di",
        subCategories: [
          { slug: "sykdom", label: "Sykdom", tags: ["Sykdom"] },
          { slug: "mat-og-kosthold", label: "Mat og kosthold", tags: ["Mat og kosthold"] },
          { slug: "trening-og-idrett", label: "Trening og idrett", tags: ["Trening og idrett"] },
          { slug: "doping", label: "Doping", tags: ["Doping"] },
        ],
      },
      {
        slug: "kropp",
        label: "Kropp",
        subCategories: [
          { slug: "funksjonsnedsettelser", label: "Funksjonsnedsettelser", tags: ["Funksjonsnedsettelser"] },
          { slug: "mensen", label: "Mensen", tags: ["Mensen"] },
          { slug: "penis-og-pung", label: "Penis og pung", tags: ["Penis og pung"] },
          { slug: "pubertet", label: "Pubertet", tags: ["Pubertet"] },
          { slug: "vulva-og-vagina", label: "Vulva og vagina", tags: ["Vulva og vagina"] },
        ],
      },
      {
        slug: "rusmidler",
        label: "Rusmidler",
        subCategories: [
          { slug: "alkohol", label: "Alkohol", tags: ["Alkohol"] },
          { slug: "cannabis", label: "Cannabis", tags: ["Cannabis"] },
          { slug: "tobakk", label: "Tobakk", tags: ["Tobakk"] },
        ],
      },
      {
        slug: "sex",
        label: "Sex",
        subCategories: [
          { slug: "onanering", label: "Onanering", tags: ["Onanering"] },
          { slug: "kjonnssykdommer", label: "Kjønnssykdommer", tags: ["Kjønnssykdommer"] },
          { slug: "prevensjon", label: "Prevensjon", tags: ["Prevensjon"] },
          { slug: "p-piller", label: "P-piller", tags: ["P-piller"] },
          { slug: "graviditet", label: "Graviditet", tags: ["Graviditet"] },
        ],
      },
    ],
  },
  {
    slug: "folelser-identitet-forelskelse",
    label: "Følelser, identitet og forelskelse",
    description: "Om hvem du er, hvordan du har det – og forholdet til andre.",
    categories: [
      {
        slug: "forelskelse",
        label: "Forelskelse",
        subCategories: [
          { slug: "forhold", label: "Forhold", tags: ["Forhold"] },
        ],
      },
      {
        slug: "psykisk-helse",
        label: "Psykisk helse og følelser",
        subCategories: [
          { slug: "spiseforstyrrelser", label: "Spiseforstyrrelser", tags: ["Spiseforstyrrelser"] },
          { slug: "selvskading", label: "Selvskading", tags: ["Selvskading"] },
          { slug: "psykiske-vansker", label: "Psykiske vansker", tags: ["Psykiske vansker"] },
          { slug: "selvtillit-og-identitet", label: "Selvtillit og identitet", tags: ["Selvtillit og identitet"] },
          { slug: "sorg-og-krise", label: "Sorg og krise", tags: ["Sorg og krise"] },
          { slug: "mobbing", label: "Mobbing", tags: ["Mobbing"] },
          { slug: "hva-kan-hjelpe", label: "Hva kan hjelpe", tags: ["Hva kan hjelpe"] },
        ],
      },
      {
        slug: "identitet",
        label: "Selvtillit og identitet",
        subCategories: [
          { slug: "krysskulturell", label: "Krysskulturell", tags: ["Krysskulturell"] },
          { slug: "kjonnsidentitet", label: "Kjønnsidentitet", tags: ["Kjønnsidentitet"] },
          { slug: "skeiv", label: "Skeiv", tags: ["Skeiv"] },
        ],
      },
    ],
  },
  {
    slug: "skole-utdanning-jobb",
    label: "Skole, utdanning og jobb",
    description: "Alt som handler om skole, studier og arbeid – nå og videre.",
    categories: [
      {
        slug: "skolehverdag",
        label: "Skolehverdag",
        subCategories: [
          { slug: "eksamen", label: "Eksamen", tags: ["Eksamen"] },
          { slug: "russetid", label: "Russetid", tags: ["Russetid"] },
          { slug: "leksehjelp", label: "Leksehjelp", tags: ["Leksehjelp"] },
        ],
      },
      {
        slug: "utdanning",
        label: "Utdanning",
        subCategories: [
          { slug: "hoyere-utdanning", label: "Høyere utdanning", tags: ["Høyere utdanning"] },
          { slug: "ungdomsskole", label: "Ungdomsskole", tags: ["Ungdomsskole"] },
          { slug: "videregaende", label: "Videregående skole", tags: ["Videregående skole"] },
          { slug: "stipend-og-stotte", label: "Stipend og støtte", tags: ["Stipend og støtte"] },
          { slug: "verneplikt", label: "Verneplikt / Forsvaret", tags: ["Verneplikt / Forsvaret"] },
        ],
      },
      {
        slug: "jobb",
        label: "Jobb",
        subCategories: [
          { slug: "laerling", label: "Lærling", tags: ["Lærling"] },
          { slug: "sommerjobb", label: "Sommerjobb", tags: ["Sommerjobb"] },
        ],
      },
    ],
  },
  {
    slug: "samfunn-lover-rettigheter",
    label: "Samfunn, lover og rettigheter",
    description: "Om rettighetene dine, lover, plikter og hva du kan få hjelp til.",
    categories: [
      {
        slug: "lov-og-rett",
        label: "Lov og rett",
        subCategories: [
          { slug: "lovbrudd", label: "Lovbrudd", tags: ["Lovbrudd"] },
          { slug: "rettigheter", label: "Rettighetene dine", tags: ["Rettighetene dine"] },
          { slug: "konfliktlosning", label: "Konfliktløsning", tags: ["Konfliktløsning"] },
          { slug: "likestilling", label: "Likestilling og diskriminering", tags: ["Likestilling og diskriminering"] },
        ],
      },
      {
        slug: "kriminalitet",
        label: "Kriminalitet",
        subCategories: [
          { slug: "seksuelle-overgrep", label: "Seksuelle overgrep", tags: ["Seksuelle overgrep"] },
          { slug: "vold", label: "Vold", tags: ["Vold"] },
          { slug: "kjonnslemlestelse", label: "Kjønnslemlestelse", tags: ["Kjønnslemlestelse"] },
        ],
      },
      {
        slug: "demokrati-og-valg",
        label: "Demokrati og valg",
        subCategories: [],
      },
      {
        slug: "klima-og-miljo",
        label: "Klima og miljø",
        subCategories: [],
      },
    ],
  },
  {
    slug: "familie-venner-fritid",
    label: "Familie, venner og fritid",
    description: "Familieliv og praktiske ting i hverdagen.",
    categories: [
      {
        slug: "familie",
        label: "Familie",
        subCategories: [
          { slug: "barnevern", label: "Barnevern", tags: ["Barnevern"] },
          { slug: "problemer-hjemme", label: "Problemer hjemme", tags: ["Problemer hjemme"] },
          { slug: "skilsmisse", label: "Skilsmisse", tags: ["Skilsmisse"] },
        ],
      },
      {
        slug: "fritid",
        label: "Fritid",
        subCategories: [
          { slug: "spill-og-gaming", label: "Spill og gaming", tags: ["Spill og gaming"] },
          { slug: "vennskap", label: "Vennskap", tags: ["Vennskap"] },
          { slug: "nettvett", label: "Nettvett og sosiale medier", tags: ["Nettvett og sosiale medier"] },
        ],
      },
      {
        slug: "okonomien-din",
        label: "Økonomien din",
        subCategories: [
          { slug: "bolig", label: "Bolig / flytte hjemmefra", tags: ["Bolig / flytte hjemmefra"] },
          { slug: "forerkort", label: "Førerkort", tags: ["Førerkort"] },
          { slug: "reise", label: "Reise", tags: ["Reise"] },
        ],
      },
    ],
  },
];

/** Get all tags for a category group (category label + all sub-category tags) */
export function getCategoryGroupTags(group: CategoryGroup): string[] {
  const tags = [group.label];
  group.subCategories.forEach((s) => tags.push(...s.tags));
  return [...new Set(tags)];
}

/** Get all tags for an entire main category */
export function getMainCategoryTags(main: MainCategory): string[] {
  const tags: string[] = [];
  main.categories.forEach((g) => tags.push(...getCategoryGroupTags(g)));
  return [...new Set(tags)];
}

/** Find a main category by slug */
export function getMainCategoryBySlug(slug: string): MainCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** Find a category group within a main category */
export function getCategoryGroupBySlug(mainSlug: string, groupSlug: string): { main: MainCategory; group: CategoryGroup } | undefined {
  const main = getMainCategoryBySlug(mainSlug);
  if (!main) return undefined;
  const group = main.categories.find((g) => g.slug === groupSlug);
  if (!group) return undefined;
  return { main, group };
}
