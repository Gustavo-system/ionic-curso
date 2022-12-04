import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  onShowActionSheet() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Header Action Sheet',
      subHeader: 'Sub Header Acction sheet',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          handler: () => {
            console.log(JSON.stringify("click: {action: 'delete'}"));
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => {
            console.log(JSON.stringify("click: {action: 'share'}"));
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          handler: () => {
            console.log(JSON.stringify("click: {action: 'cancel'}"));
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
