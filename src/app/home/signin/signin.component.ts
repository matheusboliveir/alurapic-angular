import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  fromUrl!: string;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private renderer: Renderer2,
    private platformDetection: PlataformDetectorService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.queryParams
    .subscribe(params => this.fromUrl = params.fromUrl)
    this.loginForm = this.formBuilder.group({
      userName:['', Validators.required],
      password: ['', Validators.required ]
    });
    this.platformDetection.isPlatformBrowser() &&
    this.renderer.selectRootElement('#userNameInput').focus();
  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.auth.auth(userName, password).subscribe(
      () => this.fromUrl
          ? this.router.navigateByUrl(this.fromUrl)
          : this.router.navigate(['user', userName])
          ,
      err => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetection.isPlatformBrowser() &&
        this.renderer.selectRootElement('#userNameInput').focus();
        alert('Invalid user name or password');
      }
    );
  }

}
