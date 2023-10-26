export const GOALS = [
  {
    id: 1,
    title: "Faire de l'exercice régulièrement",
    categories: ["sport", "santé", "loisirs"],
    check: false,
    completed: 80,
  },
  {
    id: 2,
    title: "Économiser de l'argent chaque mois",
    categories: ["finance"],
    check: false,
  },
  {
    id: 3,
    title: "Réduire sa consommation de plastique",
    categories: ["écologie"],
    check: false,
  },
  {
    id: 4,
    title: "Manger plus de légumes",
    categories: ["alimentation", "santé"],
    check: false,
  },
  {
    id: 5,
    title: "Apprendre à cuisiner de nouvelles recettes",
    categories: ["alimentation", "loisirs"],
    check: true,
  },
  {
    id: 6,
    title: "Économiser pour un voyage",
    categories: ["finance", "loisirs"],
    check: false,
  },
  {
    id: 7,
    title: "Planter des arbres",
    categories: ["écologie"],
    check: false,
  },
  {
    id: 8,
    title: "Courir un marathon",
    categories: ["sport", "santé"],
    check: true,
  },
  {
    id: 9,
    title: "Apprendre à jouer d'un instrument de musique",
    categories: ["loisirs", "bureau"],
    check: true,
  },
  {
    id: 10,
    title: "Cuisiner un repas entièrement fait maison chaque semaine",
    categories: ["alimentation", "loisirs"],
    check: false,
  },
  {
    id: 11,
    title: "Suivre un budget strict",
    categories: ["finance"],
    check: false,
  },
  {
    id: 12,
    title: "Lire au moins un livre par mois",
    categories: ["loisirs"],
    check: false,
  },
  {
    id: 13,
    title: "Participer à une course caritative",
    categories: ["sport", "santé"],
    check: false,
  },
  {
    id: 14,
    title: "Réduire la consommation de sucre",
    categories: ["alimentation", "santé"],
    check: false,
  },
  {
    id: 15,
    title: "Recycler régulièrement",
    categories: ["écologie"],
    check: false,
  },
  {
    id: 16,
    title: "Investir dans des actions",
    categories: ["finance"],
    check: false,
  },
  {
    id: 17,
    title: "Apprendre une nouvelle langue",
    categories: ["loisirs"],
    check: true,
  },
  {
    id: 18,
    title: "Faire du bénévolat",
    categories: ["santé", "loisirs"],
    check: false,
  },
  {
    id: 19,
    title: "Cultiver un potager",
    categories: ["alimentation", "écologie"],
    check: false,
  },
  {
    id: 20,
    title: "Faire de la randonnée en montagne",
    categories: ["sport", "loisirs"],
    check: false,
  },
  {
    id: 21,
    title: "Économiser pour la retraite",
    categories: ["finance"],
    check: false,
  },
  {
    id: 22,
    title: "Réduire la consommation d'énergie",
    categories: ["écologie"],
    check: false,
  },
  {
    id: 23,
    title: "Participer à un club de lecture",
    categories: ["loisirs"],
    check: true,
  },
  {
    id: 24,
    title: "Courir un semi-marathon",
    categories: ["sport", "santé"],
    check: true,
  },
];

export const USERS = [
  {
    id: 1,
    name: "Théo",
    email: "zdietrich@example.net",
    email_verified_at: "2023-10-25 22:15:58",
    password: "test123",
    gender: "male",
    age: 83,
    remember_token: "057iQxEKXw",
    created_at: "2023-10-25 22:15:58",
    updated_at: "2023-10-25 22:15:58",
    user_group_objective : [
      {
        id: 1,
        user_id: 2,
        category_id: 10,
        name: "Wanda Fisher",
        created_at: "2023-10-25 22:15:58",
        updated_at: "2023-10-25 22:15:58",
        published_at: "2022-12-12 00:00:00",
      },
      {
        id: 1,
        todolist_id: 2,
        user_id: 4,
        category_id: 4,
        name: "Aaron Stiedemann",
        complete: 1,
        created_at: "2023-10-25 22:15:59",
        updated_at: "2023-10-25 22:15:59",
        published_at: "2017-02-22 00:00:00",
      },
      {
        id: 2,
        task_id: 52,
        todolist_id: 54,
        name: "projet",
        created_at: "2023-10-25 22:15:59",
        updated_at: "2023-10-25 22:15:59",
      },
    ] 
  }
]

export const CATEGORIES = [
  { name: "sport", color: "blue" },
  { name: "santé", color: "#db00ff" },
  { name: "loisirs", color: "orange" },
  { name: "écologie", color: "#db00ff" },
  { name: "finance", color: "blue" },
  { name: "bureau", color: "orange" },

]