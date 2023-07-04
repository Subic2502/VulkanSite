import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.checkoutForm.controls[controlName];
    return control.invalid && control.touched;
  }


  printDataToSend() {
    const formData = this.checkoutForm.value;
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || 'null') as string;

    
    const dataToSend = {
      formData,
      cartItems
    };

    console.log('Data to Send:', dataToSend);
  }

  submitForm() {
    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.value;
      const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || 'null') as string;

      
      const dataToSend = {
        formData,
        cartItems
      };

      this.printDataToSend(); 

      
      this.http.post('http://localhost/VulkanBackend/db.php', dataToSend, { responseType: 'json' })
        .subscribe(
          response => {
            console.log('Response from PHP:', response);
            
          },
          error => {
            console.error('Error occurred:', error);
            if (error.error instanceof ErrorEvent) {
              console.log('Client-side error occurred:', error.error.message);
            } else {
              console.log('Server-side error response:', error.error);
            }
            
          }
        );

    } else {
      
      this.checkoutForm.markAllAsTouched();
    }
  }
}
