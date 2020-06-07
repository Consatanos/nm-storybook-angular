import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "alert-icon",
    templateUrl: "./alert-icon.component.html",
    styleUrls: ["./alert-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
