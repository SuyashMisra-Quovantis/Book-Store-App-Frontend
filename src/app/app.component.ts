import { Component } from '@angular/core';
// import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'book-store-app';
  // bookList: Object = [];
  constructor() {}

  // addBook(form) {
  //   // console.log(form);

  //   this.service.postData(form.value).subscribe(
  //     (book) => {
  //       // console.log(book);
  //       alert('Book added!');
  //     },
  //     (error) => {
  //       console.log(error);
  //       // alert(error.error.text);
  //     }
  //   );
  // }

  // updateBook(form) {
  //   // console.log(form.value);

  //   this.service.putData(form.value).subscribe(
  //     (book) => {
  //       console.log(book);
  //       alert('Book Updated!');
  //     },
  //     (error) => {
  //       alert(error.error.text);
  //       // console.log(error);
  //     }
  //   );
  // }

  // readBook(form) {
  //   this.service.getDataById(form.value._id).subscribe(
  //     (response) => {
  //       // console.log(JSON.stringify(response));
  //       // let bk = JSON.parse(response);
  //       if (JSON.parse(JSON.stringify(response)).error)
  //         alert(JSON.parse(JSON.stringify(response)).error);
  //       else {
  //         alert(JSON.stringify(response));
  //       }
  //     } /*
  //     (error) => {
  //       // console.log('Error is: ' + JSON.stringify(error.error.text));
  //       alert(JSON.stringify(error.error.text));
  //     }*/
  //   );
  // }

  // deleteBook(form) {
  //   this.service.deleteData(form.value._id).subscribe(
  //     () => {
  //       alert('Book deleted!');
  //     },
  //     (error) => {
  //       alert(error.error.text);
  //     }
  //   );
  // }

  // listBooks() {
  //   this.service.getData().subscribe(
  //     (response) => {
  //       this.bookList = response;
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log('Error is: ' + error);
  //     }
  //   );
  // }
}
