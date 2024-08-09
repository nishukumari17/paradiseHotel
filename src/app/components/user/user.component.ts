import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  ud: FormGroup = new FormGroup({
    cname: new FormControl<String>(''),
    cdob: new FormControl<String>(''),
    gender: new FormControl<String>(''),
    cpic: new FormControl<String>(''),
    mobile: new FormControl<String>(''),
    caddress: new FormControl<String>(''),
    cidproof: new FormControl<String>(''),
    cpassword: new FormControl<String>(''),
    email: new FormControl<String>(''),
    acceptTerms: new FormControl<Boolean>(false),
   
  });
  submitted = false;
  idFile: File|null=null;
  phototFile:File|null=null ;
  isSucess:boolean=false;
  constructor(private formBuilder: FormBuilder, private userService:UserDataService) {}

  ngOnInit(): void {
    this.ud = this.formBuilder.group({
      cname: ['', Validators.required],
      dob: ['', Validators.required, this.dateValidator],
      gender: ['male', [Validators.required]],
      // cpic: ['', Validators.required],
      // cidproof: ['', Validators.required],
      caddress: ['', Validators.required],
      cpassword: ['', Validators.required],
      
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],

      acceptTerms: [false, Validators.requiredTrue],
      // checkIn: ['', [Validators.required, this.dateValidator]],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.ud.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ud.invalid) {
      return;
    }
    this.userService.create(this.ud.value).subscribe((response: any)=>{
      console.log(response);
      this.isSucess=true;
    })
    console.log(JSON.stringify(this.ud.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.ud.reset();
  }
  dateValidator(c: AbstractControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === 'string') {
      // let match = value.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
      let match = value.match(/^\d{2}([./-])\d{2}\1\d{4}$/);
      if (!match) {
        return { dateInvalid: true };
      } else if (match && match[0] !== value) {
        return { dateInvalid: true };
      }
    }
    return null as any;
  }

  selectId(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.idFile = file;
      console.log(this.idFile);
      this.ud.patchValue({
        file: file,
      });
    }
  }
  selectPhoto(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.phototFile = file;
      console.log(this.phototFile);
      this.ud.patchValue({
        file: file,
      });
    }
  }

}
