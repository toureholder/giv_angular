import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AsyncActionState,
  ComponentAsyncAction,
} from '@shared/models/component_async_action/component_async_action';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { ResetPasswordService } from './services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  newPassword?: string;
  email?: string;
  token?: string;
  resetPasswordAction = new ComponentAsyncAction();

  constructor(
    private activatedRoute: ActivatedRoute,
    private resetPasswordService: ResetPasswordService
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.queryParams;
    this.email = params.email;
    this.token = params.token;
  }

  public get isPasswordValid(): boolean {
    return !!this.newPassword && this.newPassword.length >= 6;
  }

  requestPasswordReset(): void {
    if (
      !this.email ||
      !this.token ||
      !this.newPassword ||
      !this.isPasswordValid
    ) {
      return;
    }

    this.resetPasswordAction.state = AsyncActionState.LOADING;

    this.resetPasswordService
      .requestReset({
        email: this.email,
        token: this.token,
        newPassword: this.newPassword,
      })
      ?.subscribe(
        () => {
          this.resetPasswordAction.state = AsyncActionState.SUCCESS;
        },
        () => {
          this.resetPasswordAction.state = AsyncActionState.ERROR;
        }
      );
  }
}
