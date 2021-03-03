import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: AppServiceService, private router: Router) {}

  ngOnInit(): void {}
  title = 'book-store-app';
  bookList: Object = [];

  addBook(form) {
    // console.log(form);

    this.service.postData(form.value).subscribe(
      (book) => {
        // console.log(book);
        alert('Book added!');
      },
      (error) => {
        console.log(error);
        // alert(error.error.text);
      }
    );
  }

  updateBook(form) {
    // console.log(form.value);

    this.service.putData(form.value).subscribe(
      (book) => {
        console.log(book);
        alert('Book Updated!');
      },
      (error) => {
        alert(error.error.text);
        // console.log(error);
      }
    );
  }

  readBook(form) {
    this.service.getDataById(form.value._id).subscribe(
      (response) => {
        // console.log(JSON.stringify(response));
        // let bk = JSON.parse(response);
        if (JSON.parse(JSON.stringify(response)).error)
          alert(JSON.parse(JSON.stringify(response)).error);
        else {
          alert(JSON.stringify(response));
        }
      } /*
      (error) => {
        // console.log('Error is: ' + JSON.stringify(error.error.text));
        alert(JSON.stringify(error.error.text));
      }*/
    );
  }

  deleteBook(form) {
    this.service.deleteData(form.value._id).subscribe(
      () => {
        alert('Book deleted!');
      },
      (error) => {
        alert(error.error.text);
      }
    );
  }

  listBooks() {
    this.service.getData().subscribe(
      (response) => {
        this.bookList = response;
        console.log(response);
      },
      (error) => {
        console.log('Error is: ' + error);
      }
    );
  }
  logout() {
    this.service.logoutUser().subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('');
      },
      (error) => {
        console.log('Error is: ' + error);
      }
    );
  }
}
