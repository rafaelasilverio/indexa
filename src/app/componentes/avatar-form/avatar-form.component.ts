import { Component } from '@angular/core';

interface User {
  name: string;
  avatar: string | ArrayBuffer;
}

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.css']
})
export class AvatarFormComponent {

  userData: User = { name: '', avatar: '' };
  users: User[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        if (reader.result) {
          this.userData.avatar = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.userData.name && this.userData.avatar) {
      this.users.push({ ...this.userData });
      this.userData = { name: '', avatar: '' };
    }
  }
}
