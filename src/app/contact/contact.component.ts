import { Component } from '@angular/core';
import { FormBuilder, FormGroup , FormControl , Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  

  form =new FormGroup ({

    from_name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern(/[a-z]/)]),
    email_id: new FormControl('', [Validators.required,Validators.email]),
    message: new FormControl('', [Validators.required])


   
  })


  constructor(private fb: FormBuilder ){}


  async send(){
    emailjs.init('RjEoJxLjWi-6Dv00L')
    let response = await  emailjs.send("service_ktad3za","template_vfjdtfe",{
      from_name: this.form.value.from_name,
      email_id: this.form.value.email_id,
      message: this.form.value.message,
      });

      console.log(this.form)
      alert('The Message Has Been Sent Successfully');
      this.form.reset();
  }

}
