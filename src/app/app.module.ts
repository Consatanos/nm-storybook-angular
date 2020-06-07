import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertIconComponent } from './icons/ui/alert-icon/alert-icon.component';
import { ArrowDownComponent } from './icons/ui/arrow-down/arrow-down.component';
import { ArrowUpComponent } from './icons/ui/arrow-up/arrow-up.component';
import { AttentionComponent } from './icons/ui/attention/attention.component';
import { CalendarComponent } from './icons/ui/calendar/calendar.component';
import { CheckComponent } from './icons/ui/check/check.component';
import { ArrowDownIconComponent } from './icons/ui/arrow-down-icon/arrow-down-icon.component';
import { ArrowUpIconComponent } from './icons/ui/arrow-up-icon/arrow-up-icon.component';
import { AttentionIconComponent } from './icons/ui/attention-icon/attention-icon.component';
import { CalendarIconComponent } from './icons/ui/calendar-icon/calendar-icon.component';
import { CheckIconComponent } from './icons/ui/check-icon/check-icon.component';
import { ChevronLeftIconComponent } from './icons/ui/chevron-left-icon/chevron-left-icon.component';
import { ChevronRightIconComponent } from './icons/ui/chevron-right-icon/chevron-right-icon.component';
import { CopyIconComponent } from './icons/ui/copy-icon/copy-icon.component';
import { CrossIconComponent } from './icons/ui/cross-icon/cross-icon.component';
import { DocIconComponent } from './icons/ui/doc-icon/doc-icon.component';
import { DownloadIconComponent } from './icons/ui/download-icon/download-icon.component';
import { ErrorIconComponent } from './icons/ui/error-icon/error-icon.component';
import { FavoriteIconComponent } from './icons/ui/favorite-icon/favorite-icon.component';
import { InfoLetterIconComponent } from './icons/ui/info-letter-icon/info-letter-icon.component';
import { LockIconComponent } from './icons/ui/lock-icon/lock-icon.component';
import { NotificationIconComponent } from './icons/ui/notification-icon/notification-icon.component';
import { PlusIconComponent } from './icons/ui/plus-icon/plus-icon.component';
import { QuestionIconComponent } from './icons/ui/question-icon/question-icon.component';
import { QuestionMarkIconComponent } from './icons/ui/question-mark-icon/question-mark-icon.component';
import { SuccessIconComponent } from './icons/ui/success-icon/success-icon.component';
import { UpdateIconComponent } from './icons/ui/update-icon/update-icon.component';
import { UploadIconComponent } from './icons/ui/upload-icon/upload-icon.component';
import { ViewIconComponent } from './icons/ui/view-icon/view-icon.component';
import { WaitingIconComponent } from './icons/ui/waiting-icon/waiting-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertIconComponent,
    ArrowDownComponent,
    ArrowUpComponent,
    AttentionComponent,
    CalendarComponent,
    CheckComponent,
    ArrowDownIconComponent,
    ArrowUpIconComponent,
    AttentionIconComponent,
    CalendarIconComponent,
    CheckIconComponent,
    ChevronLeftIconComponent,
    ChevronRightIconComponent,
    CopyIconComponent,
    CrossIconComponent,
    DocIconComponent,
    DownloadIconComponent,
    ErrorIconComponent,
    FavoriteIconComponent,
    InfoLetterIconComponent,
    LockIconComponent,
    NotificationIconComponent,
    PlusIconComponent,
    QuestionIconComponent,
    QuestionMarkIconComponent,
    SuccessIconComponent,
    UpdateIconComponent,
    UploadIconComponent,
    ViewIconComponent,
    WaitingIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
