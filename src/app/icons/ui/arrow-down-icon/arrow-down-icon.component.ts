import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "arrow-down-icon",
    templateUrl: "./arrow-down-icon.component.html",
    styleUrls: ["./arrow-down-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowDownIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
