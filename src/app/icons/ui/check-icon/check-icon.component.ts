import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "check-icon",
    templateUrl: "./check-icon.component.html",
    styleUrls: ["./check-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
