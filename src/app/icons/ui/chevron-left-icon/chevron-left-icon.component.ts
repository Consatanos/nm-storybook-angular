import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "chevron-left-icon",
    templateUrl: "./chevron-left-icon.component.html",
    styleUrls: ["./chevron-left-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChevronLeftIconComponent implements OnInit {

    constructor() { }

    @Input() public size: "small" | "medium" | "large";

    ngOnInit() {
    }

}
