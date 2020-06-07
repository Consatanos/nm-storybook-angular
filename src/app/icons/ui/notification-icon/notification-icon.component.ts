import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "notification-icon",
    templateUrl: "./notification-icon.component.html",
    styleUrls: ["./notification-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
