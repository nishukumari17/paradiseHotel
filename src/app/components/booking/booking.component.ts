 import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Post {
  startDate: Date;
  endDate: Date;
}
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent 
  implements OnInit{
  
    form!: FormGroup;
      submitted = false;
  
      constructor(private formBuilder: FormBuilder) { }
  
      ngOnInit() {
          this.form = this.formBuilder.group({
              'dob': ['', [
                  Validators.required,
                  // validates date format yyyy-mm-dd with regular expression
                  Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
              ]]
          });
      }
  
      // convenience getter for easy access to form fields
      get f() { return this.form.controls; }
  
      onSubmit() {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.form.invalid) {
              return;
          }
  
          // display form values on success
          alert('Congrss we have room for you on :-)\n\n' + JSON.stringify(this.form.value, null, 4));
      }
  
      onReset() {
          this.submitted = false;
          this.form.reset();
      }

 }
// import { Component, OnInit  } from '@angular/core';
// //import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
// import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
// import { formatDate } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// interface Post {
//   startDate: Date;
//   endDate: Date;
// }
// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.css']
//   ,
// })
// export class BookingComponent implements OnInit{
  
//   form!: FormGroup;
//     submitted = false;

//     constructor(private formBuilder: FormBuilder) { }

//     ngOnInit() {
//         this.form = this.formBuilder.group({
//             'dob': ['', [
//                 Validators.required,
//                 // validates date format yyyy-mm-dd with regular expression
//                 Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
//             ]]
//         });
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.form.controls; }

//     onSubmit() {
//         this.submitted = true;

//         // stop here if form is invalid
//         if (this.form.invalid) {
//             return;
//         }

//         // display form values on success
//         alert('Congrss we have room for you on :-)\n\n' + JSON.stringify(this.form.value, null, 4));
//     }

//     onReset() {
//         this.submitted = false;
//         this.form.reset();
//     }
// }

