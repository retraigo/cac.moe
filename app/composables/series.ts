type Series = {
  name: string;
  author: string;
  alternative: string[];
  id: number;
  cover: string;
};

const series: Series[] = [
  {
    name: "Release That Witch",
    author: "I stepped on Lego",
    alternative: ["放开那个女巫"],
    id: 1,
    cover: "/covers/17-1583496971.jpg",
  },
  {
    name: "Return Of The Mount Hua Sect",
    author: "I stepped on Lego",
    alternative: ["放开那个女巫"],
    id: 2,
    cover: "/covers/cover.jpg",
  },
  {
    name: "Greatest Estate Developer",
    author: "I stepped on Lego",
    alternative: ["放开那个女巫"],
    id: 3,
    cover: "/covers/EstateDevCover01.png",
  },
  {
    name: "I Killed an Academy Player",
    author: "I stepped on Lego",
    alternative: ["放开那个女巫"],
    id: 4,
    cover: "/covers/IKilledanAcademyPlayerCover01.png",
  },
  {
    name: "Omniscient Reader's Viewpoint",
    author: "I stepped on Lego",
    alternative: ["전독시", "전지적 독자 시점", "ORV"],
    id: 5,
    cover: "/covers/ORV03.png",
  },
  {
    name: "Revenge of the Iron-Blooded Sword Hound",
    author: "I stepped on Lego",
    alternative: ["Revenge Of The Sword Clan's Hound", "철혈검가 사냥개의 회귀"],
    id: 6,
    cover: "/covers/IronBloodSwordHound05-1.png",
  },
  {
    name: "My Daughter is the Last Boss",
    author: "I stepped on Lego",
    alternative: ["放开那个女巫"],
    id: 7,
    cover: "/covers/resourcePhotoauto_scaleLevel3width-1000.jpg",
  },
  {
    name: "Solo Max-Level Newbie",
    author: "I stepped on Lego",
    alternative: ["放开那个女巫"],
    id: 8,
    cover: "/covers/solomaxlevelnewbie.jpg",
  },
  {
    name: "The Tutorial is Too Hard",
    author: "I stepped on Lego",
    alternative: [
      "放开那个女巫",
      "튜토리얼이 너무 어렵다",
      "The Tutorial Is Too Tough!",
      "Tutorial Neomu Eolyeobda",
    ],
    id: 9,
    cover: "/covers/TheTutorialisTooHardCover02.png",
  },
];

export async function useSeries(): Promise<Series[]>;
export async function useSeries(id: number): Promise<Series | -1>;
export async function useSeries(id?: number): Promise<Series[] | Series | -1> {
  if (typeof id === "number") {
    return series.find((x) => x.id === id) || -1;
  }
  return series;
}