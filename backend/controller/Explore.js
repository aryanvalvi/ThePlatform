const explore = (req, res) => {
  const exploredata = [
    {
      id: 1,
      title: "Aryan valvi",
      pandya: "/img1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/profile.png",
    },
    {
      id: 2,
      title: "Armin",
      pandya: "/armin-gand 1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/img2 1.png",
    },
    {
      id: 1,
      title: "Dariba",
      pandya: "/darina-gand 1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/img3 1.png",
    },
    {
      id: 1,
      title: "Aryan valvi",
      pandya: "/img1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/profile.png",
    },
    {
      id: 2,
      title: "Armin",
      pandya: "/armin-gand 1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/img2 1.png",
    },
    {
      id: 1,
      title: "Dariba",
      pandya: "/darina-gand 1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/img3 1.png",
    },
    {
      id: 2,
      title: "Armin",
      pandya: "/armin-gand 1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/img2 1.png",
    },
    {
      id: 1,
      title: "Dariba",
      pandya: "/darina-gand 1.png",
      save: "/save.svg",
      like: "/like.svg",
      view: "/views.svg",
      profile: "/img3 1.png",
    },
  ];
  res.json(exploredata);
};

module.exports = explore;
