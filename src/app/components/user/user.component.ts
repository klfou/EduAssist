import {Component, signal, WritableSignal} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ActivatedRoute} from '@angular/router';
import {NgClass} from '@angular/common';
import {interval, map, take} from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [
    SharedModule,
    NgClass
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: { [key in string]: string[] } = {
    "十三班": [
      "张砚淇",
      "毕文壹",
      "李昱婷",
      "丁俊杰",
      "李姿霆",
      "武彤",
      "宋佳璇",
      "贺子轩",
      "马豪成",
      "陈馨泽",
      "高浩宇",
      "牛晓晨",
      "欧桐彤",
      "李宗昊",
      "李瑷彤",
      "安春盈",
      "王璇",
      "曹馨文",
      "王鑫悦",
      "韩沈菲",
      "李昱泽",
      "张为一",
      "乔绣煜",
      "郝俊杰",
      "刘浩辰",
      "李硕",
      "刘金鹏",
      "高文浩",
      "贺彩",
      "段涵钰",
      "王樱洁",
      "党君硕",
      "武子淏",
      "武小楠",
      "王浩然",
      "王琴",
      "许硕",
      "王俊楠",
      "李铠丞",
      "林子翔",
      "谭皓予",
      "梁恒源",
      "孙佳宁",
      "孙吴涵",
      "张莹",
      "王迦淇",
      "郝冠澎",
      "刘姝岩",
      "武圣霖",
      "曹铭洋"
    ],
    "十四班": [
      "李钰含",
      "刘家睿",
      "杨骐源",
      "许书晴",
      "乔薪诺",
      "窦金涵",
      "邴子涵",
      "刘芮萁",
      "雷曙宁",
      "杨天宇",
      "孟繁盛",
      "王艺霏",
      "杨柳",
      "肖迪",
      "王生平",
      "王梓霖",
      "徐谦",
      "曹彦妮",
      "孙跃烜",
      "高金博",
      "孙浩文",
      "于子琪",
      "张晟睿",
      "王科瑾",
      "吴孟辉",
      "秦婧雯",
      "黄永芸",
      "公艺臻",
      "师语",
      "韩奎峰",
      "王梓菡",
      "戚雅淇",
      "张喜乐",
      "杨洪莹",
      "齐家艺",
      "王润泽",
      "周玉龙",
      "崔硕",
      "曹宇瞳",
      "李学诚",
      "邵照硕",
      "孔思颖",
      "高永健",
      "付焱旭",
      "尚永强",
      "闫佳琪",
      "王雷",
      "高子涵",
      "王家洋",
      "李哲",
      "杨富元",
      "曹馨月"
    ],
    "十五班": [
      "杨福斌",
      "宋怡霖",
      "朱姿诺",
      "黄钟书",
      "刘柯宁",
      "侯梦洁",
      "许沐阳",
      "武涵正",
      "马子皓",
      "李菲梵",
      "张锡鑫",
      "刘家豪",
      "刘高志",
      "相欣彤",
      "刘梦琪",
      "刘子鸣",
      "张浩扬",
      "黄文秀",
      "武子杰",
      "高子童",
      "李想",
      "吴宇超",
      "翟翔羽",
      "王兴隆",
      "李梓锐",
      "黄雅琪",
      "李伟宸",
      "孔令强",
      "佟晓婷",
      "闵迪",
      "刘雨嘉",
      "韩宗哲",
      "江秀佳",
      "庄婿文",
      "于政翰",
      "杜浩宇",
      "戚雍涵",
      "张子晨",
      "贺文栋",
      "陈国豪",
      "李锦浩",
      "武洪宇",
      "窦锦阳",
      "萧君诺",
      "曹佳琪",
      "田林曜",
      "陈炳桦",
      "都姿含",
      "袁茂翔",
      "安可"
    ],
    "十六班": [
      "申珈硕",
      "曹涵",
      "刘芯瑜",
      "秦一诺",
      "王奕茹",
      "刘雨琪",
      "王浩宇",
      "杨雪瑶",
      "杨杰浩",
      "杨晓",
      "周圣凯",
      "武姝妍",
      "刘星宇",
      "刘雨晗",
      "黄胄洋",
      "李安超",
      "刘雨蒙",
      "张清吉",
      "刘子童",
      "杨捷丞",
      "马佳婷",
      "商皓然",
      "辛明远",
      "张皓喆",
      "姜晓彤",
      "任炳臻",
      "吕小萌",
      "唐楷杰",
      "王煜祺",
      "艾楷程",
      "徐一诺",
      "牛麒媛",
      "朱俊宇",
      "武雯婷",
      "杨晨",
      "马健",
      "张原硕",
      "刘爽",
      "段懿轩",
      "张城铭",
      "陈明鑫",
      "武俊邑",
      "付铠瑞",
      "刘祥",
      "赵宏扬",
      "刘彦成",
      "田绍衡",
      "于梓汐",
      "秦明泽",
      "伊泓霏"
    ]
  };

  photos: string[] = [
    "兔耳小符90×90.jpg",
    "关羽90×90.jpg",
    "刘备90×90.jpg",
    "周瑜90×90.jpg",
    "园丁90×90.jpg",
    "小兵90×90.jpg",
    "小地鼠90×90.jpg",
    "小将90×90.jpg",
    "小狐狸90×90.jpg",
    "小精灵90×90.jpg",
    "小蜜蜂90×90.jpg",
    "幽灵90×90.jpg",
    "愚宗宪90×90.jpg",
    "桂花树怪90×90.jpg",
    "火鸡90×90.jpg",
    "熊猫90×90.jpg",
    "爆米花90×90.jpg",
    "章鱼90×90.jpg",
    "精灵小符90×90.jpg",
    "虎头90×90.jpg",
    "诸葛亮90×90.jpg",
    "貂蝉90×90.jpg",
    "面具90×90.jpg",
    "骷髅兵90×90.jpg"
  ]

  className: WritableSignal<string> = signal("十三班")

  selectedIndex: WritableSignal<number | undefined> = signal(undefined)

  isVisible: WritableSignal<boolean> = signal(false)
  isLoading: WritableSignal<boolean> = signal(false);

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.className.set(params["class"]);
    })
  }

  random() {
    this.isLoading.set(true);
    const max = this.users[this.className()].length - 1
    interval(400).pipe(
      take(15),
      map(_ => this.randomIndex(max))
    ).subscribe({
      next: value => {
        this.selectedIndex.set(value)
      },
      complete: () => {
        this.isVisible.set(true)
      }
    })
  }

  randomIndex(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  handleCancel() {
    this.isVisible.set(false)
    this.selectedIndex.set(undefined)
    this.isLoading.set(false)
  }
}
