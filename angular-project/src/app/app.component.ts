import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //for Settlement
  formTitle: string = 'Pass React Props to angular';

  // SearchBox
  searchTitle: string = 'Search the Files';
  onSubmit(event: any) {
    console.log('Save event triggered:', event.detail);
  }

  // MaskedInput
  label: string = 'Phone Number';
  // Tabs Component
  imageUrl: string = '/assets/bridge.png';
}