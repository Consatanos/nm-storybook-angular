import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "calendar-icon",
    templateUrl: "./calendar-icon.component.html",
    styleUrls: ["./calendar-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
