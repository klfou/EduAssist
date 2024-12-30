import {Component} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

export interface User {
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [];
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

  constructor() {
    for (let i = 0; i < 60; i++) {
      this.users.push({
        name: "感染力",
      })
    }
  }
}
