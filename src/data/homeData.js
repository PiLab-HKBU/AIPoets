import {ref} from 'vue'

export const basic = ref( {
    name: "與<span style=\"color: #01969C\">A</span><span style=\"color: #EE8020\">I</span>古人聊古詩",
    description: "通過與AI古詩人對話來幫助學生在課堂之外沈浸式學習古詩，提高他們學習中國古詩的興趣，並增強普通話交流能力。"
})

export const highlightItems = ref(
    [
        [
            {
                title: "AI古詩人",
                content: "AI再現古詩人聲音面貌；<br>仿真普通話視頻互動；<br>提升古詩朗讀及普通話聽說能力",
                img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/item_word/item_word_1.png",
            },
            {
                title: "個性化詩歌推薦",
                content: "智能分析學生能力和興趣；<br>個性定制學習路徑；<br>激發參與度",
                img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/item_word/item_word_2.png",
            },
        ],
        [
            {
                title: "AI智能問答",
                content: "在對話中解疑答惑；<br>AI插圖輔助詩歌理解；<br>讓學習過程簡單又有趣",
                img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/item_word/item_word_3.png",
            },
            {
                title: "AI共創詩歌",
                content: "與AI古詩人共創詩歌；<br>幫助學生深入瞭解詩歌結構；<br>激發詩歌寫作創造力",
                img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/item_word/item_word_4.png",
            }
        ]
    ]
);

export const members = ref(
    [
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/members/li_chen.jpg",
            name: "陳黎教授",
            title: "教授及副系主任（研究）<br>計算機科學系<br>香港浸會大學",
            domains: "研究方向：人工智能、數據驅動的交互、網絡個性化、智能用戶界面",
            website: "https://www.comp.hkbu.edu.hk/~lichen",
        },
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/members/yucheng_jin.jpg",
            name: "金昱成博士",
            title: "研究助理教授<br>計算機科學系<br>香港浸會大學",
            domains: "研究方向：用戶與人工智能係統交互，人工智能實現人類創造力研究",
            website: "https://www.comp.hkbu.edu.hk/~yuchengjin/",
        },
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/members/wenfang_liang.jpg",
            name: "梁文芳博士",
            title: "普通話培訓測試中心主任<br>及高級講師<br>語文中心<br>香港浸會大學",
            domains: "研究方向：語言評估、漢語作為第二語言教學",
            website: "https://artsbu.hkbu.edu.hk/tc/about-us/our-community-of-teachers-and-researchers/dr-leung-man-fong",
        },
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/members/jing_jin.jpg",
            name: "金晶博士",
            title: "語言教育中心主任<br>中國語言學系副教授<br>香港教育大學",
            domains: "研究方向：漢語語言學、 語法語義接口、語法語用接口、語言習得方法",
            website: "https://repository.eduhk.hk/en/persons/jing金晶-jin",
        },
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/members/shaoxiong_qiu.jpg",
            name: "邱少雄校長, MH",
            title: "仁濟醫院王華湘中學校長<br>香港教師會理事會會長<br>新界校長會副會長<br>香港教育大學校董會成員<br>香港城市大學電子計算學理學碩士",
            domains: "",
            website: "https://www.ychwwsss.edu.hk/singlepage/index?channel_id=6757",
        },
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/members/yizhe_zhang.jpg",
            name: "張藝哲先生",
            title: "高級研究助理<br>計算機科學系<br>香港浸會大學",
            domains: "研究方向：推薦系統、人機交互、軟件工程",
            website: "https://elecoxy.com/",
        },
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/members/sinan_yu.jpg",
            name: "余思南女士",
            title: "在讀博士生<br>計算機科學系<br>香港浸會大學",
            domains: "研究方向：人機交互、個性化界面設計",
            website: "https://github.com/Yusi-sinanyu",
        }
    ]
)


export const organizations = ref(
    [
        // {
        //   avatar: "/AIPoets/home/img/organizations/lenovo.jpg",
        //   name: "聯想研究院",
        //   website: "https://research.lenovo.com",
        // },
        {
            avatar: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/organizations/HKFEW_TECHED_CENTRE.png",
            name: "香港教育工作者聯會",
            website: "https://hkfew.org.hk",
        }
    ]
)

export const screenshots = ref(
    [
        {
            img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/1.JPEG",
            description: "朗讀指導和評分",
        },
        {
            img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/2.JPEG",
            description: "詩歌智能問答",
        },
        {
            img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/6.JPEG",
            description: "AI共创诗歌",
        },
        // {
        //     img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/3.JPEG",
        //     description: "詩館",
        // },
        {
            img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/4.JPEG",
            description: "個性化學習路徑",
        },
        {
            img: "https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/5.JPEG",
            description: "個人主頁",
        }
    ]
)

export const videos = ref(
    [
        {
            video: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/1.mp4",
            youtube: "https://youtube.com/embed/VsZfIyU4wug?rel=0",
            description: "詩歌講解",
            poster: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/video_posters/1.jpg",
        },
        {
            video: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/2.mp4",
            youtube: "https://youtube.com/embed/_6PnljpivVc?rel=0",
            description: "朗讀指導",
            poster: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/video_posters/2.jpg",
        },
        {
            video: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/3.mp4",
            youtube: "https://youtube.com/embed/gNJrFlT9qn4?rel=0",
            description: "智能問答",
            poster: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/video_posters/3.jpg",
        },
        {
            video: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/4.mp4",
            youtube: "https://youtube.com/embed/sUHexaMnaYM?rel=0",
            description: "共創詩歌",
            poster: "https://wofoo2.blob.core.windows.net/aipoets/public/home/files/video_posters/4.jpg",
        }
    ]
)

export const historyLine = ref([
    {
        title: "概念演示",
        date: "10/2023",
        description: "",
    },
    {
        title: "教育工作者訪談",
        date: "09/2023",
        description: "",
    },
    {
        title: "原型稿設計",
        date: "09/2023",
        description: "",
    },
    {
        title: "多模態大語言模型研究",
        date: "08/2023",
        description: "",
    },
    {
        title: "古人數字化研究",
        date: "07/2023",
        description: "",
    },
    {
        title: "架構設計",
        date: "06/2023",
        description: "",
    },
    {
        title: "市場研究與競品分析",
        date: "06/2023",
        description: "",
    },
    {
        title: "初期策劃",
        date: "06/2023",
        description: "",
    }
])
